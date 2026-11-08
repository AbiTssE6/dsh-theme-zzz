# 变更记录（CHANGES）

本主题没有 git 历史，这份文件是唯一的时间线。改动较大时**先在这里加一条**，写清
「改了什么 / 为什么 / 怎么回滚」，方便日后自查。

版本号沿用 `package.json` 的 `version`，同一版本内按日期追加。

---

## 0.1.0 — 2026-10-29

### 体系性改动

- **Token 优先成为铁律**（文档 §11、§13.5）：任何外观问题先查 `素材/参考/DSH-Token-清单.md`；
  能绑组件 token 就不写选择器。已绑 119 个 `--dsw-*`。
- **插件边界规则**（文档 §13）：全局规则排除 `data-dsh-plugin` 子树，并用
  `:has([data-dsh-plugin])` 兜住“宿主按钮里塞插件图标”的情况。
- **设置界面三级体系**（文档 §13.5）：L1 弹窗保持网点卡片；L2 由
  `--dsw-alias-settings-card-fill` 驱动、运行时补 `backdrop-filter`；L3 内容层
  悬停微白、开启态黄绿呼吸。
- **滑条全部 token 化**：`--zzz-slider-from/via/to/groove/sheen/keyline/thumb/glow`，
  滑条 / 进度条 / 开关共享同一组变量。
- **标签条统一**：对话·轨迹、插件列表、右侧面板标签统一为圆角矩形；
  选中态使用与会话行相同的 135° 黄绿呼吸盘；分段控件保持宿主几何。
- **筛选胶囊**（pill/chip）：透明 → 悬停微白 → 选中黄绿呼吸。

### 放弃对「存入记忆」按钮的控制（2026-10-29）

- 删掉主题给插件按钮 `ypSjoa_button` 设的底色、悬停色与 `stroke-width`，外观交还插件。
- 唯一保留的是对宽泛规则 `button[class*="_button"]` 的**豁免**（`:not([class*="ypSjoa_"])`），
  否则那条批量规则又会给它涂 `#0b0b0b` 底 + `#dcdcdc` 字。
- 教训：这个按钮“偏亮”的本质是宿主图标走 `label-tertiary` + 统一 1.7 线宽，而插件图标
  自带 1px；两者分属不同组件，强行对齐只会互相将就。

### 圆角方形按钮统一为正圆（2026-10-29）

- 新增运行时打标：`<button>` / `[role=button]` 盒子在 16–56px 且宽高差 ≤2px 时打
  `data-zzz-round`，样式表把该标记变成 `border-radius:999px` + `corner-shape:round`。
- 打标是**双向**的：不再方正就摘掉标记，窗口缩放/文字变化不会留下错误的圆形。
- 性能：只测新增节点与被改属性的元素，另有 800ms 防抖全量扫描；不是每帧全文档查询。
- 插件按钮（`data-dsh-plugin` 之内或之内含该标记）**跳过**，保持插件自己的形状。

### 实心黄色状态统一为 --zzz-yellow（2026-11-02）

**审查**：逐条列出所有 hover / active 状态的背景，按三类分开：

| 类型 | 内容 | 处置 |
|---|---|---|
| 渐变几何高亮 | `var(--zzz-plate)` 的所有使用者（会话行、导航格、页签、胶囊、dock 徽标） | **不动** |
| 白色洗 | `1rv3m_` 悬停的 `linear-gradient(var(--zzz-hl))` | 不动（不是黄） |
| **实心黄** | 4 处 | **统一为 `var(--zzz-yellow)`** |

四处实心黄原来有两种值：

- 设计系统小按钮悬停 `#e2bb27`（**偏暗，就是不一致的来源**）
- 工作区头部小键悬停 `#fcdd00`
- 设置页玻璃内按下 `#fcdd00`
- 文本选中 `::selection` `#fcdd00`

现在全部读 `--zzz-yellow`（`#fcdd00`），改色只需改一处，也不会再有某个按钮漂移。
渐变呼吸盘的颜色来自 `--zzz-sel-a/b/c`，与本次改动完全隔离。

审查脚本：`.scratch/yellow_inventory.py`（按声明分类）、`.scratch/hover_backgrounds2.py`
（逐条列出 hover/active 背景）。

### 闪烁定位修正：工作区头部小键 + 同步摘标（2026-11-02，续二）

DevTools 显示被悬停的元素其实是 **`button.bhn1Oq_searchButton`**（`dsh-client-ui-workspace`
的工作区头部小键，28×28，宿主 `color:inherit; background:0 0`），不是设计系统圆盘
`1rv3m_`，所以上两轮的修正打偏了。

主题里真正给它上色的是：

```css
[class*="_headerActions"] button[class*="_iconButton"],
[class*="_headerActions"] button[class*="_searchButton"],
[class*="_searchSlot"]    button[class*="_searchButton"]{ background:#0b0b0b !important }
```

问题有两个：
1. **悬停规则漏了 `_searchSlot` 变体**，且**基态没有声明字色**——移开时填充立刻回黑，
   字色却沿用宿主自己的过渡，出现“深字压黑盘”的空窗；
2. **黄底打标是异步摘除的**（等 MutationObserver 回调），悬停时被打标的元素在移开后
   还会强制黑字 1~3 帧。

修法：
1. 两个变体合并成一套两态配方：黑盘+浅字 / 黄盘+黑字，两态都由主题声明，并共用
   `transition: background-color .15s, color .15s`；svg 侧 `transition:none`；
2. 打标器新增 **`pointerout` 捕获监听**，指针离开时**同步**重测并摘标（强制样式重算
   读到的是已经退出悬停的状态），从机制上消除任何组件的这类空窗。

新增的两条声明不需要 `!important`（宿主是普通声明且选择器已更高），棘轮保持 635。

### 悬停移开后图标闪烁：异步打标（2026-11-02，续）

把填充改成可过渡色之后仍有闪烁。第二个原因是**黄底打标是异步的**：

1. 悬停 → 圆盘变黄 → `MutationObserver` 察觉后给按钮打上 `data-zzz-on-yellow`；
2. 该属性对应的样式对**所有后代**强制 `color:#101010 !important`；
3. 移开鼠标 → 填充立即回黑，但属性要等下一次 observer 回调才摘掉 ——
   这 1~3 帧内就是“黑图标压黑盘”，看起来在闪。

**修法**：设计系统圆盘（`button[class*="1rv3m_"]` 及其内部）**不参与黄底打标**——
它们本来就按状态自己声明字色（基态 `#dcdcdc`、悬停 `#101010`），打标只会多此一举。
打标器里加 `selfStyled()` 判定，命中时立刻摘除可能残留的属性。

同时把图标一侧的 `transition` 关掉（只让填充过渡），从机制上保证不会出现“深色对深色”。

### 悬停移开后图标短暂消失（2026-11-02）

**现象**：鼠标在小圆盘按钮上停留一会儿再移开，图标会短暂“消失”一下。

**原因**：悬停态用 `background-image`（两层渐变）画黄色。`background-image` **不可过渡**：
移开鼠标时它在一帧内消失，而图标颜色（`#101010 → #dcdcdc`）由宿主以约 150ms 过渡，
这段窗口里就是“深色图标 + 已经变黑的圆盘” → 看起来图标没了。

**修法**：
1. 悬停改用**可过渡的 `background-color`**（`#e2bb27` + `background-image:none`），
   与参考截图一致（平涂黄，无渐变）；
2. 给圆盘与内部 svg 明确同一条 `transition: .15s`，保证填充和字色**同时**结束；
3. 过渡声明不加 `!important`（宿主没有把 transition 标记为 important），棘轮保持 635。

### 全局代码审查与安全清理（2026-11-02）

四轴机械比对（7,075 个已安装 bundle + 403 token 清单），报告见 `AUDIT-2026-11-02.md`。
改动前备份：`.backups/client-20261102-213354.js`。

**已清理（888 字节）**
1. 菜单 padding 规则整条——同选择器后文重复声明 `padding:10px`，前者永不生效；
2. 六个死类名：`_langIcon` `_iconTile` `_fileBadge` `_typeIcon` `_fileType` `.file-icon`
   （仅 `_fileIcon` 存活）；
3. 死选择器 `_iconBox`、`_navItem`、`_segmented`（×3 行）；
4. 三个不存在的 token 绑定：`--dsw-alias-label-disabled/-disable`、`--dsw-alias-link-primary`
   （既不在官方清单也不在任何 bundle；真正的 `label-dimmed` / `link` 早已绑定）。

**查过但未动**：`[class*="_tabHost_ "]` 末尾多余空格（修掉会改变 dock 页签外观，属视觉变更，
需单独确认）；637 个 `!important`（宿主自身 179 个，削减需逐组件回归，棘轮已锁）。

