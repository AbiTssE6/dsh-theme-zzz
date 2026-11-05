window.__ModuleLoader__.load({
  id: 'dsh-theme-zzz',
  factory(require) {
    const React = require('react')
    const h = React.createElement




    const LOGO_DATA_URI =
      'data:image/png;base64,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'

    const STYLE_ID = 'dsh-theme-zzz-style'
    const MARKER = 'data-dsh-theme-zzz'

    /* Gray ladder re-sampled off the reference screenshots:
         page        #131313
         frame band  #444444
         inner panel #282828
       The inner panel reads recessed because the frame band is lighter than
       it, and the card reads raised because the band is lighter than the page. */
    const DARK = {
      '--dsw-alias-bg-base': '#131313',
      '--dsw-alias-bg-layer-1': '#1c1c1c',
      '--dsw-alias-bg-layer-2': '#282828',
      '--dsw-alias-bg-layer-3': '#333333',
      '--dsw-alias-bg-mask-1': '#00000080',
      '--dsw-alias-bg-mask-2': '#00000033',
      '--dsw-alias-bg-mask-3': '#0000007a',
      '--dsw-alias-bg-mask-drop': '#272730b3',
      '--dsw-alias-bg-mask-photo': '#000000e0',
      '--dsw-alias-border-l3': '#4a4a4a',
      '--dsw-alias-border-l4': '#525252',
      '--dsw-alias-bg-overlay': '#202020',
      '--dsw-alias-border-l1': '#3a3a3a',
      '--dsw-alias-border-l2': '#444444',
      '--dsw-alias-brand-primary': '#fcdd00',
      '--dsw-alias-label-primary': '#f7f7f7',
      '--dsw-alias-label-secondary': '#9e9e9e',
      '--dsw-alias-label-tertiary': '#7d7d7d',
      '--dsw-alias-label-quaternary': '#6a6a6a',
      '--dsw-alias-label-inverse': '#101010',
            '--dsw-alias-link': '#05bbff',
      '--dsw-alias-state-error-primary': '#d02000',
      '--dsw-alias-state-idle-primary': '#6e6e6e',
      '--dsw-alias-state-success-primary': '#00cc0c',
      '--dsw-alias-state-warn-primary': '#f4570e',
      '--dsw-specific-sidebar-fill': '#131313',
      '--dsw-specific-input-major': '#282828',
      '--dsw-specific-bubble': '#282828',
      '--dsw-specific-menu': '#282828',
      '--dsw-menu-surface-fill': '#282828',
      '--dsw-alias-tooltip-key-bg': 'transparent',
    /* the last cool-grey in the palette: #adb2b8 tints selected rims, the context
       meter and caption text. Neutralised to keep R=G=B everywhere. */
    '--dsw-static-neutral-bluish-400': '#b0b0b0',
      '--dsw-menu-backdrop-filter': 'var(--zzz-glass-blur)',
    '--dsw-alias-settings-card-fill': 'var(--zzz-glass-fill)',
    '--dsw-alias-settings-card-stroke': 'transparent',
      '--dsw-specific-tip': '#242424',
      '--dsw-alias-markdown-code-block': '#181818',
      '--dsw-alias-markdown-inline-code': '#2c2c2c',
      '--dsw-alias-scrollbar-bg-l2': '#3a3a3a',
      '--dsw-alias-scrollbar-hover-l2': '#585858',
      '--dsw-specific-sidebar-nav-item-hover': '#202020',
      '--dsw-specific-sidebar-nav-item-active': '#2c2c2c',
      '--dsw-specific-sidebar-nav-item-active-accent': '#fcdd00',
      '--dsw-alias-bg-document-preview': 'var(--dsw-static-neutral-bluish-950)',
      '--dsw-alias-bg-module-platform': '#333333',
      '--dsw-alias-bg-multi-select': 'var(--dsw-static-neutral-850)',
      '--dsw-alias-bg-skeleton': '#ffffff14',
      '--dsw-alias-border-inverted': '#ffffff0f',
      '--dsw-alias-border-inverted2': '#ffffff14',
      '--dsw-alias-border-l2-darkmode-thin': '#ffffff0f',
      '--dsw-alias-brand-primary-invert': 'var(--dsw-static-neutral-bluish-50)',
      '--dsw-alias-brand-primary-new-colorprimary-new-color': 'var(--dsw-static-deepseek-450)',
      '--dsw-alias-brand-text': 'var(--dsw-static-neutral-bluish-50)',
      '--dsw-alias-button-contrast-fill': 'var(--dsw-static-neutral-bluish-50)',
      '--dsw-alias-button-elevated-fill': 'var(--dsw-static-neutral-bluish-750)',
      '--dsw-alias-button-floating-fill': 'var(--dsw-static-neutral-bluish-850)',
      '--dsw-alias-button-floating-hover': 'var(--dsw-static-neutral-bluish-800)',
      '--dsw-alias-button-ghost-active-border': 'var(--dsw-static-neutral-bluish-600)',
      '--dsw-alias-button-ghost-active-fill': 'var(--dsw-static-neutral-bluish-750)',
      '--dsw-alias-button-ghost-active-hover': 'var(--dsw-static-neutral-bluish-700)',
      '--dsw-alias-button-info-fill': 'var(--dsw-static-deepseek-400)',
      '--dsw-alias-button-info-hover': 'var(--dsw-static-deepseek-500)',
      '--dsw-alias-button-primary-dimmed': 'var(--dsw-static-neutral-bluish-750)',
      '--dsw-alias-button-primary-hover': 'var(--dsw-static-neutral-bluish-100)',
      '--dsw-alias-code-diff-added': 'var(--dsw-static-green-500-a12)',
      '--dsw-alias-code-diff-deleted': 'var(--dsw-static-red-400-a12)',
      '--dsw-alias-file-diff-added-bg': '#1f3124',
      '--dsw-alias-file-diff-added-gutter': '#132016',
      '--dsw-alias-file-diff-added-marker': '#41c977',
      '--dsw-alias-file-diff-deleted-bg': '#3c1f1b',
      '--dsw-alias-file-diff-deleted-gutter': '#28130e',
      '--dsw-alias-file-diff-deleted-marker': '#fa423e',
      '--dsw-alias-interactive-bg-active': '#ffffff24',
      '--dsw-alias-interactive-bg-hover': '#ffffff14',
      '--dsw-alias-interactive-bg-hover-accent': '#ffffff3d',
      '--dsw-alias-interactive-bg-hover-danger': '#f25a5a26',
      '--dsw-alias-interactive-bg-hover-solid': 'var(--dsw-static-neutral-bluish-800)',
      '--dsw-alias-label-caption': 'var(--dsw-static-neutral-bluish-600)',
      '--dsw-alias-label-deep-diving': '#05bbff',
      '--dsw-alias-label-deep-diving-shimmer': 'color-mix(in srgb, #05bbff 65%, #ffffff)',
      '--dsw-alias-label-dimmed': 'var(--dsw-static-neutral-bluish-750)',
      '--dsw-alias-label-document-preview': 'var(--dsw-static-neutral-bluish-300)',
      '--dsw-alias-label-primary-bluish': 'var(--dsw-static-neutral-bluish-50)',
      '--dsw-alias-label-primary-dimmed': 'var(--dsw-static-neutral-bluish-100)',
      '--dsw-alias-label-primary-foreground': 'var(--dsw-static-neutral-bluish-1000)',
      /* text sitting on a yellow plate is always black */
    '--dsw-alias-label-primary-inverted': '#101010',
      '--dsw-alias-label-shimmer': 'color-mix(in srgb, var(--dsw-static-neutral-00) 45%, transparent)',
      '--dsw-alias-markdown-citation': 'var(--dsw-static-neutral-bluish-800)',
      '--dsw-alias-markdown-code-block-banner': 'var(--dsw-static-neutral-bluish-850)',
      '--dsw-alias-markdown-code-segment-selected': 'var(--dsw-static-neutral-bluish-800)',
      '--dsw-alias-markdown-code-segment-unselected': 'var(--dsw-static-neutral-bluish-900)',
      '--dsw-alias-markdown-placeholder': 'var(--dsw-static-neutral-bluish-850)',
      '--dsw-alias-markdown-tag': 'var(--dsw-static-neutral-bluish-850)',
      '--dsw-alias-menu-group-header-fill': '#303136f0',
      '--dsw-alias-menu-icon': 'var(--dsw-alias-label-primary-dimmed)',
      '--dsw-alias-onboarding-card-fill': 'color-mix(in srgb, var(--dsw-static-neutral-bluish-850) 80%, transparent)',
      '--dsw-alias-onboarding-checkbox-border': 'var(--dsw-alias-border-l2)',
      '--dsw-alias-onboarding-secondary-fill': '#48494c',
      '--dsw-alias-scrollbar-bg-l1': 'var(--dsw-static-neutral-700)',
      '--dsw-alias-scrollbar-hover-l1': 'var(--dsw-static-neutral-600)',
      '--dsw-alias-state-business-primary': '#05bbff',
      '--dsw-alias-state-business-tertiary': 'var(--dsw-static-deepseek-800)',
      '--dsw-alias-state-success-tertiary': 'var(--dsw-static-green-900)',
      '--dsw-alias-state-warn-tertiary': 'var(--dsw-static-amber-900)',
      '--dsw-alias-switch-thumb': 'var(--dsw-static-neutral-bluish-400)',
      '--dsw-alias-toast-bg': 'var(--zzz-glass-fill)',
    '--dsw-shadow-lv3': 'none',
    /* file-card progress: the track is the slider groove, its fill takes the
       gradient in the stylesheet */
    '--dsw-alias-fill-tertiary': 'var(--zzz-slider-track)',
      '--dsw-alias-tooltip-bg': 'var(--dsw-static-neutral-bluish-750)',
      '--dsw-alias-turn-trigger-bg': 'var(--dsw-alias-interactive-bg-hover)',
      '--dsw-alias-turn-trigger-bg-hover': 'var(--dsw-alias-interactive-bg-active)',
      '--dsw-elevation-stroke-color': 'var(--dsw-alias-border-l3)',
      '--dsw-font-family': 'var(--dsh-font-family-text,var(--dsh-font-family-text-default)), var(--dsh-font-family-text-default)',
      '--dsw-linear-gradient-think': 'linear-gradient(180deg, #151517 20.19%, #15151700 100%)',
      '--dsw-linear-think-select': 'linear-gradient(180deg, #232325 20.19%, #23232500 100%)',
      '--dsw-specific-bubble-highlight': 'var(--dsw-static-neutral-bluish-750)',
      '--dsw-specific-login-input': 'var(--dsw-static-neutral-bluish-900)',
      '--dsw-specific-selector': 'var(--dsw-static-neutral-bluish-800)',
      '--dsw-static-neutral-bluish-60': '#f9fafb',
    }
    const LIGHT = {
      '--dsw-alias-bg-base': '#eeece4',
      '--dsw-alias-bg-layer-1': '#f7f5ee',
      '--dsw-alias-bg-layer-2': '#ffffff',
      '--dsw-alias-bg-overlay': '#ffffff',
      '--dsw-alias-border-l1': '#cfc9b9',
      '--dsw-alias-border-l2': '#a9a290',
      '--dsw-alias-brand-primary': '#c8b400',
      '--dsw-alias-label-primary': '#101010',
      '--dsw-alias-label-secondary': '#55524a',
      '--dsw-alias-state-error-primary': '#d02a18',
      '--dsw-alias-state-idle-primary': '#8a857a',
      '--dsw-alias-state-success-primary': '#5f8f00',
      '--dsw-alias-state-warn-primary': '#c26f00',
      '--dsw-specific-sidebar-fill': '#e6e2d6',
      '--dsw-specific-input-major': '#ffffff',
      '--dsw-specific-bubble': '#ffffff',
      '--dsw-specific-menu': '#282828',
      '--dsw-specific-tip': '#fffdf6',
      '--dsw-alias-markdown-code-block': '#e9e4d8',
      '--dsw-alias-markdown-inline-code': '#ded8c9',
      '--dsw-alias-scrollbar-bg-l2': '#cfc9b9',
      '--dsw-alias-scrollbar-hover-l2': '#a9a290',
      '--dsw-specific-sidebar-nav-item-hover': '#ded8c9',
      '--dsw-specific-sidebar-nav-item-active': '#d3ccba',
      '--dsw-specific-sidebar-nav-item-active-accent': '#c8b400',
    }

    /** Alias tokens the theme registry documents; anything beyond these is CSS-only. */
    const OFFICIAL = [
      '--dsw-alias-bg-base',
      '--dsw-alias-bg-layer-1',
      '--dsw-alias-bg-layer-2',
      '--dsw-alias-bg-overlay',
      '--dsw-alias-border-l1',
      '--dsw-alias-border-l2',
      '--dsw-alias-brand-primary',
      '--dsw-alias-label-primary',
      '--dsw-alias-label-secondary',
      '--dsw-alias-state-error-primary',
      '--dsw-alias-state-idle-primary',
      '--dsw-alias-state-success-primary',
      '--dsw-alias-state-warn-primary',
      '--dsw-specific-sidebar-fill',
    ]

    // Official override layers take {light, dark} pairs. ZZZ has no light variant,
// so every token carries the SAME value in both modes - that is what makes the
// two schemes render identically, without forcing a preference.
function dualTokens(palette) {
  const tokens = {}
  for (const name of Object.keys(palette)) {
    const value = palette[name]
    if (value !== undefined) tokens[name] = { light: value, dark: value }
  }
  return tokens
}

function registerTokens(palette) {
      const tokens = {}
      for (const name of OFFICIAL) {
        if (palette[name] !== undefined) tokens[name] = palette[name]
      }
      return tokens
    }

    function tokenBlock(palette) {
      return Object.keys(palette)
        .map((key) => `${key}:${palette[key]} !important;`)
        .join('')
    }

    const CSS = `
/* ============================================================
   ZZZ theme stylesheet - table of contents
   (search by these headings; each block states why + how to revert)

   0.  palette + fonts (system) + page plane
   1.  cards (A class): frame / halftone / sheen / chamfer
   2.  buttons (B class): design-system skin, discs, icon buttons
   3.  rows & nav (C class): yellow breathing plate, hover wash
   4.  tabs (D class): rounded rectangle + breathing selection
   5.  dialogs & settings: three-level glass system
   6.  frosted glass surfaces: tokens --zzz-glass-*
   7.  sliders, switches, progress
   8.  menus / tooltips / popovers
   9.  plugin-market specifics (nUhMVa)
   10. misc: watermark, brand, scrollbar

   Module-hash prefixes referenced (these are the upgrade-sensitive spots):
     1rv3m  host design-system button           OMoRSG open-in-app split
     VoX2oq agent-team popover                  ZKlsPq subagent popover
     nUhMVa plugin market                       uV2eYG composer card
     ypSjoa memory button (exempted only)
   ============================================================

   ID-LEVEL OVERRIDES (:not(#zzz-guard), 9 declarations in 4 groups)
   These exist because the host ships the same declaration with !important at equal or
   higher specificity; raising ours to id level is the only way to win without
   !important-on-!important guessing. Keep them here, keep them commented.

     [data-sidebar-right-guide-entry]:hover            host lightens the frame
     [data-sidebar-right-guide-entry] > button         inner click overlay
     [class*="_tabHost_"] button:empty                 transparent overlay button
     [class*="_panelRow"]            (rule + :hover)    host paints #1A1A1A
     [style*="--dsh-segment-count"]  (rule + 2 tabs)    host geometry for the slider

   ============================================================ */


/* ============================================================
   ZZZ theme tokens + paper + components
   ============================================================ */


html[${MARKER}],
html[${MARKER}] body{
  background-color:#131313 !important;
  color:#f7f7f7 !important;
  /* forced dark palette: the light scheme must resolve to exactly these */
  ${tokenBlock(DARK)}
  --zzz-weave-size:6px 6px,6px 6px,6px 6px,6px 6px;
  --zzz-weave-position:0 0,3px 3px,3px 0,0 3px;
  --zzz-weave:
    radial-gradient(circle at 50% 50%,rgba(255,255,255,.030) 0 1.2px,rgba(255,255,255,0) 1.36px),
    radial-gradient(circle at 50% 50%,rgba(255,255,255,.030) 0 1.2px,rgba(255,255,255,0) 1.36px),
    radial-gradient(circle at 50% 50%,rgba(0,0,0,.150) 0 1.2px,rgba(0,0,0,0) 1.36px),
    radial-gradient(circle at 50% 50%,rgba(0,0,0,.150) 0 1.2px,rgba(0,0,0,0) 1.36px);
  --zzz-weave-gap-a:radial-gradient(circle at 50% 50%,rgba(255,255,255,.016) 0 1.2px,rgba(255,255,255,0) 1.36px);
  --zzz-weave-gap-b:radial-gradient(circle at 50% 50%,rgba(0,0,0,.150) 0 1.2px,rgba(0,0,0,0) 1.36px);
  --zzz-sheen:linear-gradient(135deg,rgba(255,255,255,.009) 0%,rgba(255,255,255,0) 26%,rgba(255,255,255,.014) 44%,rgba(255,255,255,.040) 60%,rgba(255,255,255,.010) 70%,rgba(255,255,255,0) 76%,rgba(0,0,0,.062) 88%,rgba(0,0,0,.112) 100%);
  --zzz-watermark:url("data:image/png;base64,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");
  --zzz-orange:#f4570e;
  --zzz-frame-w:9.75px;
  --zzz-frame-color:#444444;
  --zzz-bevel-hi:-1px -1px 0 rgba(255,255,255,.40);
  --zzz-ring-a:#fcdd00;
  --zzz-ring-b:#97bd00;
  --zzz-ring-t:1.5s;
  --zzz-ring-static:#c8cc00;
  --zzz-hl:rgba(255,255,255,.055);
  /* frosted glass: one recipe for every translucent surface */
  --zzz-glass-fill:rgba(16,16,16,.34);
  --zzz-glass-fill-strong:rgba(16,16,16,.45);
  --zzz-glass-blur:blur(14px) saturate(180%);
  --zzz-ctl-radius:8px;
  --zzz-glass-radius-sm:12px;
  --zzz-glass-radius:16px;
  --zzz-glass-radius-lg:20px;
  /* fonts: Source Han Sans (Noto Sans SC) by default; the settings page can swap
     the families for locally installed ones (e.g. 印品鸿蒙体) through these vars. */
  /* the stylesheet default already prefers 印品 when it is installed (the same alias
     list the settings effect writes), otherwise it falls through to Source Han Sans */
  --zzz-font-display:'印品鸿蒙体','inpin hongmengti','印品鸿蒙体（非商用）','Noto Sans SC','Source Han Sans SC','思源黑体',system-ui,-apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;
  --zzz-font-text:'印品鸿蒙体 D40','印品鸿蒙体 D40-v1.04','yinpinhongmengti D40-v1.04','SDK_SC_Web','Noto Sans SC','Source Han Sans SC','思源黑体',system-ui,-apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;
  --zzz-bevel-lo:1px 1px 0 rgba(0,0,0,.55);
  --zzz-green:#00cc0c;
  --zzz-red:#c81800;
  --zzz-blue:#05bbff;
  --zzz-yellow:#fcdd00;
  --zzz-slider-from:#4a3dff;
  --zzz-slider-to:#05bbff;
  --zzz-slider-track:#222222;
  --zzz-slider-via:#3468ff;
  --zzz-slider:linear-gradient(90deg,var(--zzz-slider-from) 0%,var(--zzz-slider-via) 34%,var(--zzz-blue) 62%,var(--zzz-slider-to) 100%);
  --zzz-slider-groove:linear-gradient(180deg,#262626 0%,#1a1a1a 100%);
  --zzz-slider-sheen:linear-gradient(180deg,rgba(255,255,255,.30) 0%,rgba(255,255,255,0) 42%,rgba(0,0,0,.16) 72%,var(--zzz-slider-glow) 100%);
  --zzz-slider-keyline:#000;
  --zzz-slider-thumb:#f7f7f7;
  --zzz-slider-glow:rgba(5,187,255,.55);
}

/* ---- fonts: display for chrome, body for reading ----
   The display face only has one weight (700), so anything that inherits it
   LOOKS bold no matter what font-weight says. Assign it to headings and chrome
   labels only; every content surface defaults to the body face. */
html[${MARKER}],
html[${MARKER}] body,
html[${MARKER}] button,
html[${MARKER}] select,
html[${MARKER}] [class*="_sidebarCol"],
html[${MARKER}] [class*="_tabHost_"],
html[${MARKER}] [role="tab"]{
  font-family:var(--zzz-font-display) !important;
}
/* dialogs, menus and tooltips carry paragraphs, lists and form rows. They read
   in D40 (the secondary face), never the body face: Noto is reserved for actual
   conversation content so the UI chrome keeps one voice. */
html[${MARKER}] [role="dialog"],
html[${MARKER}] [role="dialog"] *,
html[${MARKER}] [role="menu"],
html[${MARKER}] [role="menu"] *,
html[${MARKER}] [role="tooltip"],
html[${MARKER}] [role="tooltip"] *{
  font-family:var(--zzz-font-text) !important;
  font-weight:500 !important;
}
html[${MARKER}] [role="dialog"] h1,
html[${MARKER}] [role="dialog"] h2,
html[${MARKER}] [role="dialog"] h3,
html[${MARKER}] [role="dialog"] h4,
html[${MARKER}] [role="dialog"] [class*="_title"],
html[${MARKER}] [role="dialog"] [class*="_heading"],
html[${MARKER}] [role="dialog"] [class*="_sectionTitle"],
html[${MARKER}] [role="dialog"] nav button,
html[${MARKER}] [role="dialog"] [role="tab"],
html[${MARKER}] [role="menu"] [role="menuitem"]{
  font-family:var(--zzz-font-display) !important;
  font-weight:800 !important;
  /* 印品's face is already bold and is labelled Regular; without this the browser
     synthesises a second bold on top of it. Fallback families keep their real weights. */
  font-synthesis-weight:none;
}
/* blank-session hero headline ("探索未至之境"): the host draws it with a 26px
   medium body face; give the title span the real bold display face. The preview
   badge next to it keeps its own styling. */
html[${MARKER}] [class*="_headline"]:has([class*="_previewBadge"]){
  font-family:var(--zzz-font-display);
  font-weight:800;
  font-synthesis-weight:none;
}
html[${MARKER}] [class*="_headline"]:has([class*="_previewBadge"]) [class*="_titleGroup"] > span:first-child{
  font-family:var(--zzz-font-display) !important;
  font-weight:800 !important;
  /* 印品's face is already bold and is labelled Regular; without this the browser
     synthesises a second bold on top of it. Fallback families keep their real weights. */
  font-synthesis-weight:none;
}
/* reading text is the body face: the assistant message body is bare text
   (_root > _body), so it has to be named explicitly, otherwise it inherits the
   display face from body and the whole conversation turns into a headline */
html[${MARKER}] textarea,
html[${MARKER}] input,
html[${MARKER}] pre,
html[${MARKER}] code,
html[${MARKER}] [class*="_markdown"],
html[${MARKER}] [class*="_markdown"] *,
html[${MARKER}] [class*="_body"],
html[${MARKER}] [class*="_body"] *,
html[${MARKER}] [class*="_bubble"],
html[${MARKER}] [class*="_bubble"] *,
html[${MARKER}] [class*="_message"],
html[${MARKER}] [class*="_message"] *,
html[${MARKER}] [class*="_paragraph"],
html[${MARKER}] [class*="_paragraph"] *,
html[${MARKER}] p,
html[${MARKER}] li{
  font-family:var(--zzz-font-text) !important;
  font-weight:400 !important;
}

/* brand row: the host paints a dark band above/below the logo */
html[${MARKER}] [class*="_logoRow"],
html[${MARKER}] [class*="_logoRow"] *,
html[${MARKER}] button[class*="_brand"],
html[${MARKER}] button[class*="_brand"] *,
html[${MARKER}] [class*="_brandIdentity"],
html[${MARKER}] [class*="_brandIdentity"] *{
  background:transparent !important;
  background-image:none !important;
  border:0 !important;
  box-shadow:none !important;
}
html[${MARKER}] img.zzz-brand{
  filter:none !important;
}

/* settings sidebar cells: same yellow plate as a selected session row */
html[${MARKER}] [class*="_navCell"]{
  background:transparent !important;
  background-image:none !important;
  color:#bdbdbd !important;
  border:0 !important;
  border-radius:8px !important;
  box-shadow:none !important;
}
html[${MARKER}] [class*="_navCell"]:hover{
  background:var(--zzz-hl) !important;
  color:#e8e8e8 !important;
}
/* the selected plate: darkening overlay + hatch + breathing gradient, written once
   and declared on EVERY selected surface. It must be declared on the element itself:
   a custom property that references --zzz-sel-a/b/c is resolved where it is declared,
   so declaring it on html would freeze the gradient and kill the breathing. */
html[${MARKER}] [class*="_sessionRow"][class*="_selected"],
html[${MARKER}] [class*="_sidebarCol"] [data-state="selected"],
html[${MARKER}] [class*="_navCell"][aria-current],
html[${MARKER}] [class*="_navCell"][aria-selected="true"],
html[${MARKER}] [class*="_navCell"][data-state="active"],
html[${MARKER}] [class*="_navCell"][class*="active"],
html[${MARKER}] [class*="_navCell"][class*="current"],
html[${MARKER}] [role="tab"][aria-selected="true"][aria-selected="true"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [role="tab"][data-state="active"][data-state="active"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [class*="_pill"][class*="_active"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [class*="_chip"][class*="_active"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [class*="_pill"][aria-selected="true"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [class*="_chip"][aria-selected="true"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [class*="_pill"][aria-pressed="true"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [class*="_chip"][aria-pressed="true"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [class*="_tabHost_"] [class*="_tabActive_"]{
  --zzz-plate:
    linear-gradient(135deg,rgba(140,113,1,0) 0%,rgba(140,113,1,.10) 40%,rgba(140,113,1,.55) 100%),
    repeating-linear-gradient(100deg,rgba(255,255,255,.055) 0 9px,transparent 9px 19px),
    linear-gradient(135deg,var(--zzz-sel-a) 0%,var(--zzz-sel-b) 46%,var(--zzz-sel-c) 100%);
}
@property --zzz-sel-a{syntax:'<color>';inherits:false;initial-value:#f4ca25}
@property --zzz-sel-b{syntax:'<color>';inherits:false;initial-value:#e8c01a}
@property --zzz-sel-c{syntax:'<color>';inherits:false;initial-value:#8c7101}
@keyframes zzz-plate-breath{
  0%,100%{--zzz-sel-a:#f4ca25;--zzz-sel-b:#e8c01a;--zzz-sel-c:#8c7101}
  50%{--zzz-sel-a:#a9c800;--zzz-sel-b:#8fb400;--zzz-sel-c:#4d6b00}
}
html[${MARKER}] [class*="_navCell"][aria-current],
html[${MARKER}] [class*="_navCell"][aria-selected="true"],
html[${MARKER}] [class*="_navCell"][data-state="active"],
html[${MARKER}] [class*="_navCell"][class*="active"],
html[${MARKER}] [class*="_navCell"][class*="current"]{
  background-color:transparent !important;
  background-image:var(--zzz-plate) !important;
  color:#101010 !important;
  box-shadow:inset 0 0 0 1px rgba(0,0,0,.45) !important;
  animation:zzz-plate-breath var(--zzz-ring-t) ease-in-out infinite;
}
@media (prefers-reduced-motion:reduce){ /* zzz-plate-reduce */
  html[${MARKER}] [class*="_navCell"][aria-current],
  html[${MARKER}] [class*="_navCell"][aria-selected="true"],
  html[${MARKER}] [class*="_navCell"][data-state="active"],
  html[${MARKER}] [class*="_navCell"][class*="active"],
  html[${MARKER}] [class*="_navCell"][class*="current"],
  html[${MARKER}] [class*="_sessionRow"][class*="_selected"],
  html[${MARKER}] [class*="_sidebarCol"] [data-state="selected"]{
    animation:none !important;
  }
}
html[${MARKER}] [class*="_navCell"][aria-current] *,
html[${MARKER}] [class*="_navCell"][aria-selected="true"] *,
html[${MARKER}] [class*="_navCell"][data-state="active"] *,
html[${MARKER}] [class*="_navCell"][class*="active"] *,
html[${MARKER}] [class*="_navCell"][class*="current"] *{
  /* colour only: icons follow currentColor; forcing stroke/fill turns outline icons
     into solid blobs */
  color:#101010 !important;
}

/* the conversation tab row is text tabs, not a segmented pill */
html[${MARKER}] [data-conversation-tabs],
html[${MARKER}] [data-conversation-tabs] * {
  background:transparent !important;
  background-image:none !important;
  box-shadow:none !important;
  border:0 !important;
}

/* ---- A class: cards and wells ----
   The inventory below is the authoritative list of framed elements. When a new
   "all cards" change is requested, audit this list first: the misses always
   came from broad selectors that did not actually name these components. */
html[${MARKER}] [class*="_bubble"],
html[${MARKER}] [role="dialog"],
html[${MARKER}] [data-composer-card="true"],
html[${MARKER}] button[class*="_newSession"],
html[${MARKER}] [class*="_regionArea"],
html[${MARKER}] [data-sidebar-right-guide-entry]{
  background-color:#282828 !important;
  background-image:var(--zzz-sheen),var(--zzz-weave) !important;
  background-size:100% 100%,var(--zzz-weave-size) !important;
  background-position:0 0,var(--zzz-weave-position) !important;
  background-clip:padding-box !important;
  border:var(--zzz-frame-w) solid var(--zzz-frame-color) !important;
  box-sizing:border-box !important;
  box-shadow:
    var(--zzz-bevel-hi),
    var(--zzz-bevel-lo),
    0 0 0 3px #000,
    inset 0 0 0 0.5px rgba(0,0,0,.6),
    inset 0 0 10px rgba(0,0,0,.35) !important;
}
/* dialogs keep the frame but read as frosted glass again: the card rule above fills
   them opaque, which hid the host's own backdrop-filter (it reads
   --dsw-menu-backdrop-filter).  Fill + blur come from the glass tokens. */
html[${MARKER}] [role="dialog"]:not([data-shortcut-modal]),
html[${MARKER}] [role="alertdialog"]{
  background-color:var(--zzz-glass-fill-strong) !important;
  backdrop-filter:var(--zzz-glass-blur) !important;
  -webkit-backdrop-filter:var(--zzz-glass-blur) !important;
}
/* host metrics measured with the theme switched off: content box is kept as is
   and the 9.75px frame grows the card outwards (padding - 8.75, height + 17.5) */
/* right-rail geometry: one rule for every entry - button for tool cards, div
   wrapper for the terminal row. Keyed on the semantic attribute so the module
   hash can change freely. */
html[${MARKER}] [data-sidebar-right-guide-entry]{
  border-radius:var(--zzz-glass-radius) !important;
  padding:6px 12px !important;
}

/* unified card hover: the PANEL lights up and the grey frame stays put.
   border-color is pinned back because the host lightens the frame on hover;
   only background-color moves, so halftone and sheen survive. */
html[${MARKER}] [data-sidebar-right-guide-entry]:hover:not(#zzz-guard){
  border-color:var(--zzz-frame-color) !important;
  box-shadow:
    var(--zzz-bevel-hi),
    var(--zzz-bevel-lo),
    0 0 0 3px #000,
    inset 0 0 0 999px var(--zzz-hl),
    inset 0 0 0 0.5px rgba(0,0,0,.6),
    inset 0 0 10px rgba(0,0,0,.35) !important;
}

/* the inner button just fills it */
html[${MARKER}] [data-sidebar-right-guide-entry] > button:not(#zzz-guard),
html[${MARKER}] [data-sidebar-right-guide-entry] > button:not(#zzz-guard):hover{
  background:transparent !important;
  background-image:none !important;
  border:0 !important;
  border-radius:0 !important;
  box-shadow:none !important;
  padding:0 5.25px !important;
}
html[${MARKER}] [data-sidebar-right-guide-entry] > button *{
  background:transparent !important;
  background-image:none !important;
  border:0 !important;
  box-shadow:none !important;
}
/* terminal pseudo reset */
html[${MARKER}] [data-sidebar-right-guide-entry] > button::before,
html[${MARKER}] [data-sidebar-right-guide-entry] > button::after,
html[${MARKER}] [data-sidebar-right-guide-entry] > button *::before,
html[${MARKER}] [data-sidebar-right-guide-entry] > button *::after{
  content:none !important;
  background:none !important;
  background-image:none !important;
  border:0 !important;
  border-radius:0 !important;
  box-shadow:none !important;
  outline:0 !important;
}
/* empty overlay: the rail's ghost button holds no content, it only catches
   clicks and hover, so it must not paint anything */
html[${MARKER}] [class*="_tabHost_"] button:empty:not(#zzz-guard){
  background:transparent !important;
  background-image:none !important;
  border:0 !important;
  border-radius:0 !important;
  box-shadow:none !important;
  outline:0 !important;
}
html[${MARKER}] [class*="_tabHost_"] button:empty::before,
html[${MARKER}] [class*="_tabHost_"] button:empty::after{
  content:none !important;
  background:none !important;
  border:0 !important;
  box-shadow:none !important;
}


html[${MARKER}] [data-composer-card="true"]{
  padding:0 !important;
}
html[${MARKER}] [class*="_bubble"]{border-radius:16px !important}
html[${MARKER}] [data-composer-card="true"]{border-radius:22px !important}
/* the to-bottom slot is a 0px-tall placeholder that draws the dark rule above the
   composer; its module hash changes between builds (V4vHZW_/EvIC1a_), so match the
   part name only */
html[${MARKER}] [class*="toBottomSlot"] {
  border:0 !important;
  background:transparent !important;
  background-image:none !important;
  box-shadow:none !important;
  /* the slot is 0px tall and draws only a stray rule; hiding it removes the
     rule, and nothing visible lives inside a zero-height box */
  display:none !important;
}
html[${MARKER}] [class*="toBottomSlot"]::before,
html[${MARKER}] [class*="toBottomSlot"]::after {
  content:none !important;
  border:0 !important;
  background:none !important;
}

/* the composer keeps the full card treatment, including the 1px black outline
   the other cards have; the stray rule above it came from the toBottom slot,
   which is handled separately */
html[${MARKER}] button[class*="_newSession"]{border-radius:999px !important}
/* one style for the host's design-system buttons: same surface, same ring,
   same radius. The composer's send/stop disc is a different component. */
html[${MARKER}] button[class*="1rv3m_"]:not([class*="_tabHost_ "] *):not([data-sidebar-right-guide-entry] *){
  background:#0b0b0b !important;
  background-image:none !important;
  color:#dcdcdc !important;
  border:0 !important;
  border-radius:var(--zzz-ctl-radius) !important;
  box-shadow:none !important;
}
html[${MARKER}] button[class*="1rv3m_"]:hover{
  background-color:#0b0b0b !important;
  background-image:linear-gradient(var(--zzz-hl),var(--zzz-hl)) !important;
}
/* small icon buttons flip to the yellow plate on hover, like the workspace
   header trio; large cards keep the subtle fill */
html[${MARKER}] button[class*="1rv3m_"][class*="_sm_"]:hover,
html[${MARKER}] button[class*="_sm_"][class*="1rv3m_"]:hover{
  /* flat, animatable fill: a background-image gradient cannot transition, so the yellow
     used to vanish in one frame while the icon colour was still fading - the icon
     momentarily sat dark-on-dark and looked like it disappeared */
  background-color:var(--zzz-yellow) !important;
  background-image:none !important;
  /* the label may be a bare text node, so the colour must come from the button
     itself - children inherit it */
  color:#101010 !important;
}
html[${MARKER}] button[class*="1rv3m_"][class*="_sm_"]:hover svg,
html[${MARKER}] button[class*="_sm_"][class*="1rv3m_"]:hover svg{
  color:#101010 !important;
}
html[${MARKER}] button[class*="1rv3m_"][class*="_sm_"]:hover *,
html[${MARKER}] button[class*="_sm_"][class*="1rv3m_"]:hover *{
  color:#101010 !important;
}
html[${MARKER}] button[class*="1rv3m_"] svg{
  color:#dcdcdc !important;
  stroke:#dcdcdc !important;
}
/* one timing for fill and glyph: un-hovering must never leave the icon dark on a
   disc that has already returned to black */
html[${MARKER}] button[class*="1rv3m_"]{
  transition:background-color .15s ease;
}
/* the glyph must not fade: only the fill animates, so un-hovering can never leave a dark
   icon on a disc that has already returned to black */
html[${MARKER}] button[class*="1rv3m_"] svg,
html[${MARKER}] button[class*="1rv3m_"] svg *{
  transition:none;
}
html[${MARKER}] button[class*="1rv3m_"][disabled],
html[${MARKER}] button[class*="1rv3m_"][aria-disabled="true"]{
  opacity:.45 !important;
}

/* other button-ish components (shortcut editor, number stepper) default to #353638;
   bring them onto the same near-black surface */
html[${MARKER}] button[class*="_button"]:not([class*="1rv3m_"]):not([class*="ypSjoa_"]):not([data-dsh-plugin]):not([data-dsh-plugin] *):not(:has([data-dsh-plugin])):not([class*="_tabHost_"] *),
html[${MARKER}] [class*="_stepper"],
html[${MARKER}] [class*="_stepper"] *{
  background:#0b0b0b !important;
  background-image:none !important;
  color:#dcdcdc !important;
  border:0 !important;
  border-radius:var(--zzz-ctl-radius) !important;
  box-shadow:none !important;
}
html[${MARKER}] [class*="_moreAnchor"] button,
html[${MARKER}] button[class*="_toggle"],
html[${MARKER}] button[class*="_button"]:not([class*="1rv3m_"]):not([class*="ypSjoa_"]):not([data-dsh-plugin]):not([data-dsh-plugin] *):not(:has([data-dsh-plugin])):not([class*="_tabHost_"] *):hover,
html[${MARKER}] [class*="_stepper"]:hover{
  background:#1a1a1a !important;
}

/* sidebar panel rows paint themselves #1A1A1A; flatten them onto the column
   and give them the same faint white hover as every other row */
html[${MARKER}] [class*="_panelRow"]:not(#zzz-guard){
  background-color:transparent !important;
  background-image:none !important;
  box-shadow:none !important;
}
@media (hover:hover){
  html[${MARKER}] [class*="_panelRow"]:hover:not(#zzz-guard){
    background-color:var(--zzz-hl) !important;
    background-image:none !important;
    box-shadow:none !important;
  }
}

/* right-rail entries draw their ring with box-shadow (outline paints above it
   and would hide the chamfer). Matched on the semantic attribute, not the hash */
html[${MARKER}] [data-sidebar-right-guide-entry]{
  /* a single ring, drawn with box-shadow so the chamfer can paint above it:
     outline always paints over box-shadow and hid the bevel completely */
  outline:0 !important;
  box-shadow:var(--zzz-bevel-hi), var(--zzz-bevel-lo), 0 0 0 3px #000,
    inset 0 0 0 0.5px rgba(0,0,0,.6) !important;
}


html[${MARKER}] [class*="_regionArea"]{
  border-radius:var(--zzz-glass-radius) !important;
  padding:8px 6px 10px 6px !important;
  /* a margin keeps the 3px ring inside the clipping sidebar column */
  margin:2px 4px !important;
  box-shadow:var(--zzz-bevel-hi), var(--zzz-bevel-lo), 0 0 0 3px #000, inset 0 0 0 0.5px rgba(0,0,0,.6) !important;
}

/* the tree rows read in the secondary weight: nav items and section titles take
   the display face (700), but workspace / session / time rows are 500 - the
   hierarchy is carried by weight, not size */
html[${MARKER}] [class*="_regionArea"],
html[${MARKER}] [class*="_regionArea"] *{
  font-family:var(--zzz-font-text) !important;
  font-weight:500 !important;
}

/* the tree's own bottom scroll fade reads as a shadow hanging off the card */
html[${MARKER}] [class*="_regionArea"] [class*="_fade"]{display:none !important}

/* ---- popovers: the host owns the menu surface ----
   Putting our card frame on the popup either wrapped only its header block or
   clipped the portal, so menus keep the host's own surface and only take the
   dark palette. */
html[${MARKER}] [role="menu"],
html[${MARKER}] [role="listbox"],
html[${MARKER}] [role="tooltip"]{
  background:transparent !important;
  background-image:none !important;
  border:0 !important;
  border-radius:0 !important;
  box-shadow:none !important;
  color:#eaeaea !important;
}
html[${MARKER}] [role="menu"] *,
html[${MARKER}] [role="listbox"] *,
html[${MARKER}] [role="tooltip"] *{
  color:#eaeaea !important;
}

/* the menu container is the card: its width is content-driven, so the 9.75px
   border grows the menu outward instead of squeezing the rows. This also covers
   the nested menu shape, which has no _material_ plate at all. */
html[${MARKER}] [role="menu"],
html[${MARKER}] [role="listbox"]{
  background-color:var(--dsw-menu-surface-fill) !important;
  background-image:var(--zzz-sheen),var(--zzz-weave) !important;
  background-size:100% 100%,6px 6px,6px 6px,6px 6px,6px 6px !important;
  background-position:0 0,0 0,3px 3px,3px 0,0 3px !important;
  background-repeat:no-repeat,repeat,repeat,repeat,repeat !important;
  background-clip:padding-box !important;
  border:var(--zzz-frame-w) solid var(--zzz-frame-color) !important;
  border-radius:var(--zzz-glass-radius) !important;
  box-sizing:border-box !important;
  padding:10px !important;
  box-shadow:
    var(--zzz-bevel-hi),
    var(--zzz-bevel-lo),
    0 0 0 3px #000,
    inset 0 0 0 0.5px rgba(0,0,0,.6),
    inset 0 0 10px rgba(0,0,0,.35) !important;
}
/* tooltips: borderless dark frosted glass. The card language (grey frame,
   halftone, chamfer) is intentionally dropped, and so is every depth cue:
   no border, no rim line, no drop shadow, no inner highlight - the surface is
   defined purely by its translucent fill and the blur. */
html[${MARKER}] [role="tooltip"]{
  background-color:var(--zzz-glass-fill) !important;
  background-image:none !important;
  border:0 !important;
  border-radius:var(--zzz-glass-radius-sm) !important;
  box-sizing:border-box !important;
  padding:8px 10px !important;
  color:#f2f2f2 !important;
  box-shadow:none !important;
  backdrop-filter:var(--zzz-glass-blur) !important;
  -webkit-backdrop-filter:var(--zzz-glass-blur) !important;
}
/* session hover-preview card in the workspace tree: same glass surface as the
   tooltips (measured: fixed, 244x96, host fill #2C2C2E, no blur). The exact
   class token keeps code/attachment cards of the same module untouched. */
html[${MARKER}] [class~="_card_38jqx_9"][role="button"]{
  background-color:var(--zzz-glass-fill) !important;
  background-image:none !important;
  border:0 !important;
  border-radius:var(--zzz-glass-radius-sm) !important;
  color:#f2f2f2 !important;
  box-shadow:none !important;
  backdrop-filter:var(--zzz-glass-blur) !important;
  -webkit-backdrop-filter:var(--zzz-glass-blur) !important;
}
html[${MARKER}] [class~="_card_38jqx_9"][role="button"] *{
  background-image:none !important;
}

/* composer strip: the whole bottom block is one glass surface (the element that
   wraps the composer card). No border, no rim line - only the blur. */
html[${MARKER}] div:has(> [data-composer-card="true"]){
  /* 45% instead of 34%: the padding bands sit over different backdrops (blurred
     text above, empty page below), and a light fill lets that difference dominate -
     the empty band then reads as opaque. A slightly higher fill evens them out. */
  background-color:var(--zzz-glass-fill-strong) !important;
  background-image:none !important;
  border:0 !important;
  border-radius:var(--zzz-glass-radius-lg) !important;
  padding:32px 18px 16px !important;
  box-shadow:none !important;
  backdrop-filter:var(--zzz-glass-blur) !important;
  -webkit-backdrop-filter:var(--zzz-glass-blur) !important;
}

/* tooltip interior sits straight on the glass: no card, no chips but the keys */
html[${MARKER}] [role="tooltip"] > *{
  background:transparent !important;
  background-image:none !important;
  border:0 !important;
  box-shadow:none !important;
  padding:0 !important;
}
html[${MARKER}] [role="tooltip"] [class*="_label"]{
  color:#f0f0f0 !important;
  line-height:1.35 !important;
}
html[${MARKER}] [role="tooltip"] [class*="_key"],
html[${MARKER}] [role="tooltip"] [class*="_keys"]{
  background-color:var(--dsw-alias-tooltip-key-bg) !important;
  background-image:none !important;
  color:#f0f0f0 !important;
  border-radius:4px !important;
  box-shadow:none !important;
}

/* "more views" menu: the host pins it to 288px while the labels need about half
   that, which leaves a wide empty band on the right. Content-sized instead, keyed
   on the slot it renders (stable) rather than the module hash. */
html[${MARKER}] [role="menu"]:has([data-slot^="conversation.session.header.views"]){
  width:max-content !important;
  min-width:0 !important;
  max-width:calc(100vw - 24px) !important;
}

/* scrollable menus: no reserved gutter, thin scrollbar, so the right edge of the
   frame hugs the labels instead of leaving a wide empty band */
html[${MARKER}] [role="menu"],
html[${MARKER}] [role="listbox"]{
  scrollbar-gutter:auto !important;
}
html[${MARKER}] [role="menu"]::-webkit-scrollbar,
html[${MARKER}] [role="listbox"]::-webkit-scrollbar{
  width:6px !important;
  height:6px !important;
  background:transparent !important;
}
html[${MARKER}] [role="menu"]::-webkit-scrollbar-track,
html[${MARKER}] [role="listbox"]::-webkit-scrollbar-track,
html[${MARKER}] [role="menu"]::-webkit-scrollbar-corner,
html[${MARKER}] [role="listbox"]::-webkit-scrollbar-corner{
  background:transparent !important;
}
html[${MARKER}] [role="menu"]::-webkit-scrollbar-thumb,
html[${MARKER}] [role="listbox"]::-webkit-scrollbar-thumb{
  background:#3a3a3a !important;
  border:0 !important;
  border-radius:999px !important;
}

/* the plate becomes an empty layer so it cannot draw a second frame */
html[${MARKER}] [role="menu"] > [class*="_material_"],
html[${MARKER}] [role="listbox"] > [class*="_material_"],
html[${MARKER}] [role="tooltip"] > [class*="_material_"],
html[${MARKER}] [class*="_portal_"] [class*="_material_"]{
  background:transparent !important;
  background-image:none !important;
  border:0 !important;
  border-radius:0 !important;
  box-shadow:none !important;
  /* the host keeps a frosted layer here; blur(40px) would smear the card's
     halftone into flat grey, so the glass is switched off */
  backdrop-filter:none !important;
  -webkit-backdrop-filter:none !important;
}

/* the top-up link is the only place the accent orange is used as a fill;
   black label keeps it readable and matches the flat accent discs */
html[${MARKER}] a[class*="linkButton"][class*="primary"],
html[${MARKER}] a[class*="linkButton"][class*="Primary"]{
  background:var(--zzz-orange) !important;
  background-image:none !important;
  color:#101010 !important;
  border:0 !important;
  box-shadow:none !important;
}
html[${MARKER}] a[class*="linkButton"][class*="primary"]:hover,
html[${MARKER}] a[class*="linkButton"][class*="Primary"]:hover{
  background:#ff6a22 !important;
  color:#101010 !important;
}

/* changed-files card: one glass surface, keyed on the semantic marker rather than
   the CSS-module hash (the class hash changes between builds) */
html[${MARKER}] [data-changed-files="true"]{
  background-color:var(--zzz-glass-fill) !important;
  background-image:none !important;
  border:0 !important;
  border-radius:var(--zzz-glass-radius) !important;
  box-shadow:none !important;
  backdrop-filter:var(--zzz-glass-blur) !important;
  -webkit-backdrop-filter:var(--zzz-glass-blur) !important;
}
/* inner surfaces stay clear: header, list and rows must not paint their own plate */
html[${MARKER}] [data-changed-files="true"] *{
  background-color:transparent !important;
  background-image:none !important;
  box-shadow:none !important;
  backdrop-filter:none !important;
}

/* market thumbnails: the plugin draws a .5px border-l3 ring plus a light
   fallback fill; clear the ring so an unloaded screenshot is just an empty slot */
html[${MARKER}] [class*="nUhMVa_cardShot"],
html[${MARKER}] [class*="nUhMVa_cardShots"],
html[${MARKER}] [class*="nUhMVa_cardShots"] *{
  border:0 !important;
  outline:0 !important;
  box-shadow:none !important;
  background-color:transparent !important;
  background-image:none !important;
}
/* a thumbnail that failed to load is removed from paint entirely, so neither the
   browser frame nor its out-of-box residue can show */
html[${MARKER}] img[data-zzz-broken]{
  visibility:hidden !important;
}
html[${MARKER}] [class*="nUhMVa_cardShot"]{
  /* match the card fill exactly: the clip below exposes the rim, and any colour
     step there reads as a hairline */
  background-color:#2b2b2b !important;
  border-radius:var(--zzz-glass-radius-sm) !important;
  color:transparent !important;
  font-size:0 !important;
  -webkit-text-fill-color:transparent !important;
}
/* the thumbnail strip's own horizontal scrollbar rendered light-scheme (measured
   #9F9F9F, 7px) and read as a stray white line under the images */
html[${MARKER}] [class*="nUhMVa_cardShots"]{
  color-scheme:dark !important;
  scrollbar-width:thin !important;
  scrollbar-color:#3a3a3a transparent !important;
}
html[${MARKER}] [class*="nUhMVa_cardShots"]::-webkit-scrollbar{
  height:6px !important;
  background:transparent !important;
}
html[${MARKER}] [class*="nUhMVa_cardShots"]::-webkit-scrollbar-track,
html[${MARKER}] [class*="nUhMVa_cardShots"]::-webkit-scrollbar-corner{
  background:transparent !important;
}
html[${MARKER}] [class*="nUhMVa_cardShots"]::-webkit-scrollbar-thumb{
  background:#3a3a3a !important;
  border:0 !important;
  border-radius:999px !important;
}

/* flat-panel fallback: the plugin-market card only. The file-change card moved
   to the frosted-glass language, and generic _card matching is avoided - it once
   painted the whole plugin page. */
/* market sticky head: the plugin paints a squared block in the page base colour.
   --dsw-alias-bg-base is shared app-wide, so the block is rounded here instead and
   the square 14px mask above it is dropped. */
html[${MARKER}] [class*="nUhMVa_stickyHead"]{
  border-radius:var(--zzz-glass-radius-sm) !important;
  overflow:hidden !important;
}
html[${MARKER}] [class*="nUhMVa_stickyHead"]::before{
  content:none !important;
  background:none !important;
}

html[${MARKER}] [class*="nUhMVa_card"]{
  background-color:#2b2b2b !important;
  background-image:none !important;
  border:0 !important;
  box-shadow:none !important;
}

/* corner-shape pairing (official rule): any pill or circle must declare
   corner-shape: round, otherwise the host's global superellipse(1.5) squashes
   it. Only elements this theme turns into pills/circles are listed. */
html[${MARKER}] button,
html[${MARKER}] a[class*="linkButton"],
html[${MARKER}] [role="button"],
html[${MARKER}] [class*="_iconButton"],
html[${MARKER}] [class*="_chip"],
html[${MARKER}] [class*="_pill"],
html[${MARKER}] [class*="_tag"],
html[${MARKER}] [class*="_badge"],
html[${MARKER}] [class*="_navCell"],
html[${MARKER}] [class*="_sessionRow"],
html[${MARKER}] img.zzz-brand{
  corner-shape:round;
}


html[${MARKER}] [role="tooltip"] > :first-child{padding:0 !important}
html[${MARKER}] [role="menu"] [class*="_material_"],
html[${MARKER}] [role="listbox"] [class*="_material_"]{padding:10px !important}
html[${MARKER}] [role="menu"] [role="menuitem"],
html[${MARKER}] [role="listbox"] [role="option"]{padding:6px 8px !important; margin:0 !important}

/* the header strip of every dialog is a title bar, so its text wears the
   display face whatever class the host gives it; buttons inside keep D40 */
html[${MARKER}] [role="dialog"] > :first-child,
html[${MARKER}] [role="dialog"] > :first-child *{
  font-family:var(--zzz-font-display) !important;
  font-weight:800 !important;
  /* 印品's face is already bold and is labelled Regular; without this the browser
     synthesises a second bold on top of it. Fallback families keep their real weights. */
  font-synthesis-weight:none;
}
html[${MARKER}] [role="dialog"] > :first-child button,
html[${MARKER}] [role="dialog"] > :first-child button *{
  font-family:var(--zzz-font-text) !important;
  font-weight:500 !important;
}

/* one scheme only: light mode must look exactly like dark mode, down to the
   parts CSS does not paint (scrollbars, native form controls) */
/* settings switch: force Source Han Sans regardless of what is installed */
/* the base declarations sit on BOTH html and body, so the override must reach body too
   (otherwise every descendant inherits the inpin stack from body) */
html[${MARKER}][data-zzz-font-sans],
html[${MARKER}][data-zzz-font-sans] body{
  --zzz-font-display:'Noto Sans SC','Source Han Sans SC','思源黑体',system-ui,-apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;
  --zzz-font-text:'Noto Sans SC','Source Han Sans SC','思源黑体',system-ui,-apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;
}
html[${MARKER}]{
  color-scheme:dark !important;
}

/* ---- leftover chrome ----
   These widgets used to inherit the app's light palette (white pills, white
   badges, a white scroll-to-bottom disc). They have no theme tokens, so they are
   defined here explicitly instead of being left to the host. */
html[${MARKER}] [class*="_toBottom"],
html[${MARKER}] button[class*="_add"],
html[${MARKER}] [class*="_badge"],
html[${MARKER}] [class*="_tag_"]{
  background:#2b2b2b !important;
  background-image:none !important;
  color:#eaeaea !important;
  border:0 !important;
  border-radius:999px !important;
  box-shadow:0 0 0 1px #000 !important;
}
html[${MARKER}] [class*="_toBottom"] svg,
html[${MARKER}] button[class*="_add"] svg{
  color:#f7f7f7 !important;
  stroke:#f7f7f7 !important;
}
/* hosts that render a bare button with no class at all */
html[${MARKER}] button:not([class]){
  background:#2b2b2b !important;
  background-image:none !important;
  color:#eaeaea !important;
  border:0 !important;
  border-radius:var(--zzz-ctl-radius) !important;
  box-shadow:0 0 0 1px #000 !important;
}

/* file-change cards paint a near-white header strip in light mode; let the
   card surface show through instead */
html[${MARKER}] [class*="_header"]{
  background-color:transparent !important;
  background-image:none !important;
  color:#eaeaea !important;
}

/* the plate is whatever wraps the file-type image, so match by structure:
   an element that directly contains the icon image, inside a card header */
html[${MARKER}] [class*="_header"] *:has(> img),
html[${MARKER}] [class*="_header"] *:has(> picture),
html[${MARKER}] [class*="_header"] *:has(> svg):not(button){
  background:transparent !important;
  background-image:none !important;
  box-shadow:none !important;
  border-color:transparent !important;
}

/* the file-type tile is a light grey plate; drop it so the glyph sits on the
   card. (Audited 2026-11-02: _fileIcon is the only class in the installed bundles;
   five speculative names and .file-icon were removed.) */
html[${MARKER}] [class*="_fileIcon"]{
  background:transparent !important;
  background-image:none !important;
  box-shadow:none !important;
  border:0 !important;
}

/* grey plate behind an icon tile: the icon reads fine straight on the card */
html[${MARKER}] [class*="_header"] [class*="_icon"],
html[${MARKER}] [class*="_header"] [class*="_badge"]{
  background:transparent !important;
  background-image:none !important;
  box-shadow:none !important;
}

/* form controls inside dialogs default to the app's light scheme: text fields,
   selects, switches and segmented buttons all paint themselves white */
html[${MARKER}] [role="dialog"] input,
html[${MARKER}] [role="dialog"] select,
html[${MARKER}] [role="dialog"] textarea,
html[${MARKER}] [role="dialog"] [class*="_field"],
html[${MARKER}] [role="dialog"] [class*="_control"]{
  background:transparent !important;
  background-image:none !important;
  color:#eaeaea !important;
  -webkit-text-fill-color:#eaeaea !important;
  border:0 !important;
  box-shadow:none !important;
}
/* one thin outline on the actual control, not on every wrapper around it */
html[${MARKER}] [role="dialog"] input:not([type="checkbox"]):not([type="radio"]),
html[${MARKER}] [role="dialog"] select,
html[${MARKER}] [role="dialog"] textarea{
  box-shadow:inset 0 0 0 1px #3a3a3a !important;
}
/* switches are styled by the unified switch block (slider language); this legacy
   dialog paint would otherwise win on specificity and force a yellow track */
html[${MARKER}] [role="dialog"] [class*="_track"]{
  background:#333333 !important;
  background-image:none !important;
  border:0 !important;
  box-shadow:inset 0 0 0 1px #444444 !important;
}
html[${MARKER}] [role="dialog"] input::placeholder,
html[${MARKER}] [role="dialog"] textarea::placeholder{
  color:#7a7a7a !important;
}

/* a number field ships as a white pill wrapping a transparent input */
html[${MARKER}] [role="dialog"] *:has(> input:not([type="checkbox"]):not([type="radio"])),
html[${MARKER}] [role="dialog"] *:has(> textarea){
  background:transparent !important;
  background-image:none !important;
  color:#eaeaea !important;
  border:0 !important;
  box-shadow:none !important;
}
html[${MARKER}] [role="dialog"] input:not([type="checkbox"]):not([type="radio"]),
html[${MARKER}] [role="dialog"] textarea{
  background:transparent !important;
  color:#eaeaea !important;
  -webkit-text-fill-color:#eaeaea !important;
  box-shadow:none !important;
}

/* the settings rows are custom widgets (a white pill that opens a menu), not
   native selects, so they need their own definition */
html[${MARKER}] [role="dialog"] [class*="_select"],
html[${MARKER}] [role="dialog"] [class*="_picker"],
html[${MARKER}] [role="dialog"] [class*="_trigger"],
html[${MARKER}] [role="dialog"] [class*="_input"],
html[${MARKER}] [role="dialog"] [class*="_swatch"],
html[${MARKER}] [role="dialog"] [class*="_preview"],
html[${MARKER}] [role="dialog"] button[class*="_value"]{
  background:transparent !important;
  background-image:none !important;
  color:#eaeaea !important;
  border:0 !important;
  box-shadow:none !important;
}

/* sidebar divider: measured from the reference capture - 1px of #4A4A4A (74) on
   the #131313 page. A 0.5px 6%-white hairline resolved too dark against the
   dotted paper, so the line uses an explicit solid grey. */
html[${MARKER}] [class*="_sidebarCol"]{
  border-right:1px solid #4a4a4a !important;
}

/* tab strip: rounded-rect track with capsule tabs, so the active tab reads as a
   pill rather than a flat block */
html[${MARKER}] [role="tablist"]:not([class*="_sidebarCol"] *):not([data-conversation-tabs]){
  background:#242424 !important;
  background-image:none !important;
  border:0 !important;
  border-radius:14px !important;
  padding:4px !important;
  box-shadow:none !important;
}
html[${MARKER}] [role="tablist"]:not([class*="_sidebarCol"] *):not([data-conversation-tabs]) > *{
  border-radius:10px !important;
  /* the highlight needs side breathing room, otherwise the label touches the
     rounded edge */
  padding-left:14px !important;
  padding-right:14px !important;
}

/* ===== one tab language for both strips =====
   Conversation views and the plugin-view tabs end up with the same rounded-rect
   highlight, expressed with tokens: selected fill uses --dsw-alias-bg-module-platform,
   text uses the label tokens, hover uses the interactive hover token. Geometry is
   identical on both (radius 8, side padding 8, gap 4) so the label-to-edge distance
   matches everywhere. */
html[${MARKER}] [role="tablist"]:has(> [role="tab"]):not([class*="_sidebarCol"] *):not([style*="--dsh-segment-count"]){
  column-gap:4px !important;
  row-gap:4px !important;
}
html[${MARKER}] [role="tablist"]:has(> [role="tab"]):not([class*="_sidebarCol"] *):not([style*="--dsh-segment-count"]) > [role="tab"]:not([aria-selected="true"]),
html[${MARKER}] [data-conversation-tabs] > [role="tab"]{
  border-radius:8px !important;
  padding-left:8px !important;
  padding-right:8px !important;
  /* the host reserves its bottom padding for the underline; with a pill the label
     needs equal space above and below */
  padding-top:5px !important;
  padding-bottom:5px !important;
  min-height:0 !important;
  background-color:transparent !important;
  background-image:none !important;
  border:0 !important;
  box-shadow:none !important;
  color:var(--dsw-alias-label-tertiary) !important;
}
html[${MARKER}] [role="tablist"]:has(> [role="tab"]):not([class*="_sidebarCol"] *):not([style*="--dsh-segment-count"]) > [role="tab"]:hover,
html[${MARKER}] [data-conversation-tabs] > [role="tab"]:hover{
  background-color:var(--dsw-alias-interactive-bg-hover) !important;
}
/* selected colour comes from the shared role=tab plate rule below */
html[${MARKER}] [role="tablist"]:has(> [role="tab"]):not([class*="_sidebarCol"] *):not([style*="--dsh-segment-count"]) > [role="tab"][aria-selected="true"],
html[${MARKER}] [data-conversation-tabs] > [role="tab"][aria-selected="true"]{
  border-radius:8px !important;
  box-shadow:none !important;
}
/* the underline pseudo belongs to the old text-tab look; the pill replaces it */
html[${MARKER}] [role="tablist"] > [role="tab"]::after,
html[${MARKER}] [data-conversation-tabs] > [role="tab"]::after{
  content:none !important;
  background:none !important;
}

/* standalone tabs (conversation views strip) share the tablist treatment: same
   rounded rectangle, same side padding, same selected fill */
/* the strip's own 20px column gap plus per-tab padding was reading as a huge
   distance; keep a tight 4px gap and 8px side padding */
html[${MARKER}] div:has(> [role="tab"]):not([class*="_sidebarCol"] *):not([style*="--dsh-segment-count"]){
  column-gap:4px !important;
  row-gap:4px !important;
}
/* segmented controls compute their indicator width from a 2px gap and 4px padding;
   restoring that keeps the sliding thumb exactly one slot wide */
html[${MARKER}] [style*="--dsh-segment-count"]:not(#zzz-guard){
  column-gap:2px !important;
  row-gap:2px !important;
  padding:4px !important;
}
html[${MARKER}] [style*="--dsh-segment-count"] > [role="tab"]:not(#zzz-guard){
  padding:0 16px !important;
  border-radius:var(--dsw-radius-sm) !important;
  background-color:transparent !important;
  background-image:none !important;
}
html[${MARKER}] [style*="--dsh-segment-count"] > [role="tab"][aria-selected="true"]:not(#zzz-guard){
  background-color:transparent !important;
}
/* the underline pseudo is how the host marked the active tab; the rounded
   highlight replaces it */
html[${MARKER}] [role="tab"]:not([class*="_sidebarCol"] *)::after{
  content:none !important;
  background:none !important;
}
html[${MARKER}] [role="tab"]:not([class*="_sidebarCol"] *):not([aria-selected="true"]),
html[${MARKER}] [role="tab"]:not([class*="_sidebarCol"] *):not([aria-selected="true"]):hover{
  border-radius:8px !important;
  padding-left:8px !important;
  padding-right:8px !important;
  box-shadow:none !important;
  border:0 !important;
  background-image:none !important;
}
html[${MARKER}] [role="tab"]:not([class*="_sidebarCol"] *):not([aria-selected="true"]){
  background-color:transparent !important;
  color:var(--dsw-alias-label-tertiary) !important;
}
/* selected tab = the breathing plate. The attribute is repeated on purpose: the
   conversation strip clears descendant backgrounds with !important, and a doubled
   attribute outrank it without an id-level hack. */
html[${MARKER}] [role="tab"][aria-selected="true"][aria-selected="true"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [role="tab"][data-state="active"][data-state="active"]:not([class*="_sidebarCol"] *){
  background-image:var(--zzz-plate) !important;
  background-color:transparent !important;
  color:#101010 !important;
  border-radius:8px !important;
  box-shadow:none !important;
  animation:zzz-plate-breath var(--zzz-ring-t) ease-in-out infinite;
}
html[${MARKER}] [role="tab"][aria-selected="true"]:not([class*="_sidebarCol"] *) *,
html[${MARKER}] [role="tab"][data-state="active"]:not([class*="_sidebarCol"] *) *{
  color:#101010 !important;
}
@media (prefers-reduced-motion:reduce){
  html[${MARKER}] [role="tab"][aria-selected="true"]:not([class*="_sidebarCol"] *),
  html[${MARKER}] [role="tab"][data-state="active"]:not([class*="_sidebarCol"] *){
    animation:none !important;
  }
}

/* segmented tab strip inside a dialog: the active pill painted itself white,
   which also hid its label */
html[${MARKER}] [role="tablist"] > *:not([class*="_sidebarCol"] *){
  background:transparent !important;
  background-image:none !important;
  color:#bdbdbd !important;
  box-shadow:none !important;
  border:0 !important;
}
/* no background here: the shared role=tab plate rule paints the selected state */
html[${MARKER}] [role="tablist"] > [aria-selected="true"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [role="tablist"] > [data-state="active"]:not([class*="_sidebarCol"] *){
  border-radius:8px !important;
  box-shadow:none !important;
}

/* dialog content surfaces: settings pages render their lists and cards with the
   app's light palette. Match the surface-ish containers, but never the elements
   that express selection, so highlights are not eaten. */
html[${MARKER}] [role="dialog"]:not([data-shortcut-modal]) [class*="_card"]:not([aria-selected="true"]):not([data-state="active"]),
html[${MARKER}] [role="dialog"]:not([data-shortcut-modal]) [class*="_tile"]:not([aria-selected="true"]),
html[${MARKER}] [role="dialog"]:not([data-shortcut-modal]) [class*="_panel"]:not([aria-selected="true"]),
html[${MARKER}] [role="dialog"]:not([data-shortcut-modal]) [class*="_surface"]:not([aria-selected="true"]),
html[${MARKER}] [role="dialog"]:not([data-shortcut-modal]) [class*="_box"]:not([aria-selected="true"]),
html[${MARKER}] [role="dialog"]:not([data-shortcut-modal]) [class*="_chip"]:not([aria-selected="true"]),
html[${MARKER}] [role="dialog"]:not([data-shortcut-modal]) [class*="_row"]:not([aria-selected="true"]):not([data-state="active"]),
html[${MARKER}] [role="dialog"] [role="listitem"]:not([aria-selected="true"]) {
  background-color:transparent !important;
  background-image:none !important;
  color:#eaeaea !important;
  box-shadow:none !important;
}

/* main-region SMALL surfaces only: price tags and badges. Pills and chips are
   excluded on purpose - they have their own interaction block further down
   (idle / hover / active), so the blanket flatten must not swallow them. */
html[${MARKER}] [class*="_price"]:not([class*="_sidebarCol"] *):not([aria-selected="true"]),
html[${MARKER}] [class*="_tag"]:not([class*="_sidebarCol"] *):not([aria-selected="true"]),
html[${MARKER}] [class*="_badge"]:not([class*="_sidebarCol"] *):not([aria-selected="true"]) {
  background-color:transparent !important;
  background-image:none !important;
  color:#eaeaea !important;
  box-shadow:none !important;
}

/* a third-party panel ships its own light menu and number input */
html[${MARKER}] .dshwv-menu{
  background:#1c1c1c !important;
  color:#eaeaea !important;
  border:0 !important;
  box-shadow:0 0 0 1px #3a3a3a !important;
}
html[${MARKER}] .dshwv-menu *{
  color:#eaeaea !important;
}
html[${MARKER}] .dshwv-number{
  background:#282828 !important;
  color:#eaeaea !important;
  border:0 !important;
  box-shadow:0 0 0 1px #3a3a3a !important;
}

/* muted text drift: these classes read lighter in light mode because the host
   mixes its own label colour; pin them to the dark palette */
html[${MARKER}] [class*="_description"],
html[${MARKER}] [class*="_desc"],
html[${MARKER}] [class*="_hint"],
html[${MARKER}] [class*="_help"],
html[${MARKER}] [class*="_subtitle"],
html[${MARKER}] [class*="_meta"],
html[${MARKER}] [class*="_time"],
html[${MARKER}] [class*="_shortcut"],
html[${MARKER}] kbd,
html[${MARKER}] [class*="_keys_"]{
  color:#9e9e9e !important;
}

/* text colours that tokens do not cover: placeholders, selection, caret and
   the native form text colour all default to the OS light scheme */
html[${MARKER}] ::placeholder{
  color:#7d7d7d !important;
  opacity:1 !important;
}
html[${MARKER}] ::selection{
  background:var(--zzz-yellow) !important;
  color:#101010 !important;
}
html[${MARKER}] input,
html[${MARKER}] textarea,
html[${MARKER}] select{
  color:#f7f7f7 !important;
  -webkit-text-fill-color:#f7f7f7 !important;
  caret-color:#fcdd00 !important;
}

/* ---- icons: one weight everywhere ----
   every glyph in this UI is a stroked svg, and the host ships them at mixed
   weights; forcing one value on the svg itself (not on a single component) keeps
   the toolbar, the sidebars and the composer looking like one icon set. */
html[${MARKER}] svg:not([data-dsh-plugin]):not([data-dsh-plugin] *),
html[${MARKER}] svg:not([data-dsh-plugin]):not([data-dsh-plugin] *) *{
  stroke-width:1.7 !important;
}
/* The plugin's own action button (button.ypSjoa_button) is left alone: the plugin
   owns its icon, colour and weight. The only thing the theme still does is exempt it
   from the broad host-button rule above (see :not([class*="ypSjoa_"])), because that
   blanket rule would otherwise paint a #0b0b0b tile behind the glyph. */

/* some glyphs are drawn as filled paths, where a wider stroke does nothing.
   A 0.4px drop-shadow in the current colour grows the silhouette by about half a
   pixel on every side, which is enough to match the stroked icons without
   turning a solid shape into a blob. */
html[${MARKER}] svg path,
html[${MARKER}] svg circle,
html[${MARKER}] svg rect,
html[${MARKER}] svg line,
html[${MARKER}] svg polyline,
html[${MARKER}] svg polygon{
  stroke-linejoin:round !important;
  stroke-linecap:round !important;
}
/* the previous 0.4px drop-shadow fattener is gone: it added ~0.8px to every
   button glyph, which is exactly the weight this pass is removing */

/* the sliders icon draws its two knobs as hollow circles; only that glyph has
   two circles, so the fill can be scoped to it and the magnifier lens (one
   circle) keeps its outline */
html[${MARKER}] [class*="_headerActions"] svg:has(circle:nth-of-type(2)) circle{
  fill:currentColor !important;
}

/* ---- B class: raised keys ---- */
html[${MARKER}] button[class*="_iconButton"],
html[${MARKER}] button[class*="_searchButton"]{
  border-radius:999px !important;
}
/* only the workspace header keys are discs: the same _iconButton class is also
   used by the row action buttons that appear on hover, and painting those black
   turns them into solid blocks on top of a yellow selected row */
/* both variants (header actions and the search slot) share ONE two-state recipe:
   black disc + light glyph, yellow disc + black glyph. The glyph colour is declared by
   the theme in both states and both properties share one transition, otherwise
   un-hovering would leave the glyph dark on a disc that already returned to black. */
html[${MARKER}] [class*="_headerActions"] button[class*="_iconButton"],
html[${MARKER}] [class*="_headerActions"] button[class*="_searchButton"],
html[${MARKER}] [class*="_searchSlot"] button[class*="_searchButton"]{
  background:#0b0b0b !important;
  background-image:none !important;
  color:#dcdcdc;
  /* no border and no outer ring: a light 1px ring around a 28px disc reads as a
     grey halo, and a dimmed glyph colour makes the icon strokes look thinner */
  border:0 !important;
  box-shadow:none !important;
  /* instant state switch: every transitioned variant left an intermediate frame that
     read as a black blob, so nothing animates here */
  transition:none;
}
html[${MARKER}] [class*="_headerActions"] button[class*="_iconButton"]:hover,
html[${MARKER}] [class*="_headerActions"] button[class*="_searchButton"]:hover,
html[${MARKER}] [class*="_searchSlot"] button[class*="_searchButton"]:hover{
  background-color:var(--zzz-yellow) !important;
  background-image:none;
  color:#101010 !important;
}
html[${MARKER}] [class*="_headerActions"] button[class*="_iconButton"] svg,
html[${MARKER}] [class*="_headerActions"] button[class*="_iconButton"] svg *,
html[${MARKER}] [class*="_headerActions"] button[class*="_searchButton"] svg,
html[${MARKER}] [class*="_headerActions"] button[class*="_searchButton"] svg *,
html[${MARKER}] [class*="_searchSlot"] button[class*="_searchButton"] svg,
html[${MARKER}] [class*="_searchSlot"] button[class*="_searchButton"] svg *{
  /* the glyph switches instantly in both directions */
  transition:none;
}
/* one key, two states: a FLAT disc - green sends, red stops. The colour carries
   the meaning, so the disc itself must not carry a bevel; the only 3D on screen
   belongs to the composer card around it. */
html[${MARKER}] [data-composer-card="true"] button[class*="_primary"]{
  background:var(--zzz-green) !important;
  background-image:none !important;
  color:#0b0b0b !important;
  border:4px solid #0b0b0b !important;
  border-radius:999px !important;
  box-shadow:none !important;
  /* a true circle with a centred glyph: a non-square box renders as a stadium
     and pushes the arrow / square off centre */
  width:34px !important;
  height:34px !important;
  min-width:34px !important;
  min-height:34px !important;
  padding:0 !important;
  box-sizing:border-box !important;
  display:grid !important;
  place-items:center !important;
  line-height:1 !important;
}
html[${MARKER}] [data-composer-card="true"] button[class*="_primary"]:hover{
  filter:brightness(1.1);
}
/* stop state: the glyph becomes a square, which is the shape-based tell - more
   reliable than aria-label text, which is language dependent and was rewritten
   by another session */
html[${MARKER}] [data-composer-card="true"] button[class*="_primary"][aria-label*="停止"],
html[${MARKER}] [data-composer-card="true"] button[class*="_primary"][aria-label*="Stop"],
html[${MARKER}] [data-composer-card="true"] button[class*="_primary"][aria-label*="stop"],
html[${MARKER}] [data-composer-card="true"] button[class*="_primary"]:has(svg rect){
  background:var(--zzz-red) !important;
}
html[${MARKER}] [data-composer-card="true"] button[class*="_primary"] svg{
  color:#0b0b0b !important;
  stroke:#0b0b0b !important;
  fill:#0b0b0b !important;
}

/* ---- B2 class: read-only info pills, deliberately flat ---- */
html[${MARKER}] [data-composer-stat] button{
  background:#2b2b2b !important;
  background-image:none !important;
  border:0 !important;
  box-shadow:none !important;
  border-radius:999px !important;
}

/* ---- C class: selected row in a sidebar ---- */
html[${MARKER}] [class*="_sessionRow"][class*="_selected"],
html[${MARKER}] [class*="_sidebarCol"] [data-state="selected"]{
  background-image:var(--zzz-plate) !important;
  color:#101010 !important;
  animation:zzz-plate-breath var(--zzz-ring-t) ease-in-out infinite;
  border-radius:8px !important;
}
html[${MARKER}] [class*="_sessionRow"][class*="_selected"] *,
html[${MARKER}] [class*="_sidebarCol"] [data-state="selected"] *{color:#101010 !important}

/* ---- D class: view tabs ----
   These used to be yellow text plus a 3px underline. The strip now shares the
   tablist treatment (rounded rectangle highlight), so only the colour is pinned
   down here; the shape, padding and fill come from the shared tab rules. */
html[${MARKER}] [role="tab"][class*="_tabActive"]{
  box-shadow:none !important;
}
/* the dock's own tab is a state badge, so it takes the C-class plate */
html[${MARKER}] [class*="_tabHost_"] [class*="_tabActive_"]{
  background-image:var(--zzz-plate) !important;
  color:#101010 !important;
  border:0 !important;
  border-radius:999px !important;
  box-shadow:0 0 0 1px #000 !important;
}
html[${MARKER}] [class*="_tabHost_"] [class*="_tabActive_"] *{color:#101010 !important}

/* ---- E class: focus ring ---- */
@keyframes zzz-ring-breath{
  0%,100%{ border-color:var(--zzz-ring-a) }
  50%{ border-color:var(--zzz-ring-b) }
}
/* the ring lives on a pseudo element: a box-shadow ring on the card itself had
   to be !important to beat the card rule, and !important declarations win over
   keyframes - which is why the first attempt never animated. */
html[${MARKER}] [data-composer-card="true"]{
  position:relative !important;
}
html[${MARKER}] [data-composer-card="true"]:focus-within{
  border-color:#444444 !important;
  box-shadow:
    var(--zzz-bevel-hi),
    var(--zzz-bevel-lo),
    0 0 0 5px #000,
    inset 0 0 0 0.5px rgba(0,0,0,.6),
    inset 0 0 10px rgba(0,0,0,.35) !important;
}
html[${MARKER}] [data-composer-card="true"]:focus-within::after{
  content:"" !important;
  position:absolute !important;
  inset:calc(-1 * var(--zzz-frame-w) - 4px) !important;
  border-width:4px !important;
  border-style:solid !important;
  border-color:var(--zzz-ring-a);
  border-radius:26px !important;
  pointer-events:none !important;
  animation:zzz-ring-breath var(--zzz-ring-t) ease-in-out infinite;
}
@media (prefers-reduced-motion:reduce){
  html[${MARKER}] [data-composer-card="true"]:focus-within::after{
    animation:none !important;
    border-color:var(--zzz-ring-static) !important;
  }
}

/* ---- accents stay flat: colour marks semantics, not depth ---- */
html[${MARKER}] [class*="_newSession"] svg{color:var(--zzz-orange)}
/* the little chevron after a card title is the SAME component as the card
   itself (a ghost button, identical classes, no distinguishing ancestor), so CSS
   alone cannot separate the 20px one from the 380px one. The apply() pass below
   tags anything smaller than 36px with data-zzz-mini and this rule slims it. */
/* the attribute is repeated on purpose: it raises specificity above the dock
   card rule (0,3,2) without another !important */
html[${MARKER}] [data-zzz-mini][data-zzz-glyph][data-zzz-glyph]{
  background:transparent !important;
  background-image:none !important;
  border:0 !important;
  border-radius:999px !important;
  box-shadow:none !important;
  outline:0 !important;
  width:19px !important;
  height:19px !important;
  min-width:19px !important;
  min-height:19px !important;
  padding:0 !important;
  color:#8f8f8f !important;
}
html[${MARKER}] [data-zzz-mini][data-zzz-glyph][data-zzz-glyph]:hover{
  background:rgba(255,255,255,.09) !important;
  color:#f2f2f2 !important;
}

/* a dock tool card: the same three-layer card as the bubble, but on the card's
   own button so the frame and the plate belong to one element */
html[${MARKER}] [class*="_tabHost_"] [class*="_entryCell"] button,
html[${MARKER}] [class*="_tabHost_"] [class*="_entryCell"] a,
html[${MARKER}] [class*="_tabHost_"] [class*="_moreAnchor"] button{
  background-color:#282828 !important;
  background-image:var(--zzz-sheen),var(--zzz-weave) !important;
  background-size:100% 100%,var(--zzz-weave-size) !important;
  background-position:0 0,var(--zzz-weave-position) !important;
  background-clip:padding-box !important;
  border:var(--zzz-frame-w) solid var(--zzz-frame-color) !important;
  border-radius:var(--zzz-glass-radius) !important;
  box-sizing:border-box !important;
  box-shadow:
    var(--zzz-bevel-hi),
    var(--zzz-bevel-lo),
    0 0 0 1px #000,
    inset 0 0 0 0.5px rgba(0,0,0,.6),
    inset 0 0 10px rgba(0,0,0,.35) !important;
}
html[${MARKER}] [class*="_tabHost_"] [class*="_entryCell"] button:hover,
html[${MARKER}] [class*="_tabHost_"] [class*="_entryCell"] a:hover,
html[${MARKER}] [class*="_tabHost_"] [class*="_moreAnchor"] button:hover{
  border-color:#4f4f4f !important;
}
/* the three dock toggles sit in a chrome strip: round them like every other
   icon button in this UI (F3: an icon button is a disc, not a rounded square) */
html[${MARKER}] [class*="_stripChrome_"] button,
html[${MARKER}] [class*="_stripChrome_"] [role="button"]{
  border-radius:999px !important;
}

/* the side columns take the same paper as the centre one: without the screen
   tone the sidebars read as flat plastic next to a textured conversation area */
html[${MARKER}] [class*="_sidebarCol"] [data-slot="sidebar"] > *,
html[${MARKER}] [class*="_sidebarCol"] [data-slot="sidebar"] > * > *,
html[${MARKER}] [class*="_tabHost_"]{
  background-image:
    var(--zzz-weave-gap-a),var(--zzz-weave-gap-a),
    var(--zzz-weave-gap-b),var(--zzz-weave-gap-b) !important;
  background-size:6px 6px,6px 6px,6px 6px,6px 6px !important;
  background-position:0 0,3px 3px,3px 0,0 3px !important;
  background-repeat:repeat !important;
}

/* footer surfaces share the column base: the host tints them slightly, which
   made the left column's halftone read brighter than the right column's */
html[${MARKER}] [class*="_footArea"],
html[${MARKER}] [class*="_settingsArea"],
html[${MARKER}] [class*="_footerActions"]{
  background-color:transparent !important;
}

/* ===== sliders and progress bars: one electric-blue bar =====
   The reference is a pill track where ONLY the travelled part is lit: a
   violet-to-cyan gradient up to the thumb, grey-black groove after it (#4471ff
   -> #05bbff over #202020).  Chromium has no ::-webkit-slider-progress, so the
   travelled width rides on a --zzz-fill custom property that the client half
   keeps up to date from the input's value; the track draws it as a sized
   background layer over the dark groove.  Both keep the theme's black keyline:
   every surface in this UI is a coloured plate inside a black stroke. */
html[${MARKER}] input[type="range"]{
  -webkit-appearance:none !important;
  appearance:none !important;
  height:18px !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
}
html[${MARKER}] input[type="range"]::-webkit-slider-runnable-track{
  height:8px !important;
  border-radius:999px !important;
  /* three layers: a top sheen + the gradient, both cut at --zzz-fill, over the
     grey groove.  The glow lives on the sheen layer and the thumb, NOT on the
     track's box-shadow - a track shadow would halo the empty groove too. */
  background-image:var(--zzz-slider-sheen),var(--zzz-slider),var(--zzz-slider-groove) !important;
  background-repeat:no-repeat,no-repeat,no-repeat !important;
  background-position:0 0,0 0,0 0 !important;
  background-size:var(--zzz-fill,0%) 100%,var(--zzz-fill,0%) 100%,100% 100% !important;
  box-shadow:
    0 0 0 1.5px var(--zzz-slider-keyline),
    inset 0 0 6px rgba(0,0,0,.55) !important;
}
html[${MARKER}] input[type="range"]::-webkit-slider-thumb{
  -webkit-appearance:none !important;
  width:16px !important;
  height:16px !important;
  border-radius:50% !important;
  margin-top:-4px !important;
  background:var(--zzz-slider-thumb) !important;
  border:2px solid var(--zzz-slider-keyline) !important;
  box-shadow:
    0 0 0 2px var(--zzz-slider-glow),
    0 0 10px 1px var(--zzz-slider-glow),
    0 0 20px 2px rgba(5,187,255,.28) !important;
}
html[${MARKER}] input[type="range"]:focus-visible::-webkit-slider-thumb{
  box-shadow:0 0 0 3px #fcdd00;
}
html[${MARKER}] progress{
  -webkit-appearance:none;
  appearance:none;
  height:8px !important;
  border:0 !important;
  border-radius:999px !important;
  background:var(--zzz-slider-track) !important;
  box-shadow:0 0 0 1.5px #000, inset 0 0 6px rgba(0,0,0,.55) !important;
  overflow:hidden;
}
html[${MARKER}] progress::-webkit-progress-bar{
  background:var(--zzz-slider-track);
  border-radius:999px;
}
html[${MARKER}] progress::-webkit-progress-value{
  background:var(--zzz-slider);
  border-radius:999px;
  box-shadow:0 0 10px rgba(41,180,255,.45);
}

/* Page plane of the centre column: the background watermark plus the screen
   tone.  Both are BACKGROUND LAYERS, not an overlay: the halftone must never sit
   on top of a card frame, a yellow highlight or a glyph, which is what a
   full-window texture above the content does.  Here it is part of the paper, so
   anything opaque - a well, a filled row, text - is clean by construction. */
html[${MARKER}] [class*="_centerCol"]{
  background-image:
    var(--zzz-watermark),
    var(--zzz-weave-gap-a),var(--zzz-weave-gap-a),
    var(--zzz-weave-gap-b),var(--zzz-weave-gap-b) !important;
  background-repeat:no-repeat,repeat,repeat,repeat,repeat !important;
  background-position:50% 46%,0 0,3px 3px,3px 0,0 3px !important;
  background-size:auto 56vh,6px 6px,6px 6px,6px 6px,6px 6px !important;
}

/* The conversation panel paints its own opaque #131313 over the whole column,
   which hides the watermark.  It is the same colour as the column underneath,
   so dropping it changes nothing except letting the paper show through. */
html[${MARKER}] [class*="_centerCol"] [data-slot="main.conversation"] > [class*="_root"]{
  background-color:transparent !important;
}

/* ===== settings: three levels ===========================================
   L1: the settings dialog itself keeps the ZZZ halftone card (A-class).
   L2: page blocks tagged at run time with [data-zzz-glass] -> frosted glass.
   L3: contents; hover is a faint white wash, on/selected is the yellow accent.
   The tag is applied by the effect below, which stops at the first painted
   level, so a glass surface can never contain another one. */
html[${MARKER}] [data-zzz-glass]{
  background-color:var(--zzz-glass-fill) !important;
  background-image:none !important;
  border:0 !important;
  border-radius:var(--zzz-glass-radius) !important;
  box-shadow:none !important;
  backdrop-filter:var(--zzz-glass-blur) !important;
  -webkit-backdrop-filter:var(--zzz-glass-blur) !important;
}
/* L3: nothing inside the glass paints its own plate (switches, inputs and
   progress shapes keep their geometry) */
html[${MARKER}] [data-zzz-glass] *:not(input):not(progress):not([role="switch"]):not([role="switch"] *):not([class*="linkButton"]){
  background-color:transparent !important;
  background-image:none !important;
  box-shadow:none !important;
}
/* interaction: hover is light, on/selected is the yellow theme accent */
@media (hover:hover){
  html[${MARKER}] [data-zzz-glass] button:not(:disabled):hover,
  html[${MARKER}] [data-zzz-glass] a:hover,
  html[${MARKER}] [data-zzz-glass] [role="button"]:hover{
    background-color:var(--zzz-hl) !important;
  }
}
/* Appearance choice cubes (浅色 / 深色 / 跟随系统) are TOKEN-ONLY: no component rule.
   They resolve as the host defines them:
     idle      transparent, border --dsw-alias-border-l4      (theme: #525252)
     hover     background --dsw-alias-interactive-bg-hover    (#ffffff14)
     selected  background --dsw-alias-bg-module-platform      (theme: #333333)
               border-color --dsw-static-neutral-bluish-400   (host #adb2b8)
     radius    --dsw-radius-xl (20px)
   The selected rim comes from a raw palette token shared with 9 other references, so
   changing it would need a selector - leave it to the host for a pure-token result. */

/* ===== agent preset cards: selected = white text + breathing outline =====
   Token-first: the fill stays the token's job (--dsw-alias-bg-module-platform,
   which this theme binds to a neutral #333333) and the label colour is the host's
   own white - no colour override here at all. The breathing outline is the part a
   token cannot express, so it lives in the pseudo-element below. */
html[${MARKER}] [class*="_cardActive"]{
  position:relative !important;
  /* same translucent glass as the sibling cards: the host fill for the active card
     is an opaque #333333, which reads as a white plate next to the glass. The
     shared token is left alone (20+ consumers); this is the single exception. */
  background-color:var(--zzz-glass-fill) !important;
  background-image:none !important;
  border-color:transparent !important;
  box-shadow:none !important;
}
html[${MARKER}] [class*="_cardActive"]::after{
  content:"" !important;
  position:absolute !important;
  inset:-4px !important;
  border-width:3px !important;
  border-style:solid !important;
  border-color:var(--zzz-ring-a);
  border-radius:18px !important;
  pointer-events:none !important;
  animation:zzz-ring-breath var(--zzz-ring-t) ease-in-out infinite;
}
@media (prefers-reduced-motion:reduce){
  html[${MARKER}] [class*="_cardActive"]::after{
    animation:none !important;
    border-color:var(--zzz-ring-static) !important;
  }
}

/* lock: top-up stays orange (black label), also inside the settings glass */
html[${MARKER}] [data-zzz-glass] a[class*="linkButton"][class*="primary"],
html[${MARKER}] [data-zzz-glass] a[class*="linkButton"][class*="Primary"]{
  background:var(--zzz-orange) !important;
  background-image:none !important;
  color:#101010 !important;
  border:0 !important;
  box-shadow:none !important;
}
html[${MARKER}] [data-zzz-glass] a[class*="linkButton"][class*="primary"]:hover,
html[${MARKER}] [data-zzz-glass] a[class*="linkButton"][class*="Primary"]:hover{
  background:#ff6a22 !important;
  color:#101010 !important;
}

html[${MARKER}] [data-zzz-glass] :is(
  [aria-current="true"],[aria-selected="true"],[aria-checked="true"],
  [aria-pressed="true"],[data-state="on"],[data-state="active"],[data-state="checked"],
  [class$="_active"],[class$="_Active"],[class$="_tabActive"],[class$="_selected"]):not([class*="_cardMain"]):not([role="switch"]):not([class*="_switch"]){
  background-color:var(--zzz-yellow) !important;
  background-image:none !important;
  color:#101010 !important;
  border-color:transparent !important;
  box-shadow:none !important;
}
html[${MARKER}] [data-zzz-glass] :is(
  [aria-current="true"],[aria-selected="true"],[aria-checked="true"],
  [aria-pressed="true"],[data-state="on"],[data-state="active"],[data-state="checked"],
  [class$="_active"],[class$="_Active"],[class$="_tabActive"],[class$="_selected"]):not([class*="_cardMain"]):not([role="switch"]):not([class*="_switch"]) *{
  color:#101010 !important;
  -webkit-text-fill-color:#101010 !important;
}

/* ===== subagent / agent-team popovers: frosted glass =====
   NOTE: match the class TOKEN exactly ([class~=]). [class*="ZKlsPq_menu"] also hits
   ZKlsPq_menuBody, which would paint a second glass inside the panel. =====
   Both host panels paint their surface on ::before from --dsw-specific-menu, a
   token shared with ~19 packages, so it cannot be rebound. The host pseudo-surface
   is removed and the glass is painted on the panel itself - one layer, no residue.
   Parameters come from --zzz-glass-fill / --zzz-glass-blur / --zzz-glass-radius-sm. */
html[${MARKER}] [class~="ZKlsPq_menu"]::before,
html[${MARKER}] [class~="VoX2oq_panel"]::before,
html[${MARKER}] [data-team-panel="true"]::before{
  content:none !important;
  background:none !important;
  backdrop-filter:none !important;
}
html[${MARKER}] [class~="ZKlsPq_menu"],
html[${MARKER}] [class~="VoX2oq_panel"],
html[${MARKER}] [data-team-panel="true"]{
  /* floating above other glass panels: the light fill would let the layer below
     read through and look like double glass, so these take the stronger fill */
  background-color:var(--zzz-glass-fill-strong) !important;
  background-image:none !important;
  border:0 !important;
  border-radius:var(--zzz-glass-radius-sm) !important;
  box-shadow:none !important;
  backdrop-filter:var(--zzz-glass-blur) !important;
  -webkit-backdrop-filter:var(--zzz-glass-blur) !important;
}
/* nothing inside may paint a second surface; member/task rows keep only a hairline */
html[${MARKER}] [data-team-panel="true"] *{
  background-color:transparent !important;
  background-image:none !important;
}
html[${MARKER}] [class*="VoX2oq_member"],
html[${MARKER}] [class*="VoX2oq_task"]{
  box-shadow:inset 0 0 0 0.5px rgba(255,255,255,.07) !important;
}

/* dockkit pane tabs: no edge fade at all. The host's 24px mask reads as a grey
   gradient over the yellow plate, and even 8px still clipped the capsule's corner.
   The title mask is dropped too (it cut the label). */
html[${MARKER}] [data-dockkit-strip-tabs],
html[${MARKER}] [data-dockkit-strip-tabs][data-dockkit-strip-scroll="end"],
html[${MARKER}] [data-dockkit-strip-tabs][data-dockkit-strip-scroll="start"]{
  -webkit-mask-image:none !important;
  mask-image:none !important;
}
html[${MARKER}] [data-dockkit-tab-title]{
  -webkit-mask-image:none !important;
  mask-image:none !important;
}

/* composer "+" button: solid disc with a STATIC black background (no hover lift).
   #0b0b0b rest and hover, #dcdcdc glyph.

   The host fill token (--dsw-specific-selector) is shared with the voice-input disc,
   so the change is scoped here rather than rebinding the token. */
html[${MARKER}] [data-composer-card="true"] button[class*="uV2eYG_add"]{
  background:#0b0b0b !important;
  background-image:none !important;
  color:#dcdcdc !important;
  border:0 !important;
  box-shadow:none !important;
}

/* open-in-app split button: one STATIC #0b0b0b pill (no hover lift).
   The host draws a .5px box with a divider between main and chevron; both go away. */
html[${MARKER}] [class*="OMoRSG_split"]{
  background:#0b0b0b !important;
  background-image:none !important;
  border:0 !important;
  border-radius:999px !important;
  overflow:hidden !important;
}
html[${MARKER}] [class*="OMoRSG_main"],
html[${MARKER}] [class*="OMoRSG_chevron"]{
  background:transparent !important;
  background-image:none !important;
  color:#dcdcdc !important;
  border:0 !important;
}

/* ===== filter chips: idle / hover / active =====
   Same interaction language as every other control: transparent when idle, a faint
   white wash on hover, the yellow theme highlight when on. Shape and metrics stay
   the host's (24px tall, 8px side padding, 999px capsule). */
html[${MARKER}] [class*="_pill"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [class*="_chip"]:not([class*="_sidebarCol"] *){
  background-color:transparent !important;
  background-image:none !important;
  color:var(--dsw-alias-label-secondary) !important;
  border-radius:999px !important;
  box-shadow:none !important;
}
@media (hover:hover){
  html[${MARKER}] [class*="_pill"]:not([class*="_sidebarCol"] *):hover,
  html[${MARKER}] [class*="_chip"]:not([class*="_sidebarCol"] *):hover{
    background-color:var(--zzz-hl) !important;
    color:var(--dsw-alias-label-primary) !important;
  }
}
/* active: the yellow plate, whatever the component calls it (class or aria) */
html[${MARKER}] [class*="_pill"][class*="_active"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [class*="_chip"][class*="_active"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [class*="_pill"][aria-selected="true"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [class*="_chip"][aria-selected="true"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [class*="_pill"][aria-pressed="true"]:not([class*="_sidebarCol"] *),
html[${MARKER}] [class*="_chip"][aria-pressed="true"]:not([class*="_sidebarCol"] *){
  /* verbatim copy of the selected session-row plate: 135deg breathing gradient +
     hatch + a corner darkening overlay, no inset ring. Only the radius is a
     capsule instead of the row's 8px. */
  background-image:var(--zzz-plate) !important;
  color:#101010 !important;
  box-shadow:none !important;
  border-radius:999px !important;
  animation:zzz-plate-breath var(--zzz-ring-t) ease-in-out infinite;
}
@media (prefers-reduced-motion:reduce){
  html[${MARKER}] [class*="_pill"][class*="_active"]:not([class*="_sidebarCol"] *),
  html[${MARKER}] [class*="_chip"][class*="_active"]:not([class*="_sidebarCol"] *),
  html[${MARKER}] [class*="_pill"][aria-selected="true"]:not([class*="_sidebarCol"] *),
  html[${MARKER}] [class*="_chip"][aria-selected="true"]:not([class*="_sidebarCol"] *){
    animation:none !important;
  }
}
html[${MARKER}] [class*="_pill"][class*="_active"]:not([class*="_sidebarCol"] *) *,
html[${MARKER}] [class*="_chip"][class*="_active"]:not([class*="_sidebarCol"] *) *,
html[${MARKER}] [class*="_pill"][aria-selected="true"]:not([class*="_sidebarCol"] *) *,
html[${MARKER}] [class*="_chip"][aria-selected="true"]:not([class*="_sidebarCol"] *) *{
  color:#101010 !important;
  -webkit-text-fill-color:#101010 !important;
}

/* ===== square icon buttons become circles =====
   Tagged by the effect below when a button's box is (nearly) square; the radius is
   forced to a circle and corner-shape is pinned so the host's superellipse does not
   squash it. */
html[${MARKER}] [data-zzz-round]{
  /* the corner is indirection: control skins read --zzz-ctl-radius, so a tagged
     button becomes a circle without out-specificity-ing them */
  --zzz-ctl-radius:999px;
  border-radius:999px !important;
  corner-shape:round !important;
}

/* ===== toast (host primitive, used by the update check) =====
   Fill and shadow come from the token bindings; blur has no token and the icon colour
   (--dsw-alias-state-warn-label, 14 refs) is shared with other warnings, so both are
   handled here. */
html[${MARKER}] [class*="_toast_"]{
  backdrop-filter:var(--zzz-glass-blur);
  -webkit-backdrop-filter:var(--zzz-glass-blur);
}
html[${MARKER}] [class*="_toast_"] [class*="_icon_"]{
  color:var(--zzz-yellow);
}

/* ===== progress indicators: one gradient (violet -> blue) =====
   native <progress> is themed above; this block covers the two component-built bars. */
html[${MARKER}] [class*="gSkjMW_progressBar"]{
  /* the file-card indeterminate bar: same gradient as the slider, and the tiny 1px
     host radius becomes a capsule so it reads as the same control family */
  background:var(--zzz-slider);
  border-radius:999px;
}
html[${MARKER}] [class*="gSkjMW_progressTrack"]{
  border-radius:999px;
}
/* context usage ring: an SVG stroke needs a paint server - see the injected
   <linearGradient id="zzz-meter-grad"> in the client half */
html[${MARKER}] [class*="JObwrW_fill"]{
  stroke:url(#zzz-meter-grad);
}

/* ===== black text on yellow =====
   Anything the runtime tags as sitting on a yellow surface gets black text, icons and
   strokes. The tag is applied by the effect below and removed when the surface stops
   being yellow. */
html[${MARKER}] [data-zzz-on-yellow]{
  /* colour needs the important: the host ships color: … !important in places */
  color:#101010 !important;
}
html[${MARKER}] [data-zzz-on-yellow] *,
html[${MARKER}] [data-zzz-on-yellow] svg,
html[${MARKER}] [data-zzz-on-yellow] svg *{
  /* colour only. fill/stroke are NOT forced: outline icons (fill="none") would be
     painted solid, and fill-only icons would grow an outline. Icons whose paint is
     hard-coded white are rewritten to currentColor by the tagging effect instead. */
  color:#101010 !important;
  -webkit-text-fill-color:#101010;
}

/* ===== markdown table: frosted glass wrapper =====
   The host paints no background for tables; the fill lives on the scroll wrapper, so the
   th/td border rules (the lines) keep working untouched. Nothing here declares border or
   background for th/td. */
html[${MARKER}] [class*="_tableScroll_"]{
  background-color:var(--zzz-glass-fill);
  background-image:none;
  border-radius:var(--zzz-glass-radius-sm);
  box-shadow:none;
  backdrop-filter:var(--zzz-glass-blur);
  -webkit-backdrop-filter:var(--zzz-glass-blur);
  /* inset so the glass reads as a panel around the grid, not a page-wide band */
  padding:6px 14px;
  box-sizing:border-box;
  /* the host's table flow is full-width and left-aligned inside the message column;
     that is what reads as "off-centre" here. Shrink to the grid and centre it, which
     is the smallest deviation that removes the skew (measured: 183px / 183px). */
  width:fit-content;
  max-width:100%;
  margin-left:auto;
  margin-right:auto;
}

/* ===== queued-message dock: frosted glass =====
   The host paints the dock on ::before from --dsw-specific-menu (shared, 19 packages)
   plus a 0.5px rim on ::after. Re-paint the pseudo-element as glass and drop the rim;
   row separators become a faint hairline instead of a solid border colour. */
html[${MARKER}] [class*="_7yHdaG_panel"]::before{
  background:var(--zzz-glass-fill);
  background-image:none;
  backdrop-filter:var(--zzz-glass-blur);
  -webkit-backdrop-filter:var(--zzz-glass-blur);
  border-radius:inherit;
}
html[${MARKER}] [class*="_7yHdaG_panel"]::after{
  content:none;
  border:0;
}
html[${MARKER}] [class*="_7yHdaG_row"] + [class*="_7yHdaG_row"]{
  box-shadow:inset 0 0.5px 0 rgba(255,255,255,.07);
}

/* ===== unified switch =====
   Same language as the slider bar: the track is the dark groove when off and the
   blue gradient when on; the thumb is the white slider knob with its blue glow.
   One geometry for both implementations: 36x20 r999, 16px thumb at 2px. */
html[${MARKER}] button[role="switch"]{
  position:relative !important;
  box-sizing:border-box !important;
  width:36px !important;
  min-width:36px !important;
  height:20px !important;
  border-radius:999px !important;
  background:var(--zzz-slider-groove) !important;
  background-image:var(--zzz-slider-groove) !important;
  border:0 !important;
  padding:0 !important;
  box-shadow:0 0 0 1.5px var(--zzz-slider-keyline) !important;
  overflow:hidden !important;
}
html[${MARKER}] button[role="switch"] > span{
  position:absolute !important;
  left:2px !important;
  top:2px !important;
  width:16px !important;
  height:16px !important;
  margin:0 !important;
  border-radius:50% !important;
  background:var(--zzz-slider-thumb) !important;
  border:0 !important;
  box-shadow:none !important;
  transform:none !important;
  transition:transform .18s ease, box-shadow .18s ease !important;
}
html[${MARKER}] button[role="switch"][aria-checked="true"]{
  background:var(--zzz-slider) !important;
  background-image:var(--zzz-slider) !important;
}
html[${MARKER}] button[role="switch"][aria-checked="true"] > span{
  transform:translateX(16px) !important;
  background:var(--zzz-slider-thumb) !important;
  box-shadow:
    0 0 0 1.5px var(--zzz-slider-glow),
    0 0 8px 1px rgba(5,187,255,.45) !important;
}
/* the plugin switch (checkbox + i) follows the same recipe */
html[${MARKER}] .dsh-tbp-switch i{
  background:var(--zzz-slider-groove) !important;
  box-shadow:0 0 0 1.5px var(--zzz-slider-keyline) !important;
}
html[${MARKER}] .dsh-tbp-switch i::after{
  background:var(--zzz-slider-thumb) !important;
}
html[${MARKER}] .dsh-tbp-switch input:checked + i{
  background:var(--zzz-slider) !important;
  background-image:var(--zzz-slider) !important;
}
html[${MARKER}] .dsh-tbp-switch input:checked + i::after{
  background:var(--zzz-slider-thumb) !important;
  box-shadow:
    0 0 0 1.5px var(--zzz-slider-glow),
    0 0 8px 1px rgba(5,187,255,.45) !important;
}

/* conversation text sits above the moving void: dark shadow base for legibility */
html[${MARKER}] [data-slot="main.conversation"]{
  text-shadow:
    0 0 2px rgba(0,0,0,.85),
    0 1px 3px rgba(0,0,0,.70),
    0 0 12px rgba(0,0,0,.45);
}
html[${MARKER}] [data-slot="main.conversation"] :where(pre, code){
  text-shadow:none;
}
.zzz-brand{
  display:block;
  object-fit:contain;
  pointer-events:none;
  user-select:none;
  filter:drop-shadow(0 1px 0 rgba(0,0,0,.55));
}

/* ===== zzz void: conversation background ===== */
html[${MARKER}] [class*="_centerCol"]{ position:relative; isolation:isolate; }
html[${MARKER}] .zzz-void{ position:absolute; inset:0; z-index:-1; overflow:hidden; pointer-events:none; }
html[${MARKER}] .zzz-void-stage{ position:absolute; left:50%; top:50%; width:680px; height:680px; transform:translate(-50%,-50%); }
html[${MARKER}] .zzz-void-dome{
  position:absolute; left:50%; top:50%; width:268px; height:268px;
  transform:translate(-50%,-50%); border-radius:50%;
  clip-path:circle(50% at 50% 50%);
  background:#0d0d13;
}
html[${MARKER}] .zzz-void-fresnel{
  position:absolute; left:50%; top:50%; width:268px; height:268px;
  transform:translate(-50%,-50%); border-radius:50%;
  /* background comes from the generated spherical texture (JS inline) */
  background:transparent;
  clip-path:circle(50% at 50% 50%);
  mix-blend-mode:screen; transform-origin:50% 50%;
}
html[${MARKER}] .zzz-void-band{ position:absolute; inset:0; width:680px; height:680px; }
`

    function BrandMark(props) {
      const size = props && props.size ? props.size : 26
      return h('img', {
        className: 'zzz-brand',
        src: LOGO_DATA_URI,
        width: Math.round(size * 0.94),
        height: size,
        alt: '',
        'aria-hidden': 'true',
        draggable: false,
      })
    }
    // ---- ZZZ settings: persisted preferences shared with the void effect ----
    const PREF_KEY = 'dsh-theme-zzz:prefs'
    const clampNum = (v, lo, hi, fallback) => {
      const n = typeof v === 'number' && isFinite(v) ? v : NaN
      return isFinite(n) ? Math.max(lo, Math.min(hi, n)) : fallback
    }
    const voidPrefs = (() => {
      let saved = {}
      try { saved = JSON.parse(localStorage.getItem(PREF_KEY) || '{}') || {} } catch (e) { saved = {} }
      return {
        void: typeof saved.void === 'boolean' ? saved.void : true,
        low: typeof saved.low === 'boolean' ? saved.low : false,
        voidSize: clampNum(saved.voidSize, 420, 920, 680),
        voidSpeed: clampNum(saved.voidSpeed, 0.3, 2.5, 1),
        voidZoom: clampNum(saved.voidZoom, 1, 1.6, 1.2),
        voidFollow: clampNum(saved.voidFollow, 0.2, 3, 1),
        fontSans: typeof saved.fontSans === 'boolean' ? saved.fontSans : false,
        fontBold: typeof saved.fontBold === 'string' ? saved.fontBold : '印品鸿蒙体',
        fontThin: typeof saved.fontThin === 'string' ? saved.fontThin : '印品鸿蒙体 D40',
      }
    })()
    const voidPrefListeners = new Set()
    function updateVoidPrefs(patch) {
      Object.assign(voidPrefs, patch)
      try { localStorage.setItem(PREF_KEY, JSON.stringify(voidPrefs)) } catch (e) {}
      for (const fn of Array.from(voidPrefListeners)) {
        try { fn() } catch (e) {}
      }
    }

    // Settings-page copy lives in locale/zh.json + locale/en.json (served by index.js);
    // the defaults below keep the page readable if that request fails.
    const STR = {
      title: 'ZZZ 主题',
      eyebrow: 'ZENLESS ZONE ZERO',
      voidGroup: '空洞',
      voidDesc: '会话区背景的动态空洞效果。',
      voidToggle: '空洞开关',
      voidToggleDesc: '关闭后空洞不再显示，动画同时暂停。',
      voidSize: '空洞大小',
      voidSizeDesc: '空洞的默认直径（420–920 px）。',
      voidSpeed: '动画速度',
      voidSpeedDesc: '光带流动速度的倍数（0.3–2.5）。',
      voidZoom: '点按放大',
      voidZoomDesc: '按住鼠标时的放大倍数（1.0–1.6）。',
      voidFollow: '跟随速度',
      voidFollowDesc: '越大越紧跟鼠标（0.2–3.0）。',
      perfToggle: '性能模式',
      perfToggleDesc: 'DPR 降到 1.0、纹理 96、帧率 20，并关闭紧贴辉光；DPR 与纹理刷新后完全生效。',
      fontGroup: '字体',
      fontDesc: '由于绝区零使用的印品鸿蒙体不允许无授权的二次分发，本主题不自带印品鸿蒙体字体文件。若你的电脑上自行安装了印品鸿蒙体，主题会识别到并使用，否则回退至思源黑体。',
      fontSans: '使用思源黑体',
      fontSansDesc: '跳过自定义字体，始终使用思源黑体。',
      fontBold: '粗体字体',
      fontBoldDesc: '填系统内的字体名（不是文件名）。',
      fontBoldPlaceholder: '印品鸿蒙体',
      fontThin: '细体字体',
      fontThinDesc: '填系统内的字体名（不是文件名）。',
      fontThinPlaceholder: '印品鸿蒙体 D40',
    }
    const strListeners = new Set()
    async function loadStrings() {
      const lang = String(document.documentElement.lang || navigator.language || 'zh')
        .toLowerCase().startsWith('zh') ? 'zh' : 'en'
      try {
        const res = await fetch('/zzz-theme/locale/' + lang + '.json', { cache: 'no-cache' })
        if (res.ok) {
          const data = await res.json()
          if (data && data.settings && typeof data.settings === 'object') Object.assign(STR, data.settings)
        }
      } catch (e) {
        /* keep the built-in defaults */
      }
      for (const fn of Array.from(strListeners)) {
        try { fn() } catch (e) {}
      }
    }

    function ZzzSwitch(props) {
      const on = !!props.checked
      return h('button', {
        type: 'button',
        role: 'switch',
        'aria-checked': on ? 'true' : 'false',
        onClick: props.onChange,
        style: {
          position: 'relative', flex: '0 0 auto', width: '44px', height: '24px',
          padding: 0, borderRadius: '999px',
          border: '1px solid var(--dsw-alias-border-l2)',
          background: on ? 'var(--dsw-alias-brand-primary)' : 'var(--dsw-alias-bg-layer-3)',
          cursor: 'pointer', transition: 'background .15s ease',
        },
      }, h('span', {
        style: {
          position: 'absolute', top: '2px', left: on ? '22px' : '2px',
          width: '18px', height: '18px', borderRadius: '50%',
          background: on ? '#101010' : 'var(--dsw-alias-label-secondary)',
          transition: 'left .15s ease',
        },
      }))
    }

    function ZzzSettingRow(props) {
      return h('div', {
        style: {
          display: 'flex', alignItems: 'center', gap: '16px',
          padding: '14px 0',
          borderTop: '1px solid var(--dsw-alias-border-l1)',
        },
      },
      h('div', { style: { flex: '1', minWidth: '0' } },
        h('div', {
          style: { color: 'var(--dsw-alias-label-primary)', fontSize: '14px', lineHeight: '1.5' },
        }, props.title),
        props.desc
          ? h('div', {
              style: {
                color: 'var(--dsw-alias-label-secondary)', fontSize: '12px',
                lineHeight: '1.6', marginTop: '2px',
              },
            }, props.desc)
          : null),
      h(ZzzSwitch, { checked: props.checked, onChange: props.onChange }))
    }

    function ZzzTextField(props) {
      return h('div', {
        style: {
          display: 'flex', alignItems: 'center', gap: '16px',
          padding: '10px 0',
          borderTop: '1px solid var(--dsw-alias-border-l1)',
        },
      },
      h('div', { style: { flex: '1', minWidth: '0' } },
        h('div', {
          style: { color: 'var(--dsw-alias-label-primary)', fontSize: '14px', lineHeight: '1.5' },
        }, props.label),
        props.desc
          ? h('div', {
              style: {
                color: 'var(--dsw-alias-label-secondary)', fontSize: '12px',
                lineHeight: '1.6', marginTop: '2px',
              },
            }, props.desc)
          : null),
      h('input', {
        type: 'text',
        value: props.value,
        placeholder: props.placeholder,
        spellCheck: false,
        onChange: (e) => {
          props.onChange(e.target.value)
          if (voidPrefs.fontSans) updateVoidPrefs({ fontSans: false })
        },
        style: {
          flex: '0 0 auto', width: '190px', boxSizing: 'border-box',
          background: 'var(--dsw-alias-bg-layer-2)',
          color: 'var(--dsw-alias-label-primary)',
          border: '1px solid var(--dsw-alias-border-l2)',
          borderRadius: '8px', padding: '6px 10px', fontSize: '13px',
          outline: 'none',
        },
      }))
    }

    function ZzzSlider(props) {
      return h('div', {
        style: {
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '10px 0',
          borderTop: '1px solid var(--dsw-alias-border-l1)',
        },
      },
      h('div', { style: { flex: '1', minWidth: '0' } },
        h('div', {
          style: { color: 'var(--dsw-alias-label-primary)', fontSize: '14px', lineHeight: '1.5' },
        }, props.label),
        props.desc
          ? h('div', {
              style: {
                color: 'var(--dsw-alias-label-secondary)', fontSize: '12px',
                lineHeight: '1.6', marginTop: '2px',
              },
            }, props.desc)
          : null),
      h('input', {
        type: 'range',
        min: props.min, max: props.max, step: props.step,
        value: props.value,
        onChange: (e) => props.onChange(Number(e.target.value)),
        style: {
          flex: '0 0 auto', width: '150px', cursor: 'pointer',
          accentColor: 'var(--dsw-alias-brand-primary)',
        },
      }),
      h('div', {
        style: {
          flex: '0 0 auto', width: '58px', textAlign: 'right',
          color: 'var(--dsw-alias-label-secondary)', fontSize: '12px',
          fontVariantNumeric: 'tabular-nums',
        },
      }, props.display))
    }

    function ZzzSettings() {
      const snapshot = () => ({
        void: voidPrefs.void,
        low: voidPrefs.low,
        voidSize: voidPrefs.voidSize,
        voidSpeed: voidPrefs.voidSpeed,
        voidZoom: voidPrefs.voidZoom,
        voidFollow: voidPrefs.voidFollow,
        fontSans: voidPrefs.fontSans,
        fontBold: voidPrefs.fontBold,
        fontThin: voidPrefs.fontThin,
      })
      const [prefs, setPrefs] = React.useState(snapshot)
      React.useEffect(() => {
        const fn = () => setPrefs(snapshot())
        voidPrefListeners.add(fn)
        return () => { voidPrefListeners.delete(fn) }
      }, [])
      const [, bumpStrings] = React.useState(0)
      React.useEffect(() => {
        const fn = () => bumpStrings((n) => n + 1)
        strListeners.add(fn)
        return () => { strListeners.delete(fn) }
      }, [])
      return h('div', { style: { padding: '0 0 8px' } },
        h('div', {
          style: {
            color: 'var(--dsw-alias-label-primary)',
            fontSize: '24px', fontWeight: 800, letterSpacing: '0.02em',
            lineHeight: '1.3', padding: '2px 0 4px',
          },
        }, STR.title),
        h('div', {
          style: {
            color: 'var(--dsw-alias-brand-primary)', fontSize: '11px',
            fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
            paddingBottom: '10px',
          },
        }, STR.eyebrow),
        h('div', {
          style: { color: 'var(--dsw-alias-label-primary)', fontSize: '15px', fontWeight: 600, paddingBottom: '6px' },
        }, STR.voidGroup),
        h('div', {
          style: { color: 'var(--dsw-alias-label-secondary)', fontSize: '12px', lineHeight: '1.6' },
        }, STR.voidDesc),
        h(ZzzSettingRow, {
          title: STR.voidToggle,
          desc: STR.voidToggleDesc,
          checked: prefs.void,
          onChange: () => updateVoidPrefs({ void: !voidPrefs.void }),
        }),
        h(ZzzSettingRow, {
          title: STR.perfToggle,
          desc: STR.perfToggleDesc,
          checked: prefs.low,
          onChange: () => updateVoidPrefs({ low: !voidPrefs.low }),
        }),
        h(ZzzSlider, {
          label: STR.voidSize, desc: STR.voidSizeDesc,
          min: 420, max: 920, step: 20, value: prefs.voidSize,
          display: prefs.voidSize + 'px',
          onChange: (v) => updateVoidPrefs({ voidSize: v }),
        }),
        h(ZzzSlider, {
          label: STR.voidSpeed, desc: STR.voidSpeedDesc,
          min: 0.3, max: 2.5, step: 0.1, value: prefs.voidSpeed,
          display: prefs.voidSpeed.toFixed(1) + 'x',
          onChange: (v) => updateVoidPrefs({ voidSpeed: v }),
        }),
        h(ZzzSlider, {
          label: STR.voidZoom, desc: STR.voidZoomDesc,
          min: 1, max: 1.6, step: 0.05, value: prefs.voidZoom,
          display: prefs.voidZoom.toFixed(2) + 'x',
          onChange: (v) => updateVoidPrefs({ voidZoom: v }),
        }),
        h(ZzzSlider, {
          label: STR.voidFollow, desc: STR.voidFollowDesc,
          min: 0.2, max: 3, step: 0.1, value: prefs.voidFollow,
          display: prefs.voidFollow.toFixed(1) + 'x',
          onChange: (v) => updateVoidPrefs({ voidFollow: v }),
        }),
        h('div', {
          style: { color: 'var(--dsw-alias-label-primary)', fontSize: '15px', fontWeight: 600, padding: '20px 0 6px' },
        }, STR.fontGroup),
        h('div', {
          style: { color: 'var(--dsw-alias-label-secondary)', fontSize: '12px', lineHeight: '1.6' },
        }, STR.fontDesc),
        h(ZzzTextField, {
          label: STR.fontBold,
          desc: STR.fontBoldDesc,
          value: prefs.fontBold,
          placeholder: STR.fontBoldPlaceholder,
          onChange: (v) => updateVoidPrefs({ fontBold: v }),
        }),
        h(ZzzTextField, {
          label: STR.fontThin,
          desc: STR.fontThinDesc,
          value: prefs.fontThin,
          placeholder: STR.fontThinPlaceholder,
          onChange: (v) => updateVoidPrefs({ fontThin: v }),
        }),
        h(ZzzSettingRow, {
          title: STR.fontSans,
          desc: STR.fontSansDesc,
          checked: prefs.fontSans,
          onChange: () => updateVoidPrefs({ fontSans: !voidPrefs.fontSans }),
        }))
    }

    function apply(ctx) {
      try {
      ctx.effect(() => {
        for (const stale of document.querySelectorAll('style[data-plugin="dsh-theme-zzz"]')) stale.remove()
        // debris from the debug probe used while reverse-engineering the DOM:
        // an older build appended a fixed-position debug <pre> without a marker
        // attribute, so match it by how it was styled instead.
        for (const stale of document.querySelectorAll('pre')) {
          const cs = getComputedStyle(stale)
          if (cs.position === 'fixed' && cs.zIndex === '2147483647') stale.remove()
        }
        const el = document.createElement('style')
        el.id = STYLE_ID
        el.setAttribute('data-plugin', 'dsh-theme-zzz')
        el.textContent = CSS
        document.head.append(el)
        return () => el.remove()
      }, 'dsh-theme-zzz: stylesheet')

      ctx.effect(() => {
        const root = document.documentElement
        root.setAttribute(MARKER, '')
        return () => root.removeAttribute(MARKER)
      }, 'dsh-theme-zzz: marker')

      // One MutationObserver for the whole client half. Three effects used to create
      // their own observer (and two intervals polled the DOM); a single observer with
      // the union of the watch options is enough, and each effect only registers a
      // handler. Handlers are wrapped so one failure cannot stop the others.
      // Build marker: the recorder reads it to prove which bundle is running.
      const BUILD = '2026-11-02T22'
      document.documentElement.dataset.zzzThemeBuild = BUILD

      const domWatchers = new Set()
      const domObserver = new MutationObserver((records) => {
        for (const handler of domWatchers) {
          try {
            handler(records)
          } catch (error) {
            /* keep the other handlers alive */
          }
        }
      })
      domObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style', 'disabled'],
      })

      // ===== zzz void: conversation-area background =====
      // Single source of truth for the hollow's tunables. The design spec quotes
      // these numbers; change them here and nowhere else.
      const VOID = {
        SIZE: 680,              // stage / band canvas side, CSS px
        RADIUS: 134,            // band centreline radius
        BAND_W: 8.54,           // band width: constant under zoom
        SHADOW_W: 13.82,        // outer contact shadow width (= BAND_W / 0.618)
        SHADOW_ALPHA: 'rgba(0,0,0,.50)',
        SHADOW_DEBUG_ALPHA: 'rgba(255,0,0,.60)',
        ZOOM: 1.2,              // press-and-hold scale
        ZOOM_TAU: 110,          // ms
        FPS: 24,
        FPS_ZOOM: 60,
        FPS_LOW: 20,
        FPS_LOW_ZOOM: 40,
        DPR: 1.5,
        DPR_LOW: 1.0,
        FRES_SIZE: 128,
        FRES_SIZE_LOW: 96,
        FRES_SPEED: 0.30 / 275, // noise z units per ms
        FRES_HOLE: 0.10,        // fully transparent core radius (ratio of R)
        FRES_HOLE_W: 0.03,      // hole transition width
        FRES_ALPHA_EXP: 1.6,
        GLOW_DIV: 2,            // glow layers render at 1/GLOW_DIV resolution
        BLUR_IN: 10.5,
        BLUR_OUT: 5.5,
        BLUR_TIGHT: 2.5,
        ALPHA_IN: 1.00,
        ALPHA_OUT: 0.95,
        ALPHA_TIGHT: 0.78,
        TICKS: 1200,
        WHITE_SMOOTH: 20,       // circular smoothing half-window
      }
      ctx.effect(() => {
        const reduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
        const W = VOID.SIZE, R = VOID.RADIUS, C = W / 2, TAU = Math.PI * 2
        // One place for the void's debug switches:
        //   ?voidhide=outer,inner,tight,band,canvas,fresnel,dome,shadow
        //   ?nofollow  ?voidshadow  ?voidlow  ?voidfres=96
        const DEBUG = (() => {
          const q = new URLSearchParams(location.search)
          return {
            hide: (q.get('voidhide') || '').split(',').map((x) => x.trim()).filter(Boolean),
            nofollow: q.has('nofollow'),
            shadow: q.has('voidshadow'),
            low: q.has('voidlow'),
            fres: q.get('voidfres'),
          }
        })()
        const on = (name) => DEBUG.hide.indexOf(name) < 0
        // live tunables from the settings page (the tick reads them every frame)
        const sizeScale = () =>
          Math.max(0.6, Math.min(1.4, (Number(voidPrefs.voidSize) || VOID.SIZE) / VOID.SIZE))
        const followTau = () =>
          180 / Math.max(0.2, Math.min(3, Number(voidPrefs.voidFollow) || 1))
        const speedFactor = () =>
          Math.max(0.3, Math.min(2.5, Number(voidPrefs.voidSpeed) || 1))
        const zoomMax = () =>
          Math.max(1, Math.min(1.6, Number(voidPrefs.voidZoom) || VOID.ZOOM))
        // low-power mode: ?voidlow, the settings toggle, or a small machine
        const LOW = DEBUG.low ||
          (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4 || voidPrefs.low
        const DPR = Math.min(window.devicePixelRatio || 1, LOW ? VOID.DPR_LOW : VOID.DPR)
        // live check: the settings toggle can enter low mode without a reload
        const lowNow = () => LOW || voidPrefs.low

        const layer = document.createElement('div')
        layer.className = 'zzz-void'
        layer.setAttribute('aria-hidden', 'true')
        const stageEl = document.createElement('div')
        stageEl.className = 'zzz-void-stage'
        const dome = document.createElement('div')
        dome.className = 'zzz-void-dome'
        const fres = document.createElement('canvas')
        fres.className = 'zzz-void-fresnel'
        const cvs = document.createElement('canvas')
        cvs.className = 'zzz-void-band'
        cvs.width = cvs.height = Math.round(W * DPR)
        const g = cvs.getContext('2d')
        g.scale(DPR, DPR)
        stageEl.append(dome, fres, cvs)
        if (!on('dome')) dome.remove()
        if (!on('fresnel')) fres.remove()
        if (!on('canvas')) cvs.remove()
        layer.append(stageEl)

        // 4D gradient noise
        const perm = new Uint8Array(512)
        ;(() => {
          let seed = 20261030
          const rnd = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296
          const p = new Uint8Array(256)
          for (let i = 0; i < 256; i++) p[i] = i
          for (let i = 255; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); const t = p[i]; p[i] = p[j]; p[j] = t }
          for (let i = 0; i < 512; i++) perm[i] = p[i & 255]
        })()
        const G4 = [
          [0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],
          [0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],
          [1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],
          [-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],
          [1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],
          [-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],
          [1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],
          [-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]
        ]
        const fadeQ = (t) => t * t * t * (t * (t * 6 - 15) + 10)
        function noise4(x, y, z, w) {
          const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), wi = Math.floor(w)
          const xf = x - xi, yf = y - yi, zf = z - zi, wf = w - wi
          const u = fadeQ(xf), v = fadeQ(yf), s = fadeQ(zf), t = fadeQ(wf)
          const X = xi & 255, Y = yi & 255, Z = zi & 255, Wm = wi & 255
          let n = 0
          for (let i = 0; i < 2; i++)
            for (let j = 0; j < 2; j++)
              for (let k = 0; k < 2; k++)
                for (let l = 0; l < 2; l++) {
                  const gr = G4[perm[(perm[(perm[(perm[(X + i) & 255] + Y + j) & 255] + Z + k) & 255] + Wm + l) & 255] & 31]
                  const dot = gr[0] * (xf - i) + gr[1] * (yf - j) + gr[2] * (zf - k) + gr[3] * (wf - l)
                  const wt = (i ? u : 1 - u) * (j ? v : 1 - v) * (k ? s : 1 - s) * (l ? t : 1 - t)
                  n += wt * dot
                }
          return n * 1.6
        }

        // Oklab palette
        const toLin = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
        const toSrgb = (c) => (c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055)
        function rgbToOklab(r, gg, b) {
          r = toLin(r / 255); gg = toLin(gg / 255); b = toLin(b / 255)
          const l = 0.4122214708 * r + 0.5363325363 * gg + 0.0514459929 * b
          const m = 0.2119034982 * r + 0.6806995451 * gg + 0.1073969566 * b
          const s = 0.0883024619 * r + 0.2817188376 * gg + 0.6299787005 * b
          const l_ = Math.cbrt(l), m_ = Math.cbrt(m), s_ = Math.cbrt(s)
          return [
            0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
            1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
            0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_
          ]
        }
        function oklabToRgb(L, a, b) {
          const l_ = L + 0.3963377774 * a + 0.2158037573 * b
          const m_ = L - 0.1055613458 * a - 0.0638541728 * b
          const s_ = L - 0.0894841775 * a - 1.2914855480 * b
          const l = l_ * l_ * l_, m = m_ * m_ * m_, s = s_ * s_ * s_
          return [
            Math.max(0, Math.min(255, toSrgb(+4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s) * 255)),
            Math.max(0, Math.min(255, toSrgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s) * 255)),
            Math.max(0, Math.min(255, toSrgb(-0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s) * 255))
          ]
        }
        const STOPS = [
          [0.00, 0x3f, 0x96, 0xdc],
          [0.10, 0x4d, 0x6c, 0xd8],
          [0.24, 0x62, 0x50, 0xca],
          [0.40, 0x78, 0x45, 0xd2],
          [0.56, 0x96, 0x45, 0xdc],
          [0.70, 0xb2, 0x4c, 0xc4],
          [0.80, 0xb0, 0x68, 0xc8],
          [0.90, 0x6d, 0x8c, 0xd8],
          [1.00, 0x3f, 0x96, 0xdc]
        ].map(([t, r, gg, b]) => [t, ...rgbToOklab(r, gg, b)])

        const LUT_N = 512
        const lut = new Uint8ClampedArray(LUT_N * 3)
        for (let i = 0; i < LUT_N; i++) {
          const t = i / (LUT_N - 1)
          let k = 1
          while (k < STOPS.length && t > STOPS[k][0]) k++
          const a = STOPS[k - 1], b = STOPS[k]
          const f = (t - a[0]) / (b[0] - a[0] || 1)
          const c = oklabToRgb((a[1] + (b[1] - a[1]) * f) * 1.10,
                               (a[2] + (b[2] - a[2]) * f) * 1.18,
                               (a[3] + (b[3] - a[3]) * f) * 1.18)
          lut[i * 3] = c[0]; lut[i * 3 + 1] = c[1]; lut[i * 3 + 2] = c[2]
        }

        // spherical fresnel: colours on a sphere surface, precomputed as a short
        // frame loop so the colour pattern can flow radially (outside -> inside).
        const FS = Math.max(32, Math.min(1024,
          parseInt(DEBUG.fres || String(LOW ? VOID.FRES_SIZE_LOW : VOID.FRES_SIZE), 10) || (LOW ? VOID.FRES_SIZE_LOW : VOID.FRES_SIZE)))
        fres.width = fres.height = FS
        const fctx = fres.getContext('2d')

        // radial alpha, computed once (inner half transparent, then a steep ramp);
        // the same dithered alpha is reused by every frame so the flow does not flicker
        const fresAlpha = new Uint8ClampedArray(FS * FS)
        for (let y = 0; y < FS; y++) {
          for (let x = 0; x < FS; x++) {
            const nx = ((x + 0.5) / FS) * 2 - 1
            const ny = ((y + 0.5) / FS) * 2 - 1
            const r2 = nx * nx + ny * ny
            if (r2 >= 1) continue
            const rr = Math.sqrt(r2)
            const z = Math.sqrt(1 - r2)
            // spherical projection alpha, plus a fast fade to fully transparent
            // inside the central 0.1R
            const hg = Math.max(0, Math.min(1, (rr - VOID.FRES_HOLE) / VOID.FRES_HOLE_W))
            const hole = hg * hg * (3 - 2 * hg)
            const av = Math.pow(1 - z, VOID.FRES_ALPHA_EXP) * hole
            fresAlpha[y * FS + x] = Math.max(0, Math.min(255, av * 255 + Math.random()))
          }
        }

        // continuous radial flow: the noise field is sampled along z every frame,
        // so the colours keep travelling from the rim inward without a loop seam
        const FRES_SPEED = VOID.FRES_SPEED   // z units per ms
        const fresImg = fctx.createImageData(FS, FS)
        const fresX = new Float32Array(FS * FS)
        const fresY = new Float32Array(FS * FS)
        const fresZ = new Float32Array(FS * FS)
        const fresOn = new Uint8Array(FS * FS)
        for (let y = 0; y < FS; y++) {
          for (let x = 0; x < FS; x++) {
            const i = y * FS + x
            const nx = ((x + 0.5) / FS) * 2 - 1
            const ny = ((y + 0.5) / FS) * 2 - 1
            const r2 = nx * nx + ny * ny
            if (r2 >= 1) continue
            fresOn[i] = 1
            fresX[i] = nx
            fresY[i] = ny
            fresZ[i] = Math.sqrt(1 - r2)
          }
        }
        function drawFresnel(shift) {
          const d = fresImg.data
          for (let i = 0; i < FS * FS; i++) {
            const o = i * 4
            d[o + 3] = fresAlpha[i]
            if (!fresOn[i]) continue
            // isotropic spherical projection: the unit normal (nx, ny, z) is sampled
            // with the same scale on all three axes; the z drift produces the radial flow
            const n = noise4(fresX[i] * 1.8 + 3.1, fresY[i] * 1.8 + 7.7,
              fresZ[i] * 1.8 + 1.3 + shift, 0.8)
            let t = 0.5 + 0.6 * n
            t = t < 0 ? 0 : t > 1 ? 1 : t
            let cr, cg, cb
            if (t < 0.45) {
              const u = t / 0.45
              cr = 58 + (90 - 58) * u; cg = 82 + (70 - 82) * u; cb = 220 + (200 - 220) * u
            } else if (t < 0.8) {
              const u = (t - 0.45) / 0.35
              cr = 90 + (170 - 90) * u; cg = 70 + (60 - 70) * u; cb = 200 + (210 - 200) * u
            } else {
              const u = (t - 0.8) / 0.2
              cr = 170 + (120 - 170) * u; cg = 60 + (150 - 60) * u; cb = 210 + (150 - 210) * u
            }
            d[o] = cr
            d[o + 1] = cg
            d[o + 2] = cb
          }
          fctx.putImageData(fresImg, 0, 0)
        }
        drawFresnel(0)

        const band = document.createElement('canvas')
        band.width = band.height = cvs.width
        const bc = band.getContext('2d')
        bc.scale(DPR, DPR)
        // glow layers are built at half resolution: three blurred full-size canvases
        // per frame were the frame-time bottleneck; for a soft glow the upscaled
        // result is visually identical and about 4x cheaper.
        const GW = Math.max(64, Math.ceil(cvs.width / VOID.GLOW_DIV))
        const gIn = document.createElement('canvas'); gIn.width = gIn.height = GW
        const gOut = document.createElement('canvas'); gOut.width = gOut.height = GW
        const gTight = document.createElement('canvas'); gTight.width = gTight.height = GW

        // glow masks, dithered per device pixel. Skia does not dither the canvas radial
        // gradients here, which showed as faint rings; precomputing the masks once with
        // 1-level noise removes them without any per-frame cost.
        const glowMasks = new Map()
        function makeGlowMask(points) {
          const c = document.createElement('canvas')
          c.width = c.height = GW
          const mc = c.getContext('2d')
          const mi = mc.createImageData(c.width, c.height)
          const S = c.width
          for (let y = 0; y < S; y++) {
            for (let x = 0; x < S; x++) {
              const dx = (x + 0.5) / (DPR / 2) - C
              const dy = (y + 0.5) / (DPR / 2) - C
              const rr = Math.sqrt(dx * dx + dy * dy)
              let av = 0
              for (let k = 1; k < points.length; k++) {
                const p0 = points[k - 1], p1 = points[k]
                if (rr <= p0[0]) { av = p0[1]; break }
                if (rr <= p1[0]) {
                  av = p0[1] + (p1[1] - p0[1]) * (rr - p0[0]) / (p1[0] - p0[0] || 1)
                  break
                }
              }
              const o = (y * S + x) * 4
              mi.data[o] = 255
              mi.data[o + 1] = 255
              mi.data[o + 2] = 255
              mi.data[o + 3] = Math.max(0, Math.min(255, av * 255 + Math.random()))
            }
          }
          mc.putImageData(mi, 0, 0)
          return c
        }
        glowMasks.set(gIn, makeGlowMask([[R - 68, 0], [R - 37, .70], [R - 6, 1], [R + 43, 0]]))
        glowMasks.set(gOut, makeGlowMask([[R - 6, 0], [R + 9, 1], [R + 56, .85], [R + 149, 0]]))
        glowMasks.set(gTight, makeGlowMask([[R - 28, 0], [R - 6, .90], [R + 12, .90], [R + 43, 0]]))

        const N = VOID.TICKS

        function drawBand(ph, z) {
          const rot = ph * TAU * 6
          const wT = 1.6 * Math.sin(ph * TAU * 5) + 1.0 * Math.cos(ph * TAU * 4)
          let gate = 0.5 + 0.5 * Math.sin(ph * TAU * 25 + 1.2)
          gate = (gate - 0.40) / (0.85 - 0.40)
          gate = gate < 0 ? 0 : gate > 1 ? 1 : gate
          gate = gate * gate * (3 - 2 * gate)
          const idxArr = new Int32Array(N)
          const whArr = new Float32Array(N)
          for (let i = 0; i < N; i++) {
            const a = (i / N) * TAU
            const ca = Math.cos(a + rot), sa = Math.sin(a + rot)
            const n = 0.78 * noise4(ca * 0.55 + 11.3, sa * 0.55 + 7.1, Math.sin(a) * 0.35, wT)
                    + 0.22 * noise4(ca * 1.10 + 3.7, sa * 1.10 + 9.9, Math.cos(a) * 0.80, wT * 1.6)
            let t = 0.45 + 0.60 * n
            t = t < 0 ? 0 : t > 1 ? 1 : t
            idxArr[i] = Math.min(LUT_N - 1, Math.max(0, Math.round(t * (LUT_N - 1)))) * 3
            const rare = 0.5 + 0.5 * noise4(ca * 0.6 + 21.7, sa * 0.6 + 5.3, Math.sin(a) * 0.30, wT)
            let wh = (rare - 0.62) / (0.94 - 0.62)
            wh = wh < 0 ? 0 : wh > 1 ? 1 : wh
            whArr[i] = wh * wh * (3 - 2 * wh) * gate
          }
          for (let pass = 0; pass < 2; pass++) {
            const tmp = new Float32Array(N)
            for (let i = 0; i < N; i++) {
              let sum = 0
              const ws = VOID.WHITE_SMOOTH
              for (let k = -ws; k <= ws; k++) sum += whArr[(i + k + N) % N]
              tmp[i] = sum / (2 * ws + 1)
            }
            whArr.set(tmp)
          }
          bc.clearRect(0, 0, W, W)
          bc.lineCap = 'butt'
          bc.lineWidth = (TAU / N) * (R * z) * 2.0
          for (let i = 0; i < N; i++) {
            const a = (i / N) * TAU
            const idx = idxArr[i]
            let cr = lut[idx], cg = lut[idx + 1], cb = lut[idx + 2]
            const wh = whArr[i]
            if (wh > 0.002) {
              cr += (255 - cr) * wh * 0.85
              cg += (244 - cg) * wh * 0.85
              cb += (225 - cb) * wh * 0.85
            }
            const r = R * z, w = VOID.BAND_W
            const ri = r - w / 2, ro = r + w / 2
            const col = 'rgb(' + (cr | 0) + ',' + (cg | 0) + ',' + (cb | 0) + ')'
            bc.strokeStyle = col
            bc.beginPath()
            bc.moveTo(C + Math.cos(a) * ri, C + Math.sin(a) * ri)
            bc.lineTo(C + Math.cos(a) * ro, C + Math.sin(a) * ro)
            bc.stroke()
          }
        }

        function buildGlow(dst, blurPx, maxR, stops, z) {
          const c = dst.getContext('2d')
          c.setTransform(1, 0, 0, 1, 0, 0)
          c.clearRect(0, 0, dst.width, dst.height)
          c.setTransform(DPR / 2, 0, 0, DPR / 2, 0, 0)
          c.filter = 'blur(' + blurPx + 'px) saturate(1.75)'
          c.drawImage(band, 0, 0, W, W)
          c.filter = 'none'
          c.globalCompositeOperation = 'destination-in'
          const pre = glowMasks.get(dst)
          if (pre) {
            c.setTransform(1, 0, 0, 1, 0, 0)
            const S = dst.width
            const off = (S / 2) * (1 - z)
            c.drawImage(pre, off, off, S * z, S * z)
            c.setTransform(DPR / 2, 0, 0, DPR / 2, 0, 0)
          } else {
            const gr = c.createRadialGradient(C, C, 0, C, C, maxR * z)
            for (const st of stops) gr.addColorStop(st[0], st[1])
            c.fillStyle = gr
            c.fillRect(0, 0, W, W)
          }
          c.globalCompositeOperation = 'source-over'
        }

        let fresTick = 0
        function render(ph, z) {
          drawBand(ph, z)
          if (fres.isConnected) {
            // low-power mode regenerates the sphere every other frame
            fresTick = (fresTick + 1) & 1
            if (!lowNow() || fresTick === 0) drawFresnel(performance.now() * FRES_SPEED * speedFactor())
          }
          if (on('inner')) buildGlow(gIn, VOID.BLUR_IN, R + 43, [
            [0, 'rgba(255,255,255,0)'],
            [(R - 68) / (R + 43), 'rgba(255,255,255,0)'],
            [(R - 37) / (R + 43), 'rgba(255,255,255,.70)'],
            [(R - 6) / (R + 43), 'rgba(255,255,255,1)'],
            [1, 'rgba(255,255,255,0)']
          ], z)
          if (on('outer')) buildGlow(gOut, VOID.BLUR_OUT, R + 149, [
            [0, 'rgba(255,255,255,0)'],
            [(R - 6) / (R + 149), 'rgba(255,255,255,0)'],
            [(R + 9) / (R + 149), 'rgba(255,255,255,1)'],
            [(R + 56) / (R + 149), 'rgba(255,255,255,.85)'],
            [1, 'rgba(255,255,255,0)']
          ], z)
          if (on('tight') && !lowNow()) buildGlow(gTight, VOID.BLUR_TIGHT, R + 43, [
            [0, 'rgba(255,255,255,0)'],
            [(R - 28) / (R + 43), 'rgba(255,255,255,0)'],
            [(R - 6) / (R + 43), 'rgba(255,255,255,.9)'],
            [(R + 12) / (R + 43), 'rgba(255,255,255,.9)'],
            [1, 'rgba(255,255,255,0)']
          ], z)
          g.clearRect(0, 0, W, W)
          g.globalCompositeOperation = 'source-over'
          // outer contact shadow: a hard-edged dark annulus just outside the band.
          // Drawn into the canvas so it composites over the page (multiply-like darkening).
          if (on('shadow')) {
            g.save()
            g.beginPath()
            g.arc(C, C, (R + VOID.SHADOW_W) * z, 0, TAU)
            g.arc(C, C, R * z, 0, TAU, true)
            // ?voidshadow paints the ring red so the layer can be inspected alone
            g.fillStyle = DEBUG.shadow
              ? VOID.SHADOW_DEBUG_ALPHA
              : VOID.SHADOW_ALPHA
            g.fill()
            g.restore()
          }

          g.globalCompositeOperation = 'lighter'
          if (on('inner')) { g.globalAlpha = VOID.ALPHA_IN; g.drawImage(gIn, 0, 0, W, W) }
          if (on('outer')) { g.globalAlpha = VOID.ALPHA_OUT; g.drawImage(gOut, 0, 0, W, W) }
          if (on('tight') && !lowNow()) { g.globalAlpha = VOID.ALPHA_TIGHT; g.drawImage(gTight, 0, 0, W, W) }
          g.globalCompositeOperation = 'source-over'
          if (on('band')) { g.globalAlpha = 1; g.drawImage(band, 0, 0, W, W) }
          const scaleCss = 'translate(-50%,-50%) scale(' + z.toFixed(4) + ')'
          if (dome.isConnected) dome.style.transform = scaleCss
          if (fres.isConnected) fres.style.transform = scaleCss
        }

        const mount = () => {
          if (layer.isConnected) return
          const slot = document.querySelector('[data-slot="main.conversation"]')
          const col = slot ? slot.closest('[class*="_centerCol"]') : document.querySelector('[class*="_centerCol"]')
          if (col) col.insertBefore(layer, col.firstChild)
        }
        mount()
        if (domWatchers) domWatchers.add(mount)

        let io = null
        let visible = true
        const syncVoidVisibility = () => {
          const on = voidPrefs.void
          layer.style.display = on ? '' : 'none'
          visible = on
        }
        voidPrefListeners.add(syncVoidVisibility)
        syncVoidVisibility()
        const watchVisibility = () => {
          if (io) io.disconnect()
          if (!layer.isConnected) return
          io = new IntersectionObserver((entries) => {
            visible = voidPrefs.void && !!(entries[0] && entries[0].isIntersecting)
          }, { threshold: 0.01 })
          io.observe(layer)
        }
        watchVisibility()

        // pointer follow with a spring (lag/drag feel), no follow under reduced motion
        const follow = !reduced && !DEBUG.nofollow
        let ox = 0, oy = 0, tx = 0, ty = 0
        const onMove = (e) => {
          const col = layer.parentElement
          if (!col) return
          const r = col.getBoundingClientRect()
          // follow the pointer fully; only clamp so the circle stays near the column
          const maxX = Math.max(1, r.width / 2)
          const maxY = Math.max(1, r.height / 2)
          const dx = e.clientX - (r.left + r.width / 2)
          const dy = e.clientY - (r.top + r.height / 2)
          tx = Math.max(-maxX, Math.min(maxX, dx))
          ty = Math.max(-maxY, Math.min(maxY, dy))
        }
        if (follow) window.addEventListener('pointermove', onMove, { passive: true })

        let raf = 0
        let last = 0
        let prevT = 0
        let zoom = 1
        let zoomTarget = 1
        const onPress = (e) => {
          if (e.button === 0 || e.button === 2) zoomTarget = zoomMax()
        }
        const onRelease = (e) => {
          if (!e || e.buttons === 0) zoomTarget = 1
        }
        const onCancelPress = () => { zoomTarget = 1 }
        window.addEventListener('pointerdown', onPress, true)
        window.addEventListener('pointerup', onRelease, true)
        window.addEventListener('pointercancel', onCancelPress, true)
        window.addEventListener('blur', onCancelPress)
        const tick = (t) => {
          raf = requestAnimationFrame(tick)
          if (document.hidden || !visible) return
          const dt = prevT ? Math.min(64, t - prevT) : 16
          prevT = t
          if (follow) {
            const k = 1 - Math.exp(-dt / followTau())
            ox += (tx - ox) * k
            oy += (ty - oy) * k
            stageEl.style.transform = 'translate(-50%,-50%) translate(' +
              ox.toFixed(2) + 'px,' + oy.toFixed(2) + 'px) scale(' +
              sizeScale().toFixed(3) + ')'
          }
          zoom += (zoomTarget - zoom) * (1 - Math.exp(-dt / VOID.ZOOM_TAU))
          if (Math.abs(zoomTarget - zoom) < 0.0002) zoom = zoomTarget
          const animating = Math.abs(zoomTarget - zoom) > 0.0005
          const fps = animating
            ? (lowNow() ? VOID.FPS_LOW_ZOOM : VOID.FPS_ZOOM)
            : (lowNow() ? VOID.FPS_LOW : VOID.FPS)
          if (t - last < 1000 / fps) return
          last = t
          render((t / 60000) % 1, zoom)
        }
        if (!reduced) raf = requestAnimationFrame(tick)
        else render(0.15, 1)
        // reduced motion (no tick) and the gap before the first frame still need the size
        const applyGeometry = () => {
          if (!follow) {
            stageEl.style.transform = 'translate(-50%,-50%) scale(' + sizeScale().toFixed(3) + ')'
          }
        }
        if (!follow) applyGeometry()
        voidPrefListeners.add(applyGeometry)

        return () => {
          if (raf) cancelAnimationFrame(raf)
          if (io) io.disconnect()
          voidPrefListeners.delete(applyGeometry)
          if (follow) window.removeEventListener('pointermove', onMove)
          window.removeEventListener('pointerdown', onPress, true)
          window.removeEventListener('pointerup', onRelease, true)
          window.removeEventListener('pointercancel', onCancelPress, true)
          window.removeEventListener('blur', onCancelPress)
          voidPrefListeners.delete(syncVoidVisibility)
          if (domWatchers) domWatchers.delete(mount)
          layer.remove()
        }
      }, 'dsh-theme-zzz: void layer')

      // Range inputs carry their travelled width on --zzz-fill: Chromium has no
      // ::-webkit-slider-progress, so the track paints the gradient as a
      // background layer sized to it, over the grey groove.  The input count is
      // used as a cheap change signal - streaming text mutates the DOM
      // constantly and must not trigger a document-wide query.
      ctx.effect(() => {
        const fill = (el) => {
          const min = Number(el.min || 0)
          const max = Number(el.max || 100)
          const value = Number(el.value)
          const pct = max > min ? ((value - min) / (max - min)) * 100 : 0
          el.style.setProperty('--zzz-fill', Math.max(0, Math.min(100, pct)).toFixed(2) + '%')
        }
        const scan = () => {
          for (const el of document.querySelectorAll('input[type="range"]')) fill(el)
        }
        scan()
        let seen = document.getElementsByTagName('input').length
        const onInput = (event) => {
          const target = event.target
          if (target && target.type === 'range') fill(target)
        }
        document.addEventListener('input', onInput, true)
        document.addEventListener('change', onInput, true)
        // cheap change signal: the input count, not a document-wide query
        const onDomChange = () => {
          const now = document.getElementsByTagName('input').length
          if (now === seen) return
          seen = now
          scan()
        }
        domWatchers.add(onDomChange)
        return () => {
          document.removeEventListener('input', onInput, true)
          document.removeEventListener('change', onInput, true)
          domWatchers.delete(onDomChange)
        }
      }, 'dsh-theme-zzz: slider fill')

      // tag the tiny icon buttons the theme must treat as glyphs, not surfaces
      ctx.effect(() => {
        const mark = () => {
          for (const el of document.querySelectorAll('[class*="_tabHost_"] button[class*="_ghost"]')) {
            const r = el.getBoundingClientRect()
            const mini = r.width > 6 && r.width < 36 && r.height > 6 && r.height < 36
            if (mini) {
              el.setAttribute('data-zzz-mini', '')
              el.setAttribute('data-zzz-glyph', '')
            } else if (el.hasAttribute('data-zzz-mini')) {
              el.removeAttribute('data-zzz-mini')
              el.removeAttribute('data-zzz-glyph')
            }
          }
        }
        mark()
        let queuedMini = 0
        const onDomChange = () => {
          if (queuedMini) return
          queuedMini = requestAnimationFrame(() => {
            queuedMini = 0
            mark()
          })
        }
        domWatchers.add(onDomChange)
        return () => {
          domWatchers.delete(onDomChange)
          if (queuedMini) cancelAnimationFrame(queuedMini)
        }
      }, 'dsh-theme-zzz: mini button tagging')

      // Registered themes only cover the documented alias tokens; the fuller
      // palette rides on the stylesheet, so a missing or rejecting registry is
      // never fatal - the plugin must still paint.
      const registerTheme = (id, colorScheme, palette) => {
        try {
          const theme = typeof ctx.get === 'function' ? ctx.get('theme') : ctx.theme
          if (!theme || typeof theme.register !== 'function') return () => {}
          return theme.register({ id, colorScheme, tokens: dualTokens(palette) })
        } catch (error) {
          console.warn('[dsh-theme-zzz] theme registration skipped:', error)
          return () => {}
        }
      }

      ctx.effect(() => registerTheme('zzz', 'dark', DARK), 'dsh-theme-zzz: dark theme')
      // light mode is not a second palette: ZZZ has no light variant, so the
      // light scheme is registered with the SAME tokens and the UI stays dark.
      ctx.effect(() => registerTheme('zzz-light', 'light', DARK), 'dsh-theme-zzz: light theme')

      // Unify both schemes with the official stacking API: identical light/dark
      // values per token, so the rendered result no longer depends on the user's
      // preference - and nothing has to be forced or polled.
      ctx.effect(() => {
        const theme = typeof ctx.get === 'function' ? ctx.get('theme') : ctx.theme
        if (!theme) return () => {}
        if (typeof theme.overrideTokens === 'function') {
          try {
            return theme.overrideTokens('dsh-theme-zzz:palette', dualTokens(DARK))
          } catch (error) {
            console.warn('[dsh-theme-zzz] overrideTokens skipped:', error)
            return () => {}
          }
        }
        // fallback for older runtimes: one-shot redirect, no polling
        if (typeof theme.setTheme === 'function') {
          try {
            if (theme.preference !== 'dark') theme.setTheme('dark')
          } catch (error) { /* keep painting */ }
        }
        return () => {}
      }, 'dsh-theme-zzz: scheme unification')

      // Broken plugin-market thumbnails: the browser draws its own broken-image
      // frame around the <img>, and part of it falls outside the box on
      // fractional pixels, where clip-path cannot reach. Tag the failed image and
      // let the stylesheet hide it, so the card surface shows through instead.
      ctx.effect(() => {
        const mark = (node) => {
          if (!node || node.tagName !== 'IMG') return
          const cls = String(node.className || '')
          if (cls.indexOf('nUhMVa_cardShot') < 0) return
          if (node.complete && node.naturalWidth === 0) node.setAttribute('data-zzz-broken', '')
        }
        const onError = (event) => mark(event.target)
        const sweep = () => document.querySelectorAll('img').forEach(mark)
        window.addEventListener('error', onError, true)
        sweep()
        // one delayed sweep covers nodes that were already broken before the listener
        // was attached; later failures arrive through the error event
        const timer = setTimeout(sweep, 3000)
        return () => {
          window.removeEventListener('error', onError, true)
          clearTimeout(timer)
        }
      }, 'dsh-theme-zzz: broken thumbnails')

      // Settings, level 2: the surface itself comes from the official tokens
      // (--dsw-alias-settings-card-fill / -stroke), so every card resolves to the
      // same fill. This effect only adds the blur. Scope is the semantic slot
      // [data-slot="settings.section"] and the ONLY test is "this element resolved
      // to the glass fill" - no size or radius heuristics, and the pass is coalesced
      // into one animation frame.
      ctx.effect(() => {
        const FILL = 'rgba(16, 16, 16, 0.34)'
        let queued = 0
        const scan = () => {
          queued = 0
          const modal = document.querySelector('[data-shortcut-modal="settings"]')
          if (!modal) return
          for (const host of modal.querySelectorAll('[data-slot="settings.section"]')) {
            for (const el of host.querySelectorAll('*')) {
              if (el.hasAttribute('data-zzz-glass')) continue
              if (el.closest('[data-zzz-glass]')) continue
              if (getComputedStyle(el).backgroundColor !== FILL) continue
              el.setAttribute('data-zzz-glass', '')
            }
          }
        }
        const queue = () => {
          if (!queued) queued = requestAnimationFrame(scan)
        }
        domWatchers.add(queue)
        scan()
        return () => {
          domWatchers.delete(queue)
          if (queued) cancelAnimationFrame(queued)
        }
      }, 'dsh-theme-zzz: settings glass tagging')

      // Square icon buttons become circles: a button whose box is nearly square and
      // small is tagged, and the tag is dropped again when it stops being square.
      // Record-driven (only added nodes + the changed element), plus a debounced full
      // sweep for layout-driven size changes; plugin glyphs are left to their plugin.
      ctx.effect(() => {
        const isPlugin = (el) =>
          el.closest('[data-dsh-plugin]') !== null ||
          el.querySelector('[data-dsh-plugin]') !== null ||
          // split-button halves are not standalone icon buttons
          el.closest('[class*="OMoRSG_split"]') !== null
        const test = (el) => {
          if (el.tagName !== 'BUTTON' && el.getAttribute('role') !== 'button') return
          if (isPlugin(el)) return
          const w = el.offsetWidth
          const h = el.offsetHeight
          const square = w >= 16 && w <= 56 && Math.abs(w - h) <= 2
          if (square) {
            if (!el.hasAttribute('data-zzz-round')) el.setAttribute('data-zzz-round', '')
          } else if (el.hasAttribute('data-zzz-round')) {
            el.removeAttribute('data-zzz-round')
          }
        }
        const scanAll = () => {
          for (const el of document.querySelectorAll('button, [role="button"]')) test(el)
        }
        let sweep = 0
        const scheduleSweep = () => {
          clearTimeout(sweep)
          sweep = setTimeout(scanAll, 800)
        }
        const onDomChange = (records) => {
          for (const rec of records) {
            if (rec.type === 'childList') {
              for (const node of rec.addedNodes) {
                if (node.nodeType !== 1) continue
                if (node.matches && node.matches('button, [role="button"]')) test(node)
                if (node.querySelectorAll) node.querySelectorAll('button, [role="button"]').forEach(test)
              }
            } else if (rec.type === 'attributes') {
              test(rec.target)
            }
          }
          scheduleSweep()
        }
        domWatchers.add(onDomChange)
        window.addEventListener('resize', scheduleSweep)
        scanAll()
        return () => {
          domWatchers.delete(onDomChange)
          window.removeEventListener('resize', scheduleSweep)
          clearTimeout(sweep)
        }
      }, 'dsh-theme-zzz: round icon buttons')

      // The context ring draws with an SVG stroke, which cannot take a CSS gradient.
      // Inject one shared paint server and point the ring's stroke at it.
      ctx.effect(() => {
        if (document.getElementById('zzz-meter-defs')) return
        const NS = 'http://www.w3.org/2000/svg'
        const svg = document.createElementNS(NS, 'svg')
        svg.id = 'zzz-meter-defs'
        svg.setAttribute('aria-hidden', 'true')
        svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden'
        const defs = document.createElementNS(NS, 'defs')
        const grad = document.createElementNS(NS, 'linearGradient')
        grad.id = 'zzz-meter-grad'
        grad.setAttribute('x1', '0')
        grad.setAttribute('y1', '0')
        grad.setAttribute('x2', '1')
        grad.setAttribute('y2', '1')
        // colours come from the slider tokens so there is one source of truth
        const root = getComputedStyle(document.documentElement)
        const read = (name, fallback) => (root.getPropertyValue(name) || '').trim() || fallback
        const stops = [
          ['0%', read('--zzz-slider-from', '#4a3dff')],
          ['34%', read('--zzz-slider-via', '#3468ff')],
          ['100%', read('--zzz-blue', '#05bbff')],
        ]
        for (const [offset, color] of stops) {
          const stop = document.createElementNS(NS, 'stop')
          stop.setAttribute('offset', offset)
          stop.setAttribute('stop-color', color)
          grad.appendChild(stop)
        }
        defs.appendChild(grad)
        svg.appendChild(defs)
        document.body.appendChild(svg)
        return () => svg.remove()
      }, 'dsh-theme-zzz: meter gradient')

      // Yellow surfaces must carry black text. Host components follow the
      // --dsw-alias-label-primary-inverted token; this effect covers everything else
      // (plugins that hardcode white, literal fills, gradients).
      ctx.effect(() => {
        const YELLOW = (r, g, b, a) => a > 0.35 && r >= 170 && g >= 120 && b <= 120 && r - g < 80 && g - b >= 60
        const parse = (color) => {
          const m = String(color).match(/rgba?\(([^)]+)\)/)
          if (!m) return null
          const parts = m[1].split(',').map((n) => parseFloat(n))
          return [parts[0], parts[1], parts[2], parts.length > 3 ? parts[3] : 1]
        }
        const isYellowEl = (el) => {
          const cs = getComputedStyle(el)
          const bg = parse(cs.backgroundColor)
          if (bg && YELLOW(bg[0], bg[1], bg[2], bg[3])) return true
          if (cs.backgroundImage && cs.backgroundImage !== 'none') {
            for (const m of cs.backgroundImage.matchAll(/rgba?\(([^)]+)\)/g)) {
              const p = m[1].split(',').map((n) => parseFloat(n))
              if (YELLOW(p[0], p[1], p[2], p.length > 3 ? p[3] : 1)) return true
            }
          }
          return false
        }
        // A monochrome icon that hard-codes white stays white on a yellow plate; switch
        // those paints to currentColor (so the inherited black applies) and remember the
        // original so the icon is restored when the surface is no longer yellow.
        const isWhitePaint = (value) => {
          const v = String(value).trim().toLowerCase()
          return (
            v === 'white' ||
            v === '#fff' ||
            v === '#ffffff' ||
            /^rgba?\(\s*255\s*,\s*255\s*,\s*255\s*(,|\))/.test(v) ||
            /^color\(srgb 1 1 1\b/.test(v)
          )
        }
        const fixPaints = (root) => {
          for (const node of root.querySelectorAll('[fill],[stroke]')) {
            for (const attr of ['fill', 'stroke']) {
              const value = node.getAttribute(attr)
              if (!value || value === 'none' || value === 'currentColor') continue
              if (!isWhitePaint(value)) continue
              if (node.getAttribute('data-zzz-' + attr + '-orig') === null) {
                node.setAttribute('data-zzz-' + attr + '-orig', value)
              }
              node.setAttribute(attr, 'currentColor')
            }
          }
        }
        const restorePaints = (root) => {
          for (const node of root.querySelectorAll('[data-zzz-fill-orig],[data-zzz-stroke-orig]')) {
            for (const attr of ['fill', 'stroke']) {
              const orig = node.getAttribute('data-zzz-' + attr + '-orig')
              if (orig === null) continue
              node.setAttribute(attr, orig)
              node.removeAttribute('data-zzz-' + attr + '-orig')
            }
          }
        }
        // The design-system discs (and their glyphs) already switch colour by state;
        // tagging them would force black after the fill is back to black.
        const selfStyled = (el) =>
          typeof el.matches === 'function' && el.matches('button[class*="1rv3m_"], button[class*="1rv3m_"] *')
        const test = (el) => {
          if (!el || el.nodeType !== 1) return
          if (selfStyled(el)) {
            if (el.hasAttribute('data-zzz-on-yellow')) el.removeAttribute('data-zzz-on-yellow')
            return
          }
          if (isYellowEl(el)) {
            if (!el.hasAttribute('data-zzz-on-yellow')) {
              el.setAttribute('data-zzz-on-yellow', '')
              fixPaints(el)
            }
          } else if (el.hasAttribute('data-zzz-on-yellow')) {
            restorePaints(el)
            el.removeAttribute('data-zzz-on-yellow')
          }
        }
        const sweep = () => {
          for (const el of document.querySelectorAll('body *')) test(el)
        }
        let queued = 0
        const onDomChange = (records) => {
          for (const rec of records) {
            if (rec.type === 'childList') {
              for (const node of rec.addedNodes) {
                if (node.nodeType !== 1) continue
                test(node)
                if (node.querySelectorAll) node.querySelectorAll('*').forEach(test)
                const plate = node.closest ? node.closest('[data-zzz-on-yellow]') : null
                if (plate) fixPaints(node)
              }
            } else if (rec.type === 'attributes') {
              test(rec.target)
            }
          }
          if (queued) return
          queued = setTimeout(() => {
            queued = 0
            sweep()
          }, 1200)
        }
        // Untag synchronously when the pointer leaves: the observer callback runs after
        // paint, and a frame with the forced black glyph on an already-dark disc reads as
        // a flicker. A forced style recalc here sees the post-leave :hover state.
        const onPointerOut = (event) => {
          const host = event.target && event.target.closest
            ? event.target.closest('[data-zzz-on-yellow]')
            : null
          if (host) test(host)
        }
        document.addEventListener('pointerout', onPointerOut, true)
        domWatchers.add(onDomChange)
        requestAnimationFrame(sweep)
        const late = setTimeout(sweep, 2500)
        return () => {
          domWatchers.delete(onDomChange)
          document.removeEventListener('pointerout', onPointerOut, true)
          clearTimeout(late)
          clearTimeout(queued)
        }
      }, 'dsh-theme-zzz: black text on yellow')


      // Font mode: the stylesheet stacks already prefer 印品; this effect only pins the
      // stacks to Source Han Sans when the settings page's button asks for it.
      ctx.effect(() => {
        const SANS = "'Noto Sans SC','Source Han Sans SC','思源黑体',system-ui,-apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif"
        const apply = () => {
          const root = document.documentElement
          // older builds wrote these as inline custom properties; inline beats the
          // stylesheet, so clear them before the attribute takes over
          root.style.removeProperty('--zzz-font-display')
          root.style.removeProperty('--zzz-font-text')
          if (voidPrefs.fontSans) root.setAttribute('data-zzz-font-sans', '')
          else root.removeAttribute('data-zzz-font-sans')
        }
        voidPrefListeners.add(apply)
        apply()
        return () => {
          voidPrefListeners.delete(apply)
          document.documentElement.removeAttribute('data-zzz-font-sans')
        }
      }, 'dsh-theme-zzz: font mode')

      // Custom families. The base vars are declared on html AND body, so an override must be
      // written to both, otherwise descendants keep inheriting the stylesheet stacks.
      ctx.effect(() => {
        const BASE = "'Noto Sans SC','Source Han Sans SC','思源黑体',system-ui,-apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif"
        const ALIASES = {
          '印品鸿蒙体': ['inpin hongmengti', '印品鸿蒙体（非商用）'],
          '印品鸿蒙体 D40': ['印品鸿蒙体 D40-v1.04', 'yinpinhongmengti D40-v1.04', 'SDK_SC_Web'],
        }
        const stack = (name) => {
          const clean = String(name || '').replace(/["']/g, '').trim()
          if (!clean) return ''
          const names = [clean].concat(ALIASES[clean] || [])
          return names.map((n) => '"' + n + '"').join(',') + ',' + BASE
        }
        const targets = () => [document.documentElement, document.body].filter(Boolean)
        const apply = () => {
          if (voidPrefs.fontSans) return
          const bold = stack(voidPrefs.fontBold)
          const thin = stack(voidPrefs.fontThin)
          for (const el of targets()) {
            if (bold) el.style.setProperty('--zzz-font-display', bold)
            else el.style.removeProperty('--zzz-font-display')
            if (thin) el.style.setProperty('--zzz-font-text', thin)
            else el.style.removeProperty('--zzz-font-text')
          }
        }
        const clear = () => {
          for (const el of targets()) {
            el.style.removeProperty('--zzz-font-display')
            el.style.removeProperty('--zzz-font-text')
          }
        }
        const run = () => {
          if (voidPrefs.fontSans) clear()
          else apply()
        }
        voidPrefListeners.add(run)
        run()
        return () => {
          voidPrefListeners.delete(run)
          clear()
        }
      }, 'dsh-theme-zzz: custom fonts')

      ctx.effect(() => {
        loadStrings()
        return () => {}
      }, 'dsh-theme-zzz: strings')

      ctx.slots.inject('sidebar.brand.mark', () =>
        ctx.slots.register({ name: 'sidebar.brand.mark', priority: -1 }, () => h(BrandMark, { size: 26 })),
      )

      ctx.slots.inject('conversation.hero.brand.mark', () =>
        ctx.slots.register({ name: 'conversation.hero.brand.mark', priority: -1 }, () => h(BrandMark, { size: 42 })),
      )

      ctx.slots.inject('settings.section', () =>
        ctx.slots.register({ name: 'settings.section', id: 'zzz-theme', order: 70, label: () => STR.title }, ZzzSettings),
      )

      } catch (err) {
        document.title = 'APPLY-ERR: ' + ((err && err.message) || String(err))
        console.error('[dsh-theme-zzz] apply failed', err)
      }
    }

    const mod = { name: 'dsh-theme-zzz', inject: ['slots'], apply }
    if (typeof module !== 'undefined') module.exports = mod
    return mod
  },
})
