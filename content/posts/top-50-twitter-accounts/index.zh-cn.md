---
title: "粉丝最多的50个推特号"
date: 2022-06-20T01:23:48+08:00
tags: ["数据分析", "R语言"]
series: ["R语言数据分析"]
series_order: 2
---

> Data source: [Top 50 Most Followed Twitter Accounts](https://www.kaggle.com/datasets/hassanshehzadk/top-50-most-followed-twitter-accounts?resource=download)

## 简介

数据列出了**Twitter**上最受关注的50个账户，每个总数四舍五入到最近的十万，以及每个用户的职业或活动。账户总数和排名月度变化最后更新于**2022年5月12日**。

## 粉丝排行榜

> 我们试图使用这个数据集制作推特粉丝前50名账户的直观图表

### 导入

第一步是将原始数据导入程序代码。

```R
data_csv <- read.csv("Top 50 Most Followed Twitter Accounts.csv")
```

### 可视化

- 由于Twitter账号ID的非重复性，我们自然选择了用户ID作为y轴数据。
- 我们按照粉丝数量重新排列账号，并在图像上从多到少显示。
- 为了使图像比较更直观，我们创造性地使用粉丝数量来绘制渐变色，从深到浅代表粉丝数量从多到少。

```R
dataplot <- data_csv %>%
  ggplot(mapping = aes(
    x = Followers..millions.,
    y = reorder(Account.username, Followers..millions.),
    fill = -log(Followers..millions.),
  )) +
  geom_bar(
    stat = "identity",
  ) +
  guides(fill = "none") +
  geom_text(mapping = aes(
    label = Followers..millions.,
  ))

# Add auxiliary information.
dataplot +
  labs(
    x = "Followers (Millions)",
    y = "Username",
    title = "Top 50 in Twitter",
    subtitle = "Information was last updated on May 12, 2022.",
    caption = "Data sources: https://www.kaggle.com/datasets/hassanshehzadk/top-50-most-followed-twitter-accounts?resource=download",
  ) +
  theme(
    plot.title = element_text(hjust = 0.4, size = 14), # title position
    panel.grid.minor = element_blank(), # Secondary grid lines
    text = element_text(family = "Hack Nerd Font"), # font
    axis.text.x = element_text(angle = 45, vjust = 1, hjust = 1)
  )
```

![](plot1.svg)

{{%details summary="Full code"%}}
```R
library(tidyverse)
library(ggplot2)

# Import
data_csv <- read.csv("Top 50 Most Followed Twitter Accounts.csv")

# Plot
dataplot <- data_csv %>%
  ggplot(mapping = aes(
    x = Followers..millions.,
    y = reorder(Account.username, Followers..millions.),
    fill = -log(Followers..millions.),
  )) +
  geom_bar(
    stat = "identity",
  ) +
  guides(fill = "none") +
  geom_text(mapping = aes(
    label = Followers..millions.,
  ))

# Add auxiliary information.
dataplot +
  labs(
    x = "Followers (Millions)",
    y = "Username",
    title = "Top 50 in Twitter",
    subtitle = "Information was last updated on May 12, 2022.",
    caption = "Data sources: https://www.kaggle.com/datasets/hassanshehzadk/top-50-most-followed-twitter-accounts?resource=download", # nolint
  ) +
  theme(
    plot.title = element_text(hjust = 0.4, size = 14), # title position
    panel.grid.minor = element_blank(), # Secondary grid lines
    text = element_text(family = "Hack Nerd Font"), # font
    axis.text.x = element_text(angle = 45, vjust = 1, hjust = 1)
  )
```
{{%/details%}}

## 账户归属分析

> 我们还想了解拥有大量粉丝的账户的国家归属，因此绘制一个饼图来检查分布情况

### 导入

第一步是将原始数据导入程序代码。

```R
data_csv <- read.csv("Top 50 Most Followed Twitter Accounts.csv")
```

### 选择

快速统计数据集中每个国家出现的频率。

```R
area_count <- data_csv %>%
  count(Country, name = "count")
```

### 可视化

- 由于`ggplot`中没有内置的饼图绘制方法，我们使用`geom_bar`和`coord_polar`来尝试达到相同的效果。

```R
dataplot <- area_count %>%
  ggplot(mapping = aes(
    x = 1,
    y = count,
    fill = Country,
  ))

dataplot +
  geom_bar(stat = "identity") +
  coord_polar(theta = "y") +
  scale_x_continuous(name = NULL, breaks = NULL) +
  scale_y_continuous(name = NULL, breaks = NULL) +
  scale_fill_viridis_d(option = "inferno")
```

![](plot2.svg)

### 研究结论

1. 显然，作为美国的本土软件，考虑到美国庞大的人口基数，属于美国的账户所在国家的数量远超其他国家。
2. 作为一个人口众多的国家，印度意外地成为了美国的第二位。
3. 其他国家的数量基本上是相同的。

{{%details summary="Full code"%}}
```R
library(tidyverse)
library(ggplot2)

data_csv <- read.csv("Top 50 Most Followed Twitter Accounts.csv")

area_count <- data_csv %>%
  count(Country, name = "count")

dataplot <- area_count %>%
  ggplot(mapping = aes(
    x = 1,
    y = count,
    fill = Country,
  ))

dataplot +
  geom_bar(stat = "identity") +
  coord_polar(theta = "y") +
  scale_x_continuous(name = NULL, breaks = NULL) +
  scale_y_continuous(name = NULL, breaks = NULL) +
  scale_fill_viridis_d(option = "inferno") +
  labs(
    x = "Followers (Millions)",
    y = "Username",
    fill = "Country",
    title = "Country of Account",
    subtitle = "Calculate the top 50 fan accounts on Twitter.\nInformation was last updated on May 12, 2022.", # nolint
    caption = "Data sources: https://www.kaggle.com/datasets/hassanshehzadk/top-50-most-followed-twitter-accounts?resource=download", # nolint
  ) +
  theme(
    plot.title = element_text(hjust = 0.6, size = 14), # title position
    axis.text.x = element_text(angle = 45, vjust = 1, hjust = 1),
    plot.caption = element_text(hjust = 0.3),
  )
```
{{%/details%}}