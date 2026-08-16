/* @ds-bundle: {"format":4,"namespace":"AtomicFindsDesignSystem_6739d3","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"PillLink","sourcePath":"components/brand/PillLink.jsx"},{"name":"StarburstCallout","sourcePath":"components/brand/StarburstCallout.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"5efb8c865310","components/brand/PillLink.jsx":"120efba723fb","components/brand/StarburstCallout.jsx":"0291cdd7e072","components/core/Badge.jsx":"5c3b09d6d5cd","components/core/Button.jsx":"54cff89f1ecb","components/core/Card.jsx":"713c699413a9","components/core/Input.jsx":"0515e7964c87","components/core/Tag.jsx":"fad27026f1fa","ui_kits/app/HaulScreen.jsx":"b7986c8d6765","ui_kits/app/HomeFeed.jsx":"0e0f84cd1246","ui_kits/app/ProductDetail.jsx":"3143f0b65d44","ui_kits/app/TabBar.jsx":"5decec94dfaa","ui_kits/store/CrateScreen.jsx":"97b2c5291c6e","ui_kits/store/Header.jsx":"8c63ef095085","ui_kits/store/HomeScreen.jsx":"cf576ff09b78","ui_kits/store/ProductScreen.jsx":"6c198cb402f5","ui_kits/store/data.js":"20bdd70620d0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AtomicFindsDesignSystem_6739d3 = window.AtomicFindsDesignSystem_6739d3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon wrapper over the substituted Lucide set (see readme ICONOGRAPHY).
 * Renders the glyph via CSS mask so it inherits `color` / currentColor and
 * sits at any size. Swap the base URL for a local sprite when a real Atomic
 * Finds glyph set is supplied.
 */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = `https://unpkg.com/lucide-static@latest/icons/${name}.svg`;
  const s = {
    display: 'inline-block',
    width: size,
    height: size,
    flex: 'none',
    background: color,
    WebkitMaskImage: `url(${url})`,
    maskImage: `url(${url})`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": name,
    style: s
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/PillLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Thick pill-bordered anchor — anchors floating text links (nav, footers,
 * "read more"). 3px stroke, offset shadow on hover.
 */
function PillLink({
  children,
  href = '#',
  tone = 'ink',
  onClick,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const tones = {
    ink: {
      border: 'var(--ink-900)',
      color: 'var(--ink-900)',
      bgHover: 'var(--yellow-400)'
    },
    yellow: {
      border: 'var(--ink-900)',
      color: 'var(--ink-900)',
      bgHover: 'var(--yellow-400)'
    },
    rust: {
      border: 'var(--rust-500)',
      color: 'var(--rust-500)',
      bgHover: 'var(--rust-500)'
    }
  };
  const t = tones[tone] || tones.ink;
  const hoverInk = tone === 'rust' && hover;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: '14px',
    letterSpacing: '0.02em',
    textDecoration: 'none',
    padding: '8px 18px',
    borderRadius: 'var(--radius-pill)',
    border: `3px solid ${t.border}`,
    color: hoverInk ? 'var(--cream-50)' : t.color,
    background: hover ? tone === 'rust' ? 'var(--rust-500)' : 'var(--yellow-400)' : 'transparent',
    boxShadow: hover ? '3px 3px 0 var(--ink-900)' : '0 0 0 var(--ink-900)',
    transform: hover ? 'translate(-1px,-1px)' : 'none',
    transition: 'all var(--dur-fast) var(--ease-snap)'
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: style,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { PillLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PillLink.jsx", error: String((e && e.message) || e) }); }

// components/brand/StarburstCallout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Multi-point vector starburst with centered content — the brand's promo /
 * discount graphic ("2 FONT STYLES!"). Static, breaks the grid.
 */
function StarburstCallout({
  children,
  size = 160,
  color = 'var(--yellow-400)',
  stroke = 'var(--ink-900)',
  rotate = -8,
  points = 12,
  style,
  ...rest
}) {
  const cx = 50,
    cy = 50,
    outer = 50,
    inner = 38;
  const pts = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = Math.PI / points * i - Math.PI / 2;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: size,
      height: size,
      transform: `rotate(${rotate}deg)`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: pts.join(' '),
    fill: color,
    stroke: stroke,
    strokeWidth: "2.5",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '22%',
      transform: `rotate(${-rotate}deg)`,
      fontFamily: 'var(--font-display)',
      color: 'var(--ink-900)',
      letterSpacing: '-0.02em',
      lineHeight: 0.95,
      fontSize: size * 0.14
    }
  }, children));
}
Object.assign(__ds_scope, { StarburstCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StarburstCallout.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill / rounded badge for statuses, editions, counts. Thick ink stroke.
 */
function Badge({
  children,
  variant = 'solid',
  tone = 'yellow',
  shape = 'pill',
  ...rest
}) {
  const tones = {
    yellow: {
      bg: 'var(--yellow-400)',
      color: 'var(--ink-900)'
    },
    ink: {
      bg: 'var(--ink-900)',
      color: 'var(--cream-50)'
    },
    rust: {
      bg: 'var(--rust-500)',
      color: 'var(--cream-50)'
    },
    teal: {
      bg: 'var(--teal-500)',
      color: 'var(--cream-50)'
    },
    cream: {
      bg: 'var(--cream-100)',
      color: 'var(--ink-900)'
    }
  };
  const t = tones[tone] || tones.yellow;
  const solid = variant === 'solid';
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    padding: '4px 12px',
    lineHeight: 1.2,
    borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-sm)',
    border: '2px solid var(--ink-900)',
    background: solid ? t.bg : 'transparent',
    color: solid ? t.color : 'var(--ink-900)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Atomic Finds primary action. Tactile: sits on a hard offset shadow,
 * lifts up-left on hover, stamps down-right on press.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = 'button',
  style: styleProp,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const sizes = {
    sm: {
      padding: '8px 14px',
      font: '13px',
      radius: '10px',
      shadow: 3
    },
    md: {
      padding: '11px 20px',
      font: '15px',
      radius: '12px',
      shadow: 4
    },
    lg: {
      padding: '15px 28px',
      font: '18px',
      radius: '14px',
      shadow: 5
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      bg: 'var(--yellow-400)',
      color: 'var(--ink-900)',
      border: 'var(--ink-900)'
    },
    secondary: {
      bg: 'var(--white)',
      color: 'var(--ink-900)',
      border: 'var(--ink-900)'
    },
    invert: {
      bg: 'var(--ink-900)',
      color: 'var(--cream-50)',
      border: 'var(--ink-900)'
    },
    ghost: {
      bg: 'transparent',
      color: 'var(--ink-900)',
      border: 'transparent'
    },
    danger: {
      bg: 'var(--cherry-500)',
      color: 'var(--cream-50)',
      border: 'var(--ink-900)'
    }
  };
  const v = variants[variant] || variants.primary;
  const restShadow = variant === 'ghost' ? 0 : s.shadow;
  const shadowSize = down ? Math.max(0, restShadow - 3) : hover ? restShadow + 2 : restShadow;
  const lift = down ? restShadow : hover ? -2 : 0;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: s.font,
    letterSpacing: '0.01em',
    lineHeight: 1,
    padding: s.padding,
    borderRadius: s.radius,
    background: v.bg,
    color: v.color,
    border: `${variant === 'ghost' ? 0 : 2.5}px solid ${v.border}`,
    boxShadow: restShadow ? `${shadowSize}px ${shadowSize}px 0 var(--ink-900)` : 'none',
    transform: `translate(${lift}px, ${lift}px)`,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-snap), box-shadow var(--dur-fast) var(--ease-snap)',
    WebkitTapHighlightColor: 'transparent',
    userSelect: 'none',
    ...styleProp
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Structural content card. White surface, thick ink border, hard offset
 * shadow, optional square media wrapper for product photography.
 */
function Card({
  children,
  media = null,
  interactive = false,
  padding = 'var(--space-5)',
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const base = 5;
  const shadow = interactive && hover ? base + 3 : base;
  const lift = interactive && hover ? -3 : 0;
  const style = {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    background: 'var(--surface-card)',
    border: '2.5px solid var(--ink-900)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: `${shadow}px ${shadow}px 0 var(--ink-900)`,
    transform: `translate(${lift}px, ${lift}px)`,
    transition: 'transform var(--dur-base) var(--ease-snap), box-shadow var(--dur-base) var(--ease-snap)',
    overflow: 'hidden',
    cursor: interactive ? 'pointer' : 'default',
    ...rest.style
  };
  const {
    style: _s,
    ...restProps
  } = rest;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, restProps), media && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      borderBottom: '2.5px solid var(--ink-900)',
      overflow: 'hidden',
      background: 'var(--cream-200)'
    }
  }, media), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Text input with a heavy ink border that thickens + drops an offset shadow
 * on focus. Optional leading label / eyebrow.
 */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error = false,
  disabled = false,
  iconLeft = null,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontFamily: 'var(--font-body)'
  };
  const labelStyle = {
    fontSize: '12px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-eyebrow)',
    color: 'var(--text-muted)'
  };
  const box = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: disabled ? 'var(--cream-100)' : 'var(--white)',
    border: `2px solid ${error ? 'var(--cherry-500)' : 'var(--ink-900)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '10px 12px',
    boxShadow: focus ? '3px 3px 0 var(--ink-900)' : '0 0 0 var(--ink-900)',
    transform: focus ? 'translate(-1px,-1px)' : 'none',
    transition: 'box-shadow var(--dur-fast) var(--ease-snap), transform var(--dur-fast) var(--ease-snap)',
    opacity: disabled ? 0.6 : 1
  };
  const input = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--text-body)',
    width: '100%'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: wrap
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: box
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    style: input,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest))));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inline metadata tag — smaller and quieter than Badge. Used for genres,
 * facets, filters. Thin ink outline, cream fill.
 */
function Tag({
  children,
  active = false,
  onClick,
  ...rest
}) {
  const clickable = typeof onClick === 'function';
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: '13px',
    padding: '4px 10px',
    borderRadius: 'var(--radius-pill)',
    border: '1.5px solid var(--ink-900)',
    background: active ? 'var(--ink-900)' : 'var(--cream-100)',
    color: active ? 'var(--cream-50)' : 'var(--ink-800)',
    cursor: clickable ? 'pointer' : 'default',
    transition: 'background var(--dur-fast) var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style,
    onClick: onClick
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/HaulScreen.jsx
try { (() => {
// Atomic Finds app — Haul (cart) screen, full-screen on mobile.
const {
  Button,
  Icon,
  StarburstCallout
} = window.AtomicFindsDesignSystem_6739d3;
function HaulScreen({
  items,
  onRemove,
  onCheckout
}) {
  const ProductMedia = window.ProductMedia;
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 16px 8px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      letterSpacing: '-0.03em',
      margin: 0,
      color: 'var(--ink-900)'
    }
  }, "Your Haul")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '8px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '64px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(StarburstCallout, {
    size: 130,
    color: "var(--yellow-400)"
  }, "EMPTY"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      fontSize: '14px'
    }
  }, "Nothing picked yet. Go fill it.")), items.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      border: '2px solid var(--ink-900)',
      borderRadius: 'var(--radius-md)',
      padding: '10px',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '56px',
      height: '56px',
      flex: 'none',
      border: '2px solid var(--ink-900)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ProductMedia, {
    item: item,
    size: "12px"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '15px',
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)',
      lineHeight: 1.1
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, "Qty ", item.qty)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '16px',
      color: 'var(--ink-900)'
    }
  }, "$", item.price * item.qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(item.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 17,
    color: "var(--text-muted)"
  }))))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px calc(16px + env(safe-area-inset-bottom))',
      borderTop: '3px solid var(--ink-900)',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, "Subtotal \xB7 ", count, " items"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '28px',
      color: 'var(--ink-900)'
    }
  }, "$", subtotal)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onCheckout,
    style: {
      width: '100%'
    }
  }, "Check Out")));
}
window.HaulScreen = HaulScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/HaulScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/HomeFeed.jsx
try { (() => {
// Atomic Finds app — Home feed (mobile).
const {
  Button,
  Badge,
  Tag,
  Card,
  StarburstCallout,
  Icon
} = window.AtomicFindsDesignSystem_6739d3;
function HomeFeed({
  data,
  onOpen,
  onAdd
}) {
  const [room, setRoom] = React.useState('All');
  const ProductMedia = window.ProductMedia;
  const list = data.pieces.filter(p => room === 'All' || p.rooms.includes(room));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 16px 10px',
      position: 'sticky',
      top: 0,
      background: 'var(--cream-50)',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Atomic Finds",
    style: {
      height: '26px',
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      margin: '4px 16px 20px',
      background: 'var(--yellow-400)',
      border: '3px solid var(--ink-900)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-hard)',
      padding: '22px 18px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontSize: '11px',
      color: 'var(--ink-900)',
      marginBottom: '8px'
    }
  }, "New This Week"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '34px',
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
      color: 'var(--ink-900)',
      margin: 0,
      maxWidth: '220px'
    }
  }, "Hand-Picked & Ready to Live In"), /*#__PURE__*/React.createElement(Button, {
    variant: "invert",
    size: "md",
    style: {
      marginTop: '16px'
    }
  }, "Shop the Haul"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '-18px',
      bottom: '-18px'
    }
  }, /*#__PURE__*/React.createElement(StarburstCallout, {
    size: 92,
    color: "var(--cream-50)",
    rotate: -8
  }, "8 NEW!"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      padding: '0 16px 16px',
      overflowX: 'auto'
    }
  }, data.rooms.map(r => /*#__PURE__*/React.createElement(Tag, {
    key: r,
    active: r === room,
    onClick: () => setRoom(r)
  }, r))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: '14px',
      padding: '0 16px 24px'
    }
  }, list.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    style: {
      position: 'relative',
      minWidth: 0
    }
  }, item.drop && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-8px',
      left: '-8px',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "rust"
  }, "New")), /*#__PURE__*/React.createElement(Card, {
    onClick: () => onOpen(item),
    interactive: true,
    padding: "var(--space-3)",
    media: /*#__PURE__*/React.createElement(ProductMedia, {
      item: item,
      size: "16px"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '15px',
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)',
      lineHeight: 1.1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'var(--text-muted)',
      margin: '2px 0 8px'
    }
  }, item.maker), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '17px',
      color: 'var(--ink-900)'
    }
  }, "$", item.price), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onAdd(item);
    },
    "aria-label": "Add to haul",
    style: {
      width: '32px',
      height: '32px',
      borderRadius: '999px',
      border: '2px solid var(--ink-900)',
      background: 'var(--yellow-400)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  }))))))));
}
window.HomeFeed = HomeFeed;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/HomeFeed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ProductDetail.jsx
try { (() => {
// Atomic Finds app — Product detail (mobile, full-bleed photo + sticky CTA).
const {
  Button,
  Badge,
  PillLink,
  Icon
} = window.AtomicFindsDesignSystem_6739d3;
function ProductDetail({
  item,
  onBack,
  onAdd
}) {
  const ProductMedia = window.ProductMedia;
  const meta = [['Maker', item.maker], ['Collection', item.collection], ['Year', item.year], ['Condition', item.condition], ['Material', 'Bamboo & woven cane']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      borderBottom: '3px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(ProductMedia, {
    item: item,
    size: "30px"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Back",
    style: {
      position: 'absolute',
      top: '14px',
      left: '14px',
      width: '36px',
      height: '36px',
      borderRadius: '999px',
      background: 'var(--cream-50)',
      border: '2px solid var(--ink-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 18px 100px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      marginBottom: '10px',
      flexWrap: 'wrap'
    }
  }, item.drop && /*#__PURE__*/React.createElement(Badge, {
    tone: "rust"
  }, "Fresh Find"), item.rooms.map(r => /*#__PURE__*/React.createElement(Badge, {
    key: r,
    variant: "outline"
  }, r))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '32px',
      lineHeight: 0.98,
      letterSpacing: '-0.03em',
      color: 'var(--ink-900)',
      margin: 0
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--text-muted)',
      marginTop: '4px'
    }
  }, item.maker), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      color: 'var(--ink-900)',
      marginTop: '14px'
    }
  }, "$", item.price), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--ink-900)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      marginTop: '20px'
    }
  }, meta.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 14px',
      background: i % 2 ? 'var(--cream-100)' : 'var(--white)',
      borderBottom: i < meta.length - 1 ? '1.5px solid var(--sand-400)' : 'none',
      fontFamily: 'var(--font-body)',
      fontSize: '13px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: 700,
      fontSize: '11px',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--ink-900)'
    }
  }, v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      marginTop: '18px'
    }
  }, "Rated ", /*#__PURE__*/React.createElement("strong", null, item.condition), " by hand \u2014 cleaned, tightened, and checked for weave breaks before it ships. Original patina kept intact."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '18px'
    }
  }, /*#__PURE__*/React.createElement(PillLink, null, "Our Condition Scale"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      maxWidth: '390px',
      margin: '0 auto',
      padding: '14px 18px calc(14px + env(safe-area-inset-bottom))',
      background: 'var(--cream-50)',
      borderTop: '3px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%'
    },
    onClick: () => onAdd(item)
  }, "Add to Haul \xB7 $", item.price)));
}
window.ProductDetail = ProductDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/TabBar.jsx
try { (() => {
// Atomic Finds app — bottom tab bar (mobile nav).
const {
  Icon
} = window.AtomicFindsDesignSystem_6739d3;
function TabBar({
  active,
  onChange,
  haulCount
}) {
  const tabs = [{
    id: 'shop',
    label: 'Shop',
    icon: 'home'
  }, {
    id: 'search',
    label: 'Search',
    icon: 'search'
  }, {
    id: 'haul',
    label: 'Haul',
    icon: 'shopping-bag',
    badge: haulCount
  }, {
    id: 'account',
    label: 'Account',
    icon: 'user'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 30,
      display: 'flex',
      background: 'var(--cream-50)',
      borderTop: '3px solid var(--ink-900)',
      padding: '8px 6px calc(8px + env(safe-area-inset-bottom))'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => onChange(t.id),
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '6px 0',
      position: 'relative',
      color: active === t.id ? 'var(--ink-900)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    size: 22,
    color: active === t.id ? 'var(--ink-900)' : 'var(--text-muted)'
  }), !!t.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '-6px',
      right: '-9px',
      minWidth: '16px',
      height: '16px',
      borderRadius: '999px',
      background: 'var(--rust-500)',
      color: 'var(--cream-50)',
      fontSize: '10px',
      fontWeight: 700,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 4px',
      border: '1.5px solid var(--cream-50)'
    }
  }, t.badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 700
    }
  }, t.label))));
}
window.TabBar = TabBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/CrateScreen.jsx
try { (() => {
// Atomic Finds store — Haul (cart) drawer contents.
const {
  Button,
  Badge,
  Icon,
  StarburstCallout
} = window.AtomicFindsDesignSystem_6739d3;
function CrateScreen({
  items,
  onClose,
  onRemove,
  onCheckout
}) {
  const ProductMedia = window.ProductMedia;
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(23,20,18,0.4)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'relative',
      width: '420px',
      maxWidth: '92vw',
      height: '100%',
      background: 'var(--cream-50)',
      borderLeft: '3px solid var(--ink-900)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 24px',
      borderBottom: '3px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      letterSpacing: '-0.03em',
      margin: 0,
      color: 'var(--ink-900)'
    }
  }, "Your Haul"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 26
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '18px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '56px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(StarburstCallout, {
    size: 150,
    color: "var(--yellow-400)"
  }, "HAUL EMPTY"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      fontSize: '15px'
    }
  }, "Nothing picked yet. Go fill it.")), items.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '64px',
      height: '64px',
      flex: 'none',
      border: '2px solid var(--ink-900)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(ProductMedia, {
    item: item,
    size: "14px"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '17px',
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)',
      lineHeight: 1.05
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, item.maker, " \xB7 Qty ", item.qty)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      color: 'var(--ink-900)'
    }
  }, "$", item.price * item.qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(item.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 18,
    color: "var(--text-muted)"
  }))))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      borderTop: '3px solid var(--ink-900)',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, "Subtotal \xB7 ", count, " items"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '34px',
      color: 'var(--ink-900)'
    }
  }, "$", subtotal)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onCheckout,
    style: {
      width: '100%'
    }
  }, "Check Out"))));
}
window.CrateScreen = CrateScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/CrateScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Header.jsx
try { (() => {
// Atomic Finds store — top nav. Wordmark + search + haul (cart).
const {
  Icon,
  Badge
} = window.AtomicFindsDesignSystem_6739d3;
function Header({
  crateCount,
  onNav,
  onOpenCrate,
  query,
  onQuery
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      padding: '16px 28px',
      background: 'var(--cream-50)',
      borderBottom: '3px solid var(--ink-900)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Atomic Finds",
    style: {
      height: '34px',
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '22px',
      marginLeft: '8px'
    }
  }, ['Shop', 'New Finds', 'Makers', 'Journal'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '14px',
      color: 'var(--ink-900)',
      textDecoration: 'none',
      letterSpacing: '0.01em'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      width: '260px',
      background: 'var(--white)',
      border: '2px solid var(--ink-900)',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18
  }), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => onQuery(e.target.value),
    placeholder: "Search the haul\u2026",
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--text-body)'
    }
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCrate,
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--yellow-400)',
      border: '2.5px solid var(--ink-900)',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 16px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '14px',
      color: 'var(--ink-900)',
      boxShadow: '3px 3px 0 var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 18
  }), "Haul", crateCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: '20px',
      height: '20px',
      borderRadius: '999px',
      background: 'var(--ink-900)',
      color: 'var(--cream-50)',
      fontSize: '12px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px'
    }
  }, crateCount)));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/HomeScreen.jsx
try { (() => {
// Atomic Finds store — Home / browse.
const {
  Button,
  Badge,
  Tag,
  Card,
  StarburstCallout,
  PillLink
} = window.AtomicFindsDesignSystem_6739d3;

// Shared media block (placeholder for product photography).
function ProductMedia({
  item,
  size
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: item.swatch,
      color: item.ink,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '12px 14px',
      fontFamily: 'var(--font-display)',
      letterSpacing: '-0.02em',
      minWidth: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      opacity: 0.85,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.collection), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size || '26px',
      lineHeight: 0.95,
      overflowWrap: 'break-word'
    }
  }, item.title));
}
window.ProductMedia = ProductMedia;
function HomeScreen({
  data,
  query,
  onOpen,
  onAdd
}) {
  const [room, setRoom] = React.useState('All');
  const list = data.pieces.filter(p => (room === 'All' || p.rooms.includes(room)) && (!query || (p.title + p.maker + p.collection).toLowerCase().includes(query.toLowerCase())));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--yellow-400)',
      borderBottom: '3px solid var(--ink-900)',
      padding: '56px 48px 64px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '680px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: '14px',
      color: 'var(--ink-900)',
      marginBottom: '14px'
    }
  }, "New This Week"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '84px',
      lineHeight: 0.9,
      letterSpacing: '-0.035em',
      color: 'var(--ink-900)',
      margin: 0,
      textShadow: '4px 4px 0 var(--yellow-500)'
    }
  }, "Hand-Picked", /*#__PURE__*/React.createElement("br", null), "& Ready to Live In"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '18px',
      lineHeight: 1.5,
      color: 'var(--ink-800)',
      maxWidth: '480px',
      marginTop: '20px'
    }
  }, "Every piece is sourced, cleaned, and shot in natural light before it hits the floor. Vintage bamboo & rattan, no reproductions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      marginTop: '26px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "invert",
    size: "lg"
  }, "Shop the Haul"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "How We Source"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '56px',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }, /*#__PURE__*/React.createElement(StarburstCallout, {
    size: 190,
    color: "var(--cream-50)",
    rotate: -10
  }, "8 FRESH FINDS!"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 48px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '16px',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      letterSpacing: '-0.03em',
      color: 'var(--ink-900)',
      margin: 0
    }
  }, "The Haul"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, data.rooms.map(r => /*#__PURE__*/React.createElement(Tag, {
    key: r,
    active: r === room,
    onClick: () => setRoom(r)
  }, r)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '26px'
    }
  }, list.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    style: {
      position: 'relative'
    }
  }, item.drop && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-10px',
      left: '-10px',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "rust"
  }, "Fresh Find")), /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    style: {
      cursor: 'pointer'
    },
    media: /*#__PURE__*/React.createElement("div", {
      onClick: () => onOpen(item),
      style: {
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(ProductMedia, {
      item: item
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen(item),
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '19px',
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)',
      lineHeight: 1.05,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)',
      marginTop: '2px'
    }
  }, item.maker, " \xB7 ", item.year)), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    shape: "rounded"
  }, item.condition)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      color: 'var(--ink-900)'
    }
  }, "$", item.price), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onAdd(item)
  }, "Add to Haul"))))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/ProductScreen.jsx
try { (() => {
// Atomic Finds store — Product detail (square photo + metadata split layout).
const {
  Button,
  Badge,
  Tag,
  PillLink,
  Icon
} = window.AtomicFindsDesignSystem_6739d3;
function ProductScreen({
  item,
  onBack,
  onAdd
}) {
  const ProductMedia = window.ProductMedia;
  const meta = [['Maker', item.maker], ['Collection', item.collection], ['Year', item.year], ['Condition', item.condition], ['Material', 'Bamboo & woven cane'], ['Find No.', '001 / 1']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 48px 72px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '14px',
      color: 'var(--ink-900)',
      marginBottom: '28px',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 18
  }), " Back to the haul"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(280px, 440px) 1fr',
      gap: '48px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      border: '3px solid var(--ink-900)',
      boxShadow: '8px 8px 0 var(--ink-900)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(ProductMedia, {
    item: item,
    size: "52px"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginBottom: '14px'
    }
  }, item.drop && /*#__PURE__*/React.createElement(Badge, {
    tone: "rust"
  }, "Fresh Find"), item.rooms.map(r => /*#__PURE__*/React.createElement(Badge, {
    key: r,
    variant: "outline"
  }, r))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '56px',
      lineHeight: 0.92,
      letterSpacing: '-0.035em',
      color: 'var(--ink-900)',
      margin: 0
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '18px',
      color: 'var(--text-muted)',
      marginTop: '8px'
    }
  }, item.maker), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      margin: '26px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '44px',
      color: 'var(--ink-900)',
      lineHeight: 1
    }
  }, "$", item.price), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onAdd(item),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-bag",
      size: 20
    })
  }, "Add to Haul")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '2px solid var(--ink-900)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      maxWidth: '520px'
    }
  }, meta.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '11px 16px',
      background: i % 2 ? 'var(--cream-100)' : 'var(--white)',
      borderBottom: i < meta.length - 1 ? '1.5px solid var(--sand-400)' : 'none',
      fontFamily: 'var(--font-body)',
      fontSize: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontWeight: 700,
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--ink-900)'
    }
  }, v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: '520px',
      marginTop: '22px'
    }
  }, "Rated ", /*#__PURE__*/React.createElement("strong", null, item.condition), " by hand \u2014 cleaned, tightened, and checked for weave breaks before it ships. Original patina kept intact, no refinishing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      marginTop: '22px'
    }
  }, /*#__PURE__*/React.createElement(PillLink, null, "Our Condition Scale"), /*#__PURE__*/React.createElement(PillLink, {
    tone: "rust"
  }, "Shipping & Returns")))));
}
window.ProductScreen = ProductScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/data.js
try { (() => {
// Atomic Finds — fake furniture catalog (UI-kit only).
// Pieces are represented by a solid swatch color + title text (no real
// product photography was supplied) — swap for photography when it arrives.
window.STORE_DATA = {
  pieces: [{
    id: 'p1',
    title: 'Papasan Lounge Chair',
    maker: 'Ficks Reed',
    year: 1968,
    collection: 'Island Line',
    price: 420,
    condition: 'Excellent',
    swatch: 'var(--rust-500)',
    ink: 'var(--cream-50)',
    rooms: ['Living', 'Lounge'],
    drop: true
  }, {
    id: 'p2',
    title: 'Cane Bentwood Rocker',
    maker: 'Franco Albini',
    year: 1972,
    collection: 'Studio Cane',
    price: 585,
    condition: 'Good',
    swatch: 'var(--ink-900)',
    ink: 'var(--yellow-400)',
    rooms: ['Living']
  }, {
    id: 'p3',
    title: 'Woven Peacock Chair',
    maker: 'Unmarked',
    year: 1965,
    collection: 'Manila Craft',
    price: 710,
    condition: 'Excellent',
    swatch: 'var(--teal-500)',
    ink: 'var(--cream-50)',
    rooms: ['Lounge'],
    drop: true
  }, {
    id: 'p4',
    title: 'Bamboo Bar Cart',
    maker: 'Ficks Reed',
    year: 1970,
    collection: 'Island Line',
    price: 340,
    condition: 'Good',
    swatch: 'var(--yellow-400)',
    ink: 'var(--ink-900)',
    rooms: ['Dining']
  }, {
    id: 'p5',
    title: 'Rattan Console Table',
    maker: 'McGuire',
    year: 1974,
    collection: 'San Francisco Studio',
    price: 495,
    condition: 'Fair',
    swatch: 'var(--cherry-500)',
    ink: 'var(--cream-50)',
    rooms: ['Living']
  }, {
    id: 'p6',
    title: 'Cane Daybed',
    maker: 'Unmarked',
    year: 1969,
    collection: 'Manila Craft',
    price: 890,
    condition: 'Excellent',
    swatch: 'var(--cream-300)',
    ink: 'var(--ink-900)',
    rooms: ['Lounge', 'Outdoor']
  }, {
    id: 'p7',
    title: 'Wicker Étagère',
    maker: 'Danny Ho Fong',
    year: 1971,
    collection: 'Tropi-Cal',
    price: 460,
    condition: 'Good',
    swatch: 'var(--umber-600)',
    ink: 'var(--cream-50)',
    rooms: ['Living']
  }, {
    id: 'p8',
    title: 'Woven Dining Chair, Set of 4',
    maker: 'Ficks Reed',
    year: 1967,
    collection: 'Island Line',
    price: 920,
    condition: 'Good',
    swatch: 'var(--rust-600)',
    ink: 'var(--cream-50)',
    rooms: ['Dining'],
    drop: true
  }],
  rooms: ['All', 'Living', 'Dining', 'Lounge', 'Outdoor']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.PillLink = __ds_scope.PillLink;

__ds_ns.StarburstCallout = __ds_scope.StarburstCallout;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

})();