**健康项**：`--zzz-*` 43 个全部被读取；2 个 keyframes、3 个 `@property` 均在用；JS 200 个
顶层标识符 0 冗余；空规则/重复规则/失效 role 均为 0。

清理后自检：`!important` 636 → **635**、palette DARK 122 → **119**，基线已同步下调。

### 黄底图标被错误填充（2026-11-02）

**现象**：黄底（选中会话行、选中页签、黄按钮悬停）上的部分 SVG 图标变成黑色实心块，
或凭空多出一圈描边。

**原因**：主题对这些区域的后代强制了 `fill:#101010` 与 `stroke:#101010`。两类图标因此损坏：

| 图标类型 | 原写法 | 被强制后 |
|---|---|---|
| 描边图标（文件夹、加号） | `fill="none" stroke="currentColor"` | fill 被强行填黑 → 实心块 |
| 实心图标 | `fill="currentColor"`，无 stroke | 多出一圈黑描边 → 显胖 |

**修法（只用颜色，不动画笔）**：
1. CSS 只保留 `color:#101010`（文字与 `currentColor` 图标都跟随），**删除所有强制
   `fill` / `stroke`**；
2. 运行时把**写死白色**的画笔改成 `currentColor`：仅限被 `data-zzz-on-yellow` 打标的子树，
   逐个 `[fill]` / `[stroke]` 判断白色系（`#fff` / `white` / `rgb(255,255,255)` / `color(srgb 1 1 1`），
   改前把原值存到 `data-zzz-fill-orig` / `data-zzz-stroke-orig`，摘标时原样还原；
3. 打标子树里新增的节点也会被补一次画笔修正。

`!important` 因此从 639 降到 **636**（三处 `stroke` 强制删除），棘轮基线同步下调。

### Markdown 表格改为毛玻璃面板（2026-10-30）

宿主表格（前端 `1ypvv` 模块）本身**没有底色**：

| 元素 | 宿主规则 |
|---|---|
| `._tableScroll_` | `max-width:100%; overflow-x:auto`（无背景） |
| `table` | `border-collapse:collapse` |
| `th` | `border-bottom:.5px solid var(--dsw-alias-border-l3)` |
| `td` | `border-bottom:.5px solid var(--dsw-alias-border-l2)` |
| 首/末列 | `padding-left:0` / `padding-right:0` |

所以底只能加在**滚动容器**上，表格线不动：

```css
[class*="_tableScroll_"]{
  background-color:var(--zzz-glass-fill);
  backdrop-filter:var(--zzz-glass-blur);
  border-radius:var(--zzz-glass-radius-sm);
  padding:6px 14px;            /* 让玻璃读作“面板”而不是通栏 */
  box-sizing:border-box;
}
```

- **没有**新增/删除任何针对 `th`/`td` 的 border 或 background 声明，表格线原样保留；
- 选择器用组件名前缀 `_tableScroll_`（不带哈希），宿主换哈希不会失效；
- 宽表仍可横向滚动（`overflow-x` 未改动）。

### 呼吸丢失成静态黄：变量声明的层级（2026-10-29）

把 `--zzz-plate` 定义在 `html[MARKER]` 上导致呼吸消失。原因：**自定义属性里的 `var()`
在“声明它的元素”上就完成替换**，`--zzz-plate` 引用的 `--zzz-sel-a/b/c` 于是在根元素上
就被解析成初始值并冻结；后代继承到的是这条**已冻结**的渐变，元素上的
`animation: zzz-plate-breath`（动画的是 `--zzz-sel-a/b/c`）自然再也影响不到它。

修法：`--zzz-plate` 的配方只写一次，但**声明在所有承载元素的同一组选择器**里
（会话行、导航格、页签、胶囊、dock 徽标）。在元素自身声明时，渐变会随着被动画的
`--zzz-sel-a/b/c` 逐帧重算，呼吸恢复；配方依然只有一份。

顺带补上漏掉的 `[class*="_tabHost_"] [class*="_tabActive_"]`（它用 var 但不在声明列表里，
会拿不到值）。

### 会话标签无黄底：真因是 :has() 提权（2026-10-29）

记录器数据显示：`animation: zzz-plate-breath` 与 `border-radius:8px` 生效，但
`background-image:none`、`color:rgb(125,125,125)` —— 一条规则不可能只生效一半，说明
选中规则被**更高特异性**的规则压掉了。

真因是标签条的通则：

```css
[role="tablist"]:has(> [role="tab"]):not([class*="_sidebarCol"] *):not([style*="--dsh-segment-count"]) > [role="tab"]
```

`:has()` 的参数与两个 `:not()` 各贡献特异性，合计 **(0,5,1)**，高于选中规则的
**(0,4,1)**，而它声明了 `background-image:none` 与 tertiary 字色——于是“字变灰、底消失”，
呼吸动画却保留（动画不在那条规则里）。

**修法（结构性，不继续比特异性）**：通则加 `:not([aria-selected="true"])`，让“未选中标签”
的样式不再作用于选中标签；选中态只由呼吸盘规则负责。两处：标签条通则、`[role="tab"]`
通用规则。

**教训**：`:has()` / `:not()` 都会给特异性加分，写“排除某状态”的规则时要显式排除该状态，
而不是依赖“后写的赢”。

### 黄绿呼吸盘合并为一个变量 + 会话标签修复（2026-10-29）

**问题**：对话/轨迹被选中时字变黑却没有黄底。选中规则确实声明了呼吸渐变，但它要同时
对抗 `[data-conversation-tabs] *{ background-image:none !important }` 这条清底规则，
层叠结果脆弱。

**改法（可维护）**：
1. 新增变量 `--zzz-plate`，把“暗角 + 斜纹 + 呼吸渐变”三层定义在一处；
2. 所有选中面（会话行、导航格、页签、筛选胶囊、dock 徽标）改用
   `background-image: var(--zzz-plate)`——配方只存在一次，改配色只动
   `--zzz-sel-a/b/c`；
3. 页签规则把属性选择器**重复一次**
   （`[aria-selected="true"][aria-selected="true"]`），以提高特异性压过清底规则，
   而不使用 `:not(#zzz-guard)`——ID hack 计数保持 9。

**副作用（有意）**：导航格的选中盘从“170° 无暗角”统一为会话行那套“135° + 暗角 +
46% 停点”，与页签/胶囊完全一致；dock 徽标也改用同一值（静态，不呼吸）。

### 黄底文字统一为黑色（2026-10-29）

官方 token 清单里有专门的「品牌底上的文字」token：`--dsw-alias-label-primary-inverted`
（6 处引用 / 3 个包），原本指向 `bluish-800`（深灰），已改为 **`#101010`**。宿主组件凡是
按约定使用它的，黄底上自然是黑字。

对不按约定的（插件写死白字、用字面色值或渐变上色的），加一层运行时兜底：
探测元素计算后的背景（`backgroundColor` 与 `backgroundImage` 里的色标）是否为“黄”
（alpha>0.35、r≥170、g≥120、b≤120、r-g<80、g-b≥60），是则打 `data-zzz-on-yellow`，
样式表把其内部文字/图标/描边/填充强制为 `#101010`；不再是黄色就摘标。

- 黄色判据**排除了橙色**（`#f4570e` 的 g=87 < 120），橙底保留白字（充值按钮）。
- 只用了 2 个 `!important`（`color`）：宿主有 28 处 `color: … !important`，不压会被盖；
  `stroke/fill/-webkit-text-fill-color` 靠特异性即可，已去掉 important。
- 棘轮基线因此从 637 调整为 **639**，并在脚本中注明理由。

### 三种进度指示统一为蓝紫渐变（2026-10-29）

官方 token 清单里没有进度条专属 token，三种形态都是通用语义 token 拼的：

| 形态 | 组件 | 处理 |
|---|---|---|
| 原生 `<progress>` | `ddpbLW_progress` | 早已由 `progress::-webkit-progress-value{ background:var(--zzz-slider) }` 接管 |
| 文件卡细条 | `gSkjMW_progressTrack/Bar` | 轨道 token `--dsw-alias-fill-tertiary`（**仅 1 处引用**）→ `var(--zzz-slider-track)`；填充加一条组件规则 `background:var(--zzz-slider)`，圆角改 999px |
| 上下文用量环 | `JObwrW_fill`（SVG stroke） | SVG 无法用 CSS 渐变，改为一次性注入共享 `<linearGradient id="zzz-meter-grad">`，`stroke:url(#zzz-meter-grad)` |

- 注入的渐变**从 `--zzz-slider-from / --zzz-slider-via / --zzz-blue` 读取颜色**，不写死色值，
  与滑条/进度条同源；
- `--dsw-alias-brand-primary` 有 26 个消费者（品牌黄），**没动**，只在细条组件上覆盖填充；
- 三条都可单独回滚（一个 token + 两条组件规则 + 一次 defs 注入）。

