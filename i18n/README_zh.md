# Porcelain

<table>
  <tr>
    <td><img src="screenshot-light.png" alt="Porcelain — light mode"></td>
    <td><img src="screenshot-dark.png" alt="Porcelain — dark mode"></td>
  </tr>
</table>

[English](../README.md) · **中文** · [日本語](README_ja.md) · [한국어](README_ko.md) · [Français](README_fr.md) · [Español](README_es.md) · [Italiano](README_it.md)

一款白瓷质感的 Obsidian 主题 —— 半透明表面、蓝色点缀、扁平控件，以及两端渐隐的分隔线。

基于 Obsidian 自身的 CSS 变量从零编写。它不是任何主题的分支，也不包含第三方主题代码。

## 设计原则

主题遵循五条规则，`theme.css` 中的每条声明都从属于其中之一：

1. **表面半透明，且共享同一种色调。** 面板不是不透明的卡片。玻璃层是单一、固定、空白的图层 —— 如果在承载界面的容器上设置 `backdrop-filter`，任何子元素的重新绘制都会让整个被过滤的图层失效，于是悬停文件列表就要付出一次全窗口模糊重算的代价。
2. **没有任何浮雕效果。** 层次感只来自一条 1px 的轮廓线。没有层叠的内嵌高光、深色内凹边缘或投影。
3. **分隔线两端渐隐。** 边框恰好横跨其元素，因此内边距不同的相邻容器会产生起点、终点错位的线条。而一条两端透明的渐变没有端点可以错位。
4. **彩色块带有离轴的辉光。** 三个焦点、大小、衰减各不相同的径向渐变 —— 任何线性的方向感都读不出来。
5. **状态变化只改变颜色。** 绝不改动内边距、边框宽度或位置，因此光标之下没有任何东西会发生位移。

## 安装

1. 下载 `manifest.json` 和 `theme.css`。
2. 将两个文件放入 `<vault>/.obsidian/themes/Porcelain/`。
3. *设置 → 外观 → 主题* → 选择 **Porcelain**。

### 推荐设置

- *外观 → 透明窗口*：**开启**。这些表面按设计就是半透明的；关闭后它们会渲染成纯色。

## 自定义

令牌声明在 `theme.css` 顶部的 `.theme-light` / `.theme-dark` 和 `body` 中。值得了解的几个：

| 变量 | 作用 |
| --- | --- |
| `--pc-tint` / `--pc-veil` | 基础表面颜色（RGB 三元组）及其覆盖度 |
| `--pc-sidebar-tint` / `--pc-sidebar-veil` | 侧边栏相对内容平面的偏离程度 |
| `--pc-line` | 分隔线与轮廓线颜色 |
| `--pc-blue` / `--pc-orange` | 选中与悬停填充色 |
| `--pc-bloom-light` / `--pc-bloom-dark` | 彩色块上辉光渐变的强度 |
| `--pc-fade-in` / `--pc-fade-out` | 分隔线开始、结束渐隐的位置 |
| `--pc-popup-bg` / `--pc-popup-blur` | 菜单、弹窗和设置的玻璃效果 |

建议在 CSS 片段中覆盖这些变量，而不是直接编辑 `theme.css`，这样主题更新不会覆盖你的改动。

## 插件支持

- **Notebook Navigator** —— 选中与悬停状态、快捷操作按钮和头部布局均已与主题匹配。

## 许可证

GPL-3.0。详见 [LICENSE](LICENSE)。

你可以使用、修改和再分发它，包括商用。如果你分发了修改版本，它必须保持 GPL-3.0 许可、附带其源代码，并声明做出过修改。
