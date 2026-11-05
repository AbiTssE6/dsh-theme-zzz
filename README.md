# dsh-theme-zzz · 绝区零主题 for DeepSeek Harness

《绝区零》风格的 DSH Web 主题插件，除了在ui上模仿了绝区零的风格以外，还在背景上添加了跟随鼠标、按下放大的~~动态RGB LED圈圈！~~「空洞」。

## 快速开始

```powershell
# GitHub 发布分支（无需 npm）
dsh plugin --profile web add AbiTssE6/dsh-theme-zzz#dist
```

或在 **设置 → 插件 → 发现** 添加索引源 `https://raw.githubusercontent.com/AbiTssE6/dsh-theme-zzz/master/market-index.json`
后搜索安装。同一时刻请只启用一个主题来防止未知的问题，装好后重启 Harness。

## 字体

字体优先使用本机安装的 **印品鸿蒙体**（粗体 印品鸿蒙体/`inpin hongmengti` ; 细体印品鸿蒙体 D40），
未安装时回退 **思源黑体**（Source Han Sans / Noto Sans SC），再回退系统无衬线。
设置页「字体」可以填写任意系统字体名，或用开关强制思源黑体。
详见 [FONT-LICENSES.md](packages/dsh-theme-zzz/FONT-LICENSES.md)。

**如果想要最还原的绝区零风格体验**，你可以试着在网络上下载非商用版的印品鸿蒙体，或者取得游戏原字体文件，自行安装到电脑来使用。

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
