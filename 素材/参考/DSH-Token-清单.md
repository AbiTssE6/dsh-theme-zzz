# DSH `--dsw-*` Token 清单

自动生成：从 `@deepseek-ai/dsh-client-ui-theme` 的编译产物中提取（token 样式表编译进 `lib/client.js`，磁盘上没有独立 CSS）。

- 共 **403** 个 token，本主题已覆盖 **27** 个；
- 深色取自 `body[data-ds-dark-theme]` 块，浅色取自默认块；
- 「本主题」为空 = 仍用宿主值，可直接在主题里加一行覆盖。

> 改色优先改 token：token 是全站唯一颜色权威，比按类名逐条覆盖组件稳定得多。

## 分组概览

| 分组 | 数量 | 已覆盖 |
|---|---|---|
| `dsw-font` | 182 | 0 |
| `dsw-alias` | 107 | 19 |
| `dsw-static` | 77 | 0 |
| `dsw-specific` | 11 | 8 |
| `dsw-radius` | 6 | 0 |
| `dsw-elevation` | 5 | 0 |
| `dsw-shadow` | 4 | 0 |
| `dsw-gradient` | 3 | 0 |
| `dsw-focus` | 2 | 0 |
| `dsw-linear` | 2 | 0 |
| `dsw-menu` | 2 | 0 |
| `dsw-corner` | 1 | 0 |
| `dsw-mask` | 1 | 0 |

## dsw-font（182 个）

