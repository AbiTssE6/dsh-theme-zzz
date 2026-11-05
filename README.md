# dsh-theme-zzz · 绝区零主题 for DeepSeek Harness

《绝区零》风格的 DSH Web 主题插件：高对比黄黑配色、印品鸿蒙体标题字、切角品牌标识、
印刷质感叠层，以及随鼠标跟随、按下放大的「空洞」动态背景。

## 快速开始

```powershell
# GitHub 发布分支（无需 npm）
dsh plugin --profile web add AbiTssE6/dsh-theme-zzz#dist
```

或在 **设置 → 插件 → 发现** 添加索引源 `https://abitisse6.github.io/dsh-theme-zzz/market-index.json`
后搜索安装。同一时刻只启用一个主题，装好后重启 Harness。

## 字体

标题字为 **印品鸿蒙体**（非商用授权），**不随包分发**。不装字体时自动回退到
`PingFang SC / Microsoft YaHei / Noto Sans SC`；想还原设计，把 `.woff2` 放进
`$DSH_HOME/dsh-theme-zzz/fonts/` 即可。详见 [FONT-LICENSES.md](packages/dsh-theme-zzz/FONT-LICENSES.md)。

## 文档

| 文档 | 内容 |
|---|---|
| [packages/dsh-theme-zzz/README.md](packages/dsh-theme-zzz/README.md) | 完整安装方式、字体、兼容性、开发说明 |
| [素材/参考/设计规范.md](素材/参考/设计规范.md) | 设计语言、token 绑定、空洞参数与踩坑记录 |
| [packages/dsh-theme-zzz/CHANGES.md](packages/dsh-theme-zzz/CHANGES.md) | 版本变更时间线 |

## 仓库结构

```
packages/dsh-theme-zzz/   # 插件包（package.json / index.js / client.js / locale / icon）
scripts/                  # dist 分支构建、市场索引生成
market-index.example.json # 市场索引示例（实际索引由脚本生成）
```

## 许可

代码 MIT；字体不在授权范围内，见 `FONT-LICENSES.md`。
