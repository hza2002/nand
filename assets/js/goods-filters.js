(function () {
    "use strict";

    function normalizeText(value) {
        return (value || "").toLowerCase().trim();
    }

    function updateURL(searchValue) {
        var params = new URLSearchParams(window.location.search);
        if (searchValue) {
            params.set("q", searchValue);
        } else {
            params.delete("q");
        }
        params.delete("platform");
        params.delete("start");
        params.delete("end");
        params.delete("sort");

        var query = params.toString();
        var newURL = window.location.pathname + (query ? "?" + query : "") + window.location.hash;
        window.history.replaceState({}, "", newURL);
    }

    function createLocaleLabels() {
        var lang = (document.documentElement.getAttribute("lang") || "").toLowerCase();
        if (lang.indexOf("en") === 0) {
            return {
                resultCount: function (visible, total) {
                    return visible + "/" + total;
                }
            };
        }

        return {
            resultCount: function (visible, total) {
                return visible + "/" + total;
            }
        };
    }

    function initGoodsFilters() {
        var controlsRoot = document.querySelector("[data-goods-controls]");
        var goodsContainer = document.getElementById("goods");
        if (!controlsRoot || !goodsContainer) {
            return;
        }

        var cards = Array.from(goodsContainer.querySelectorAll(".goods-card"));
        if (cards.length === 0) {
            return;
        }

        var searchInput = controlsRoot.querySelector("[data-goods-search]");
        var controlsForm = controlsRoot.querySelector("[data-goods-form]");
        var clearButton = controlsRoot.querySelector("[data-goods-clear]");
        var resultCount = controlsRoot.querySelector("[data-goods-result-count]");
        var emptyState = document.querySelector("[data-goods-empty]");
        var localeLabels = createLocaleLabels();

        if (!searchInput || !controlsForm || !clearButton || !resultCount) {
            return;
        }

        var cardRecords = cards.map(function (card) {
            var fullText = [
                card.dataset.title || "",
                card.dataset.note || "",
                card.dataset.platform || "",
                card.dataset.date || "",
                card.dataset.price || "",
                card.dataset.currency || "",
                card.textContent || ""
            ].join(" ");

            return {
                element: card,
                searchableText: normalizeText(fullText)
            };
        });

        var params = new URLSearchParams(window.location.search);
        searchInput.value = params.get("q") || "";

        function applySearch() {
            var keyword = normalizeText(searchInput.value);

            var visibleCount = 0;
            cardRecords.forEach(function (record) {
                var matched = !keyword || record.searchableText.indexOf(keyword) !== -1;
                record.element.hidden = !matched;
                if (matched) {
                    visibleCount += 1;
                }
            });

            resultCount.textContent = localeLabels.resultCount(visibleCount, cardRecords.length);
            clearButton.hidden = !keyword;
            if (emptyState) {
                emptyState.hidden = visibleCount !== 0;
            }
            updateURL(keyword);
        }

        searchInput.addEventListener("input", applySearch);
        controlsForm.addEventListener("submit", function (event) {
            event.preventDefault();
        });
        clearButton.addEventListener("click", function () {
            searchInput.value = "";
            applySearch();
        });

        applySearch();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initGoodsFilters);
    } else {
        initGoodsFilters();
    }
})();