| Token | 深色 | 浅色 | 本主题 |
|---|---|---|---|
| `--dsw-font-base-16` | 16px/24px var(--dsw-font-family) | 16px/24px var(--dsw-font-family) |  |
| `--dsw-font-base-16-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-base-16-font-size` | 16px | 16px |  |
| `--dsw-font-base-16-font-style` | normal | normal |  |
| `--dsw-font-base-16-font-weight` | 400 | 400 |  |
| `--dsw-font-base-16-line-height` | 24px | 24px |  |
| `--dsw-font-base-strong-16` | 500 16px/24px var(--dsw-font-family) | 500 16px/24px var(--dsw-font-family) |  |
| `--dsw-font-base-strong-16-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-base-strong-16-font-size` | 16px | 16px |  |
| `--dsw-font-base-strong-16-font-style` | normal | normal |  |
| `--dsw-font-base-strong-16-font-weight` | 500 | 500 |  |
| `--dsw-font-base-strong-16-line-height` | 24px | 24px |  |
| `--dsw-font-family` | var(--dsh-font-family-text,var(--dsh-font-family-text-default)), var(--dsh-font-family-text-default) | var(--dsh-font-family-text-default) |  |
| `--dsw-font-family-brand` | \"Montserrat\", var(--dsh-font-family-text-default) | \"Montserrat\", var(--dsh-font-family-text-default) |  |
| `--dsw-font-l-20` | 500 20px/28px var(--dsw-font-family) | 500 20px/28px var(--dsw-font-family) |  |
| `--dsw-font-l-20-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-l-20-font-size` | 20px | 20px |  |
| `--dsw-font-l-20-font-style` | normal | normal |  |
| `--dsw-font-l-20-font-weight` | 500 | 500 |  |
| `--dsw-font-l-20-line-height` | 28px | 28px |  |
| `--dsw-font-m-18` | 500 16px/28px var(--dsw-font-family) | 500 16px/28px var(--dsw-font-family) |  |
| `--dsw-font-m-18-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-m-18-font-size` | 16px | 16px |  |
| `--dsw-font-m-18-font-style` | normal | normal |  |
| `--dsw-font-m-18-font-weight` | 500 | 500 |  |
| `--dsw-font-m-18-line-height` | 28px | 28px |  |
| `--dsw-font-markdown-base` | var(--dsh-content-font-size,14px) / calc(24px + var(--dsh-content-font-delta)) var(--dsw-font-family) | var(--dsh-content-font-size,14px) / calc(24px + var(--dsh-content-font-delta)) var(--dsw-font-family) |  |
| `--dsw-font-markdown-base-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-base-font-size` | var(--dsh-content-font-size,14px) | var(--dsh-content-font-size,14px) |  |
| `--dsw-font-markdown-base-font-style` | normal | normal |  |
| `--dsw-font-markdown-base-font-weight` | 400 | 400 |  |
| `--dsw-font-markdown-base-italic` | italic var(--dsh-content-font-size,14px) / calc(24px + var(--dsh-content-font-delta)) var(--dsw-font-family) | italic var(--dsh-content-font-size,14px) / calc(24px + var(--dsh-content-font-delta)) var(--dsw-font-family) |  |
| `--dsw-font-markdown-base-italic-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-base-italic-font-size` | var(--dsh-content-font-size,14px) | var(--dsh-content-font-size,14px) |  |
| `--dsw-font-markdown-base-italic-font-style` | italic | italic |  |
| `--dsw-font-markdown-base-italic-font-weight` | 400 | 400 |  |
| `--dsw-font-markdown-base-italic-line-height` | calc(24px + var(--dsh-content-font-delta)) | calc(24px + var(--dsh-content-font-delta)) |  |
| `--dsw-font-markdown-base-line-height` | calc(24px + var(--dsh-content-font-delta)) | calc(24px + var(--dsh-content-font-delta)) |  |
| `--dsw-font-markdown-base-strong` | 600 var(--dsh-content-font-size,14px) / calc(24px + var(--dsh-content-font-delta)) var(--dsw-font-family) | 600 var(--dsh-content-font-size,14px) / calc(24px + var(--dsh-content-font-delta)) var(--dsw-font-family) |  |
| `--dsw-font-markdown-base-strong-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-base-strong-font-size` | var(--dsh-content-font-size,14px) | var(--dsh-content-font-size,14px) |  |
| `--dsw-font-markdown-base-strong-font-style` | normal | normal |  |
| `--dsw-font-markdown-base-strong-font-weight` | 600 | 600 |  |
| `--dsw-font-markdown-base-strong-italic` | italic 600 var(--dsh-content-font-size,14px) / calc(24px + var(--dsh-content-font-delta)) var(--dsw-font-family) | italic 600 var(--dsh-content-font-size,14px) / calc(24px + var(--dsh-content-font-delta)) var(--dsw-font-family) |  |
| `--dsw-font-markdown-base-strong-italic-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-base-strong-italic-font-size` | var(--dsh-content-font-size,14px) | var(--dsh-content-font-size,14px) |  |
| `--dsw-font-markdown-base-strong-italic-font-style` | italic | italic |  |
| `--dsw-font-markdown-base-strong-italic-font-weight` | 600 | 600 |  |
| `--dsw-font-markdown-base-strong-italic-line-height` | calc(24px + var(--dsh-content-font-delta)) | calc(24px + var(--dsh-content-font-delta)) |  |
| `--dsw-font-markdown-base-strong-line-height` | calc(24px + var(--dsh-content-font-delta)) | calc(24px + var(--dsh-content-font-delta)) |  |
| `--dsw-font-markdown-code` | calc(12px + var(--dsh-code-font-delta)) / calc(19px + var(--dsh-code-font-delta)) var(--ds-font-family-code) | calc(12px + var(--dsh-code-font-delta)) / calc(19px + var(--dsh-code-font-delta)) var(--ds-font-family-code) |  |
| `--dsw-font-markdown-code-block` | var(--dsh-code-font-size,11px) / calc(19px + var(--dsh-code-font-delta)) var(--ds-font-family-code) | var(--dsh-code-font-size,11px) / calc(19px + var(--dsh-code-font-delta)) var(--ds-font-family-code) |  |
| `--dsw-font-markdown-code-block-font-family` | var(--ds-font-family-code) | var(--ds-font-family-code) |  |
| `--dsw-font-markdown-code-block-font-size` | var(--dsh-code-font-size,11px) | var(--dsh-code-font-size,11px) |  |
| `--dsw-font-markdown-code-block-font-style` | normal | normal |  |
| `--dsw-font-markdown-code-block-font-weight` | 400 | 400 |  |
| `--dsw-font-markdown-code-block-line-height` | calc(19px + var(--dsh-code-font-delta)) | calc(19px + var(--dsh-code-font-delta)) |  |
| `--dsw-font-markdown-code-block-small` | var(--dsh-code-font-size,11px) / calc(16px + var(--dsh-code-font-delta)) var(--ds-font-family-code) | var(--dsh-code-font-size,11px) / calc(16px + var(--dsh-code-font-delta)) var(--ds-font-family-code) |  |
| `--dsw-font-markdown-code-block-small-font-family` | var(--ds-font-family-code) | var(--ds-font-family-code) |  |
| `--dsw-font-markdown-code-block-small-font-size` | var(--dsh-code-font-size,11px) | var(--dsh-code-font-size,11px) |  |
| `--dsw-font-markdown-code-block-small-font-style` | normal | normal |  |
| `--dsw-font-markdown-code-block-small-font-weight` | 400 | 400 |  |
| `--dsw-font-markdown-code-block-small-line-height` | calc(16px + var(--dsh-code-font-delta)) | calc(16px + var(--dsh-code-font-delta)) |  |
| `--dsw-font-markdown-code-font-family` | var(--ds-font-family-code) | var(--ds-font-family-code) |  |
| `--dsw-font-markdown-code-font-size` | calc(12px + var(--dsh-code-font-delta)) | calc(12px + var(--dsh-code-font-delta)) |  |
| `--dsw-font-markdown-code-font-style` | normal | normal |  |
| `--dsw-font-markdown-code-font-weight` | 400 | 400 |  |
| `--dsw-font-markdown-code-line-height` | calc(19px + var(--dsh-code-font-delta)) | calc(19px + var(--dsh-code-font-delta)) |  |
| `--dsw-font-markdown-h1` | 700 calc(21px + var(--dsh-content-font-delta)) / calc(30px + var(--dsh-content-font-delta)) var(--dsw-font-family) | 700 calc(21px + var(--dsh-content-font-delta)) / calc(30px + var(--dsh-content-font-delta)) var(--dsw-font-family) |  |
| `--dsw-font-markdown-h1-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-h1-font-size` | calc(21px + var(--dsh-content-font-delta)) | calc(21px + var(--dsh-content-font-delta)) |  |
| `--dsw-font-markdown-h1-font-style` | normal | normal |  |
| `--dsw-font-markdown-h1-font-weight` | 700 | 700 |  |
| `--dsw-font-markdown-h1-line-height` | calc(30px + var(--dsh-content-font-delta)) | calc(30px + var(--dsh-content-font-delta)) |  |
| `--dsw-font-markdown-h2` | 700 calc(19px + var(--dsh-content-font-delta)) / calc(28px + var(--dsh-content-font-delta)) var(--dsw-font-family) | 700 calc(19px + var(--dsh-content-font-delta)) / calc(28px + var(--dsh-content-font-delta)) var(--dsw-font-family) |  |
| `--dsw-font-markdown-h2-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-h2-font-size` | calc(19px + var(--dsh-content-font-delta)) | calc(19px + var(--dsh-content-font-delta)) |  |
| `--dsw-font-markdown-h2-font-style` | normal | normal |  |
| `--dsw-font-markdown-h2-font-weight` | 700 | 700 |  |
| `--dsw-font-markdown-h2-line-height` | calc(28px + var(--dsh-content-font-delta)) | calc(28px + var(--dsh-content-font-delta)) |  |
| `--dsw-font-markdown-h3` | 700 calc(18px + var(--dsh-content-font-delta)) / calc(26px + var(--dsh-content-font-delta)) var(--dsw-font-family) | 700 calc(18px + var(--dsh-content-font-delta)) / calc(26px + var(--dsh-content-font-delta)) var(--dsw-font-family) |  |
| `--dsw-font-markdown-h3-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-h3-font-size` | calc(18px + var(--dsh-content-font-delta)) | calc(18px + var(--dsh-content-font-delta)) |  |
| `--dsw-font-markdown-h3-font-style` | normal | normal |  |
| `--dsw-font-markdown-h3-font-weight` | 700 | 700 |  |
| `--dsw-font-markdown-h3-line-height` | calc(26px + var(--dsh-content-font-delta)) | calc(26px + var(--dsh-content-font-delta)) |  |
| `--dsw-font-markdown-h4` | 600 var(--dsh-content-font-size,14px) / calc(24px + var(--dsh-content-font-delta)) var(--dsw-font-family) | 600 var(--dsh-content-font-size,14px) / calc(24px + var(--dsh-content-font-delta)) var(--dsw-font-family) |  |
| `--dsw-font-markdown-h4-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-h4-font-size` | var(--dsh-content-font-size,14px) | var(--dsh-content-font-size,14px) |  |
| `--dsw-font-markdown-h4-font-style` | normal | normal |  |
| `--dsw-font-markdown-h4-font-weight` | 600 | 600 |  |
| `--dsw-font-markdown-h4-line-height` | calc(24px + var(--dsh-content-font-delta)) | calc(24px + var(--dsh-content-font-delta)) |  |
| `--dsw-font-markdown-small` | 12px/20px var(--dsw-font-family) | 12px/20px var(--dsw-font-family) |  |
| `--dsw-font-markdown-small-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-small-font-size` | 12px | 12px |  |
| `--dsw-font-markdown-small-font-style` | normal | normal |  |
| `--dsw-font-markdown-small-font-weight` | 400 | 400 |  |
| `--dsw-font-markdown-small-italic` | italic 12px/20px var(--dsw-font-family) | italic 12px/20px var(--dsw-font-family) |  |
| `--dsw-font-markdown-small-italic-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-small-italic-font-size` | 12px | 12px |  |
| `--dsw-font-markdown-small-italic-font-style` | italic | italic |  |
| `--dsw-font-markdown-small-italic-font-weight` | 400 | 400 |  |
| `--dsw-font-markdown-small-italic-line-height` | 20px | 20px |  |
| `--dsw-font-markdown-small-line-height` | 20px | 20px |  |
| `--dsw-font-markdown-small-strong` | 600 12px/20px var(--dsw-font-family) | 600 12px/20px var(--dsw-font-family) |  |
| `--dsw-font-markdown-small-strong-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-small-strong-font-size` | 12px | 12px |  |
| `--dsw-font-markdown-small-strong-font-style` | normal | normal |  |
| `--dsw-font-markdown-small-strong-font-weight` | 600 | 600 |  |
| `--dsw-font-markdown-small-strong-italic` | italic 600 12px/20px var(--dsw-font-family) | italic 600 12px/20px var(--dsw-font-family) |  |
| `--dsw-font-markdown-small-strong-italic-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-small-strong-italic-font-size` | 12px | 12px |  |
| `--dsw-font-markdown-small-strong-italic-font-style` | italic | italic |  |
| `--dsw-font-markdown-small-strong-italic-font-weight` | 600 | 600 |  |
| `--dsw-font-markdown-small-strong-italic-line-height` | 20px | 20px |  |
| `--dsw-font-markdown-small-strong-line-height` | 20px | 20px |  |
| `--dsw-font-markdown-table` | var(--dsh-content-font-size-secondary,13px)/calc(22px + var(--dsh-content-font-delta-secondary,0px)) var(--dsw-font-family) | var(--dsh-content-font-size-secondary,13px)/calc(22px + var(--dsh-content-font-delta-secondary,0px)) var(--dsw-font-family) |  |
| `--dsw-font-markdown-table-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-table-font-size` | var(--dsh-content-font-size-secondary,13px) | var(--dsh-content-font-size-secondary,13px) |  |
| `--dsw-font-markdown-table-font-style` | normal | normal |  |
| `--dsw-font-markdown-table-font-weight` | 400 | 400 |  |
| `--dsw-font-markdown-table-head` | 500 var(--dsh-content-font-size-secondary,13px)/calc(22px + var(--dsh-content-font-delta-secondary,0px)) var(--dsw-font-family) | 500 var(--dsh-content-font-size-secondary,13px)/calc(22px + var(--dsh-content-font-delta-secondary,0px)) var(--dsw-font-family) |  |
| `--dsw-font-markdown-table-head-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-markdown-table-head-font-size` | var(--dsh-content-font-size-secondary,13px) | var(--dsh-content-font-size-secondary,13px) |  |
| `--dsw-font-markdown-table-head-font-style` | normal | normal |  |
| `--dsw-font-markdown-table-head-font-weight` | 500 | 500 |  |
| `--dsw-font-markdown-table-head-line-height` | calc(22px + var(--dsh-content-font-delta-secondary,0px)) | calc(22px + var(--dsh-content-font-delta-secondary,0px)) |  |
| `--dsw-font-markdown-table-line-height` | calc(22px + var(--dsh-content-font-delta-secondary,0px)) | calc(22px + var(--dsh-content-font-delta-secondary,0px)) |  |
| `--dsw-font-s-14` | 14px/22px var(--dsw-font-family) | 14px/22px var(--dsw-font-family) |  |
| `--dsw-font-s-14-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-s-14-font-size` | 14px | 14px |  |
| `--dsw-font-s-14-font-style` | normal | normal |  |
| `--dsw-font-s-14-font-weight` | 400 | 400 |  |
| `--dsw-font-s-14-line-height` | 22px | 22px |  |
| `--dsw-font-s-strong-14` | 500 14px/22px var(--dsw-font-family) | 500 14px/22px var(--dsw-font-family) |  |
| `--dsw-font-s-strong-14-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-s-strong-14-font-size` | 14px | 14px |  |
| `--dsw-font-s-strong-14-font-style` | normal | normal |  |
| `--dsw-font-s-strong-14-font-weight` | 500 | 500 |  |
| `--dsw-font-s-strong-14-line-height` | 22px | 22px |  |
| `--dsw-font-xl-24` | 600 24px/32px var(--dsw-font-family) | 600 24px/32px var(--dsw-font-family) |  |
| `--dsw-font-xl-24-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-xl-24-font-size` | 24px | 24px |  |
| `--dsw-font-xl-24-font-style` | normal | normal |  |
| `--dsw-font-xl-24-font-weight` | 600 | 600 |  |
| `--dsw-font-xl-24-line-height` | 32px | 32px |  |
| `--dsw-font-xs-13` | 13px/20px var(--dsw-font-family) | 13px/20px var(--dsw-font-family) |  |
| `--dsw-font-xs-13-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-xs-13-font-size` | 13px | 13px |  |
| `--dsw-font-xs-13-font-style` | normal | normal |  |
| `--dsw-font-xs-13-font-weight` | 400 | 400 |  |
| `--dsw-font-xs-13-line-height` | 20px | 20px |  |
| `--dsw-font-xs-strong-13` | 500 13px/20px var(--dsw-font-family) | 500 13px/20px var(--dsw-font-family) |  |
| `--dsw-font-xs-strong-13-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-xs-strong-13-font-size` | 13px | 13px |  |
| `--dsw-font-xs-strong-13-font-style` | normal | normal |  |
| `--dsw-font-xs-strong-13-font-weight` | 500 | 500 |  |
| `--dsw-font-xs-strong-13-line-height` | 20px | 20px |  |
| `--dsw-font-xxs-12` | 12px/18px var(--dsw-font-family) | 12px/18px var(--dsw-font-family) |  |
| `--dsw-font-xxs-12-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-xxs-12-font-size` | 12px | 12px |  |
| `--dsw-font-xxs-12-font-style` | normal | normal |  |
| `--dsw-font-xxs-12-font-weight` | 400 | 400 |  |
| `--dsw-font-xxs-12-line-height` | 18px | 18px |  |
| `--dsw-font-xxs-strong-12` | 500 12px/18px var(--dsw-font-family) | 500 12px/18px var(--dsw-font-family) |  |
| `--dsw-font-xxs-strong-12-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-xxs-strong-12-font-size` | 12px | 12px |  |
| `--dsw-font-xxs-strong-12-font-style` | normal | normal |  |
| `--dsw-font-xxs-strong-12-font-weight` | 500 | 500 |  |
| `--dsw-font-xxs-strong-12-line-height` | 18px | 18px |  |
| `--dsw-font-xxxs-11` | 11px/14px var(--dsw-font-family) | 11px/14px var(--dsw-font-family) |  |
| `--dsw-font-xxxs-11-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-xxxs-11-font-size` | 11px | 11px |  |
| `--dsw-font-xxxs-11-font-style` | normal | normal |  |
| `--dsw-font-xxxs-11-font-weight` | 400 | 400 |  |
| `--dsw-font-xxxs-11-line-height` | 14px | 14px |  |
| `--dsw-font-xxxs-strong-11` | 500 11px/14px var(--dsw-font-family) | 500 11px/14px var(--dsw-font-family) |  |
| `--dsw-font-xxxs-strong-11-font-family` | var(--dsw-font-family) | var(--dsw-font-family) |  |
| `--dsw-font-xxxs-strong-11-font-size` | 11px | 11px |  |
| `--dsw-font-xxxs-strong-11-font-style` | normal | normal |  |
| `--dsw-font-xxxs-strong-11-font-weight` | 500 | 500 |  |
| `--dsw-font-xxxs-strong-11-line-height` | 14px | 14px |  |