### Toast（更新提示条）改为玻璃 + 无投影 + ZZZ 图标（2026-10-29）

- 提示条是 `dsh-ffmpeg` 的更新检查调用**宿主 Toast** 组件（`_toast_l6cvn_6`），
  外观全部由 token 决定；淡出时机由插件传入的 `holdMs` 决定（主题不可改）。
- 改了三个 token：
  - `--dsw-alias-toast-bg`（2 处引用）→ `var(--zzz-glass-fill)`；
  - `--dsw-shadow-lv3`（1 处引用）→ `none`（与全站无立体感一致）；
  - 图标色 `--dsw-alias-state-warn-label` 有 14 处引用，**不动**，改为在 toast 规则里
    单独把 `[class*="_icon_"]` 染成 `--zzz-yellow`。
- 模糊没有 token，加一条 `[class*="_toast_"]{ backdrop-filter:var(--zzz-glass-blur) }`。

### 待发送队列浮条改为毛玻璃（2026-10-29）

- 宿主 `_7yHdaG_panel` 把底板画在 `::before`（`--dsw-specific-menu` + 菜单模糊）上，
  外框画在 `::after`（0.5px `--dsw-alias-border-l1`）。`--dsw-specific-menu` 有 19 个
  消费者，不能改。
- 因此改在组件层：`::before` 换成 `--zzz-glass-fill` + `--zzz-glass-blur`，`::after`
  取消（玻璃无边框），行分隔由实色线改为 0.5px 发丝线。
- 这段规则**刻意不写 `!important`**：选择器已比宿主规则高（多一个 html 标记与属性选择器），
  且棘轮当时报出 +9 增长，去重后回到基线 637。

### 维护性专项：清哈希 / 归位 hack / 合并观察者 / 棘轮（2026-10-29）

**① 清除陈旧哈希规则**（先审计再删）。扫描全部 7069 个已安装 js/css 文件后确认
`AnXs9G` `F07MqG` `GRgSLq` `HOHHba` `VBK9GG` `VJlF5q` `rezYhW` `wtg9ga` 八个前缀
**在任何包中都不存在**，其规则为死代码，已全部删除（保留同一规则里的活选择器）。
文件从 164643 → 159744 字节；`!important` 643 → 637；ID 级 hack 15 → 9。

**④ ID 级覆盖登记**。样式表顶部新增 `ID-LEVEL OVERRIDES` 区块，列出剩余 9 处
`:not(#zzz-guard)` 的分组与理由（右侧栏条目、tabHost 空按钮、panelRow、分段控件），
规则本身不动，避免改变层叠顺序。

**② 合并 MutationObserver**。原先 3 个观察者 + 2 个轮询（迷你按钮 1.2s、破图 0.5s×60s）
改为：
- 一个共享 `domObserver`（childList + attributes[class,style,disabled]）+ `domWatchers`
  处理器集合，每个 effect 只注册/注销自己的 handler，单个 handler 抛错不影响其它；
- 迷你按钮改为 DOM 变化驱动（rAF 合并），不再轮询；
- 破图保留捕获阶段 error 监听 + 初始化 sweep + 3s 后一次补扫，取消 60s 轮询。
结果：`MutationObserver` 1 个、`setInterval` 0 个。

**③ `!important` 的处置（部分完成，原因记录在此）**。
- 统计：静态 637 处；宿主自身有 179 处 `!important`（color 28 / display 16 /
  background-color 11 / border 9 …），所以主题侧不能盲目去掉。
- 检查了“同规则内重复声明”（0 处）与“同选择器后写覆盖”（8 处，收益极小）。
- 结论：**大规模削减（637 → ~400）必须逐组件做视觉回归**，本轮不做。
- 替代措施：自检脚本加入**棘轮**——`!important` 与 ID hack 只允许下降，超过基线即
  CI 失败；削减时同步下调 `BASELINE`。

### 维护性体检与自检脚本（2026-10-29）

- `client.js` 顶部新增**样式表目录**（0–10 节 + 15 个模块哈希前缀对照表），
  1.9k 行 CSS 可按标题跳转；升级时先看那张哈希表。
- 新增 `tools/check-theme.mjs`（`node tools/check-theme.mjs`），自动检查五条本项目
  反复踩过的红线：
  1. 可解析；2. CSS 模板内无反引号；3. DARK / LIGHT 各自无重复键；
  4. 玻璃面全部走 `--zzz-glass-*`（注释、base64、变量定义本身除外）；
  5. 报告 `:not(#zzz-guard)` 的数量（当前 15 处），防止无声增长。
- 实测输出：syntax ok / no stray backticks / glass ok / 15 id-level overrides /
  DARK 120 keys / LIGHT 25 keys，全部通过。

当前体量：2413 行（CSS 1901 + JS 295），676 条规则，687 个 `!important`，
15 处 ID 级 hack，15 个哈希前缀，120 个 `--dsw-*` 绑定，42 个 `--zzz-*` 变量。

### 调色板中性化：bluish-400（2026-10-29）

- 绑定 `--dsw-static-neutral-bluish-400: #b0b0b0`（宿主 `#adb2b8`，带蓝调）。
- 直接消费者 3 处：Agent 预设选中卡描边、上下文用量环、外观按钮选中描边；
  间接别名 4 个：label-caption（受影响）、label-tertiary / switch-thumb /
  label-deep-diving（后三个主题已单独覆盖，不受影响）。
- 目的：全站灰色统一为 R=G=B，去掉最后一处冷灰偏色。**与“共享 token 不为单组件改”
  不冲突**：这里改的是**原始色板**（palette），目的是全站统一，而不是为某个组件。

### 圆角改为令牌间接（2026-10-29）

- 新增 `--zzz-ctl-radius`（默认 8px）：宿主按钮、stepper、无类名按钮的圆角都读它。
- `[data-zzz-round]` 只改变量（`--zzz-ctl-radius:999px`），不再与组件皮肤比特异性，
  因此去掉了 `:not(#zzz-guard)` 的 ID 级 hack。
- 理由：自定义属性继承，赢的规则读到的就是新值；加新组件皮肤时不必再算权重。

### 毛玻璃参数统一（2026-10-29）

- 新增变量：--zzz-glass-fill(.34) / --zzz-glass-fill-strong(.45) / --zzz-glass-blur /
  --zzz-glass-radius-sm(12) / --zzz-glass-radius(16) / --zzz-glass-radius-lg(20)。
- 替换掉 7 处 fill 字面量、14 处 blur 字面量、14 处圆角字面量；规则里不再直接写数值。
- --dsw-alias-settings-card-fill 现在指向 var(--zzz-glass-fill)，与玻璃面同源。
- 判定漏网：grep backdrop-filter，未走变量的即未统一。

### 修复过的事故（按发生顺序）

1. `[aria-label*=…]` 误伤侧栏「记忆系统」→ 改用组件类名 + 语义属性。
2. DevTools 提示类名大小写有误（`ypSJoa_` vs 真实 `ypSjoa_`）→ 一律以
   `el.className` 为准。
3. 设置卡片「两张一深一浅」→ 旧清扫规则
   `[role="dialog"] [class*="_card"]{background:transparent}` 命中 `_card` 却漏掉
   `_balanceCard`；改为 `[role="dialog"]:not([data-shortcut-modal])`。
4. 智能体团队浮窗不透 → 宿主把表面画在 `::before`；改为 `content:none` 并把玻璃
   画到面板本体。
5. 右侧面板标签被灰色渐变覆盖 → 宿主的 `mask-image` 淡出；最终**完全关闭**该遮罩。
6. 滚动跟随丢失 / 打字时页面自动滚动 → 我们加的 `scroll-behavior:smooth` 与
   `scroll-padding-bottom` 造成，已全部回退（文档 §14，**不要再碰滚动**）。

### 锁定项（改样式前先看）

- 账号页「充值」按钮：橙底黑字，任何批量清底/去饱和规则必须排除 `linkButton`。
- `--dsw-alias-bg-module-platform`（20+ 消费者）、`--dsw-specific-menu`（19 处）、
  `--dsw-static-neutral-bluish-400` 都是共享 token，**不可为单个组件改**。
- 滚动相关 CSS 一律不改。

### 已知待办

- 13 组模块哈希前缀（`1rv3m` `AnXs9G` `F07MqG` `GRgSLq` `HOHHba` `VBK9GG` `VJlF5q`
  `VoX2oq` `ZKlsPq` `nUhMVa` `rezYhW` `wtg9ga` `ypSjoa`）尚未合并为统一的兼容层。
- 流式输出偶发“向上跳一段”属宿主行为（内容增长与高度变量差一帧），暂不处理。

### 回滚方式

