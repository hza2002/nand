---
title: "Carbon Dioxide Emission Estimates"
date: 2022-06-19T01:23:48+08:00
tags: ["Data Analysis", "R Language"]
series: ["Data Analysis in R"]
series_order: 1
---

> Data source: [Carbon Dioxide Emission Estimates](http://data.un.org/_Docs/SYB/CSV/SYB64_310_202110_Carbon%20Dioxide%20Emission%20Estimates.csv)

## Introduction

The data comes from [undata](http://data.un.org/default.aspx). Last updated on November 1, 2021. It contains the total carbon emissions and per capita carbon emissions of various countries in the world for several years.

Due to the large number of countries, in this data analysis, we only selected nine countries, namely, China, the United States, France, Germany, Canada, Italy, Japan, Britain and Austria.

## Draw in a picture

> We hope to have an intuitive understanding of the data of these nine countries, so we chose to draw it in the same chart.

### Import

The first step is import the raw data to the program code.

```R
data_csv <- read.csv("SYB64_310_202110_Carbon Dioxide Emission Estimates.csv")
```

### Tidy

We need to filter the data of these nine countries from the data set, and in order to be able to compare, we only need per capita data, not overall data.

```R
world_data <- data_csv %>%
  filter(Country %in% c("China", "United States of America", "United Kingdom", "France", "Germany", "Australia", "Japan", "Canada", "Italy")) %>%
  filter(Series == "Emissions per capita (metric tons of carbon dioxide)")
```

### Visualize

You only need to map the data set by country, by year as x coordinates, and per capita emissions as y coordinates.

```R
world_plot <- world_data %>%
  ggplot(mapping = aes(
    x = factor(Year),
    y = as.numeric(Value),
    color = Country,
    fill = Country,
    group = Country,
  ))

world_plot +
  geom_point() +
  geom_line() +
  labs(
    x = NULL,
    y = "Emissions per capita (metric tons of carbon dioxide)",
    title = "Per capita emissions of some countries",
    subtitle = "Data from 1975 to 2018",
    caption = "Data sources: http://data.un.org/default.aspx",
  ) +
  theme(
    plot.title = element_text(size = 14), # title position
    text = element_text(family = "JetBrains Mono"), # font
  )
```

![](plot1.svg)

### Conclusions of the study

1. Generally speaking, the emissions of each country have tended to be flat and stable since 2015.
2. Since 1975, the per capita carbon emissions of various countries have increased and decreased, and have tended to be stable.
3. On the whole, the per capita carbon emissions of Australia, Canada and the United States far exceed those of other countries.

{{%details summary="Full code"%}}
```R
library(tidyverse)
library(ggplot2)

data_csv <- read.csv("SYB64_310_202110_Carbon Dioxide Emission Estimates.csv")

world_data <- data_csv %>%
  filter(Country %in% c("China", "United States of America", "United Kingdom", "France", "Germany", "Australia", "Japan", "Canada", "Italy")) %>%
  filter(Series == "Emissions per capita (metric tons of carbon dioxide)")

world_plot <- world_data %>%
  ggplot(mapping = aes(
    x = factor(Year),
    y = as.numeric(Value),
    color = Country,
    fill = Country,
    group = Country,
  ))

world_plot +
  geom_point() +
  geom_line() +
  labs(
    x = NULL,
    y = "Emissions per capita (metric tons of carbon dioxide)",
    title = "Per capita emissions of some countries",
    subtitle = "Data from 1975 to 2018",
    caption = "Data sources: http://data.un.org/default.aspx",
  ) +
  theme(
    plot.title = element_text(size = 14), # title position
    text = element_text(family = "JetBrains Mono"), # font
  )
```
{{%/details%}}

## Diagram of data by country

### Visualize

- We just need to add a statement to separate the chart by country on the basis of the above.
- At the same time, since national data are already included in various charts, we don't need additional legends.

```R
world_plot <- world_data %>%
  ggplot(mapping = aes(
    x = factor(Year),
    y = as.numeric(Value),
    color = Country,
    fill = Country,
    group = Country,
  ))

world_plot +
  geom_point() +
  geom_line() +
  facet_wrap(~Country) +
  labs(
    x = NULL,
    y = "Emissions per capita (metric tons of carbon dioxide)",
    title = "Per capita emissions of some countries",
    subtitle = "Data from 1975 to 2018",
    caption = "Data sources: http://data.un.org/default.aspx",
  ) +
  theme(
    legend.position = "none",
    plot.title = element_text(size = 14), # title position
    text = element_text(family = "JetBrains Mono"), # font
  )
```

![](plot2.svg)

### Conclusions of the study

1. Canada, France, Germany, Italy and Japan have not changed much overall.
2. The United States has continued to decline in recent years, while China is on the rise.

{{%details summary="Full code"%}}
```R
library(tidyverse)
library(ggplot2)

data_csv <- read.csv("SYB64_310_202110_Carbon Dioxide Emission Estimates.csv")

world_data <- data_csv %>%
  filter(Country %in% c("China", "United States of America", "United Kingdom", "France", "Germany", "Australia", "Japan", "Canada", "Italy")) %>%
  filter(Series == "Emissions per capita (metric tons of carbon dioxide)")

world_plot <- world_data %>%
  ggplot(mapping = aes(
    x = factor(Year),
    y = as.numeric(Value),
    color = Country,
    fill = Country,
    group = Country,
  ))

world_plot +
  geom_point() +
  geom_line() +
  facet_wrap(~Country) +
  labs(
    x = NULL,
    y = "Emissions per capita (metric tons of carbon dioxide)",
    title = "Per capita emissions of some countries",
    subtitle = "Data from 1975 to 2018",
    caption = "Data sources: http://data.un.org/default.aspx",
  ) +
  theme(
    legend.position = "none",
    plot.title = element_text(size = 14), # title position
    text = element_text(family = "JetBrains Mono"), # font
  )
```
{{%/details%}}