## dsw-alias（107 个）

| Token | 深色 | 浅色 | 本主题 |
|---|---|---|---|
| `--dsw-alias-bg-base` | var(--dsw-static-neutral-bluish-950) | var(--dsw-static-neutral-bluish-00) | `#eeece4` |
| `--dsw-alias-bg-document-preview` | var(--dsw-static-neutral-bluish-950) | var(--dsw-static-neutral-bluish-100) |  |
| `--dsw-alias-bg-document-selection` | color-mix(in srgb, var(--dsw-static-blue-500) 40%, transparent) | color-mix(in srgb, var(--dsw-static-blue-500) 40%, transparent) |  |
| `--dsw-alias-bg-layer-1` | var(--dsw-static-neutral-bluish-875) | var(--dsw-static-neutral-bluish-00) | `#f7f5ee` |
| `--dsw-alias-bg-layer-2` | var(--dsw-static-neutral-bluish-850) | var(--dsw-static-neutral-bluish-00) | `#ffffff` |
| `--dsw-alias-bg-layer-3` | var(--dsw-static-neutral-bluish-800) | var(--dsw-static-neutral-bluish-00) |  |
| `--dsw-alias-bg-mask-1` | #00000080 | #0000003d |  |
| `--dsw-alias-bg-mask-2` | #0003 | #0000001f |  |
| `--dsw-alias-bg-mask-3` | #0000007a | #0000007a |  |
| `--dsw-alias-bg-mask-drop` | #272730b3 | #ffffffb3 |  |
| `--dsw-alias-bg-mask-photo` | #000000e0 | #000000e0 |  |
| `--dsw-alias-bg-module-platform` | var(--dsw-static-neutral-bluish-800) | var(--dsw-static-neutral-bluish-60) |  |
| `--dsw-alias-bg-multi-select` | var(--dsw-static-neutral-850) | var(--dsw-static-neutral-bluish-60) |  |
| `--dsw-alias-bg-overlay` | var(--dsw-static-neutral-bluish-700) | var(--dsw-static-neutral-bluish-150) | `#ffffff` |
| `--dsw-alias-bg-skeleton` | #ffffff14 | #0000000a |  |
| `--dsw-alias-border-inverted` | #ffffff0f | #0000 |  |
| `--dsw-alias-border-inverted2` | #ffffff14 | #0000 |  |
| `--dsw-alias-border-l1` | #ffffff0f | #0000000a | `#cfc9b9` |
| `--dsw-alias-border-l2` | #ffffff1f | #0000001a | `#a9a290` |
| `--dsw-alias-border-l2-darkmode-thin` | #ffffff0f | #0000001a |  |
| `--dsw-alias-border-l3` | #ffffff29 | #0000001f |  |
| `--dsw-alias-border-l4` | #fff3 | #00000029 |  |
| `--dsw-alias-brand-primary` | var(--dsw-static-neutral-bluish-50) | var(--dsw-static-neutral-bluish-1000) | `#c8b400` |
| `--dsw-alias-brand-primary-invert` | var(--dsw-static-neutral-bluish-50) | var(--dsw-static-neutral-bluish-1000) |  |
| `--dsw-alias-brand-primary-new-colorprimary-new-color` | var(--dsw-static-deepseek-450) | #4176e6 |  |
| `--dsw-alias-brand-text` | var(--dsw-static-neutral-bluish-50) | var(--dsw-static-neutral-bluish-1000) |  |
| `--dsw-alias-button-contrast-fill` | var(--dsw-static-neutral-bluish-50) | var(--dsw-static-neutral-bluish-700) |  |
| `--dsw-alias-button-elevated-fill` | var(--dsw-static-neutral-bluish-750) | var(--dsw-static-neutral-bluish-00) |  |
| `--dsw-alias-button-floating-fill` | var(--dsw-static-neutral-bluish-850) | var(--dsw-static-neutral-bluish-00) |  |
| `--dsw-alias-button-floating-hover` | var(--dsw-static-neutral-bluish-800) | var(--dsw-static-neutral-bluish-75) |  |
| `--dsw-alias-button-ghost-active-border` | var(--dsw-static-neutral-bluish-600) | var(--dsw-static-neutral-bluish-500) |  |
| `--dsw-alias-button-ghost-active-fill` | var(--dsw-static-neutral-bluish-750) | var(--dsw-static-neutral-bluish-100) |  |
| `--dsw-alias-button-ghost-active-hover` | var(--dsw-static-neutral-bluish-700) | var(--dsw-static-neutral-bluish-150) |  |
| `--dsw-alias-button-info-fill` | var(--dsw-static-deepseek-400) | var(--dsw-static-deepseek-500) |  |
| `--dsw-alias-button-info-hover` | var(--dsw-static-deepseek-500) | var(--dsw-static-deepseek-400) |  |
| `--dsw-alias-button-primary-dimmed` | var(--dsw-static-neutral-bluish-750) | var(--dsw-static-neutral-bluish-100) |  |
| `--dsw-alias-button-primary-fill` | var(--dsw-alias-brand-primary) | var(--dsw-alias-brand-primary) |  |
| `--dsw-alias-button-primary-hover` | var(--dsw-static-neutral-bluish-100) | var(--dsw-static-neutral-bluish-750) |  |
| `--dsw-alias-button-tool-bar-fill` | #54555780 | #54555780 |  |
| `--dsw-alias-button-tool-bar-fill-invisible` | #1f1f1f5c | #1f1f1f5c |  |
| `--dsw-alias-button-tool-bar-hover` | #54555799 | #54555799 |  |
| `--dsw-alias-code-diff-added` | var(--dsw-static-green-500-a12) | var(--dsw-static-green-500-a08) |  |
| `--dsw-alias-code-diff-deleted` | var(--dsw-static-red-400-a12) | var(--dsw-static-red-600-a08) |  |
| `--dsw-alias-file-diff-added-bg` | #1f3124 | #e6f4e7 |  |
| `--dsw-alias-file-diff-added-gutter` | #132016 | #edf7ed |  |
| `--dsw-alias-file-diff-added-marker` | #41c977 | #01a241 |  |
| `--dsw-alias-file-diff-deleted-bg` | #3c1f1b | #fce6e2 |  |
| `--dsw-alias-file-diff-deleted-gutter` | #28130e | #fdece9 |  |
| `--dsw-alias-file-diff-deleted-marker` | #fa423e | #ba2723 |  |
| `--dsw-alias-interactive-bg-active` | #ffffff24 | #2631481a |  |
| `--dsw-alias-interactive-bg-hover` | #ffffff14 | #2631480f |  |
| `--dsw-alias-interactive-bg-hover-accent` | #ffffff3d | #26314824 |  |
| `--dsw-alias-interactive-bg-hover-danger` | #f25a5a26 | #ec13130d |  |
| `--dsw-alias-interactive-bg-hover-solid` | var(--dsw-static-neutral-bluish-800) | var(--dsw-static-neutral-bluish-75) |  |
| `--dsw-alias-label-caption` | var(--dsw-static-neutral-bluish-600) | var(--dsw-static-neutral-bluish-400) |  |
| `--dsw-alias-label-deep-diving` | color-mix(in srgb, var(--dsw-static-deepseek-450) 55%, var(--dsw-static-neutral-bluish-400)) | color-mix(in srgb, var(--dsw-static-deepseek-500) 70%, var(--dsw-static-blue-950)) |  |
| `--dsw-alias-label-deep-diving-shimmer` | color-mix(in srgb, var(--dsw-static-blue-300) 65%, var(--dsw-static-deepseek-400)) | color-mix(in srgb, var(--dsw-static-deepseek-500) 30%, var(--dsw-static-blue-950)) |  |
| `--dsw-alias-label-dimmed` | var(--dsw-static-neutral-bluish-750) | var(--dsw-static-neutral-bluish-200) |  |
| `--dsw-alias-label-document-preview` | var(--dsw-static-neutral-bluish-300) | var(--dsw-static-neutral-bluish-700) |  |
| `--dsw-alias-label-primary` | var(--dsw-static-neutral-bluish-50) | var(--dsw-static-neutral-bluish-1000) | `#101010` |
| `--dsw-alias-label-primary-bluish` | var(--dsw-static-neutral-bluish-50) | var(--dsw-static-blue-900) |  |
| `--dsw-alias-label-primary-dimmed` | var(--dsw-static-neutral-bluish-100) | var(--dsw-static-neutral-bluish-950) |  |
| `--dsw-alias-label-primary-foreground` | var(--dsw-static-neutral-bluish-1000) | var(--dsw-static-neutral-bluish-00) |  |
| `--dsw-alias-label-primary-inverted` | var(--dsw-static-neutral-bluish-800) | var(--dsw-static-neutral-bluish-00) |  |
| `--dsw-alias-label-secondary` | var(--dsw-static-neutral-bluish-300) | var(--dsw-static-neutral-bluish-700) | `#55524a` |
| `--dsw-alias-label-shimmer` | color-mix(in srgb, var(--dsw-static-neutral-00) 45%, transparent) | color-mix(in srgb, var(--dsw-static-neutral-1000) 30%, transparent) |  |
| `--dsw-alias-label-tertiary` | var(--dsw-static-neutral-bluish-400) | var(--dsw-static-neutral-bluish-600) | `#7d7d7d` |
| `--dsw-alias-link` | var(--dsw-static-deepseek-400) | var(--dsw-static-deepseek-500) | `#04b8fc` |
| `--dsw-alias-markdown-citation` | var(--dsw-static-neutral-bluish-800) | var(--dsw-static-neutral-bluish-100) |  |
| `--dsw-alias-markdown-code-block` | var(--dsw-static-neutral-bluish-900) | var(--dsw-static-neutral-bluish-50) | `#e9e4d8` |
| `--dsw-alias-markdown-code-block-banner` | var(--dsw-static-neutral-bluish-850) | var(--dsw-static-neutral-bluish-50) |  |
| `--dsw-alias-markdown-code-segment-selected` | var(--dsw-static-neutral-bluish-800) | var(--dsw-static-neutral-bluish-00) |  |
| `--dsw-alias-markdown-code-segment-unselected` | var(--dsw-static-neutral-bluish-900) | var(--dsw-static-neutral-bluish-75) |  |
| `--dsw-alias-markdown-inline-code` | var(--dsw-static-neutral-800) | var(--dsw-static-neutral-50) | `#ded8c9` |
| `--dsw-alias-markdown-placeholder` | var(--dsw-static-neutral-bluish-850) | var(--dsw-static-neutral-bluish-60) |  |
| `--dsw-alias-markdown-tag` | var(--dsw-static-neutral-bluish-850) | var(--dsw-static-neutral-bluish-75) |  |
| `--dsw-alias-menu-group-header-fill` | #303136f0 | #f8f9faf0 |  |
| `--dsw-alias-menu-icon` | var(--dsw-alias-label-primary-dimmed) | var(--dsw-static-neutral-bluish-800) |  |
| `--dsw-alias-onboarding-accent` | #3964fe | #3964fe |  |
| `--dsw-alias-onboarding-card-fill` | color-mix(in srgb, var(--dsw-static-neutral-bluish-850) 80%, transparent) | color-mix(in srgb, var(--dsw-static-neutral-bluish-00) 80%, transparent) |  |
| `--dsw-alias-onboarding-checkbox-border` | var(--dsw-alias-border-l2) | color-mix(in srgb, var(--dsw-static-neutral-bluish-1000) 20%, transparent) |  |
| `--dsw-alias-onboarding-secondary-fill` | #48494c | var(--dsw-static-neutral-bluish-00) |  |
| `--dsw-alias-scrollbar-bg-l1` | var(--dsw-static-neutral-700) | var(--dsw-static-neutral-200) |  |
| `--dsw-alias-scrollbar-bg-l2` | var(--dsw-static-neutral-600) | var(--dsw-static-neutral-200) | `#cfc9b9` |
| `--dsw-alias-scrollbar-hover-l1` | var(--dsw-static-neutral-600) | var(--dsw-static-neutral-300) |  |
| `--dsw-alias-scrollbar-hover-l2` | var(--dsw-static-neutral-550) | var(--dsw-static-neutral-300) | `#a9a290` |
| `--dsw-alias-settings-card-fill` | var(--dsw-alias-bg-layer-2) | var(--dsw-alias-bg-layer-2) |  |
| `--dsw-alias-settings-card-stroke` | var(--dsw-alias-border-l4) | var(--dsw-alias-border-l4) |  |
| `--dsw-alias-state-business-primary` | var(--dsw-static-deepseek-400) | var(--dsw-static-deepseek-500) |  |
| `--dsw-alias-state-business-tertiary` | var(--dsw-static-deepseek-800) | var(--dsw-static-deepseek-100) |  |
| `--dsw-alias-state-error-primary` | var(--dsw-static-red-400) | var(--dsw-static-red-600) | `#d02a18` |
| `--dsw-alias-state-error-secondary` | var(--dsw-static-red-400) | var(--dsw-static-red-400) |  |
| `--dsw-alias-state-idle-primary` | var(--dsw-static-neutral-600) | var(--dsw-static-neutral-300) | `#8a857a` |
| `--dsw-alias-state-success-primary` | var(--dsw-static-green-500) | var(--dsw-static-green-500) | `#5f8f00` |
| `--dsw-alias-state-success-secondary` | var(--dsw-static-green-400) | var(--dsw-static-green-400) |  |
| `--dsw-alias-state-success-tertiary` | var(--dsw-static-green-900) | var(--dsw-static-green-100) |  |
| `--dsw-alias-state-warn-label` | var(--dsw-static-amber-600) | var(--dsw-static-amber-600) |  |
| `--dsw-alias-state-warn-primary` | var(--dsw-static-amber-500) | var(--dsw-static-amber-500) | `#c26f00` |
| `--dsw-alias-state-warn-secondary` | var(--dsw-static-amber-400) | var(--dsw-static-amber-400) |  |
| `--dsw-alias-state-warn-tertiary` | var(--dsw-static-amber-900) | var(--dsw-static-amber-100) |  |
| `--dsw-alias-switch-thumb` | var(--dsw-static-neutral-bluish-400) | var(--dsw-static-neutral-bluish-00) |  |
| `--dsw-alias-toast-bg` | var(--dsw-static-neutral-bluish-750) | var(--dsw-static-neutral-bluish-800) |  |
| `--dsw-alias-toast-label` | var(--dsw-static-neutral-bluish-00) | var(--dsw-static-neutral-bluish-00) |  |
| `--dsw-alias-tooltip-bg` | var(--dsw-static-neutral-bluish-750) | var(--dsw-static-neutral-bluish-850) |  |
| `--dsw-alias-tooltip-key-bg` | color-mix(in srgb, var(--dsw-alias-tooltip-bg), white 18%) | color-mix(in srgb, var(--dsw-alias-tooltip-bg), white 18%) |  |
| `--dsw-alias-turn-trigger-bg` | var(--dsw-alias-interactive-bg-hover) | var(--dsw-alias-markdown-code-block) |  |
| `--dsw-alias-turn-trigger-bg-hover` | var(--dsw-alias-interactive-bg-active) | var(--dsw-alias-interactive-bg-hover) |  |