所有规则都在 `client.js` 的 CSS 模板字符串里，按注释标题定位；每条关键规则上方都写了
“why + 回滚提示”。改动流程：Python 脚本整块替换 → `node --check` → 刷新页面验证。

### 空洞背景 v1 上机（2026-10-30）

- 在 client.js 里新增 zzz-void 层：centerCol 首子节点、z-index:-1、
  centerCol{isolation:isolate}；dome 760px + fresnel 800px + 环带 canvas 1050px，整体
  scale(.62) 居中；canvas 以 mix-blend-mode:screen 叠在 dome/fresnel 上，环带本体
  最后用 source-over 画（辉光不加亮本体）。
- 动画：
equestAnimationFrame 30fps、P=(t/36000)%1；prefers-reduced-motion 时只画一帧。
  **暂不实现鼠标跟随**。
- 回滚：删掉 client.js 中 “zzz void: conversation background” CSS 块与
  “zzz void: conversation-area background” 效果块；改动前备份在
  .scratch/void-lab/client-before-void.js。

### 空洞循环无缝（2026-10-30）

- 原因：第 4 维 morph = P·2π·1.8 在 P=1→0 时突变，噪波场接缝。
- 改为**周期性 4D 偏移** wT = 1.15·sin(P·2π) + 0.75·cos(P·2π)（颜色、宽度、径向、暖白共用），
  gate 改为 sin(P·2π·2 + 1.2)；P=0 与 P=1 的场完全一致。
- 实测：把 zzz-void 临时 display:none 截图，消息卡片仍在原位——用户看到的圆角方形是
  消息卡片/气泡的玻璃底，不是空洞层多出来的。

### 空洞：外辉光被画布裁成方框（2026-10-30）

- 现象：空洞出现后，聊天区上有一层淡淡的、会被辉光染色的圆角方形。
- 原因：环带 canvas 只有 1050px（半宽 525），外辉光 mask 到 R+260 = 640，
  最亮的边缘正好落在画布边界，被裁成一条硬边——因为画布是方的，看上去像方形叠层。
- 修复：画布/舞台扩大到 1300px（中心 650），外辉光在画布内自然衰减到 0，不再被裁。

### 空洞硬边 = dome 圆盘的边（2026-10-30）

- 逐层删除验证：?voidhide=outer,inner,tight,canvas,fresnel 时只剩硬边图形，
  把 dome 临时设成红色后该图形变红——确认是 .zzz-void-dome 的圆盘边缘。
- 原因：dome 径向渐变到 #2a2131 结束，与页面 #131313 交界是一条硬边；
  辉光从背后/旁边经过时会把这条圆边染色，看起来像一层淡色几何图形。
