.PHONY: help run server drafts build check clean

HUGO ?= hugo

help:
	@printf "Targets:\n"
	@printf "  make run     Start local Hugo server\n"
	@printf "  make drafts  Start local server with drafts and future posts\n"
	@printf "  make build   Build production site\n"
	@printf "  make check   Build with warnings surfaced\n"
	@printf "  make clean   Remove Hugo generated output/cache\n"

run server:
	$(HUGO) server

drafts:
	$(HUGO) server --buildDrafts --buildFuture

build:
	$(HUGO) --minify --gc

check:
	$(HUGO) --minify --gc --printI18nWarnings --printPathWarnings

clean:
	rm -rf public resources/_gen .hugo_build.lock