## dsw-static（77 个）

| Token | 深色 | 浅色 | 本主题 |
|---|---|---|---|
| `--dsw-static-amber-100` | #fef5e7 | #fef5e7 |  |
| `--dsw-static-amber-400` | #f7ad31 | #f7ad31 |  |
| `--dsw-static-amber-500` | #f59e0b | #f59e0b |  |
| `--dsw-static-amber-600` | #dd8629 | #dd8629 |  |
| `--dsw-static-amber-900` | #27241f | #27241f |  |
| `--dsw-static-blue-100` | #dbeafe | #dbeafe |  |
| `--dsw-static-blue-300` | #93c5fd | #93c5fd |  |
| `--dsw-static-blue-400` | #60a5fa | #60a5fa |  |
| `--dsw-static-blue-450` | #4d93f8 | #4d93f8 |  |
| `--dsw-static-blue-50` | #eff6ff | #eff6ff |  |
| `--dsw-static-blue-500` | #3b82f6 | #3b82f6 |  |
| `--dsw-static-blue-50p` | #eaf3ff | #eaf3ff |  |
| `--dsw-static-blue-600` | #2563eb | #2563eb |  |
| `--dsw-static-blue-75` | #e5f0ff | #e5f0ff |  |
| `--dsw-static-blue-800` | #1e40af | #1e40af |  |
| `--dsw-static-blue-900` | #0e3074 | #0e3074 |  |
| `--dsw-static-blue-950` | #172554 | #172554 |  |
| `--dsw-static-deepseek-100` | #e4edfd | #e4edfd |  |
| `--dsw-static-deepseek-200` | #d3e2ff | #d3e2ff |  |
| `--dsw-static-deepseek-300` | #b7c8fe | #b7c8fe |  |
| `--dsw-static-deepseek-400` | #7aaaff | #7aaaff |  |
| `--dsw-static-deepseek-450` | #5686fe | #5686fe |  |
| `--dsw-static-deepseek-50` | #edf3fe | #edf3fe |  |
| `--dsw-static-deepseek-500` | #4176e6 | #4176e6 |  |
| `--dsw-static-deepseek-600` | #4868b2 | #4868b2 |  |
| `--dsw-static-deepseek-700-delete` | #2f4c8f | #2f4c8f |  |
| `--dsw-static-deepseek-800` | #34415b | #34415b |  |
| `--dsw-static-deepseek-900` | #283142 | #283142 |  |
| `--dsw-static-green-100` | #e6faed | #e6faed |  |
| `--dsw-static-green-400` | #4ed17e | #4ed17e |  |
| `--dsw-static-green-500` | #22c55e | #22c55e |  |
| `--dsw-static-green-500-a08` | #22c55e14 | #22c55e14 |  |
| `--dsw-static-green-500-a12` | #22c55e1f | #22c55e1f |  |
| `--dsw-static-green-900` | #233c2c | #233c2c |  |
| `--dsw-static-neutral-00` | #fff | #fff |  |
| `--dsw-static-neutral-100` | #f5f5f5 | #f5f5f5 |  |
| `--dsw-static-neutral-1000` | #000 | #000 |  |
| `--dsw-static-neutral-150` | #ededed | #ededed |  |
| `--dsw-static-neutral-200` | #e5e5e5 | #e5e5e5 |  |
| `--dsw-static-neutral-250` | #dcdcdc | #dcdcdc |  |
| `--dsw-static-neutral-300` | #d4d4d4 | #d4d4d4 |  |
| `--dsw-static-neutral-400` | #a2a4a6 | #a2a4a6 |  |
| `--dsw-static-neutral-50` | #fafafa | #fafafa |  |
| `--dsw-static-neutral-500` | #7f8287 | #7f8287 |  |
| `--dsw-static-neutral-550` | #65676b | #65676b |  |
| `--dsw-static-neutral-600` | #545557 | #545557 |  |
| `--dsw-static-neutral-700` | #3c3c3d | #3c3c3d |  |
| `--dsw-static-neutral-800` | #292929 | #292929 |  |
| `--dsw-static-neutral-850` | #212123 | #212123 |  |
| `--dsw-static-neutral-900` | #0f0f0f | #0f0f0f |  |
| `--dsw-static-neutral-bluish-00` | #fff | #fff |  |
| `--dsw-static-neutral-bluish-100` | #ebeef2 | #ebeef2 |  |
| `--dsw-static-neutral-bluish-1000` | #0f1115 | #0f1115 |  |
| `--dsw-static-neutral-bluish-150` | #e9ecf2 | #e9ecf2 |  |
| `--dsw-static-neutral-bluish-200` | #e1e5ee | #e1e5ee |  |
| `--dsw-static-neutral-bluish-300` | #cfd3d6 | #cfd3d6 |  |
| `--dsw-static-neutral-bluish-400` | #adb2b8 | #adb2b8 |  |
| `--dsw-static-neutral-bluish-50` | #f9fafb | #f9fafb |  |
| `--dsw-static-neutral-bluish-500` | #979da6 | #979da6 |  |
| `--dsw-static-neutral-bluish-60` | #f9fafb | #f5f6f7 |  |
| `--dsw-static-neutral-bluish-600` | #81858c | #81858c |  |
| `--dsw-static-neutral-bluish-700` | #61666b | #61666b |  |
| `--dsw-static-neutral-bluish-75` | #f1f3f5 | #f1f3f5 |  |
| `--dsw-static-neutral-bluish-750` | #43454a | #43454a |  |
| `--dsw-static-neutral-bluish-800` | #353638 | #353638 |  |
| `--dsw-static-neutral-bluish-850` | #2c2c2e | #2c2c2e |  |
| `--dsw-static-neutral-bluish-875` | #232324 | #232324 |  |
| `--dsw-static-neutral-bluish-900` | #1b1b1c | #1b1b1c |  |
| `--dsw-static-neutral-bluish-950` | #151517 | #151517 |  |
| `--dsw-static-red-100` | #fee2e2 | #fee2e2 |  |
| `--dsw-static-red-400` | #f25a5a | #f25a5a |  |
| `--dsw-static-red-400-a12` | #f25a5a1f | #f25a5a1f |  |
| `--dsw-static-red-50` | #fef2f2 | #fef2f2 |  |
| `--dsw-static-red-500` | #ef4444 | #ef4444 |  |
| `--dsw-static-red-600` | #ec1313 | #ec1313 |  |
| `--dsw-static-red-600-a08` | #ec131314 | #ec131314 |  |
| `--dsw-static-red-900` | #570c0c | #570c0c |  |

