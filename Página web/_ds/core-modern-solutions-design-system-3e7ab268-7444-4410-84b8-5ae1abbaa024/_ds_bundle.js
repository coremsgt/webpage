/* @ds-bundle: {"format":3,"namespace":"CoreModernSolutionsDesignSystem_3e7ab2","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"12d72b2f7949","components/core/Badge.jsx":"c5274fd5e0fb","components/core/Button.jsx":"5b4b9989faf5","components/core/Card.jsx":"b0ce46ea5993","components/core/IconButton.jsx":"f73fea12e158","components/core/Tag.jsx":"5cd11cdff477","components/data/StatCard.jsx":"a022c5161165","components/feedback/Callout.jsx":"c863751f5228","components/forms/Checkbox.jsx":"ac6be53f7efd","components/forms/Input.jsx":"6d3f58d1a14a","components/forms/Select.jsx":"296b0b615325","components/navigation/Tabs.jsx":"368951326812"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CoreModernSolutionsDesignSystem_3e7ab2 = window.CoreModernSolutionsDesignSystem_3e7ab2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .core-avatar{
    font-family:var(--font-sans);display:inline-flex;align-items:center;justify-content:center;
    border-radius:50%;overflow:hidden;font-weight:var(--fw-semibold);color:#fff;
    background:var(--grad-blue);flex-shrink:0;line-height:1;user-select:none;
  }
  .core-avatar--square{border-radius:var(--radius-md);}
  .core-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
  .core-avatar--sm{width:28px;height:28px;font-size:11px;}
  .core-avatar--md{width:40px;height:40px;font-size:15px;}
  .core-avatar--lg{width:56px;height:56px;font-size:20px;}
  .core-avatar--xl{width:80px;height:80px;font-size:28px;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-core', 'avatar');
  el.textContent = css;
  document.head.appendChild(el);
}
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}

/** User / brand avatar. Falls back to initials over the brand-blue gradient. */
function Avatar({
  src,
  name = '',
  size = 'md',
  shape = 'circle',
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['core-avatar', `core-avatar--${size}`, shape === 'square' ? 'core-avatar--square' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .core-badge{
    font-family:var(--font-sans);font-weight:var(--fw-semibold);font-size:12px;line-height:1;
    display:inline-flex;align-items:center;gap:5px;padding:5px 10px;border-radius:var(--radius-pill);
    letter-spacing:.01em;white-space:nowrap;
  }
  .core-badge svg{width:12px;height:12px;}
  .core-badge--blue{background:rgba(0,73,229,0.10);color:var(--blue-bright);}
  .core-badge--green{background:rgba(50,130,0,0.12);color:var(--green-bright);}
  .core-badge--gold{background:rgba(186,162,44,0.16);color:var(--gold-dark);}
  .core-badge--red{background:rgba(255,41,41,0.10);color:var(--red-mid);}
  .core-badge--neutral{background:var(--n-100);color:var(--n-700);}
  .core-badge--solid-blue{background:var(--blue-bright);color:#fff;}
  .core-badge--solid-green{background:var(--green-bright);color:#fff;}
  .core-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-core', 'badge');
  el.textContent = css;
  document.head.appendChild(el);
}

/** Compact status / category label. Maps to a brand energy. */
function Badge({
  children,
  tone = 'blue',
  dot = false,
  icon = null,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['core-badge', `core-badge--${tone}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "core-badge__dot"
  }), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function useCoreButtonStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .core-btn{
    font-family:var(--font-sans);font-weight:var(--fw-semibold);
    display:inline-flex;align-items:center;justify-content:center;gap:8px;
    border:1px solid transparent;border-radius:var(--radius-md);
    cursor:pointer;text-decoration:none;white-space:nowrap;
    transition:background var(--dur-base) var(--ease-standard),
               border-color var(--dur-base) var(--ease-standard),
               color var(--dur-base) var(--ease-standard),
               transform var(--dur-fast) var(--ease-standard);
  }
  .core-btn:active{transform:translateY(1px);}
  .core-btn:focus-visible{outline:2px solid var(--blue-bright);outline-offset:2px;}
  .core-btn[disabled]{opacity:.45;cursor:not-allowed;transform:none;}
  /* sizes */
  .core-btn--sm{font-size:13px;padding:8px 14px;}
  .core-btn--md{font-size:14px;padding:11px 20px;}
  .core-btn--lg{font-size:16px;padding:14px 26px;}
  .core-btn--block{width:100%;}
  /* variants */
  .core-btn--primary{background:var(--blue-bright);color:#fff;}
  .core-btn--primary:hover:not([disabled]){background:var(--blue-mid);}
  .core-btn--secondary{background:transparent;color:var(--blue-bright);border-color:var(--blue-bright);}
  .core-btn--secondary:hover:not([disabled]){background:rgba(0,73,229,0.08);}
  .core-btn--ghost{background:transparent;color:var(--text-body);}
  .core-btn--ghost:hover:not([disabled]){background:rgba(0,73,229,0.08);color:var(--blue-bright);}
  .core-btn--danger{background:var(--red-bright);color:#fff;}
  .core-btn--danger:hover:not([disabled]){background:var(--red-mid);}
  .core-btn--gold{background:var(--gold-bright);color:var(--n-900);}
  .core-btn--gold:hover:not([disabled]){background:var(--gold-mid);}
  .core-btn__icon{display:inline-flex;align-items:center;}
  .core-btn__icon svg{width:1.15em;height:1.15em;display:block;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-core', 'button');
  el.textContent = css;
  document.head.appendChild(el);
}

/**
 * Core Button — the primary action element.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  icon = null,
  iconRight = null,
  as = 'button',
  className = '',
  ...rest
}) {
  useCoreButtonStyles();
  const Tag = as;
  const cls = ['core-btn', `core-btn--${variant}`, `core-btn--${size}`, block ? 'core-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "core-btn__icon"
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "core-btn__icon"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .core-card{
    font-family:var(--font-sans);background:var(--surface-card);
    border:1px solid var(--border-subtle);border-radius:var(--radius-lg);
    padding:var(--space-5);position:relative;
    transition:border-color var(--dur-slow) var(--ease-standard),
               box-shadow var(--dur-slow) var(--ease-standard),
               background var(--dur-slow) var(--ease-standard),
               transform var(--dur-slow) var(--ease-out);
  }
  .core-card--shadow{box-shadow:var(--shadow-md);border-color:transparent;}
  .core-card--interactive{cursor:pointer;}
  .core-card--interactive:hover{border-color:rgba(0,73,229,0.30);background:rgba(0,73,229,0.025);transform:translateY(-2px);}
  .core-dark .core-card--interactive:hover{border-color:rgba(0,73,229,0.35);background:rgba(0,73,229,0.05);}
  /* top accent bar (refined alternative to colored left border) */
  .core-card--accent::before{
    content:'';position:absolute;top:0;left:var(--space-5);right:var(--space-5);height:3px;border-radius:0 0 3px 3px;
  }
  .core-card--accent-blue::before{background:var(--blue-bright);}
  .core-card--accent-green::before{background:var(--green-bright);}
  .core-card--accent-gold::before{background:var(--gold-bright);}
  .core-card--accent-red::before{background:var(--red-bright);}
  .core-card__title{font-size:20px;font-weight:var(--fw-semibold);line-height:1.4;color:var(--text-primary);margin:0 0 6px;}
  .core-card__body{font-size:15px;line-height:1.6;color:var(--text-body);margin:0;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-core', 'card');
  el.textContent = css;
  document.head.appendChild(el);
}

/** Core surface container. Hairline border by default; optional top accent + shadow. */
function Card({
  children,
  title,
  accent,
  shadow = false,
  interactive = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['core-card', shadow ? 'core-card--shadow' : '', interactive ? 'core-card--interactive' : '', accent ? `core-card--accent core-card--accent-${accent}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), title && /*#__PURE__*/React.createElement("h3", {
    className: "core-card__title"
  }, title), title && typeof children === 'string' ? /*#__PURE__*/React.createElement("p", {
    className: "core-card__body"
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .core-iconbtn{
    font-family:var(--font-sans);display:inline-flex;align-items:center;justify-content:center;
    border:1px solid transparent;border-radius:var(--radius-md);cursor:pointer;
    color:var(--text-body);background:transparent;
    transition:background var(--dur-base) var(--ease-standard),color var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard);
  }
  .core-iconbtn svg{width:1.25em;height:1.25em;display:block;}
  .core-iconbtn:hover:not([disabled]){background:rgba(0,73,229,0.08);color:var(--blue-bright);}
  .core-iconbtn:active{transform:translateY(1px);}
  .core-iconbtn:focus-visible{outline:2px solid var(--blue-bright);outline-offset:2px;}
  .core-iconbtn[disabled]{opacity:.45;cursor:not-allowed;}
  .core-iconbtn--sm{width:32px;height:32px;font-size:14px;}
  .core-iconbtn--md{width:40px;height:40px;font-size:16px;}
  .core-iconbtn--lg{width:48px;height:48px;font-size:18px;}
  .core-iconbtn--solid{background:var(--blue-bright);color:#fff;}
  .core-iconbtn--solid:hover:not([disabled]){background:var(--blue-mid);color:#fff;}
  .core-iconbtn--outline{border-color:var(--border-subtle);}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-core', 'iconbutton');
  el.textContent = css;
  document.head.appendChild(el);
}

/** Square icon-only button for toolbars and compact actions. */
function IconButton({
  children,
  size = 'md',
  variant = 'ghost',
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['core-iconbtn', `core-iconbtn--${size}`, `core-iconbtn--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .core-tag{
    font-family:var(--font-sans);font-size:13px;font-weight:var(--fw-medium);
    display:inline-flex;align-items:center;gap:6px;padding:6px 12px;
    border-radius:var(--radius-pill);background:var(--surface-subtle);
    color:var(--text-body);border:1px solid var(--border-subtle);
    transition:border-color var(--dur-base) var(--ease-standard),color var(--dur-base) var(--ease-standard);
  }
  .core-tag--interactive{cursor:pointer;}
  .core-tag--interactive:hover{border-color:var(--blue-bright);color:var(--blue-bright);}
  .core-tag--selected{background:rgba(0,73,229,0.08);border-color:var(--blue-bright);color:var(--blue-bright);}
  .core-tag__remove{display:inline-flex;cursor:pointer;opacity:.6;}
  .core-tag__remove:hover{opacity:1;}
  .core-tag__remove svg{width:13px;height:13px;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-core', 'tag');
  el.textContent = css;
  document.head.appendChild(el);
}

/** Filter / keyword chip. Optionally selectable or removable. */
function Tag({
  children,
  selected = false,
  interactive = false,
  onRemove,
  removeIcon = null,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['core-tag', interactive || rest.onClick ? 'core-tag--interactive' : '', selected ? 'core-tag--selected' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "core-tag__remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    role: "button",
    "aria-label": "Remove"
  }, removeIcon || '✕'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .core-stat{
    font-family:var(--font-sans);background:var(--surface-subtle);border-radius:var(--radius-md);
    padding:18px 22px;display:flex;flex-direction:column;gap:4px;border:1px solid transparent;
  }
  .core-stat--bordered{background:var(--surface-card);border-color:var(--border-subtle);}
  .core-stat__val{font-size:28px;font-weight:var(--fw-bold);line-height:1.1;letter-spacing:-.01em;color:var(--blue-bright);}
  .core-stat__val--green{color:var(--green-bright);}
  .core-stat__val--gold{color:var(--gold-dark);}
  .core-stat__val--ink{color:var(--text-primary);}
  .core-stat__key{font-size:12px;color:var(--text-muted);}
  .core-stat__delta{font-size:12px;font-weight:var(--fw-semibold);display:inline-flex;align-items:center;gap:4px;margin-top:2px;}
  .core-stat__delta--up{color:var(--green-bright);}
  .core-stat__delta--down{color:var(--red-mid);}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-core', 'statcard');
  el.textContent = css;
  document.head.appendChild(el);
}

/** Metric tile — big value + label, optional delta. ROI is Core's language. */
function StatCard({
  value,
  label,
  accent = 'blue',
  delta,
  deltaDirection = 'up',
  bordered = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['core-stat', bordered ? 'core-stat--bordered' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: `core-stat__val core-stat__val--${accent}`
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "core-stat__key"
  }, label), delta && /*#__PURE__*/React.createElement("span", {
    className: `core-stat__delta core-stat__delta--${deltaDirection}`
  }, deltaDirection === 'up' ? '▲' : '▼', " ", delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .core-callout{
    font-family:var(--font-sans);display:flex;gap:14px;align-items:flex-start;
    border-radius:var(--radius-md);padding:16px 20px;border:1px solid;
  }
  .core-callout__icon{flex-shrink:0;display:inline-flex;margin-top:1px;}
  .core-callout__icon svg{width:18px;height:18px;}
  .core-callout__title{font-size:14px;font-weight:var(--fw-bold);margin:0 0 4px;letter-spacing:.01em;}
  .core-callout__body{font-size:13.5px;line-height:1.6;color:var(--text-body);margin:0;}
  .core-callout--info{background:rgba(0,73,229,0.06);border-color:rgba(0,73,229,0.18);}
  .core-callout--info .core-callout__title,.core-callout--info .core-callout__icon{color:var(--blue-bright);}
  .core-callout--success{background:rgba(50,130,0,0.06);border-color:rgba(50,130,0,0.20);}
  .core-callout--success .core-callout__title,.core-callout--success .core-callout__icon{color:var(--green-bright);}
  .core-callout--premium{background:rgba(186,162,44,0.08);border-color:rgba(186,162,44,0.28);}
  .core-callout--premium .core-callout__title,.core-callout--premium .core-callout__icon{color:var(--gold-dark);}
  .core-callout--danger{background:rgba(255,41,41,0.05);border-color:rgba(255,41,41,0.18);}
  .core-callout--danger .core-callout__title,.core-callout--danger .core-callout__icon{color:var(--red-mid);}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-core', 'callout');
  el.textContent = css;
  document.head.appendChild(el);
}

/** Inline message block in a brand energy: info / success / premium / danger. */
function Callout({
  children,
  title,
  tone = 'info',
  icon = null,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['core-callout', `core-callout--${tone}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "note"
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "core-callout__icon"
  }, icon), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("p", {
    className: "core-callout__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "core-callout__body"
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .core-check{font-family:var(--font-sans);display:inline-flex;align-items:flex-start;gap:10px;cursor:pointer;user-select:none;}
  .core-check input{position:absolute;opacity:0;width:0;height:0;}
  .core-check__box{
    width:20px;height:20px;border-radius:6px;border:1.5px solid var(--border-strong);
    background:var(--surface-card);flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;
    color:#fff;transition:background var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard);
  }
  .core-check__box svg{width:13px;height:13px;opacity:0;transition:opacity var(--dur-fast) var(--ease-standard);}
  .core-check input:checked + .core-check__box{background:var(--blue-bright);border-color:var(--blue-bright);}
  .core-check input:checked + .core-check__box svg{opacity:1;}
  .core-check input:focus-visible + .core-check__box{box-shadow:0 0 0 3px rgba(0,73,229,0.18);}
  .core-check input:disabled ~ *{opacity:.5;}
  .core-check--round .core-check__box{border-radius:50%;}
  .core-check__label{font-size:14px;color:var(--text-body);line-height:1.45;padding-top:1px;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-core', 'checkbox');
  el.textContent = css;
  document.head.appendChild(el);
}
const Check = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("polyline", {
  points: "20 6 9 17 4 12"
}));

/** Checkbox / radio with brand-blue fill and label. */
function Checkbox({
  label,
  round = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['core-check', round ? 'core-check--round' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: round ? 'radio' : 'checkbox'
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "core-check__box"
  }, /*#__PURE__*/React.createElement(Check, null)), label && /*#__PURE__*/React.createElement("span", {
    className: "core-check__label"
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .core-field{font-family:var(--font-sans);display:flex;flex-direction:column;gap:6px;}
  .core-field__label{font-size:13px;font-weight:var(--fw-medium);color:var(--text-primary);}
  .core-field__hint{font-size:12px;color:var(--text-muted);}
  .core-field__hint--error{color:var(--red-mid);}
  .core-input-wrap{position:relative;display:flex;align-items:center;}
  .core-input-wrap__icon{position:absolute;left:12px;display:inline-flex;color:var(--text-muted);pointer-events:none;}
  .core-input-wrap__icon svg{width:16px;height:16px;}
  .core-input{
    font-family:var(--font-sans);font-size:15px;width:100%;color:var(--text-primary);
    background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);
    padding:11px 14px;outline:none;
    transition:border-color var(--dur-base) var(--ease-standard),box-shadow var(--dur-base) var(--ease-standard);
  }
  .core-input::placeholder{color:var(--text-muted);}
  .core-input:hover:not(:disabled){border-color:var(--border-strong);}
  .core-input:focus{border-color:var(--blue-bright);box-shadow:0 0 0 3px rgba(0,73,229,0.12);}
  .core-input--has-icon{padding-left:36px;}
  .core-input--error{border-color:var(--red-bright);}
  .core-input--error:focus{box-shadow:0 0 0 3px rgba(255,41,41,0.12);}
  .core-input:disabled{background:var(--surface-subtle);color:var(--text-disabled);cursor:not-allowed;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-core', 'input');
  el.textContent = css;
  document.head.appendChild(el);
}

/** Text input with optional label, leading icon, hint, and error state. */
function Input({
  label,
  hint,
  error,
  icon = null,
  id,
  className = '',
  ...rest
}) {
  useStyles();
  const fieldId = id || (label ? `f-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const inputCls = ['core-input', icon ? 'core-input--has-icon' : '', error ? 'core-input--error' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "core-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "core-field__label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "core-input-wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "core-input-wrap__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: inputCls
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: `core-field__hint${error ? ' core-field__hint--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .core-select-field{font-family:var(--font-sans);display:flex;flex-direction:column;gap:6px;}
  .core-select-field__label{font-size:13px;font-weight:var(--fw-medium);color:var(--text-primary);}
  .core-select-wrap{position:relative;display:flex;align-items:center;}
  .core-select{
    font-family:var(--font-sans);font-size:15px;width:100%;color:var(--text-primary);
    background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);
    padding:11px 38px 11px 14px;outline:none;appearance:none;cursor:pointer;
    transition:border-color var(--dur-base) var(--ease-standard),box-shadow var(--dur-base) var(--ease-standard);
  }
  .core-select:hover:not(:disabled){border-color:var(--border-strong);}
  .core-select:focus{border-color:var(--blue-bright);box-shadow:0 0 0 3px rgba(0,73,229,0.12);}
  .core-select:disabled{background:var(--surface-subtle);color:var(--text-disabled);cursor:not-allowed;}
  .core-select-wrap__chevron{position:absolute;right:14px;pointer-events:none;color:var(--text-muted);font-size:12px;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-core', 'select');
  el.textContent = css;
  document.head.appendChild(el);
}

/** Native select styled to match Core inputs. */
function Select({
  label,
  options = [],
  placeholder,
  id,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const fieldId = id || (label ? `s-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "core-select-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "core-select-field__label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "core-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: ['core-select', className].filter(Boolean).join(' ')
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, lbl);
  }), children), /*#__PURE__*/React.createElement("span", {
    className: "core-select-wrap__chevron"
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function useStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .core-tabs{font-family:var(--font-sans);display:flex;gap:0;border-bottom:2px solid var(--border-subtle);}
  .core-tab{
    appearance:none;background:none;border:none;cursor:pointer;
    font-family:var(--font-sans);font-size:13px;font-weight:var(--fw-semibold);letter-spacing:.02em;
    color:var(--text-muted);padding:12px 18px;margin-bottom:-2px;
    border-bottom:3px solid transparent;white-space:nowrap;
    transition:color var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard);
  }
  .core-tab:hover:not(.core-tab--active){color:var(--text-primary);}
  .core-tab--active{color:var(--blue-bright);border-bottom-color:var(--blue-bright);}
  .core-tab:focus-visible{outline:2px solid var(--blue-bright);outline-offset:2px;border-radius:4px;}
  .core-tab__icon{display:inline-flex;vertical-align:-2px;margin-right:7px;}
  .core-tab__icon svg{width:15px;height:15px;}
  `;
  const el = document.createElement('style');
  el.setAttribute('data-core', 'tabs');
  el.textContent = css;
  document.head.appendChild(el);
}

/** Underline tab bar. Controlled via `value` + `onChange`. */
function Tabs({
  items = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['core-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), items.map(it => {
    const id = typeof it === 'string' ? it : it.id;
    const label = typeof it === 'string' ? it : it.label;
    const icon = typeof it === 'string' ? null : it.icon;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      className: ['core-tab', active ? 'core-tab--active' : ''].filter(Boolean).join(' '),
      onClick: () => onChange && onChange(id)
    }, icon && /*#__PURE__*/React.createElement("span", {
      className: "core-tab__icon"
    }, icon), label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
