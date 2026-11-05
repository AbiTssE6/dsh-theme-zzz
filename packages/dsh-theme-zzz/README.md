# 绝区零主题 · dsh-theme-zzz

为 **DeepSeek Harness** 重绘的《绝区零》风格主题插件：黄黑高对比配色、印品鸿蒙体标题字、
切角品牌标识、印刷质感叠层，以及会跟随鼠标的「空洞」动态背景。

- 深色单方案（浅色系统下也强制同一套深色外观）
- 主题设置页：空洞开关 / 性能模式
- 会话区「空洞」：球面菲涅尔、光带、外圈接触阴影，随鼠标滞后跟随，按下放大

## 安装

同一时刻只启用一个主题。装好后重启 DeepSeek Harness。

### 方式 1：插件市场（推荐，一键）

1. 打开 **设置 → 插件 → 发现**；
2. **添加索引源**，粘贴本仓库的索引地址：
   `https://abitisse6.github.io/dsh-theme-zzz/market-index.json`
3. 搜索「绝区零 / ZZZ」，点 **安装**。

> 索引源只需添加一次，之后搜索和安装都是一键。

### 方式 2：GitHub 发布分支

```powershell
dsh plugin --profile web add <用户名>/dsh-theme-zzz#dist
```

`dist` 分支里放的是可直接安装的包（不含字体文件）。

### 方式 3：npm

> 尚未发布。

```powershell
dsh plugin --profile web add dsh-theme-zzz
```

### 方式 4：本地目录（开发）

```powershell
dsh plugin --profile web add D:\path\to\dsh-theme-zzz
```

## 字体

默认使用 **思源黑体**（Source Han Sans / Noto Sans SC），由系统提供，不随包分发；
系统缺少时回退 `PingFang SC / Microsoft YaHei / system-ui`。

想还原最初的印品鸿蒙体设计：

1. 把 `印品鸿蒙体`（粗体）与 `印品鸿蒙体 D40`（细体）安装到操作系统；
2. 打开 **设置 → ZZZ 主题 → 字体**，两个输入框默认已经是这两个族名，装好即生效。

输入框可以改成任意本机字体族名；**留空或字体缺失时自动回退思源黑体**，
「重置字体」恢复默认的两个族名。

字体为**非商用授权**，本仓库不分发字体文件；授权说明见 [FONT-LICENSES.md](./FONT-LICENSES.md)。

## 自定义设置页文案

设置页的文字不在代码里，而在：

```
locale/zh.json   -> settings.*
locale/en.json   -> settings.*
```

Host 端（`index.js`）把它们以 `/zzz-theme/locale/<lang>.json` 提供给浏览器，改完刷新页面即可生效
（需要重启过一次 DSH，让 Host 端加载路由）。`client.js` 里保留一份中文兜底，接口不可用时仍能显示。

## 兼容性

```json
"engines": { "dsh": ">=0.2.1-rc.4" }
```

## 卸载与升级

```powershell
dsh plugin --profile web remove dsh-theme-zzz
```

插件市场目前**不支持原位升级**：有新版时先卸载再安装。

## 开发

```powershell
node tools/check-theme.mjs        # 语法 / CSS 反引号 / 玻璃 token / !important 棘轮 / 空洞不变量
```

调参集中在 `client.js` 的 `VOID` 表（几何、帧率、缩放、菲涅尔、辉光），
调试开关集中在 `debug` 参数：

```
?voidhide=outer,inner,tight,band,canvas,fresnel,dome,shadow
?nofollow  ?voidshadow  ?voidlow  ?voidfres=96
```

## 许可

代码以 MIT 发布；字体不在许可范围内，见 `FONT-LICENSES.md`。