## dsw-specific（11 个）

| Token | 深色 | 浅色 | 本主题 |
|---|---|---|---|
| `--dsw-specific-bubble` | var(--dsw-static-neutral-bluish-850) | var(--dsw-static-deepseek-50) | `#ffffff` |
| `--dsw-specific-bubble-highlight` | var(--dsw-static-neutral-bluish-750) | var(--dsw-static-deepseek-200) |  |
| `--dsw-specific-input-major` | var(--dsw-static-neutral-bluish-850) | var(--dsw-static-neutral-bluish-00) | `#ffffff` |
| `--dsw-specific-login-input` | var(--dsw-static-neutral-bluish-900) | var(--dsw-static-neutral-bluish-50) |  |
| `--dsw-specific-menu` | #f8f9faf0 | var(--dsw-menu-surface-fill) | `#ffffff` |
| `--dsw-specific-selector` | var(--dsw-static-neutral-bluish-800) | var(--dsw-static-neutral-bluish-60) |  |
| `--dsw-specific-sidebar-fill` | var(--dsw-static-neutral-bluish-900) | var(--dsw-static-neutral-bluish-50) | `#e6e2d6` |
| `--dsw-specific-sidebar-nav-item-active` | var(--dsw-static-neutral-bluish-750) | var(--dsw-static-neutral-bluish-100) | `#d3ccba` |
| `--dsw-specific-sidebar-nav-item-active-accent` | var(--dsw-static-neutral-bluish-800) | var(--dsw-static-deepseek-100) | `#c8b400` |
| `--dsw-specific-sidebar-nav-item-hover` | var(--dsw-static-neutral-bluish-850) | var(--dsw-static-neutral-bluish-75) | `#ded8c9` |
| `--dsw-specific-tip` | var(--dsw-static-neutral-bluish-800) | var(--dsw-static-neutral-bluish-60) | `#fffdf6` |

