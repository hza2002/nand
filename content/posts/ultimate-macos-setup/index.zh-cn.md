---
title: "终极 macOS 配置方案"
date: 2024-10-17T17:08:59+08:00
tags: ["macOS", "配置"]
---

{{< lead >}}
合理的配置和高效的功能软件，打造顺畅、高效工作流
{{< /lead >}}

> 内容将按照配置的顺序进行解释，部分内容可根据个人需求进行选择性配置

{{< alert cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" >}}
建议先略读全文，不要急于配置，有些应用的深度配置依赖其他应用，万万不可一口气照做到底！
{{< /alert >}}

## 先决条件

### VPN (可选)

大多计算机相关的应用中国大陆都~~无法~~较难访问，若中国大陆用户想舒适配置请务必完成此步骤。

### Command Line Tools (CLT) for Xcode

对 macOS 用户，系统自带 `bash`、`git` 和 `curl`，在命令行输入 `xcode-select --install` 安装 `CLT for Xcode`。

### Homebrew

> macOs 上最重要的应用，请自行学习 `Homebrew` 详细的各种使用方法

[Homebrew](https://brew.sh/) 是 macOS 使用最广泛且最好用的包管理器，基本上各类“小”应用（即除了Chrome等大而强健的）都推荐优先使用包管理下载、管理。

中国大陆用户推荐按照[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)安装配置，最好直接**换源**。若大陆用户有 `VPN` ，也可直接按照 `Homebrew` 官网使用终端命令直接安装。

### GitHub（推荐）

推荐注册并配置 `GitHub` ssh 协议连接服务。

## 基本应用

### Zsh

1. 首先使用 `brew` 安装 `zsh`，设置为默认 `shell`
```shell
brew install zsh
chsh -s $(which zsh)
```
2. 我使用 `Oh My Zsh` 作为管理使用 `zsh` 的框架和包管理器，按照[官网](https://ohmyz.sh/#install)命令行安装即可
3. `Oh My Zsh` 有非常丰富的插件系统，推荐安装或启用的插件可参照我的 [`.zshrc`](https://github.com/hza2002/dotfiles/blob/main/zsh/.zshrc)，请务必清楚每一行配置文件的含义再添加。
4. 可使用诸如 [`Starship`](https://starship.rs/) 这样的工具来美化 `prompt`，可参考我的[配置文件](https://github.com/hza2002/dotfiles/blob/main/zsh/.config/starship.toml)。

### Node.js

推荐使用 [`fnm`](https://github.com/Schniz/fnm) 对多 `Node.js` 环境进行版本管理，使用 `brew` 安装，参照其官网进行配置使用即可。

### Java

推荐使用 [`jenv`](https://github.com/jenv/jenv) 对多 `Java` 环境进行版本管理，使用 `brew` 安装，参照其官网进行配置使用即可。

### Conda

推荐安装 `Miniconda`，更轻量，按照[官方文档](https://docs.anaconda.com/miniconda/)安装即可。

### Rust

按照[官网](https://www.rust-lang.org/learn/get-started)使用命令行安装即可。

### Golang

按照[官网](https://go.dev/dl/)使用命令行安装即可。

## 生产力工具

### Karabiner-Elements

> 强大且稳定的键盘自定义工具

推荐[官网](https://karabiner-elements.pqrs.org/)下载，功能强大，对键鼠都有高度自定义的空间。

### iTerm2

> `iTerm2` 是一款终端模拟器，是 `Terminal` 的替代品，也是 `iTerm` 的继任者。不仅外观更佳且功能更强，推荐配置热键与主题。

推荐使用 `brew` 安装，也可在[官网](https://iterm2.com/)下载安装。

### NeoVim

> 高度可扩展的基于 `Vim` 的文本编辑器，我一般用于在命令行进行轻量的文件快速编辑

建议使用 `brew` 安装，`NewVim` 的深度配置较为复杂（博大精深），不过有大量已进行配置的“发行版”，我个人使用 `LunarVim` ，进行了一定的配置。

{{< alert >}}
`LunarVim` 涉及大量依赖，请仔细遵循其[官方文档](https://www.lunarvim.org/)安装
{{< /alert >}}

### JetBrains

推荐使用 [`JetBrains Toolbox App`](https://www.jetbrains.com/toolbox-app/) 进行 JetBrains 系列软件的安装、管理。

### VsCode

> 较为轻量全能的编辑器

推荐[官网](https://code.visualstudio.com/)安装。

### Raycast

> 免费的，更强大的 `Alfred` 的上位替代

推荐使用 `brew` 安装，也可在[官网](https://www.raycast.com/)下载安装。

{{< alert >}}
插件生态强大，功能极多，务必在[插件市场](https://www.raycast.com/store)上好好逛上一逛！
{{< /alert >}}

### Tuxera

用于微软的 NTFS 格式硬盘在 Mac 上使用，个人使用该付费软件，有其他替代品。

### Peek

Mac App Store 可下载，macOS 在文件上按空格可快速预览，Peek 加强了该功能，支持更多格式的文件。

### iStat Menus

> 终极系统监视器

新版本界面更美观了 Mac 上最好用的检测器，可自定义状态栏，丰富详细的监控数据。

### Better365

[官网在此](https://www.better365.cn/)，这个公司有非常多的实用 mac 应用，本人使用的如下：
1. iShot：截图、长截图、贴图、标注、取色、录屏工具
2. FastZip：优秀免费的压缩解压工具
3. 自动切换输入法：能帮你自动切换输入法（中英文）
4. iBar：隐藏菜单栏图标
5. Better And Better：Mac 必备的鼠标、触控板、键盘手势工具

### draw.io

draw.io 是免费的在线图表软件，可用于制作流程图、过程图、组织结构图、UML 图、ER 图和网络图。

### Bob

个人使用该翻译 & OCR 软件，功能强大，在 Mac Appstore 下载，是付费软件。

### Yabai

> macOS 的平铺式窗口管理器

主要是 macOS 本身的窗口切换和管理过于缓慢繁琐，我很喜欢它多 space 的设计，但是切换太麻烦了。

yabai 有完整的 `Wiki`，也可参考我的 [yabai 配置文件](https://github.com/hza2002/dotfiles/tree/main/yabai/.config)。

### SketchyBar

> A highly customizable macOS status bar replacement

[GitHub 链接](https://github.com/FelixKratz/SketchyBar)在此，可配合 Yabai 使用，功能丰富，可参考我的[配置文件](https://github.com/hza2002/dotfiles/tree/main/sketchybar/.config/sketchybar)。