- 修复：dome 加 mask-image: radial-gradient(closest-side, #000 92%, transparent 100%)，
  最后 8% 渐隐到透明，硬边消失；环带与菲涅尔仍盖在同一半径上。

### 空洞 60s/圈 + 动态 1.5 倍（2026-10-30）

- 实机循环改为 P=(t/60000)%1（60s/圈）。
- 颜色/线宽的 4D 相位振幅 ×1.5：wT = 1.725·sin(P·2π) + 1.125·cos(P·2π)，
  仍严格周期，P=0/1 完全一致；gate 改为 5 周期/圈（也正好是旧 2/36s 的 1.5 倍）。
- 线宽动态未丢失，只是 0.62 缩放下偏弱；如需更明显可把宽度振幅从 ±33% 提高。

### 空洞提速：60s 循环内 2 圈（2026-10-30）

- 旋转 
ot = P·2π·2，60s 循环内转 2 圈（30s/圈），整数圈仍无缝。
- 4D 相位同步提速：wT = 1.725·sin(P·2π·2) + 1.125·cos(P·2π·2)；gate 10 周期/圈；
  菲涅尔呼吸 sin(P·2π·2)。
- 再慢可改 3 圈（20s/圈），仍是整数圈无缝。

### 空洞再提速 + 蓝紫时域占比（2026-10-31）

- 60s 循环内 3 圈（20s/圈）：
ot = P·2π·3，wT = 1.725·sin(P·2π·3)+1.125·cos(P·2π·3)，
  gate 15 周期/圈，菲涅尔呼吸 3 周期/圈；整数圈，仍无缝。
- 蓝紫更多：调色板蓝→蓝紫→紫区间扩到 0.10–0.56；t 采样  .45 + 0.60·n（统计偏置）。
  **不限制任一时刻各颜色在屏幕空间的占比**（不做单帧归一化/夹取）。

### 空洞提速：圈数不变、颜色相位 6 周期（2026-10-31）

- 旋转仍是 3 圈/60s（20s/圈），不增加圈数。
- 颜色/线宽的 4D 相位独立提到 6 周期/60s：wT = 1.725·sin(P·2π·6)+1.125·cos(P·2π·6)；
  gate 30 周期、菲涅尔呼吸 6 周期。整数周期，60s 仍无缝。

### 空洞：60s 仅 1 圈（2026-10-31）

- 
ot = P·2π，60s 内只转一圈。
- 颜色/线宽仍 6 周期/60s（wT），gate 30、菲涅尔呼吸 6；整数周期，仍无缝。

### 空洞：圈速快、颜色变化慢（2026-10-31）

- 旋转 
ot = P·2π·3：60s 内 3 圈（20s/圈）。
- 颜色/线宽反过来放慢到 1 周期/60s：wT = 1.725·sin(P·2π) + 1.125·cos(P·2π)；
  gate 5 周期、菲涅尔呼吸 1 周期。整数周期，60s 无缝。

### 空洞：60s 6 圈、颜色 3 周期（2026-10-31）

- 
ot = P·2π·6（10s/圈）；wT = 1.725·sin(P·2π·3)+1.125·cos(P·2π·3)；
  gate 15 周期、菲涅尔呼吸 3 周期。整数周期，60s 无缝。

### 空洞：颜色混入第二相位，重复周期回到 60s（2026-10-31）

- 之前 wT 单分量 3 周期 → 视觉每 20s 重复一次。
- 改为 wT = 1.6·sin(P·2π·3) + 1.0·cos(P·2π·2)：分量周期 20s + 30s，组合 60s；
  颜色变化速度与之前接近，但只在 60s 边界完全重复。
- 旋转仍 6 圈/60s（10s/圈），gate 15 周期，菲涅尔呼吸 3 周期。

### 空洞再提速：颜色 5+4 周期、白色同步（2026-10-31）

- wT = 1.6·sin(P·2π·5) + 1.0·cos(P·2π·4)：分量 12s/15s，组合 60s。
- 暖白 gate 25 周期/圈（2.4s），稀有子噪波直接用 wT（去掉 0.7 系数），白的移动速度与颜色一致。
- 菲涅尔呼吸 5 周期；旋转仍 6 圈/60s。整数周期，60s 无缝。

### 菲涅尔不透明度改为 0→100% 径向渐变（2026-11-01）

- 盒回到 760px（半径 380 = 光带中线）。
- 不透明度：mask-image: radial-gradient(closest-side, transparent 0 50%, #000 100%)
  —— 内侧 50% 半径（直径 = 整圆一半）完全 0%，外缘 100% 不透明。
- 背景改为上层水波纹 + 下层实色紫→品红；去掉 blur，边缘不再发虚。

### 菲涅尔方形：mask 最后一档溢出到四角（2026-11-01）

- 原因：
adial-gradient(closest-side, transparent 0 50%, #000 100%) 在 100% 之后的
  最后一档 #000 会继续延伸，四角（距离 > 半径）也变成不透明；border-radius 对带
  mask + mix-blend-mode 的层不总能裁掉，于是又出现方形。
- 修复：.zzz-void-fresnel 加 clip-path: circle(50% at 50% 50%)，强制圆形裁剪。

### 去掉菲涅尔呼吸缩放（2026-11-01）

- 删除每帧 scale(1 + .035·sin(...))，.zzz-void-fresnel 的 transform 固定为 	ranslate(-50%,-50%)。
- 菲涅尔尺寸不再胀缩；颜色/水波纹仍由静态渐变 + 光泽流动表现。

### 光带改为真正不透明、盖在菲涅尔上方（2026-11-01）

- 去掉 canvas 的 mix-blend-mode:screen（改 normal）：光带本体 alpha=1，不再与菲涅尔相加。
- canvas 仍在 z-index:2，菲涅尔在其下；画布内部辉光仍用 lighter，带外仍是半透明光晕。

### 光带/菲涅尔交界颜色混合（2026-11-01）

- 新增 gMix：环带 lur(14px)，mask 峰值 R-10..R+10、向两侧到 R-90/R+90 衰减，
  normal 混合、alpha .55，先画在带下。
- 交界处光带色与菲涅尔品红互相渗透；光带本体仍 alpha=1，不透明。

### 菲涅尔单向被光带染色（2026-11-01）

- 换掉双向 gMix，改为 gTint：环带 lur(30px)，mask 只保留内侧
  （R-220→R-140→R-60→R-15→R+20），normal、alpha .55。
- 光带颜色向菲涅尔内部渗透，菲涅尔不反向染色；光带本体仍不透明。

### 加大菲涅尔染色扩散（2026-11-01）

- gTint：blur 30→40；mask 内侧从 R-220 扩到 R-330，中段 alpha 提高；
- 合成 alpha 0.55→0.75。光带颜色更深、更广地渗进菲涅尔。

### 染色更纯（2026-11-01）

- 辉光/染色的 saturate 从 1.45 提到 1.75，渗进菲涅尔的颜色更饱和。

### 对照参考复刻菲涅尔 + 线宽/亮度调整（2026-11-01）

- 线宽振幅 ±33% → ±20%；调色板 Oklab L 提亮 ×1.10。
- 参考分析（空洞.png / 空洞.mp4 抽帧）：菲涅尔 0.45R 起、0.8R 后快速增强；
  内部 #25262a 近黑；0.9–0.98R 为蓝紫 rgb(76,65,167)→(122,123,252)，
  色相 210–280° 为主，粉只在光带附近。
- 菲涅尔改为蓝紫色系 + 分段不透明度（10%@62% / 22%@75% / 45%@86% / 75%@94% / 100%@100%）。

### 去掉 gTint 颜色渗入（对比版，2026-11-01）

- 删除 gTint 的构建与合成；菲涅尔回到纯 CSS 蓝紫渐变。
- 用于对比“有渗色 / 无渗色”哪一个更接近参考。

### 菲涅尔改为球面投影（2026-11-01）

- 不再用平铺的径向渐变：启动时生成 256×256 球面纹理。
- 每个像素：nx,ny ∈ [-1,1]，z=sqrt(1-r²)，法线 (nx,ny,z)；
  在球面上采样 4D 噪波，映射为蓝紫/品红/青的颜色；
  alpha = (1-z)^2.1 × 0.95（中心 0、边缘最亮），再叠加 45%→100% 的 mask。
- 纹理一次性生成，作为 .fresnel 的 background-image；mask/clip 不变。

### 菲涅尔不透明度只保留球面 alpha（2026-11-01）

- 去掉 CSS mask（不再与球面 alpha 相乘）。
- 球面 alpha 指数 2.1 → 1.6：lpha = (1-z)^1.6，边缘 1。
- 等效：0.8R≈23%、0.9R≈41%、0.98R≈70%，与参考反推值量级一致。

### 空洞底层改为透明（2026-11-01）

- .zzz-void-dome 去掉径向实色填充与 inset 阴影，改 ackground:transparent。
- 页面底色/网点透出，空洞只剩菲涅尔光晕与光带；需要半透明球体时再加回低 alpha 填充。

### 空洞性能优化（2026-11-01）

- DPR 上限 2 → 1.5。
- 空洞缩小：W 1300→1160、R 380→320、C 650→580；dome/fresnel 760→640；
  外辉光 maxR 改为 R+240，保证不裁边。
- 面板不可见暂停：对 layer 建 IntersectionObserver，不可见或 document.hidden 时跳过 render（rAF 仍在，几乎零成本）。
- 内存（4 张画布）：DPR1.5 约 48MB（原 108MB）；DPR1 约 21MB。

#### 3 次模糊与 85 点平滑的作用

- blur(34px) gIn：光带内侧的大面积柔光，把光带和菲涅尔接在一起。
- blur(18px) gOut：光带外侧的短辉光，让环在页面上“发光”。
- blur(8px) gTight：紧贴环带的亮晕，让环带有自发光感。
- 白量 85 点环形平滑：把白色分量沿环摊开（约 ±12°），让白块边缘像其他颜色一样渐变，
  避免“硬边白块”。

### 固定线宽 + 白量平滑 41 点（2026-11-01）

- 去掉线宽动态：wid[i] = 28，删除宽度噪声与 13 点平滑；径向噪声保留。
- 白量环形平滑 ±42 → ±20（41 点），CPU 侧省一半；白块边缘仍柔和，只是略窄。

### 线宽减到 0.7 倍（2026-11-01）

- wid[i] = 28 → 19.6（0.7×），画面缩放 0.62 后约 12px。

### 环的几何完全静止，只有颜色动（2026-11-01）

- uildProfile 改为固定 wid=19.6、
ad=R；删除径向噪声与线宽噪声。
- 环不再有任何位移/抖动；颜色场仍按 wT 演化、rot 旋转。
- 菲涅尔球面纹理目前是静态的（一次性生成），需要的话可加缓慢旋转让它的颜色也动。


### 空洞继续缩小（2026-11-01）

- W 1160→1040、R 320→270、C 580→520；dome/fresnel 640→540。
- 0.62 缩放下屏幕直径约 397→335px；画布分辨率同步减小。


### 空洞再缩小（2026-11-01）

- W 1040→920、R 270→216、C 520→460；dome/fresnel 540→432。
- 0.62 缩放下屏幕直径约 335→268px。


### 空洞跟随鼠标（2026-11-01）

- window pointermove → 目标偏移（相对中栏中心归一化 × 26px，钳制 ±26px）。
- 一阶平滑 tau=180ms，写入 stage transform；reduced motion 时关闭跟随。


### 跟随改为完全跟随 + 滞后（2026-11-01）

- 目标从「归一化 × 26px」改为指针相对中栏中心的实际像素位移；
- 钳制 ±(列宽/2-150) / ±(列高/2-150)，tau 180ms 保持滞后感。


### 修复空洞与鼠标错位 / 盖住侧栏（2026-11-01）

- 根因：`_centerCol` 没有 `position`，`.zzz-void` 的 `inset:0` 按视口解析，
  导致图层以视口中心为基准（与中栏中心错位）且覆盖侧栏。
- 修复：`_centerCol{position:relative; isolation:isolate}`；图层继续 `overflow:hidden`。
- 目标钳制改为 `±列宽/2`、`±列高/2`，圆心可贴边，超出由中栏裁掉。


### 会话区文字加阴影底（2026-11-01）

- `[data-slot="main.conversation"]` 统一 text-shadow：
  `0 0 2px rgba(0,0,0,.85), 0 1px 3px rgba(0,0,0,.70), 0 0 12px rgba(0,0,0,.45)`。
- `pre, code` 排除（它们自带深色底，阴影会脏）。




### 球面纹理改到 128（实验，2026-11-01）

- FS 384→128（16k 像素），保留 ±1.2 级抖动；放大 3.4× 会更柔、也可能更明显。
- 用于对比环状纹路是否变化。


### 球面纹理定到 512（2026-11-01）

- 对比 64 / 128 / 512：64 与 128 放大后有明显同心环；512 基本无环。
- 结论：环是低分辨率纹理 + 8-bit alpha 阶梯被放大造成的，不是辉光。
- 默认 FS=512，保留 ±1.2 级抖动；启动一次性 262k 像素（约 100–200ms）。
- `?voidfres=64/128/512` 可对比；`?fresdump=1` 显示纹理本身。

### 球面纹理回调 256 + 噪声采样去径向（2026-11-01）

- 按用户要求默认 FS 回 256。
- 纹理 dump 证明 512 基本无环，说明环在 256 的放大路径上；但实机仍见淡环，需继续定位。
- 试验：球面噪声采样从 (nx,ny,z)*1.7 改为 (2.0,2.0,0.6)，削弱 z（径向）分量，
  避免颜色等值线呈同心环。


### 淡环 = 菲涅尔径向 alpha 的 8-bit 阶梯（2026-11-01）

- 现象：整个菲涅尔区域有一圈圈极淡的环，**越往中心越宽**。
- 原因：`(1-z)^1.6` 的 alpha 在圆心附近增长极慢，8-bit 量化后相邻两级的半径跨度很大，
  越靠中心越宽；纹理又被缩放，dither 在缩放时被平均掉。
- 修复：纹理只保留颜色 + 最后 2% 的边缘淡出；径向 alpha 改由 CSS `mask-image`
  在**显示分辨率**下渲染，再叠一层 **1/255 白噪声**抖动 mask 的 8-bit 台阶
  （1 级噪声肉眼不可见，但足以打散环）。
- 已回退：白环与暖白/辉光无关（相关错误记录已删除）；matte 与辉光 blur(2px) 一并回退。


### 按最终尺寸重构，根治色阶（2026-11-01）

- 去掉 stage 的 `scale(.62)`：整套几何按最终尺寸构建——
  W 920→570、R 216→134、C 460→285、dome/fresnel 432→268、线宽 19.6→12.2；
  辉光 blur 34/18/8→21/11/5，maxR 同步缩到 R+43 / R+149。
- 菲涅尔纹理按 `268 × DPR` 生成（约 402²），元素 268px 且无 transform 缩放 → 1:1 设备像素，
  mask/颜色渐变都在最终分辨率量化，不再有缩放放大的 8-bit 台阶。
- 跟随 transform 去掉 scale；CSS 里的 blur(2px) 删除。

### 修复重构后菲涅尔跑到外侧（2026-11-01）

- 重构时只改了第一处 432px（dome），菲涅尔仍是 432px（半径 216 > 光带 134），所以跑到带外。
- 已把菲涅尔也改成 268px，与 R=134 对齐。

### 菲涅尔残留清理 + 1:1 抖动 alpha（2026-11-01）

- 确认无其它水波纹残留：
epeating-radial-gradient 只在旧 CSS fresnel 背景里出现过，已删除；
  页面上的 repeating-linear 属于网点/斜纹，与空洞无关。
- 进一步去掉 CSS mask（它本身也是 8-bit 径向渐变），把径向 alpha 放回纹理：
  纹理按 268×DPR 生成（1:1 设备像素），alpha = (1-z)^1.6，逐像素 +Math.random() 后再量化。
  因为不再缩放，dither 不会被平均掉。

### 菲涅尔简化为单条 CSS 径向渐变（2026-11-01）

- 为排除纹理/mask 的台阶，菲涅尔暂时改为**单一 radial-gradient**（颜色与 alpha 都在同一条渐变里），
  不再使用球面纹理和 mask；dome 加回 62% 深色底。
- 若锯齿仍在，就与菲涅尔无关，需查 canvas 辉光或页面网点透过。

### 空洞代码清理（2026-11-01）

- 删除未使用的球面纹理块（262k 像素生成后被 CSS 渐变覆盖）、?voidfres、?fresdump。
- 删除 uildProfile（几何已冻结）及每帧调用；wid.fill(12.2)、
ad.fill(R) 只执行一次。
- 确认 
epeating-radial-gradient 为 0 处；仅剩页面网点的 
epeating-linear-gradient。
- 保留调试参数：?voidhide=...、?nofollow。

### 回调到球面纹理菲涅尔（2026-11-01）

- 恢复球面纹理：268×DPR 生成、1:1 显示；颜色按球面法线采样，alpha=(1-z)^1.6 逐像素抖动。
- 删除简体版用的 CSS 径向渐变与 1/255 噪点层。
- 保留：最终尺寸无缩放、内侧辉光微抖 mask、dome 62% 深色底、死代码清理。

### 二次死代码检查（2026-11-01）

- 确认无 buildProfile / bandMatte / gTint / gMix / bmc / fresdump / mask-image / scale(.62) / blur(2px) 残留。
- wid/rad 只在初始化 fill 一次。
- 删除每帧重复设置的 res.style.transform（CSS 已固定 translate）。
- 保留：?voidhide / ?nofollow / ?voidfres（调试用，有文档说明）。

### 二次审计补充（2026-11-01）

- 删除恒定的 wid/rad 数组与 fill，drawBand 直接用常量 r=R、w=12.2。
- 三个辉光 mask（gIn/gOut/gTight）全部改为预计算、逐像素抖动的位图，替换 canvas 径向渐变。

### 菲涅尔改为 canvas 位图 + 更陡的 alpha（2026-11-01）

- .zzz-void-fresnel 由 div 改为 canvas，纹理直接 putImageData，bitmap = 268×DPR，1:1 显示，不经 background 缩放。
- alpha：内侧 45% 强制 0，外侧改用 r^6（更陡），逐像素抖动。
- 光带 canvas 加 .zzz-void-band 类，避免通用 canvas 规则命中菲涅尔。

### 环的真正来源：页面网点透过半透明 dome 的摩尔纹（2026-11-01）

- 不透明 dome + 菲涅尔：环消失。
- 半透明 dome（62%）时，页面网点/文字透过 screen 混合，与圆形边界形成同心摩尔纹，
  和 8-bit 色阶无关。
- 修复：dome 改回不透明深色渐变
  #14141a → #0d0d13 → #09090e（保留 clip-path 圆形）。
- 若仍想保留一点透底，可给 dome 加 ackdrop-filter: blur(...)，先模糊页面网点再叠加。

### dome 改为纯色（2026-11-01）

- .zzz-void-dome 背景从深色径向渐变改为纯色 #0d0d13；仍不透明（避免页面网点摩尔纹）。

### 菲涅尔纹理回到 128×128（2026-11-01）

- canvas 位图默认 128×128，CSS 268px 显示；?voidfres= 仍可覆盖。

### alpha 恢复为最早的 (1-z)^1.6（2026-11-01）

- 去掉内侧 45% 裁切与 r^6，恢复 lpha = (1-z)^1.6 + 逐像素抖动；
- 纹理保持 128×128。

### fresnel alpha: inner 50% fully transparent (2026-11-01)

- alpha = 0 for r < 0.5R, then ((r-0.5)/0.5)^1.6 up to 1 at the rim, per-pixel dither.
- Texture stays 128x128; canvas 268px.

### outer hard-edge multiply shadow (2026-11-01)

- New layer .zzz-void-shadow: 320px circle, clip-path circle(50%), mix-blend-mode: multiply,
  radial gradient transparent 80% -> rgba(0,0,0,.66) 99% (hard outer edge).
- Sits below the dome inside the stage; ?voidhide=shadow disables it.

### outer shadow moved into the band canvas (2026-11-01)

- The DOM layer .zzz-void-shadow was not visible (painted below the column panels), so it was removed.
- The outer hard-edge shadow is now drawn inside the band canvas: radial gradient from R to R+66,
  black 0 -> .18 -> .45 -> .62 (hard stop at R+66), composited over the page by the canvas.
- ?voidhide=shadow still disables it.

### shadow: square cause recorded + size/intensity reduced (2026-11-01)

- Root cause of the square: canvas createRadialGradient fills everything past the end radius
  with the last stop colour, so fillRect over the whole box paints a square.
  Fix: clip to arc(C,C,R+34) before filling. Recorded in the design spec.
- Shadow now 34px wide (R -> R+34), max black alpha .30 (was 66px / .62).

### shadow: solid annulus, alpha .75 (2026-11-01)

- Replaced the gradient with a solid ring: arc(R+34) minus arc(R), fill rgba(0,0,0,.75), hard inner/outer edges.

### shadow: translucent solid ring (2026-11-01)

- rgba(0,0,0,.55): 55% opacity, page shows through 45%; still a solid annulus R -> R+34.

### shadow opacity 0.30 (2026-11-01)

- rgba(0,0,0,.30): 30% opacity, 70% transparent; ring stays R -> R+34.

### shadow opacity 0.10 (2026-11-01)

- rgba(0,0,0,.10): 10% opacity; ring stays R -> R+34, solid, hard edges.

### fresnel radial flow (2026-11-01)

- Precomputed 24 frames at 128x128; the noise z coordinate shifts by 0.30 over a 1.8s cycle,
  so colours travel radially from the rim inward.
- Alpha is computed once and shared by all frames (no dither flicker).
- render() swaps the frame via putImageData when the index changes.

### fresnel: per-frame continuous generation (2026-11-01)

- Removed the 24 precomputed frames; the sphere texture is regenerated every render.
- Static per-pixel arrays (nx, ny, z, mask) + shared dithered alpha.
- Continuous z shift (FRES_SPEED = 0.30 / 1800 per ms) -> seamless inward flow.
- Benchmarked 128x128: ~1.8 ms per frame.

### 24 fps + smaller fresnel inner hole (2026-11-01)

- Render cap changed from 30fps (33ms) to 24fps (1000/24 ms).
- Fresnel alpha: fully transparent core reduced from 0.5R to 0.30R; ramp ((r-0.30)/0.70)^1.6.

### fresnel alpha: spherical projection + 0.1R transparent core (2026-11-01)

- alpha = (1-z)^1.6 * smoothstep(0.02R -> 0.10R, r): spherical projection shading,
  with the central 0.1R forced to fully transparent.
- Texture stays 128x128, per-frame continuous radial flow.

### fresnel hole: 0.1R transparent + 0.03R transition (2026-11-01)

- hg = clamp((r - 0.10) / 0.03): fully transparent inside 0.1R, 0.03R wide smoothstep back to the spherical alpha.

### low-power mode (2026-11-01)

- ?voidlow, or auto when hardwareConcurrency <= 4 / deviceMemory <= 4:
  DPR cap 1.25, fresnel texture 96, fresnel regenerated every other frame.
- Perf notes updated in the design spec (24fps, ~1.8ms fresnel, precomputed glow masks).

### band width 0.7x, stronger highlights, faster fresnel (2026-11-01)

- Band width 12.2 -> 8.54 (0.7x).
- Highlights: white mix 0.85 -> 1.0 (ww = min(1, wh*1.15)), plus hl = wh^2 * 48 additive boost.
- Fresnel flow speed: FRES_SPEED 0.30/1800 -> 0.30/1100.

### glow strengthened (2026-11-01)

- Reverted the white highlight boost (misread).
- Glow alphas: inner 0.80 -> 1.00, outer 0.75 -> 0.95, tight 0.55 -> 0.78.

### fresnel flow x2 (2026-11-01)

- FRES_SPEED 0.30/1100 -> 0.30/550.

### fresnel flow: matched to the band's perceived speed (2026-11-01)

- FRES_SPEED 0.30/550 -> 0.30/275 (2x again).
- Reference: the band's colour rotation is 6 turns / 60s (10s per revolution).

### fresnel colour: true isotropic sphere projection (2026-11-01)

- Was sampling noise(nx*2.0, ny*2.0, z*0.6): anisotropic, z compressed 3.3x, so it read as a flat disc.
- Now isotropic noise(nx*1.8, ny*1.8, z*1.8): genuine projection of the sphere normal onto the noise field.
- Radial flow still comes from the z drift (- shift).

### fresnel flow direction: inside -> outside (2026-11-01)

- z sampling changed from (z*1.8 ... - shift) to (+ shift), so colours now travel from the centre outward.

### shadow ring width follows the golden ratio (2026-11-02)

- Band width 8.54 = 0.618 x shadow width -> shadow ring width = 8.54 / 0.618 = 13.82 px (R -> R+13.82).

### shadow alpha .50 (2026-11-02)

- Shadow ring fill rgba(0,0,0,.10) -> rgba(0,0,0,.50); width stays 13.82px.

### ZZZ settings page via the official settings.section slot (2026-11-02)

- Registered ctx.slots.inject('settings.section', ...) with id 'zzz-theme', order 70, label 'ZZZ 主题'.
- Two switches: 空洞开关 (voidPrefs.void) and 性能模式 (voidPrefs.low).
- Prefs persisted in localStorage 'dsh-theme-zzz:prefs'; voidPrefListeners keep the void effect in sync live.
- Void off: layer display:none and rendering paused; perf mode: fresnel stride halves immediately, DPR/texture applied on reload.
- Verified live via cordis_inspect_query Slots settings.section occupants (dsh-theme-zzz / zzz-theme).

### settings page: big ZZZ title (2026-11-02)

- Added a page header: 24px 'ZZZ 主题', a brand-primary 'ZENLESS ZONE ZERO' eyebrow, and a one-line description above the 空洞 group.

### settings page: removed the description line (2026-11-02)

- Dropped '绝区零主题：会话区空洞背景与性能选项。'; page header is now title + ZENLESS ZONE ZERO eyebrow only.

### press-to-zoom 1.1x (2026-11-02)

- pointerdown (button 0 or 2) sets zoomTarget 1.1, holds while pressed; pointerup with buttons===0,
  pointercancel and window blur reset to 1.0. Eased with tau 110ms at the 24fps render.
- Band width stays 8.54: radius becomes R*z, tick angular width recomputed; glows and shadow scale with z,
  the precomputed masks are drawn scaled about the canvas centre.
- Canvas/stage enlarged 570 -> 640 so the 1.1x outer glow (311px) still fits inside the 320px half-size.

### zoom stutter fix: fast transition frames (2026-11-02)

- While |zoomTarget - zoom| > 0.0005 the render runs at 60fps and skips the three blur glow
  rebuilds and the fresnel regeneration; the cached glow layers are composited scaled by z instead.
- Full-quality frame (glows rebuilt at the new z + fresnel update) runs once the zoom settles.

### zoom: no frozen animation, half-res glow layers (2026-11-02)

- Removed the 'fast path' that reused cached glows: it misaligned the glow and froze the fresnel.
- Every frame is now a full frame (glows rebuilt, fresnel regenerated); the three glow canvases are
  built at half resolution with halved blur radii, ~4x cheaper, visually identical after upscale.
- Zoom transition still renders at 60fps while animating.

### low-power mode completed (2026-11-02)

- DPR 1.25 -> 1.0; fresnel 96; every-other-frame generation.
- Frame pacing: 20fps in low mode (40 during the zoom transition instead of 60).
- Tight glow layer skipped entirely in low mode (build + composite).
- lowNow() reads LOW or the live setting, so the toggle applies immediately except DPR/texture (reload).

### zoom 1.2x, canvas 680 (2026-11-03)

- zoomTarget 1.1 -> 1.2; canvas/stage 640 -> 680 (radius 340) so (R+149)*1.2 = 339.6 still fits.

### dialog frosted glass restored (2026-11-03)

- Root cause 1: '--dsw-menu-backdrop-filter' was bound to 'none', and host dialogs/popovers read that
  token for their backdrop-filter, so all of them lost the blur.
- Root cause 2: the card rule paints [role="dialog"] with an opaque #282828, which hides any blur behind it.
- Fix: token -> var(--zzz-glass-blur); a later dialog rule sets --zzz-glass-fill-strong + glass blur while
  keeping the ZZZ frame. Menus stay flat (their material rule still forces backdrop-filter:none).
- check-theme baseline !important 635 -> 638 (3 overrides must out-rank the card fill).

### blank-session hero headline: bold display face (2026-11-04)

- The host renders '探索未至之境' with a 26px medium body face; the title span now uses
  'ZZZ Display' + font-weight 700 (selector: _headline:has(_previewBadge) _titleGroup > span:first-child).
- The preview badge beside it keeps its own styling.
- check-theme !important baseline 638 -> 640.

### hero headline: confirmed inpin hongmengti (2026-11-04)

- FONT-LICENSES.md: ZZZ Display = inpin-bold.woff2 = 印品鸿蒙体 (Bold 700);
  ZZZ Secondary = inpin-d40.woff2 = 印品鸿蒙体 D40 (500).
- Added a container-level rule on _headline so the whole headline block resolves to the display face;
  the title span keeps the !important pair so the host's medium body face cannot win.

### distribution: fonts optional, dist branch + market index tooling (2026-11-05)

- Fonts are no longer tracked or published (印品鸿蒙体 is non-commercial); the host serves them from
  /dsh-theme-zzz/fonts when present, otherwise 404 -> CSS falls back to system CJK fonts.
- CSS stacks gained PingFang SC / Microsoft YaHei / Noto Sans SC fallbacks.
- package.json: files without fonts, engines.dsh, keywords, README/LICENSE.
- README.md (root + package) documents market index, git #dist, npm, local install.
- scripts/make-dist.mjs builds the dist branch content; scripts/make-market-index.mjs +
  scripts/check-market-index.mjs generate and validate a format-1 market index.

### fonts: Source Han Sans by default + custom font setting (2026-11-05)

- @font-face for inpin-bold / inpin-d40 removed; the only webfont left is 'ZZZ Sans' (Noto Sans SC, OFL).
- New tokens --zzz-font-display / --zzz-font-text default to Source Han Sans / Noto Sans SC / 思源黑体,
  with PingFang / YaHei fallbacks; every font-family rule now reads them, so the existing
  display / secondary / body classification is unchanged.
- Settings page: new 字体 group with a 自定义字体 switch and two family-name fields (bold / thin);
  when enabled the theme sets the two CSS variables inline from localStorage prefs.
- Fonts are still not shipped; FONT-LICENSES and both READMEs describe the new model.

### display face: real bold weight (2026-11-05)

- Removed the 'ZZZ Sans' webfont from the stacks: a 400-only face was shadowing the system's
  real bold, so 700 rendered as weak synthetic bold.
- Stacks now start with 'Noto Sans SC' / 'Source Han Sans SC' / '思源黑体' (system faces).
- Display rules raised 700 -> 800 (Noto Sans SC Black / Source Han Heavy); the medium 500 and
  body 400 classes are unchanged.
- index.js font route is now unused; kept for users who still drop a font file in \.

### font serving removed (2026-11-05)

- index.js is now an empty Host half: no @font-face, no /zzz-theme/fonts route, no bundled fonts.
- The local packages/dsh-theme-zzz/fonts directory was deleted (sources stay in 素材/字体).
- Fonts resolve purely from the OS; the settings page's custom-font fields cover 印品鸿蒙体.

### markdown table centring (2026-11-05)

- The host renders a table as max-content inside a 100%-wide scroll wrapper, so a table narrower
  than the prose sits at the left edge and looks off-centre.
- The wrapper now uses width:fit-content + max-width:100% + margin-inline:auto: it shrinks to the
  grid and centres, while wide tables still cap at 100% and scroll horizontally.

### markdown table: back to the host layout (2026-11-05)

- Reverted the fit-content centring; the table wrapper keeps only the glass fill and the 6/14 padding,
  so the host's full-width, left-aligned table flow is preserved.

### markdown table: restore the centred wrapper (2026-11-05)

- The host's full-width flow is what reads as skewed in this layout, so the wrapper is back to
  fit-content + max-width:100% + margin-inline:auto (measured 183px / 183px around the grid).

### font settings: no toggle, always-editable fields + reset (2026-11-05)

- Removed the 自定义字体 switch; the two family-name fields are always shown and default to
  印品鸿蒙体 / 印品鸿蒙体 D40.
- Empty field or an uninstalled family falls through the stack to Source Han Sans automatically,
  so no switch is needed.
- Added a 重置字体 button restoring the two default families.

### settings copy moved to locale JSON (2026-11-05)

- All settings-page strings now live in locale/zh.json + locale/en.json under 'settings'.
- index.js serves them at /zzz-theme/locale/<lang>.json (no-cache, whitelisted zh/en);
  the client merges them over a built-in Chinese fallback and re-renders when they arrive.
- The nav label uses a thunk (() => STR.title) so it follows the loaded copy.
- Editing the JSON + refreshing is enough after the Host half has loaded once (restart needed once).

### inpin font aliases: the families were never actually matched (2026-11-05)

- Probe (headless Chrome, installed faces): '印品鸿蒙体' and '印品鸿蒙体 D40' do NOT match;
  the fonts answer to 'inpin hongmengti', '印品鸿蒙体（非商用）' and '印品鸿蒙体 D40-v1.04'.
- The font effect now expands the two default Chinese names with those aliases, so the settings
  defaults really select 印品. Measured text width: bold 375.9, thin 368.9 vs fallback 356.1.
- Explained the earlier "700 not bold enough": the theme had silently been rendering Source Han Sans.

### fonts: inpin-first default + stale empty prefs fixed (2026-11-05)

- The stylesheet defaults for --zzz-font-display / --zzz-font-text now start with the inpin
  alias list, so the theme uses 印品 even before the settings effect runs (falls through to
  Source Han Sans when it is not installed).
- An empty stored family name no longer forces the fallback stack: it removes the inline
  override, and saved empty values migrate to the inpin defaults.
- This also fixes the 'everything is Source Han Sans' state left in localStorage by the
  removed 自定义字体 toggle.

### display rules: font-synthesis-weight:none (2026-11-05)

- 印品's faces are already bold but are labelled Regular, so weight 700/800 made the browser
  synthesise a second bold on top of them (smeared edges).
- The four display rules (dialog headings/menu items, hero container + title, dialog title bar)
  now set font-synthesis-weight:none; fallback families keep their real weights
  (Noto Sans SC Black, YaHei Bold).

### settings: font fields removed, one fallback note kept (2026-11-05)

- Removed the two font inputs and the reset button (and the now-unused ZzzTextField), plus the
  font preference fields and the effect that applied them.
- Fonts are resolved entirely by the stylesheet stacks: 印品 first, Source Han Sans / Noto next,
  then the system sans; the settings page shows a single explanatory line.

### settings: font note explains the redistribution constraint (2026-11-05)

- Replacement copy: 印品鸿蒙体 cannot be redistributed without authorisation, the theme ships no font
  files, installed copies are picked up automatically, otherwise Source Han Sans is used.
- Updated in the client fallback string and in locale/zh.json + locale/en.json.

### settings: 'use Source Han Sans' button (2026-11-05)

- New pref fontSans (default false). When on, the font-mode effect pins both --zzz-font-display and
  --zzz-font-text to the Source Han Sans stack; when off it removes the inline override so the
  stylesheet's inpin-first default applies.
- The 字体 group has a row with a button that toggles between 使用思源黑体 / 恢复印品优先.

### settings: the Source Han Sans control is a switch (2026-11-05)

- Replaced the plain button with the shared ZzzSettingRow switch (same slider as 空洞/性能模式).
- The toggle pins / unpins the two font variables through the font-mode effect; state persists.

### font switch: attribute-driven, no inline vars (2026-11-05)

- The switch now toggles data-zzz-font-sans on <html>; a dedicated rule with higher specificity
  flips both stacks, so nothing inline can shadow it.
- The effect also clears inline --zzz-font-display/--zzz-font-text left by older builds (inline
  custom properties beat the stylesheet and were the reason the switch appeared to do nothing).

### font switch root cause: the base vars are also declared on body (2026-11-05)

- Live DOM probe (BrowserSkill): with data-zzz-font-sans set, <html> resolved --zzz-font-display to the
  Sans stack, but the hero title still resolved it to the inpin stack.
- Reason: the base declarations live in a rule that targets BOTH html[data] and html[data] body, so body
  re-declares the inpin stacks and every descendant inherits them; overriding only html was invisible.
- Fix: the override rule now also targets html[data][data-zzz-font-sans] body.
- Replica measurement with the real stacks: 375.9 (inpin) -> 356.1 (Sans) when the attribute flips.

### fonts: accept the renamed D40 build (SDK_SC_Web) (2026-11-05)

- Some builds of 印品鸿蒙体 D40 carry the internal family name 'SDK_SC_Web' (nameID 3 still says
  yinpinhongmengti D40-v1.04). Added it to the text stack aliases, after the D40 names.
- It is a single Regular (400) face; the bold is a separate file ('inpin hongmengti').

### settings: custom font fields return, applied to html AND body (2026-11-05)

- Two inputs (display / text family) with a small hint: use the family name installed in the system,
  not the file name. Defaults are 印品鸿蒙体 / 印品鸿蒙体 D40; the values expand with the known aliases.
- The inline override is written to document.documentElement AND document.body, because the base
  declarations live in a rule that targets both; writing only html left body on the stylesheet stacks
  (the bug that made the switch look dead).
- Typing into a field switches the 'Source Han Sans' toggle off, so the field visibly applies.
- Empty field removes the override so the stylesheet default (inpin-first) applies again.

### glass: remote-safe fallback without backdrop blur (2026-11-06, local only)

- Settings gains a 毛玻璃模糊 switch (default on). Off swaps --zzz-glass-blur for 
one and
  raises the fill opacity (.34/.45 -> .66/.76) so panels stay readable without blur.
- CSS: html[data-dsh-theme-zzz][data-zzz-glass-lite] plus the same rule on ody (the base
  tokens are declared on both, so an html-only override would not reach descendants).
- URL switches for testing: ?zzzglass=off forces lite, ?zzzglass=on forces full glass.
- Rollback: turn the switch back on, or revert this commit; the pref defaults to blur on and
  no stored data changes shape.
- Rationale: only the backdrop-filter surfaces flicker under remote capture; the hollow and the
  breathing animations were left untouched.

### black glyphs on yellow: specificity fix (2026-11-08, local only)

- The three-dot (and other) glyphs inside a yellow selected row / nav cell stayed #dcdcdc:
  component rules such as utton[class*="_button"]:not(...)... and the design-system disc
  recipe (utton[class*="1rv3m_"] svg{color:#dcdcdc !important}) carry enough
  :not()/class specificity to outrank the plain [data-zzz-on-yellow] * rule.
- The black-on-yellow rules now use :not(#zzz-guard), one id-level step above every
  component rule; id-hack baseline 9 -> 13.
- Verified in a mock: before tag #dcdcdc, after tag #101010 on both a 1rv3m_ disc and a
  generic _button glyph (fill=currentColor dots).

### black glyphs on yellow, follow-up: CSS paints and hover (2026-11-08, local only)

- Root cause of the remaining white three-dot glyphs: some components carry the white paint in
  CSS (fill/stroke from the component rule), not as an SVG attribute, so the attribute rewrite
  never saw them; and hover-only yellow never mutates the DOM, so the tag was never applied.
- The tagging effect now (a) rewrites computed white fill/stroke to currentColor inline
  (fill:none / stroke:none left alone), (b) tags hover-yellow surfaces from pointerover, and
  (c) no longer skips the 1rv3m_ design-system discs.
- Mock check: CSS-white fill and outline stroke both switch to #101010 when tagged; fill:none
  stays none.

### three-dot glyph: the stroke was pinned (2026-11-08, local only)

- The real buttons are _button_1rv3m_2 _ghost_1rv3m_45 _sm_1rv3m_28 (+ nL4_yW_moreButton /
  wSkVaW_viewsMore) and their icon is a **stroked path**, not three circles.
- utton[class*="1rv3m_"] svg{stroke:#dcdcdc !important} pinned that stroke. The hover and
  selected-row rules only changed color, so the glyph stayed light on yellow.
- The svg stroke now follows the colour (stroke:currentColor !important): hover rules and the
  black-on-yellow rules both change color, so the dots turn black with them.
- Mock check: tagged yellow surface gives rgb(16,16,16) for button, svg and path stroke.