## dsw-radius（6 个）

| Token | 深色 | 浅色 | 本主题 |
|---|---|---|---|
| `--dsw-radius-lg` | 16px | 16px |  |
| `--dsw-radius-md` | 12px | 12px |  |
| `--dsw-radius-panel` | 28px | 28px |  |
| `--dsw-radius-sm` | 8px | 8px |  |
| `--dsw-radius-xl` | 20px | 20px |  |
| `--dsw-radius-xs` | 4px | 4px |  |

## dsw-elevation（5 个）

| Token | 深色 | 浅色 | 本主题 |
|---|---|---|---|
| `--dsw-elevation-panel` | var(--dsw-elevation-stroke), 0 3px 8px 0 #00000008, 0 0 16px 0 #00000005 | var(--dsw-elevation-stroke), 0 3px 8px 0 #00000008, 0 0 16px 0 #00000005 |  |
| `--dsw-elevation-prominent` | var(--dsw-elevation-stroke), 0 3px 8px 0 #0000000a, 0 0 20px 0 #0000000d | var(--dsw-elevation-stroke), 0 3px 8px 0 #0000000a, 0 0 20px 0 #0000000d |  |
| `--dsw-elevation-soft` | var(--dsw-elevation-stroke), 0 4px 16px 0 #00000008, 0 0 24px 0 #00000008 | var(--dsw-elevation-stroke), 0 4px 16px 0 #00000008, 0 0 24px 0 #00000008 |  |
| `--dsw-elevation-stroke` | 0 0 0 .5px var(--dsw-elevation-stroke-color) | 0 0 0 .5px var(--dsw-elevation-stroke-color) |  |
| `--dsw-elevation-stroke-color` | var(--dsw-alias-border-l3) | var(--dsw-alias-border-l4) |  |

