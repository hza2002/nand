---
title: "Owl 键盘：概述"
date: 2024-08-13T01:04:03+08:00
tags: ["ZMK", "键盘"]
series: ["Owl 分体键盘"]
series_order: 1
---

{{< lead >}}
**Owl (Orthogonal Wireless Layout)**
{{< /lead >}}

{{< alert icon="owl" >}} 人体工学无线蓝牙分体键盘 {{< /alert >}}

> 设计灵感来源于 [Lily58](https://github.com/kata0510/Lily58)、[Corne](https://github.com/foostan/crkbd)、[Sofle](https://github.com/josefadamcik/SofleKeyboard) 和 [Torn](https://github.com/rtitmuss/torn) 键盘。

![gallery](gallery.webp)

## 特点

- **Owl** 使用 **Pro Micro** 小型控制板，易于维护更换。并支持多种板子，包括 [nice!nano](https://nicekeyboards.com/nice-nano) 和 [nrfmicro](https://github.com/joric/nrfmicro/)（**尚未尝试**，但理论上可行）。
- 低延迟无线连接，使用 [ZMK](https://github.com/zmkfirmware/zmk) 构建。
- 支持 **RGB** 灯光效果。
- **两个**多功能 **OLED** 屏幕，可显示电量、连接状态、输入状态。
- 分体式键盘设计符合**人体工程学**。
- **两种** PCB 设计，兼容 Cherry MX 轴、Kailh choc 矮轴和 Gateron 矮轴。
- **双面** PCB 设计，翻面互用。

## DIY

![schematic](schematic.webp)

请确保您具备以下能力来制作键盘:
- 焊接电路元件
- PCB 制作
- 3D 打印
- 使用 GitHub Action 来构建固件
- 仔细阅读文档

{{< alert icon="owl" >}} 继续阅读 **Owl 分体键盘** 系列来制作键盘 {{< /alert >}}

## 版权

![Creative Commons License](https://i.creativecommons.org/l/by-nc/4.0/88x31.webp)

Owl 键盘使用 [知识共享 署名-非商业性使用 4.0 国际 许可协议](https://creativecommons.org/licenses/by-nc/4.0)。

此 PCB 设计可以自由地进行复制、修改和制造，仅限于个人使用。如果您想商业使用此设计，请联系 hza2002@foxmail.com 以请求许可。
