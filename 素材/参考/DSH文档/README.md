# DSH 官方文档（本地副本）

这些文件是从 **`D:\DSH\resources\app.asar`** 里解包出来的原始文档，不是改写版。
DSH 没有独立的“UI 编写指南”网页；官方文档以**每个客户端包自带的中英双语 README** 形式随应用打包。

| 文件 | 用途 |
|---|---|
| `web-styling.zh.md` | **权威样式规则**：职责归属、组件规则、输入能力、圆角与设置卡片（用户提供） |
| `dsh-client-ui-theme__README.zh.md` | 主题、字号、字体、`--dsw-*` token 机制；菜单材质规则 |
| `dsh-client-ui-layout__README.zh.md` | 布局与主题快照的应用 |
| `dsh-client-ui-plugin-market__README.zh.md` | 插件市场组件（卡片结构来源） |
| `dsh-client-ui-tool__README.zh.md` | 工具调用卡片 |
| `dsh-client-ui-conversation__README.zh.md` | 会话区 |
| `cordis-plugin-development__SKILL.md` | 官方插件开发规范（插槽 / 客户端半 / 样式约束） |
| `editing-cordis-compositions__SKILL.md` | composition 与 patch 写法 |

`--dsw-*` token 的完整清单（含深/浅色值与本站覆盖情况）单独放在
[`../DSH-Token-清单.md`](../DSH-Token-清单.md)。

## 重新解包的方法

asar 的文件表在头部 JSON 里，可以按偏移直接读取，无需解包整个归档：

```
header: [uint32 4][uint32 jsonSize][16..16+jsonSize = JSON][payload]
payload 起点 = 8 + jsonSize（向下 4 字节对齐）
文件数据 = payload + entry.offset, 长度 entry.size
```

脚本在 `.scratch/extract_docs.py`（按需改 `WANTED` 列表即可取其它包）。

## 仍在缺的

- `ui-radius.zh.md`（DSH 统一圆角规范）：web-styling 里引用它定义圆角尺度、正圆与胶囊例外、
  设置卡片底色与描边，但同样没有打进 asar，公开仓库里也未见单独文件；
- `ui-primitives/README.zh.md`（原子组件目录）：同上。