## dsw-shadow（4 个）

| Token | 深色 | 浅色 | 本主题 |
|---|---|---|---|
| `--dsw-shadow-lv1` | 0 2px 4px 0 #0000000d | 0 2px 4px 0 #0000000d |  |
| `--dsw-shadow-lv1-blur` | 0 4px 12px 0 #00000005 | 0 4px 12px 0 #00000005 |  |
| `--dsw-shadow-lv2` | 0 4px 12px 0 #00000005, 0 2px 8px 0 #0000000a | 0 4px 12px 0 #00000005, 0 2px 8px 0 #0000000a |  |
| `--dsw-shadow-lv3` | 0 0 1px 0 #0003, 0 0 4px 0 #00000005, 0 12px 32px 0 #00000014 | 0 0 1px 0 #0003, 0 0 4px 0 #00000005, 0 12px 32px 0 #00000014 |  |

## dsw-gradient（3 个）

| Token | 深色 | 浅色 | 本主题 |
|---|---|---|---|
| `--dsw-gradient-onboarding-blue-stops` | #3964fe 18.75%, #398efe 51.78%, #6dccff 86.252%, #3964fe | #3964fe 18.75%, #398efe 51.78%, #6dccff 86.252%, #3964fe |  |
| `--dsw-gradient-onboarding-cyan-stops` | #0293b4 21.154%, #2dc8eb 50.954%, #aff0ff 85.326%, #0293b4 | #0293b4 21.154%, #2dc8eb 50.954%, #aff0ff 85.326%, #0293b4 |  |
| `--dsw-gradient-onboarding-violet-stops` | #2a2fb6 33.102%, #8b76f6 50.954%, #c5c0ff 85.326%, #2a2fb6 | #2a2fb6 33.102%, #8b76f6 50.954%, #c5c0ff 85.326%, #2a2fb6 |  |

