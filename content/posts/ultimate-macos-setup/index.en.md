---
title: "Ultimate macOS Setup"
date: 2024-10-17T17:08:59+08:00
tags: ["macOS", "Configuration"]
---

{{< lead >}}
Rational configuration and efficient functional software, creating a smooth and efficient workflow.
{{< /lead >}}

> The content will be explained in the order of the configuration. Some parts can be selectively configured according to individual needs.

{{< alert cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" >}} It is recommended to read through the entire text first, and not to rush into the configuration. The in-depth configuration of some applications may depend on other applications, so it is absolutely crucial not to implement everything at once! {{< /alert >}}

## Prerequisites

### VPN (Optional)

The majority of computer-related applications are difficult to access in mainland China. If users in mainland China want to comfortably configure these applications, they must complete this step.

### Command Line Tools (CLT) for Xcode

For macOS users, the system comes with `bash`, `git`, and `curl` pre-installed. In the command line, enter `xcode-select --install` to install `CLT for Xcode`.

### Homebrew

> The most important application on macOS is Homebrew. Please learn the detailed usage methods of `Homebrew`

[Homebrew](https://brew.sh/) is the most widely used and best package manager on macOS. Basically, all "small" applications (except for large and robust ones like Chrome) are recommended to be downloaded and managed using the package manager.

For users in mainland China, it is recommended to install and configure Homebrew according to the [Tsinghua University Open Source Software Mirror Site](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/). It's best to directly **switch the source**.

If mainland China users have a `VPN`, they can also directly install Homebrew using the terminal commands on the Homebrew official website.

### GitHub (Recommended)

Recommended: Register and configure a `GitHub` account with SSH protocol connection.

## Basic Applications

### Zsh

1. First, use `brew` to install `zsh` and set it as the default `shell`.
```shell
brew install zsh
chsh -s $(which zsh)
```
2. I use `Oh My Zsh` as a framework and package manager for managing the use of `zsh`, and install it according to the [official website](https://ohmyz.sh/#install) command line instructions.
3. The `Oh My Zsh` plugin system is very rich, and you can refer to my [`.zshrc`](https://github.com/hza2002/dotfiles/blob/main/zsh/.zshrc) for recommended plugins to install or enable. Please make sure you understand the meaning of each line in the configuration file before adding it.
4. Tools such as [`Starship`](https://starship.rs/) can be used to enhance the `prompt`, and you can refer to my [configuration file](https://github.com/hza2002/dotfiles/blob/main/zsh/.config/starship.toml).

### Node.js

Recommend using [`fnm`](https://github.com/Schniz/fnm) for managing multiple `Node.js` environments. Install it using `brew` and follow the configuration instructions on its official website.

### Java

Recommend using [`jenv`](https://github.com/jenv/jenv) for managing multiple `Java` environments. Install it using `brew` and configure it according to the official website.

### Conda

Recommend installing `Miniconda`, which is more lightweight. You can install it according to the [official documentation](https://docs.anaconda.com/miniconda/).

### Rust

According to the [official website](https://www.rust-lang.org/learn/get-started), you can install Rust using the command line.

### Golang

According to the [official website](https://go.dev/dl/), you can install it using the command line.

## Productivity tools

### Karabiner-Elements

> A powerful and stable keyboard customizer

Recommend downloading from the [official website](https://karabiner-elements.pqrs.org/), it has powerful functions and provides a high degree of customization for both keyboard and mouse.

### iTerm2

> `iTerm2` is a terminal emulator, a replacement for `Terminal` and the successor to `iTerm`. It not only has a better appearance but also stronger functionality. Recommended configuration of hotkeys and themes.

Recommended to use `brew` for installation, or you can also download and install it from the [official website](https://iterm2.com/).

### NeoVim

> hyperextensible `Vim-based` text editor, which I generally use for lightweight file editing on the command line.

It is recommended to use `brew` for installation. The in-depth configuration of `NewVim` is quite complex, but there are many pre-configured "distributions" available. Personally, I use `LunarVim` with some customization.

{{< alert >}}
`LunarVim` involves a large number of dependencies, please carefully follow its [official documentation](https://www.lunarvim.org/) for installation.
{{< /alert >}}

### JetBrains

It is recommended to use the [`JetBrains Toolbox App`](https://www.jetbrains.com/toolbox-app/) for installing and managing JetBrains software products.

### VsCode

> A lightweight and versatile editor

Recommended to install from the [official website](https://code.visualstudio.com/).

### Raycast

> Free and more powerful alternatives to `Alfred`

Recommended to use `brew` for installation, or you can also download and install from the [official website](https://www.raycast.com/).

{{< alert >}}
The plugin ecosystem is powerful and has a wide range of features. Be sure to browse the [plugin marketplace](https://www.raycast.com/store) thoroughly.
{{< /alert >}}

### Tuxera

The NTFS-formatted hard drive for Microsoft can be used on a Mac, but the personal use of that paid software has other alternative options.

### Peek

The Mac App Store is available for download, and macOS allows you to quickly preview files by pressing the spacebar. Peek has enhanced this feature, supporting a wider range of file formats.

### iStat Menus

> The ultimate system monitor

The new version interface is more visually appealing. The best detector for Mac, with customizable status bar and rich, detailed monitoring data.

### Better365

[The official website is here](https://www.better365.cn/), this company has a large number of practical Mac applications, the ones I use are as follows:
1. iShot: Screenshot, long screenshot, image pasting, annotation, color picking, screen recording tool
2. FastZip: Excellent free compression and decompression tool
3. Automatic input method switching: Can help you automatically switch input methods (Chinese and English)
4. iBar: Hide menu bar icons
5. Better And Better: Essential Mac tool for mouse, trackpad, and keyboard gestures

### draw.io

draw.io is free online diagram software for making flowcharts, process diagrams, org charts, UML, ER and network diagrams.

### Yabai

> A tiling window manager for macOS based on binary space partitioning

The main issue is that the window switching and management in macOS itself is too slow and cumbersome. I really like its multi-space design, but the switching process is too troublesome.

yabai has a complete `Wiki`, and you can also refer to my [yabai configuration files](https://github.com/hza2002/dotfiles/tree/main/yabai/.config).

### SketchyBar

> A highly customizable macOS status bar replacement

Here is the translation from Chinese to English:

[GitHub Link](https://github.com/FelixKratz/SketchyBar) is available here, which can be used in conjunction with Yabai, with rich functionality. You can refer to my [configuration file](https://github.com/hza2002/dotfiles/tree/main/sketchybar/.config/sketchybar).