## dsw-focus（2 个）

| Token | 深色 | 浅色 | 本主题 |
|---|---|---|---|
| `--dsw-focus-ring-color` | transparent | transparent |  |
| `--dsw-focus-ring-width` | 2px | 2px |  |

## dsw-linear（2 个）

| Token | 深色 | 浅色 | 本主题 |
|---|---|---|---|
| `--dsw-linear-gradient-think` | linear-gradient(180deg, #151517 20.19%, #15151700 100%) | linear-gradient(180deg, #fff 20.19%, #fff0 100%) |  |
| `--dsw-linear-think-select` | linear-gradient(180deg, #232325 20.19%, #23232500 100%) | linear-gradient(180deg, #f5f6f7 20.19%, #f5f6f700 100%) |  |

## dsw-menu（2 个）

| Token | 深色 | 浅色 | 本主题 |
|---|---|---|---|
| `--dsw-menu-backdrop-filter` | blur(40px) saturate(150%) | blur(40px) saturate(150%) |  |
| `--dsw-menu-surface-fill` | #43454a73 | #f8f9fa94 |  |

## dsw-corner（1 个）

| Token | 深色 | 浅色 | 本主题 |
|---|---|---|---|
| `--dsw-corner-shape` | superellipse(1.5) | superellipse(1.5) |  |

## dsw-mask（1 个）

| Token | 深色 | 浅色 | 本主题 |
|---|---|---|---|
| `--dsw-mask-blur` | none | none |  |

