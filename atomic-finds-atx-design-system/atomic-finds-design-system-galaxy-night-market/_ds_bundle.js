/* @ds-bundle: {"format":4,"namespace":"AtomicFindsDesignSystem_29110a","components":[{"name":"Badge","sourcePath":"components/Badge.jsx"},{"name":"Button","sourcePath":"components/Button.jsx"},{"name":"Card","sourcePath":"components/Card.jsx"},{"name":"GalaxyCard","sourcePath":"components/GalaxyCard.jsx"},{"name":"Icon","sourcePath":"components/Icon.jsx"},{"name":"ProductCard","sourcePath":"components/ProductCard.jsx"},{"name":"ProductGrid","sourcePath":"components/ProductGrid.jsx"},{"name":"GalaxyCardRef","sourcePath":"design_handoff_homepage/components/GalaxyCard.reference.jsx"},{"name":"IconRef","sourcePath":"design_handoff_homepage/components/Icon.reference.jsx"}],"sourceHashes":{"animations.jsx":"a8d2a696abaa","components/Badge.jsx":"d0f3ae2676ad","components/Button.jsx":"806d1c2a88f2","components/Card.jsx":"ded877a56495","components/GalaxyCard.jsx":"b6e15c5260f2","components/Icon.jsx":"72a556cb870b","components/ProductCard.jsx":"3beeb6c83018","components/ProductGrid.jsx":"7e1914d4cc37","design_handoff_homepage/components/Badge.reference.jsx":"f3be9b327a12","design_handoff_homepage/components/Button.reference.jsx":"dd91ae7666ee","design_handoff_homepage/components/Card.reference.jsx":"95211428f114","design_handoff_homepage/components/GalaxyCard.reference.jsx":"2a52a309bafd","design_handoff_homepage/components/Icon.reference.jsx":"bc76ae02fe1e","design_handoff_homepage/components/ProductCard.reference.jsx":"a5affa73c1cf","design_handoff_homepage/components/ProductGrid.reference.jsx":"cfadb10ae692","design_handoff_product_grid/ProductCard.reference.jsx":"a5affa73c1cf","design_handoff_product_grid/ProductGrid.reference.jsx":"1aeaac7cd5f3","previews/galaxy-card-scene.jsx":"bff406a7a939","ui_kits/website/doc-page.js":"371bab66f42d","ui_kits/website/tweaks-panel.jsx":"d259e3a86f73"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AtomicFindsDesignSystem_29110a = window.AtomicFindsDesignSystem_29110a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// animations.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// animations.jsx — timeline engine. Exports (on window): Stage, Sprite,
//   TextSprite, ImageSprite, RectSprite, VideoSprite, PlaybackBar,
//   useTime, useTimeline, useSprite, Easing, interpolate, animate, clamp.
//
//   <Stage width={1280} height={720} duration={10} background="#f6f4ef">
//     <Sprite start={0} end={3}>
//       <TextSprite text="Hello" x={100} y={300} size={72} color="#111" />
//     </Sprite>
//     <Sprite start={2} end={8}>
//       <ImageSprite src="hero.png" x={200} y={120} width={640} height={360} kenBurns />
//     </Sprite>
//   </Stage>
//
// Stage({width,height,duration,background,fps,loop,autoplay}) — auto-scales to
//   viewport; scrubber + play/pause + ←/→ seek + space + 0-reset; persists
//   playhead. The canvas is an <svg><foreignObject>, export-ready: Share →
//   Export → Video (or the PlaybackBar's download button) renders it to .mp4.
//   Screenshot tools DOM-rerender (not pixel-capture) and unwrap this wrapper
//   so captures should work — but if one comes back black, that's a capture
//   artifact, not a render bug; trust the live preview.
// Sprite({start,end,keepMounted}) — mounts children only while playhead is in
//   [start,end]. Children read {localTime, progress, duration} via useSprite().
// useTime() → seconds; useTimeline() → {time,duration,playing,setTime,setPlaying}.
// TextSprite({text,x,y,size,color,font,weight,align,entryDur,exitDur}) — fades/scales in+out.
// ImageSprite({src,x,y,width,height,fit,radius,kenBurns,placeholder}) — same, with optional ken-burns.
// RectSprite({x,y,width,height,color,radius}) — solid box with entry/exit.
// VideoSprite({src,start,end,speed,style}) — looped <video> clip synced to the
//   timeline; its audio is mixed into the exported video.
// Easing.{linear,easeIn/Out/InOut Quad/Cubic/Quart/Quint/Expo/Back, …}
// interpolate([t0,t1,…],[v0,v1,…],ease?) → (t)=>v  — piecewise tween.
// animate({from,to,start,end,ease}) → (t)=>v  — single tween.
//
// Build scenes by composing Sprites inside Stage. Absolutely-position elements.
//
// In a .dc.html project, put your scene in a sibling my-scene.jsx (reading
// {Stage, Sprite, useTime, Easing, …} from window is safe) and mount BOTH:
//   <x-import component-from-global-scope="MyScene"
//             from="./animations.jsx ./my-scene.jsx"></x-import>
// The two files in from= load in order, so my-scene.jsx can use the globals
// animations.jsx set.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

// ── Easing functions (hand-rolled, Popmotion-style) ─────────────────────────
// All easings take t ∈ [0,1] and return eased t ∈ [0,1] (may overshoot for back/elastic).
const Easing = {
  linear: t => t,
  // Quad
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // Cubic
  easeInCubic: t => t * t * t,
  easeOutCubic: t => --t * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // Quart
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - --t * t * t * t,
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // Expo
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: t => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return 0.5 * Math.pow(2, 20 * t - 10);
    return 1 - 0.5 * Math.pow(2, -20 * t + 10);
  },
  // Sine
  easeInSine: t => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: t => Math.sin(t * Math.PI / 2),
  easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
  // Back (overshoot)
  easeOutBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  easeInBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },
  easeInOutBack: t => {
    const c1 = 1.70158,
      c2 = c1 * 1.525;
    return t < 0.5 ? Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2) / 2 : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  },
  // Elastic
  easeOutElastic: t => {
    const c4 = 2 * Math.PI / 3;
    if (t === 0) return 0;
    if (t === 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

// ── Core interpolation helpers ──────────────────────────────────────────────

// Clamp a value to [min, max]
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// interpolate([0, 0.5, 1], [0, 100, 50], ease?) -> fn(t)
// Popmotion-style: linearly maps t across input keyframes to output values,
// with optional easing per segment (single fn or array of fns).
function interpolate(input, output, ease = Easing.linear) {
  return t => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        const easeFn = Array.isArray(ease) ? ease[i] || Easing.linear : ease;
        const eased = easeFn(local);
        return output[i] + (output[i + 1] - output[i]) * eased;
      }
    }
    return output[output.length - 1];
  };
}

// animate({from, to, start, end, ease})(t) — simpler single-segment tween.
// Returns `from` before `start`, `to` after `end`.
function animate({
  from = 0,
  to = 1,
  start = 0,
  end = 1,
  ease = Easing.easeInOutCubic
}) {
  return t => {
    if (t <= start) return from;
    if (t >= end) return to;
    const local = (t - start) / (end - start);
    return from + (to - from) * ease(local);
  };
}

// ── Timeline context ────────────────────────────────────────────────────────

const TimelineContext = React.createContext({
  time: 0,
  duration: 10,
  playing: false
});
const useTime = () => React.useContext(TimelineContext).time;
const useTimeline = () => React.useContext(TimelineContext);

// ── Sprite ──────────────────────────────────────────────────────────────────
// Renders children only when the playhead is inside [start, end]. Provides
// a sub-context with `localTime` (seconds since start) and `progress` (0..1).
//
//   <Sprite start={2} end={5}>
//     {({ localTime, progress }) => <Thing x={progress * 100} />}
//   </Sprite>
//
// Or as a plain wrapper — children can call useSprite() themselves.

const SpriteContext = React.createContext({
  localTime: 0,
  progress: 0,
  duration: 0
});
const useSprite = () => React.useContext(SpriteContext);
function Sprite({
  start = 0,
  end = Infinity,
  children,
  keepMounted = false
}) {
  const {
    time
  } = useTimeline();
  const visible = time >= start && time <= end;
  if (!visible && !keepMounted) return null;
  const duration = end - start;
  const localTime = Math.max(0, time - start);
  const progress = duration > 0 && isFinite(duration) ? clamp(localTime / duration, 0, 1) : 0;
  const value = {
    localTime,
    progress,
    duration,
    visible
  };
  return /*#__PURE__*/React.createElement(SpriteContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
}

// ── Sample sprite components ────────────────────────────────────────────────

// TextSprite: fades/slides text in on entry, holds, then fades out on exit.
// Props: text, x, y, size, color, font, entryDur, exitDur, align
function TextSprite({
  text,
  x = 0,
  y = 0,
  size = 48,
  color = '#111',
  font = 'Inter, system-ui, sans-serif',
  weight = 600,
  entryDur = 0.45,
  exitDur = 0.35,
  entryEase = Easing.easeOutBack,
  exitEase = Easing.easeInCubic,
  align = 'left',
  letterSpacing = '-0.01em'
}) {
  const {
    localTime,
    duration
  } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let ty = 0;
  if (localTime < entryDur) {
    const t = entryEase(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    ty = (1 - t) * 16;
  } else if (localTime > exitStart) {
    const t = exitEase(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    ty = -t * 8;
  }
  const translateX = align === 'center' ? '-50%' : align === 'right' ? '-100%' : '0';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      transform: `translate(${translateX}, ${ty}px)`,
      opacity,
      fontFamily: font,
      fontSize: size,
      fontWeight: weight,
      color,
      letterSpacing,
      whiteSpace: 'pre',
      lineHeight: 1.1,
      willChange: 'transform, opacity'
    }
  }, text);
}

// ImageSprite: scales + fades in; optional Ken Burns drift during hold.
function ImageSprite({
  src,
  x = 0,
  y = 0,
  width = 400,
  height = 300,
  entryDur = 0.6,
  exitDur = 0.4,
  kenBurns = false,
  kenBurnsScale = 1.08,
  radius = 12,
  fit = 'cover',
  placeholder = null // {label: string} for striped placeholder
}) {
  const {
    localTime,
    duration
  } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let scale = 1;
  if (localTime < entryDur) {
    const t = Easing.easeOutCubic(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    scale = 0.96 + 0.04 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInCubic(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = (kenBurns ? kenBurnsScale : 1) + 0.02 * t;
  } else if (kenBurns) {
    const holdSpan = exitStart - entryDur;
    const holdT = holdSpan > 0 ? (localTime - entryDur) / holdSpan : 0;
    scale = 1 + (kenBurnsScale - 1) * holdT;
  }
  const content = placeholder ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'repeating-linear-gradient(135deg, #e9e6df 0 10px, #dcd8cf 10px 20px)',
      color: '#6b6458',
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, placeholder.label || 'image') : /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      borderRadius: radius,
      overflow: 'hidden',
      willChange: 'transform, opacity'
    }
  }, content);
}

// RectSprite: simple rectangle that animates position/size/color via props.
// Useful demo primitive — takes a `render` fn for per-frame customization.
function RectSprite({
  x = 0,
  y = 0,
  width = 100,
  height = 100,
  color = '#111',
  radius = 8,
  entryDur = 0.4,
  exitDur = 0.3,
  render // optional: (ctx) => style overrides
}) {
  const spriteCtx = useSprite();
  const {
    localTime,
    duration
  } = spriteCtx;
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let scale = 1;
  if (localTime < entryDur) {
    const t = Easing.easeOutBack(clamp(localTime / entryDur, 0, 1));
    opacity = clamp(localTime / entryDur, 0, 1);
    scale = 0.4 + 0.6 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInQuad(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = 1 - 0.15 * t;
  }
  const overrides = render ? render(spriteCtx) : {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      background: color,
      borderRadius: radius,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      willChange: 'transform, opacity',
      ...overrides
    }
  });
}

// ── Font inlining ───────────────────────────────────────────────────────────
// Copy every @font-face rule from the page into a <style> inside the svg's
// foreignObject, with font URLs rewritten to data: URLs. Makes the svg
// self-describing so serializing it alone (video export fast path) still
// renders with the right fonts. Sets data-om-fonts-inlined on the svg when
// done so the exporter can wait for it.

function useInlineFontsInto(svgRef) {
  React.useEffect(() => {
    const svg = svgRef.current;
    const host = svg && svg.querySelector('foreignObject > div');
    if (!svg || !host) return;
    let cancelled = false;
    (async () => {
      const rules = [];
      for (const ss of document.styleSheets) {
        let cssRules;
        try {
          cssRules = ss.cssRules;
        } catch {
          // Cross-origin sheet without crossorigin attr (e.g. the standard
          // fonts.googleapis.com <link>) — fetch the CSS text directly and
          // regex-extract the @font-face blocks.
          if (ss.href) {
            try {
              const txt = await fetch(ss.href).then(r => {
                if (!r.ok) throw 0;
                return r.text();
              });
              for (const ff of txt.match(/@font-face\s*{[^}]*}/g) || []) rules.push({
                css: ff,
                base: ss.href
              });
            } catch {}
          }
          continue;
        }
        if (!cssRules) continue;
        for (const r of cssRules) {
          if (r.type === CSSRule.FONT_FACE_RULE) {
            rules.push({
              css: r.cssText,
              base: ss.href || location.href
            });
          }
        }
      }
      const toDataURL = url => fetch(url).then(r => {
        if (!r.ok) throw 0;
        return r.blob();
      }).then(b => new Promise(res => {
        const fr = new FileReader();
        fr.onload = () => res(fr.result);
        fr.onerror = () => res(url);
        fr.readAsDataURL(b);
      })).catch(() => url);
      const parts = await Promise.all(rules.map(async ({
        css,
        base
      }) => {
        const re = /url\((['"]?)([^'")]+)\1\)/g;
        let out = css,
          m;
        while (m = re.exec(css)) {
          const u = m[2];
          if (u.startsWith('data:')) continue;
          let abs;
          try {
            abs = new URL(u, base).href;
          } catch {
            continue;
          }
          out = out.split(m[0]).join(`url("${await toDataURL(abs)}")`);
        }
        return out;
      }));
      if (cancelled || !parts.length) {
        svg.setAttribute('data-om-fonts-inlined', 'true');
        return;
      }
      const style = document.createElement('style');
      style.textContent = parts.join('\n');
      host.insertBefore(style, host.firstChild);
      svg.setAttribute('data-om-fonts-inlined', 'true');
    })();
    return () => {
      cancelled = true;
    };
  }, []);
}
function Stage({
  width = 1280,
  height = 720,
  duration = 10,
  background = '#f6f4ef',
  fps = 60,
  loop = true,
  autoplay = true,
  persistKey = 'animstage',
  children
}) {
  // Props arrive as strings when Stage is mounted via <x-import> (DC
  // projects) — coerce so style={{width}} gets a number React can px-ify.
  width = +width || 1280;
  height = +height || 720;
  duration = +duration || 10;
  fps = +fps || 60;
  if (typeof loop === 'string') loop = loop !== 'false';
  if (typeof autoplay === 'string') autoplay = autoplay !== 'false';
  const [time, setTime] = React.useState(() => {
    try {
      const v = parseFloat(localStorage.getItem(persistKey + ':t') || '0');
      return isFinite(v) ? clamp(v, 0, duration) : 0;
    } catch {
      return 0;
    }
  });
  const [playing, setPlaying] = React.useState(autoplay);
  const [hoverTime, setHoverTime] = React.useState(null);
  const [scale, setScale] = React.useState(1);
  const stageRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const lastTsRef = React.useRef(null);

  // Persist playhead
  React.useEffect(() => {
    try {
      localStorage.setItem(persistKey + ':t', String(time));
    } catch {}
  }, [time, persistKey]);

  // Auto-scale to fit viewport
  React.useEffect(() => {
    if (!stageRef.current) return;
    const el = stageRef.current;
    const measure = () => {
      const barH = 44; // playback bar height
      const s = Math.min(el.clientWidth / width, (el.clientHeight - barH) / height);
      setScale(Math.max(0.05, s));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [width, height]);

  // Animation loop
  React.useEffect(() => {
    if (!playing) {
      lastTsRef.current = null;
      return;
    }
    const step = ts => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      setTime(t => {
        let next = t + dt;
        if (next >= duration) {
          if (loop) next = next % duration;else {
            next = duration;
            setPlaying(false);
          }
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [playing, duration, loop]);

  // Keyboard: space = play/pause, ← → = seek
  React.useEffect(() => {
    const onKey = e => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setPlaying(p => !p);
      } else if (e.code === 'ArrowLeft') {
        setTime(t => clamp(t - (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.code === 'ArrowRight') {
        setTime(t => clamp(t + (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.key === '0' || e.code === 'Home') {
        setTime(0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [duration]);

  // Video-export protocol: the exporter dispatches this event per frame;
  // pause + sync the playhead so the capture sees exactly that timestamp.
  React.useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const onSeek = e => {
      setPlaying(false);
      setTime(clamp(e.detail.time, 0, duration));
    };
    el.addEventListener('data-om-seek-to-time-frame', onSeek);
    return () => el.removeEventListener('data-om-seek-to-time-frame', onSeek);
  }, [duration]);

  // Inline @font-face rules into the svg's foreignObject so the svg is
  // self-describing — serializing it alone (for video export) then renders
  // with the right fonts. Sets data-om-fonts-inlined once done.
  useInlineFontsInto(canvasRef);
  const displayTime = hoverTime != null ? hoverTime : time;
  const ctxValue = React.useMemo(() => ({
    time: displayTime,
    duration,
    playing,
    setTime,
    setPlaying
  }), [displayTime, duration, playing]);
  return /*#__PURE__*/React.createElement("div", {
    ref: stageRef,
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#0a0a0a',
      fontFamily: 'Inter, system-ui, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    ref: canvasRef,
    width: width,
    height: height,
    "data-om-exportable-video-with-duration-secs": duration,
    style: {
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      flexShrink: 0,
      boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("foreignObject", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("div", {
    xmlns: "http://www.w3.org/1999/xhtml",
    style: {
      width,
      height,
      background,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TimelineContext.Provider, {
    value: ctxValue
  }, children))))), /*#__PURE__*/React.createElement(PlaybackBar, {
    time: displayTime,
    actualTime: time,
    duration: duration,
    playing: playing,
    onPlayPause: () => setPlaying(p => !p),
    onReset: () => {
      setTime(0);
    },
    onSeek: t => setTime(t),
    onHover: t => setHoverTime(t)
  }));
}

// ── Playback bar ────────────────────────────────────────────────────────────
// Play/pause, return-to-begin, scrub track, time display.
// Uses fixed-width time fields so layout doesn't thrash.

function PlaybackBar({
  time,
  duration,
  playing,
  onPlayPause,
  onReset,
  onSeek,
  onHover
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const timeFromEvent = React.useCallback(e => {
    const rect = trackRef.current.getBoundingClientRect();
    const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    return x * duration;
  }, [duration]);
  const onTrackMove = e => {
    if (!trackRef.current) return;
    const t = timeFromEvent(e);
    if (dragging) {
      onSeek(t);
    } else {
      onHover(t);
    }
  };
  const onTrackLeave = () => {
    if (!dragging) onHover(null);
  };
  const onTrackDown = e => {
    setDragging(true);
    const t = timeFromEvent(e);
    onSeek(t);
    onHover(null);
  };
  React.useEffect(() => {
    if (!dragging) return;
    const onUp = () => setDragging(false);
    const onMove = e => {
      if (!trackRef.current) return;
      const t = timeFromEvent(e);
      onSeek(t);
    };
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
    };
  }, [dragging, timeFromEvent, onSeek]);
  const pct = duration > 0 ? time / duration * 100 : 0;
  const fmt = t => {
    const total = Math.max(0, t);
    const m = Math.floor(total / 60);
    const s = Math.floor(total % 60);
    const cs = Math.floor(total * 100 % 100);
    return `${String(m).padStart(1, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  };
  const mono = 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace';
  return /*#__PURE__*/React.createElement("div", {
    "data-omelette-chrome": true,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 16px',
      background: 'rgba(20,20,20,0.92)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      width: '100%',
      maxWidth: 680,
      alignSelf: 'center',
      borderRadius: 8,
      color: '#f6f4ef',
      fontFamily: 'Inter, system-ui, sans-serif',
      userSelect: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onReset,
    title: "Return to start (0)"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2v10M12 2L5 7l7 5V2z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement(IconButton, {
    onClick: onPlayPause,
    title: "Play/pause (space)"
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2l9 5-9 5V2z",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'right',
      color: '#f6f4ef'
    }
  }, fmt(time)), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onMouseMove: onTrackMove,
    onMouseLeave: onTrackLeave,
    onMouseDown: onTrackDown,
    style: {
      flex: 1,
      height: 22,
      position: 'relative',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 4,
      background: 'rgba(255,255,255,0.12)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `${pct}%`,
      height: 4,
      background: 'oklch(72% 0.12 250)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${pct}%`,
      top: '50%',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -6,
      background: '#fff',
      borderRadius: 6,
      boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'left',
      color: 'rgba(246,244,239,0.55)'
    }
  }, fmt(duration)), typeof VideoEncoder !== 'undefined' && /*#__PURE__*/React.createElement(IconButton, {
    title: "Export video",
    onClick: () => window.parent.postMessage({
      type: 'omelette:request-video-export'
    }, '*')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 2v7m0 0L4 6m3 3l3-3M2 12h10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
function IconButton({
  children,
  onClick,
  title
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 28,
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 6,
      color: '#f6f4ef',
      cursor: 'pointer',
      padding: 0,
      transition: 'background 120ms'
    }
  }, children);
}

// ── VideoSprite ─────────────────────────────────────────────────────────────
// Renders a <video> that loops within [start,end] of its source at `speed`,
// kept in sync with the Stage's playhead. Carries the
// data-om-exportable-video-play-* attrs so video export can mix its audio.
//
//   <VideoSprite src="clip.mp4" start={2} end={5} speed={1}
//     style={{ width: 640, height: 360 }} />

function VideoSprite({
  src,
  start = 0,
  end,
  speed = 1,
  style,
  ...rest
}) {
  start = +start || 0;
  speed = +speed || 1;
  if (end != null) end = +end || undefined;
  const t = useTime();
  const ref = React.useRef(null);
  const span = Math.max(0.001, (end ?? start + 1) - start);
  React.useEffect(() => {
    const v = ref.current;
    if (!v || v.readyState < 1) return;
    const target = start + t * speed % span;
    if (Math.abs(v.currentTime - target) > 0.05) v.currentTime = target;
  }, [t, start, span, speed]);
  return /*#__PURE__*/React.createElement("video", _extends({
    ref: ref,
    src: src,
    muted: true,
    playsInline: true,
    preload: "auto",
    "data-om-exportable-video-play-start": start,
    "data-om-exportable-video-play-end": end ?? start + span,
    "data-om-exportable-video-play-speed": speed,
    style: {
      display: 'block',
      objectFit: 'cover',
      ...style
    }
  }, rest));
}
Object.assign(window, {
  Easing,
  interpolate,
  animate,
  clamp,
  TimelineContext,
  useTime,
  useTimeline,
  Sprite,
  SpriteContext,
  useSprite,
  TextSprite,
  ImageSprite,
  RectSprite,
  VideoSprite,
  Stage,
  PlaybackBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "animations.jsx", error: String((e && e.message) || e) }); }

// components/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — Status indicator pill
 * @kind component
 */
function Badge({
  children,
  variant = 'instock',
  ...props
}) {
  const variantStyles = {
    instock: {
      background: 'var(--celestial-yellow)',
      color: '#1E1E1E',
      boxShadow: 'var(--glow-sm)'
    },
    featured: {
      background: 'var(--amber-orange)',
      color: '#1E1E1E',
      boxShadow: 'var(--glow-amber)'
    },
    out: {
      background: 'transparent',
      color: 'var(--woven-moss)',
      border: '1px solid var(--woven-moss)',
      boxShadow: 'none'
    },
    eco: {
      background: 'var(--woven-moss)',
      color: 'var(--bone-white)',
      boxShadow: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    style: {
      display: 'inline-block',
      padding: '6px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...variantStyles[variant]
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Primary interaction control
 * @kind component
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...props
}) {
  const baseStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-small)',
    fontWeight: 700,
    padding: size === 'sm' ? '10px 20px' : size === 'lg' ? '18px 40px' : '14px 30px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all var(--dur-base) var(--ease-out)',
    letterSpacing: 'var(--tracking-wide)',
    borderRadius: 'var(--radius-pill)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    textDecoration: 'none',
    lineHeight: 1,
    border: 'none',
    opacity: disabled ? 0.45 : 1
  };
  const variantStyles = {
    solid: {
      background: 'var(--celestial-yellow)',
      color: '#1E1E1E',
      border: '2px solid var(--celestial-yellow)',
      boxShadow: '0 0 18px rgba(245,200,66,0.45)'
    },
    primary: {
      background: 'transparent',
      color: 'var(--celestial-yellow)',
      border: '2px solid var(--celestial-yellow)',
      boxShadow: '0 0 0 rgba(245,200,66,0)'
    },
    amber: {
      background: 'transparent',
      color: 'var(--amber-orange)',
      border: '2px solid var(--amber-orange)',
      boxShadow: '0 0 0 rgba(212,130,42,0)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    disabled: disabled,
    style: {
      ...baseStyle,
      ...variantStyles[variant]
    },
    onMouseEnter: e => {
      if (!disabled) {
        if (variant === 'solid') {
          e.currentTarget.style.background = '#ffe07a';
          e.currentTarget.style.boxShadow = '0 0 28px rgba(245,200,66,0.75)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        } else if (variant === 'primary') {
          e.currentTarget.style.background = 'rgba(245,200,66,0.10)';
          e.currentTarget.style.boxShadow = 'var(--glow-md)';
        } else if (variant === 'amber') {
          e.currentTarget.style.background = 'rgba(212,130,42,0.12)';
          e.currentTarget.style.boxShadow = 'var(--glow-amber)';
        }
      }
    },
    onMouseLeave: e => {
      const style = variantStyles[variant];
      Object.assign(e.currentTarget.style, {
        ...style,
        transform: 'none'
      });
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — Feature or product card container
 * @kind component
 */
function Card({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      background: 'var(--bg-card)',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      transition: 'all var(--dur-base) var(--ease-out)',
      cursor: 'pointer',
      ...props.style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.borderColor = 'rgba(245,200,66,0.5)';
      e.currentTarget.style.boxShadow = '0 0 28px rgba(245,200,66,0.28)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'rgba(245,200,66,0.15)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card.jsx", error: String((e && e.message) || e) }); }

// components/GalaxyCard.jsx
try { (() => {
/**
 * GalaxyCard — Signature featured product card
 * @kind component
 *
 * A rounded product card wrapped by a tilted 3D Saturn-style ring that spins
 * continuously; a glowing planet orbits along the ring (in front at the bottom,
 * behind at the top). Hover lifts + scales the whole scene. Clicking opens a
 * product detail dialog. Faithful port of the Atomic Finds "Galaxy Card"
 * standard, rebuilt on our tokens (celestial-yellow / amber / display+script
 * fonts) with no external dependencies.
 */

function GalaxyCard({
  title = 'Piece',
  script = 'vintage find',
  desc = 'Curated vintage rattan, lovingly restored.',
  price = 0,
  image,
  imageBg = '#2D2D2D',
  bg,
  dimensions,
  origin,
  era
}) {
  const id = React.useRef('gc-' + Math.random().toString(36).slice(2, 8)).current;
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  const priceStr = typeof price === 'number' ? price.toLocaleString() : price;

  // Galaxy nebula wash behind the card; falls back to a cosmic radial gradient.
  const cardBg = bg ? `linear-gradient(160deg, rgba(20,17,12,0.32) 0%, rgba(12,11,8,0.74) 80%), url("${bg}") center/cover no-repeat` : 'radial-gradient(ellipse at 28% 16%, rgba(245,200,66,0.16) 0%, transparent 52%), radial-gradient(ellipse at 80% 84%, rgba(212,130,42,0.14) 0%, transparent 55%), #14120E';

  // Lucide "orbit" icon
  const OrbitIcon = ({
    size = 16,
    className
  }) => /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      opacity: 0.8
    },
    className: className
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "5",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "19",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.4 21.9a10 10 0 0 0 9.941-15.416"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 2.1a10 10 0 0 0-9.841 15.416"
  }));
  const ProductImage = ({
    style,
    imgStyle
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '90%',
      height: '90%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      zIndex: 10,
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      ...imgStyle
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.18) 0 8px, rgba(0,0,0,0.28) 8px 16px)',
      border: '1px dashed rgba(240,232,216,0.45)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: '11px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgba(240,232,216,0.8)'
    }
  }, "product shot")));
  const gold = 'rgba(245, 200, 66, 0.7)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes ${id}-spin { from { transform: rotateZ(0deg); } to { transform: rotateZ(360deg); } }
        @keyframes ${id}-rev  { from { transform: rotateZ(360deg); } to { transform: rotateZ(0deg); } }
        #${id}-scene { transition: transform 500ms cubic-bezier(0.16,1,0.3,1); }
        #${id}-group:hover #${id}-scene { transform: scale(1.03); }
        @media (prefers-reduced-motion: no-preference) {
          #${id}-ring   { animation: ${id}-spin 25s linear infinite; }
          #${id}-planet { animation: ${id}-rev  25s linear infinite; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    id: `${id}-group`,
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    onClick: () => setOpen(true),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpen(true);
      }
    },
    style: {
      position: 'relative',
      cursor: 'pointer',
      width: '360px',
      height: '520px',
      flexShrink: 0,
      isolation: 'isolate',
      perspective: '1200px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: `${id}-scene`,
    style: {
      width: '100%',
      height: '100%',
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '700px',
      height: '700px',
      transform: 'translate(-50%, -50%)',
      transformStyle: 'preserve-3d',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotateZ(-35deg) rotateX(75deg)',
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: `${id}-ring`,
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: `4px solid ${gold}`,
      boxShadow: '0 0 30px rgba(245,200,66,0.6), inset 0 0 20px rgba(245,200,66,0.4)',
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '10px',
      borderRadius: '50%',
      border: '1px solid rgba(245,200,66,0.3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 50%)',
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: `${id}-planet`,
    style: {
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      boxShadow: '0 0 15px rgba(163,228,215,0.8), inset 0 0 8px rgba(0,0,0,0.5)',
      border: '1px solid rgba(207,255,245,0.5)',
      transform: 'rotateX(-75deg) rotateZ(35deg)',
      background: 'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #A3E4D7 20%, #2B8271 60%, #0A362E 100%)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '20%',
      left: '10%',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: '#F0E8D8',
      boxShadow: '0 0 15px #F0E8D8'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '20%',
      right: '10%',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: '#F5C842',
      boxShadow: '0 0 20px #F5C842'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '40%',
      right: '5%',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: '#F0E8D8',
      boxShadow: '0 0 10px #F0E8D8'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: '24px',
      background: cardBg,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      border: '2px solid rgba(245,200,66,0.4)',
      boxShadow: '0 0 40px rgba(0,0,0,0.8), inset 0 0 30px rgba(245,200,66,0.15)',
      transform: 'translateZ(0px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '260px',
      width: '94%',
      margin: '12px auto 0',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
      border: '2px solid rgba(245,200,66,0.4)',
      backgroundColor: imageBg
    }
  }, /*#__PURE__*/React.createElement(ProductImage, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '16px 24px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: 'var(--bone-white)',
      background: 'linear-gradient(180deg, rgba(14,12,9,0) 0%, rgba(14,12,9,0.42) 55%, rgba(14,12,9,0.72) 100%)',
      position: 'relative',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '42px',
      letterSpacing: '0.01em',
      color: 'var(--celestial-yellow)',
      lineHeight: 1,
      margin: 0,
      textShadow: '0 2px 4px rgba(0,0,0,0.8)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '30px',
      color: 'var(--amber-orange)',
      margin: '0 0 12px 0',
      lineHeight: 1.1
    }
  }, script), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--fg-muted)',
      lineHeight: 1.55,
      margin: 0,
      opacity: 0.95,
      textShadow: '0 1px 6px rgba(0,0,0,0.9)',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      background: 'var(--celestial-yellow)',
      color: '#1E1E1E',
      padding: '2px 16px',
      borderRadius: '999px',
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      boxShadow: '0 0 15px rgba(245,200,66,0.3)'
    }
  }, "$", priceStr, /*#__PURE__*/React.createElement(OrbitIcon, {
    size: 16
  }))))))), open && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: '90vw',
      maxWidth: '800px',
      maxHeight: '90vh',
      overflow: 'auto',
      background: 'var(--bg-card-2)',
      borderRadius: '18px',
      border: '1px solid rgba(245,200,66,0.3)',
      boxShadow: '0 0 50px rgba(245,200,66,0.12)',
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: () => setOpen(false),
    style: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      zIndex: 10,
      width: '40px',
      height: '40px',
      borderRadius: '999px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(240,232,216,0.85)',
      background: 'rgba(0,0,0,0.25)',
      backdropFilter: 'blur(4px)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px',
      minHeight: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px',
      backgroundColor: imageBg
    }
  }, /*#__PURE__*/React.createElement(ProductImage, {
    style: {
      width: '100%',
      height: '100%'
    },
    imgStyle: {
      filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px',
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      color: 'var(--bone-white)',
      background: 'linear-gradient(180deg, #242424 0%, #16140F 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '24px',
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '30px',
      color: 'var(--amber-orange)',
      margin: '0 0 8px 0',
      lineHeight: 1.1
    }
  }, script), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '48px',
      color: 'var(--celestial-yellow)',
      lineHeight: 1,
      margin: '0 0 20px 0'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--fg-body)',
      lineHeight: 1.7,
      margin: 0
    }
  }, desc, (dimensions || origin || era) && /*#__PURE__*/React.createElement("br", null), (dimensions || origin || era) && /*#__PURE__*/React.createElement("br", null), dimensions && /*#__PURE__*/React.createElement(React.Fragment, null, "Dimensions: ", dimensions, /*#__PURE__*/React.createElement("br", null)), origin && /*#__PURE__*/React.createElement(React.Fragment, null, "Origin: ", origin, /*#__PURE__*/React.createElement("br", null)), era && /*#__PURE__*/React.createElement(React.Fragment, null, "Era: ", era))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '12px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '36px',
      color: 'var(--celestial-yellow)'
    }
  }, "$", priceStr), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--fg-muted)',
      marginBottom: '6px'
    }
  }, "Tax included.")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      background: 'var(--celestial-yellow)',
      color: '#1E1E1E',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '15px',
      letterSpacing: '0.04em',
      padding: '16px 24px',
      borderRadius: '999px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'background 300ms cubic-bezier(0.16,1,0.3,1)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = '#ffe58a';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--celestial-yellow)';
    }
  }, /*#__PURE__*/React.createElement(OrbitIcon, {
    size: 18
  }), "Add to Cart"))))));
}
Object.assign(window, {
  GalaxyCard
});
Object.assign(__ds_scope, { GalaxyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/GalaxyCard.jsx", error: String((e && e.message) || e) }); }

// components/Icon.jsx
try { (() => {
// Icon component — custom Atomic Finds icon library (PNG only)
// Usage: <Icon name="leaf" size={48} />

function Icon({
  name = 'leaf',
  size = 48,
  className = '',
  style = {}
}) {
  // Support both .svg and .png — pass ext to override (default: svg for known vector icons, else png)
  const pngOnly = ['About', 'Cart', 'Contact', 'Filter', 'Home', 'Made in Austin', 'Search', 'Shop', 'Sustainability', 'Wishlist', 'bamboo-swing', 'bamboo-table', 'delivery', 'leaf-2', 'restoration', 'star-2', 'woven-pattern', 'atomic', 'star', 'sun', 'crescent', 'planet', 'shooting-star', 'constellation', 'bamboo-chair', 'woven-basket', 'bamboo-lamp', 'stool', 'bamboo-shelf', 'bamboo', 'leaf'];
  const ext = pngOnly.includes(name) ? 'png' : 'svg';
  const iconPath = `../assets/icons/${name}.${ext}`;
  return /*#__PURE__*/React.createElement("img", {
    src: iconPath,
    alt: name,
    width: size,
    height: size,
    className: className,
    style: {
      display: 'inline-block',
      objectFit: 'contain',
      ...style
    }
  });
}
Object.assign(window, {
  Icon
});
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Icon.jsx", error: String((e && e.message) || e) }); }

// components/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProductCard — Single product from the live Supabase `products` table
 * @kind component
 */
function ProductCard({
  title,
  description,
  price,
  original_price,
  condition,
  location,
  listed_label,
  attributes,
  image_url,
  external_url,
  seller_name,
  seller_rating,
  ...props
}) {
  const attrEntries = attributes ? Object.entries(attributes).slice(0, 3) : [];
  const onSale = original_price != null && price != null;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-card-2) 100%)',
      border: 'var(--border-1)',
      transition: 'all var(--dur-base) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      ...props.style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.borderColor = 'rgba(245,200,66,0.4)';
      e.currentTarget.style.boxShadow = 'var(--glow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      background: 'var(--bg-inset)'
    }
  }, image_url ? /*#__PURE__*/React.createElement("img", {
    src: image_url,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      color: 'var(--fg-soft)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/icons/woven-basket.png",
    alt: "",
    style: {
      width: 40,
      height: 40,
      objectFit: 'contain',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, "Photo coming soon")), condition && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      background: 'rgba(20,18,14,0.75)',
      color: 'var(--bone-white)'
    }
  }, condition), onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      background: 'var(--amber-orange)',
      color: '#1E1E1E',
      boxShadow: 'var(--glow-amber)'
    }
  }, "Sale")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-sm)',
      margin: '0 0 6px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      lineHeight: 1.25
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--fg-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, [location, listed_label].filter(Boolean).join(' · ')), attrEntries.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 'var(--space-4)'
    }
  }, attrEntries.map(([k, v]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--fg-body)',
      background: 'var(--bg-inset)',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-sm)',
      padding: '3px 8px'
    }
  }, k, ": ", String(v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-sm)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, price == null ? /*#__PURE__*/React.createElement("span", null, "Inquire") : /*#__PURE__*/React.createElement(React.Fragment, null, onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--fg-soft)',
      textDecoration: 'line-through'
    }
  }, "$", original_price.toFixed(0)), /*#__PURE__*/React.createElement("span", null, "$", price.toFixed(0)))), /*#__PURE__*/React.createElement("a", {
    href: external_url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--celestial-yellow)',
      border: 'var(--border-1)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, "View Listing \u2192")), (seller_name || seller_rating) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      paddingTop: 'var(--space-3)',
      borderTop: 'var(--border-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--fg-soft)'
    }
  }, [seller_name, seller_rating].filter(Boolean).join(' · '))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/ProductGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProductGrid — Renders a `products` array (Supabase output) as a responsive card grid
 * @kind component
 */
function ProductGridCard({
  title,
  price,
  original_price,
  condition,
  location,
  listed_label,
  attributes,
  image_url,
  external_url,
  seller_name,
  seller_rating
}) {
  const attrEntries = attributes ? Object.entries(attributes).slice(0, 3) : [];
  const onSale = original_price != null && price != null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-card-2) 100%)',
      border: 'var(--border-1)',
      transition: 'all var(--dur-base) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.borderColor = 'rgba(245,200,66,0.4)';
      e.currentTarget.style.boxShadow = 'var(--glow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      background: 'var(--bg-inset)'
    }
  }, image_url ? /*#__PURE__*/React.createElement("img", {
    src: image_url,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      color: 'var(--fg-soft)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/icons/woven-basket.png",
    alt: "",
    style: {
      width: 40,
      height: 40,
      objectFit: 'contain',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, "Photo coming soon")), condition && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      background: 'rgba(20,18,14,0.75)',
      color: 'var(--bone-white)'
    }
  }, condition), onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      background: 'var(--amber-orange)',
      color: '#1E1E1E',
      boxShadow: 'var(--glow-amber)'
    }
  }, "Sale")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-sm)',
      margin: '0 0 6px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      lineHeight: 1.25
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--fg-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, [location, listed_label].filter(Boolean).join(' · ')), attrEntries.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 'var(--space-4)'
    }
  }, attrEntries.map(([k, v]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--fg-body)',
      background: 'var(--bg-inset)',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-sm)',
      padding: '3px 8px'
    }
  }, k, ": ", String(v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-sm)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, price == null ? /*#__PURE__*/React.createElement("span", null, "Inquire") : /*#__PURE__*/React.createElement(React.Fragment, null, onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--fg-soft)',
      textDecoration: 'line-through'
    }
  }, "$", original_price.toFixed(0)), /*#__PURE__*/React.createElement("span", null, "$", price.toFixed(0)))), /*#__PURE__*/React.createElement("a", {
    href: external_url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--celestial-yellow)',
      border: 'var(--border-1)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, "View Listing \u2192")), (seller_name || seller_rating) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      paddingTop: 'var(--space-3)',
      borderTop: 'var(--border-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--fg-soft)'
    }
  }, [seller_name, seller_rating].filter(Boolean).join(' · '))));
}
function ProductGrid({
  title = 'Featured Finds',
  products = [],
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      ...props.style
    }
  }), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-md)',
      textAlign: 'center',
      margin: '0 0 var(--space-10)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--space-6)'
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductGridCard, _extends({
    key: p.id
  }, p)))));
}
Object.assign(__ds_scope, { ProductGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ProductGrid.jsx", error: String((e && e.message) || e) }); }

// design_handoff_homepage/components/Badge.reference.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Reference only — rename BadgeRef to Badge in your target codebase.
/**
 * Badge — Status indicator pill
 * @kind component
 */
function BadgeRef({
  children,
  variant = 'instock',
  ...props
}) {
  const variantStyles = {
    instock: {
      background: 'var(--celestial-yellow)',
      color: '#1E1E1E',
      boxShadow: 'var(--glow-sm)'
    },
    featured: {
      background: 'var(--amber-orange)',
      color: '#1E1E1E',
      boxShadow: 'var(--glow-amber)'
    },
    out: {
      background: 'transparent',
      color: 'var(--woven-moss)',
      border: '1px solid var(--woven-moss)',
      boxShadow: 'none'
    },
    eco: {
      background: 'var(--woven-moss)',
      color: 'var(--bone-white)',
      boxShadow: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    style: {
      display: 'inline-block',
      padding: '6px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...variantStyles[variant]
    }
  }), children);
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_homepage/components/Badge.reference.jsx", error: String((e && e.message) || e) }); }

// design_handoff_homepage/components/Button.reference.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Reference only — rename ButtonRef to Button in your target codebase.
/**
 * Button — Primary interaction control
 * @kind component
 */
function ButtonRef({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...props
}) {
  const baseStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-small)',
    fontWeight: 700,
    padding: size === 'sm' ? '10px 20px' : size === 'lg' ? '18px 40px' : '14px 30px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all var(--dur-base) var(--ease-out)',
    letterSpacing: 'var(--tracking-wide)',
    borderRadius: 'var(--radius-pill)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    textDecoration: 'none',
    lineHeight: 1,
    border: 'none',
    opacity: disabled ? 0.45 : 1
  };
  const variantStyles = {
    solid: {
      background: 'var(--celestial-yellow)',
      color: '#1E1E1E',
      border: '2px solid var(--celestial-yellow)',
      boxShadow: '0 0 18px rgba(245,200,66,0.45)'
    },
    primary: {
      background: 'transparent',
      color: 'var(--celestial-yellow)',
      border: '2px solid var(--celestial-yellow)',
      boxShadow: '0 0 0 rgba(245,200,66,0)'
    },
    amber: {
      background: 'transparent',
      color: 'var(--amber-orange)',
      border: '2px solid var(--amber-orange)',
      boxShadow: '0 0 0 rgba(212,130,42,0)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    disabled: disabled,
    style: {
      ...baseStyle,
      ...variantStyles[variant]
    },
    onMouseEnter: e => {
      if (!disabled) {
        if (variant === 'solid') {
          e.currentTarget.style.background = '#ffe07a';
          e.currentTarget.style.boxShadow = '0 0 28px rgba(245,200,66,0.75)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        } else if (variant === 'primary') {
          e.currentTarget.style.background = 'rgba(245,200,66,0.10)';
          e.currentTarget.style.boxShadow = 'var(--glow-md)';
        } else if (variant === 'amber') {
          e.currentTarget.style.background = 'rgba(212,130,42,0.12)';
          e.currentTarget.style.boxShadow = 'var(--glow-amber)';
        }
      }
    },
    onMouseLeave: e => {
      const style = variantStyles[variant];
      Object.assign(e.currentTarget.style, {
        ...style,
        transform: 'none'
      });
    }
  }), children);
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_homepage/components/Button.reference.jsx", error: String((e && e.message) || e) }); }

// design_handoff_homepage/components/Card.reference.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Reference only — rename CardRef to Card in your target codebase.
/**
 * Card — Feature or product card container
 * @kind component
 */
function CardRef({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      background: 'var(--bg-card)',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      transition: 'all var(--dur-base) var(--ease-out)',
      cursor: 'pointer',
      ...props.style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.borderColor = 'rgba(245,200,66,0.5)';
      e.currentTarget.style.boxShadow = '0 0 28px rgba(245,200,66,0.28)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'rgba(245,200,66,0.15)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }), children);
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_homepage/components/Card.reference.jsx", error: String((e && e.message) || e) }); }

// design_handoff_homepage/components/GalaxyCard.reference.jsx
try { (() => {
// Reference only — rename GalaxyCardRef to GalaxyCard in your target codebase.
/**
 * GalaxyCard — Signature featured product card
 * @kind component
 *
 * A rounded product card wrapped by a tilted 3D Saturn-style ring that spins
 * continuously; a glowing planet orbits along the ring (in front at the bottom,
 * behind at the top). Hover lifts + scales the whole scene. Clicking opens a
 * product detail dialog. Faithful port of the Atomic Finds "Galaxy Card"
 * standard, rebuilt on our tokens (celestial-yellow / amber / display+script
 * fonts) with no external dependencies.
 */

function GalaxyCardRef({
  title = 'Piece',
  script = 'vintage find',
  desc = 'Curated vintage rattan, lovingly restored.',
  price = 0,
  image,
  imageBg = '#2D2D2D',
  bg,
  dimensions,
  origin,
  era
}) {
  const id = React.useRef('gc-' + Math.random().toString(36).slice(2, 8)).current;
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  const priceStr = typeof price === 'number' ? price.toLocaleString() : price;

  // Galaxy nebula wash behind the card; falls back to a cosmic radial gradient.
  const cardBg = bg ? `linear-gradient(160deg, rgba(20,17,12,0.32) 0%, rgba(12,11,8,0.74) 80%), url("${bg}") center/cover no-repeat` : 'radial-gradient(ellipse at 28% 16%, rgba(245,200,66,0.16) 0%, transparent 52%), radial-gradient(ellipse at 80% 84%, rgba(212,130,42,0.14) 0%, transparent 55%), #14120E';

  // Lucide "orbit" icon
  const OrbitIcon = ({
    size = 16,
    className
  }) => /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      opacity: 0.8
    },
    className: className
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "5",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "19",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.4 21.9a10 10 0 0 0 9.941-15.416"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 2.1a10 10 0 0 0-9.841 15.416"
  }));
  const ProductImage = ({
    style,
    imgStyle
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '90%',
      height: '90%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      zIndex: 10,
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      ...imgStyle
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.18) 0 8px, rgba(0,0,0,0.28) 8px 16px)',
      border: '1px dashed rgba(240,232,216,0.45)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: '11px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgba(240,232,216,0.8)'
    }
  }, "product shot")));
  const gold = 'rgba(245, 200, 66, 0.7)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes ${id}-spin { from { transform: rotateZ(0deg); } to { transform: rotateZ(360deg); } }
        @keyframes ${id}-rev  { from { transform: rotateZ(360deg); } to { transform: rotateZ(0deg); } }
        #${id}-scene { transition: transform 500ms cubic-bezier(0.16,1,0.3,1); }
        #${id}-group:hover #${id}-scene { transform: scale(1.03); }
        @media (prefers-reduced-motion: no-preference) {
          #${id}-ring   { animation: ${id}-spin 25s linear infinite; }
          #${id}-planet { animation: ${id}-rev  25s linear infinite; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    id: `${id}-group`,
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    onClick: () => setOpen(true),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpen(true);
      }
    },
    style: {
      position: 'relative',
      cursor: 'pointer',
      width: '360px',
      height: '520px',
      flexShrink: 0,
      isolation: 'isolate',
      perspective: '1200px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: `${id}-scene`,
    style: {
      width: '100%',
      height: '100%',
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '700px',
      height: '700px',
      transform: 'translate(-50%, -50%)',
      transformStyle: 'preserve-3d',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotateZ(-35deg) rotateX(75deg)',
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: `${id}-ring`,
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: `4px solid ${gold}`,
      boxShadow: '0 0 30px rgba(245,200,66,0.6), inset 0 0 20px rgba(245,200,66,0.4)',
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '10px',
      borderRadius: '50%',
      border: '1px solid rgba(245,200,66,0.3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 50%)',
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: `${id}-planet`,
    style: {
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      boxShadow: '0 0 15px rgba(163,228,215,0.8), inset 0 0 8px rgba(0,0,0,0.5)',
      border: '1px solid rgba(207,255,245,0.5)',
      transform: 'rotateX(-75deg) rotateZ(35deg)',
      background: 'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #A3E4D7 20%, #2B8271 60%, #0A362E 100%)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '20%',
      left: '10%',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: '#F0E8D8',
      boxShadow: '0 0 15px #F0E8D8'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '20%',
      right: '10%',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: '#F5C842',
      boxShadow: '0 0 20px #F5C842'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '40%',
      right: '5%',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: '#F0E8D8',
      boxShadow: '0 0 10px #F0E8D8'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: '24px',
      background: cardBg,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      border: '2px solid rgba(245,200,66,0.4)',
      boxShadow: '0 0 40px rgba(0,0,0,0.8), inset 0 0 30px rgba(245,200,66,0.15)',
      transform: 'translateZ(0px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '260px',
      width: '94%',
      margin: '12px auto 0',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
      border: '2px solid rgba(245,200,66,0.4)',
      backgroundColor: imageBg
    }
  }, /*#__PURE__*/React.createElement(ProductImage, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '16px 24px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: 'var(--bone-white)',
      background: 'linear-gradient(180deg, rgba(14,12,9,0) 0%, rgba(14,12,9,0.42) 55%, rgba(14,12,9,0.72) 100%)',
      position: 'relative',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '42px',
      letterSpacing: '0.01em',
      color: 'var(--celestial-yellow)',
      lineHeight: 1,
      margin: 0,
      textShadow: '0 2px 4px rgba(0,0,0,0.8)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '30px',
      color: 'var(--amber-orange)',
      margin: '0 0 12px 0',
      lineHeight: 1.1
    }
  }, script), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--fg-muted)',
      lineHeight: 1.55,
      margin: 0,
      opacity: 0.95,
      textShadow: '0 1px 6px rgba(0,0,0,0.9)',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      background: 'var(--celestial-yellow)',
      color: '#1E1E1E',
      padding: '2px 16px',
      borderRadius: '999px',
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      boxShadow: '0 0 15px rgba(245,200,66,0.3)'
    }
  }, "$", priceStr, /*#__PURE__*/React.createElement(OrbitIcon, {
    size: 16
  }))))))), open && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: '90vw',
      maxWidth: '800px',
      maxHeight: '90vh',
      overflow: 'auto',
      background: 'var(--bg-card-2)',
      borderRadius: '18px',
      border: '1px solid rgba(245,200,66,0.3)',
      boxShadow: '0 0 50px rgba(245,200,66,0.12)',
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: () => setOpen(false),
    style: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      zIndex: 10,
      width: '40px',
      height: '40px',
      borderRadius: '999px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(240,232,216,0.85)',
      background: 'rgba(0,0,0,0.25)',
      backdropFilter: 'blur(4px)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px',
      minHeight: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px',
      backgroundColor: imageBg
    }
  }, /*#__PURE__*/React.createElement(ProductImage, {
    style: {
      width: '100%',
      height: '100%'
    },
    imgStyle: {
      filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px',
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      color: 'var(--bone-white)',
      background: 'linear-gradient(180deg, #242424 0%, #16140F 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '24px',
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '30px',
      color: 'var(--amber-orange)',
      margin: '0 0 8px 0',
      lineHeight: 1.1
    }
  }, script), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '48px',
      color: 'var(--celestial-yellow)',
      lineHeight: 1,
      margin: '0 0 20px 0'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--fg-body)',
      lineHeight: 1.7,
      margin: 0
    }
  }, desc, (dimensions || origin || era) && /*#__PURE__*/React.createElement("br", null), (dimensions || origin || era) && /*#__PURE__*/React.createElement("br", null), dimensions && /*#__PURE__*/React.createElement(React.Fragment, null, "Dimensions: ", dimensions, /*#__PURE__*/React.createElement("br", null)), origin && /*#__PURE__*/React.createElement(React.Fragment, null, "Origin: ", origin, /*#__PURE__*/React.createElement("br", null)), era && /*#__PURE__*/React.createElement(React.Fragment, null, "Era: ", era))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '12px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '36px',
      color: 'var(--celestial-yellow)'
    }
  }, "$", priceStr), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--fg-muted)',
      marginBottom: '6px'
    }
  }, "Tax included.")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      background: 'var(--celestial-yellow)',
      color: '#1E1E1E',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '15px',
      letterSpacing: '0.04em',
      padding: '16px 24px',
      borderRadius: '999px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'background 300ms cubic-bezier(0.16,1,0.3,1)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = '#ffe58a';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--celestial-yellow)';
    }
  }, /*#__PURE__*/React.createElement(OrbitIcon, {
    size: 18
  }), "Add to Cart"))))));
}
Object.assign(window, {
  GalaxyCardRef
});
Object.assign(__ds_scope, { GalaxyCardRef });
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_homepage/components/GalaxyCard.reference.jsx", error: String((e && e.message) || e) }); }

// design_handoff_homepage/components/Icon.reference.jsx
try { (() => {
// Reference only — rename IconRef to Icon in your target codebase.
// Icon component — custom Atomic Finds icon library (PNG only)
// Usage: <Icon name="leaf" size={48} />

function IconRef({
  name = 'leaf',
  size = 48,
  className = '',
  style = {}
}) {
  // Support both .svg and .png — pass ext to override (default: svg for known vector icons, else png)
  const pngOnly = ['About', 'Cart', 'Contact', 'Filter', 'Home', 'Made in Austin', 'Search', 'Shop', 'Sustainability', 'Wishlist', 'bamboo-swing', 'bamboo-table', 'delivery', 'leaf-2', 'restoration', 'star-2', 'woven-pattern', 'atomic', 'star', 'sun', 'crescent', 'planet', 'shooting-star', 'constellation', 'bamboo-chair', 'woven-basket', 'bamboo-lamp', 'stool', 'bamboo-shelf', 'bamboo', 'leaf'];
  const ext = pngOnly.includes(name) ? 'png' : 'svg';
  const iconPath = `../assets/icons/${name}.${ext}`;
  return /*#__PURE__*/React.createElement("img", {
    src: iconPath,
    alt: name,
    width: size,
    height: size,
    className: className,
    style: {
      display: 'inline-block',
      objectFit: 'contain',
      ...style
    }
  });
}
Object.assign(window, {
  IconRef
});
Object.assign(__ds_scope, { IconRef });
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_homepage/components/Icon.reference.jsx", error: String((e && e.message) || e) }); }

// design_handoff_homepage/components/ProductCard.reference.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Reference only — rename ProductCardRef to ProductCard in your target codebase.
/**
 * ProductCard — Single product from the live Supabase `products` table
 * @kind component
 */
function ProductCardRef({
  title,
  description,
  price,
  original_price,
  condition,
  location,
  listed_label,
  attributes,
  image_url,
  external_url,
  seller_name,
  seller_rating,
  ...props
}) {
  const attrEntries = attributes ? Object.entries(attributes).slice(0, 3) : [];
  const onSale = original_price != null && price != null;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-card-2) 100%)',
      border: 'var(--border-1)',
      transition: 'all var(--dur-base) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      ...props.style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.borderColor = 'rgba(245,200,66,0.4)';
      e.currentTarget.style.boxShadow = 'var(--glow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      background: 'var(--bg-inset)'
    }
  }, image_url ? /*#__PURE__*/React.createElement("img", {
    src: image_url,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      color: 'var(--fg-soft)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/icons/woven-basket.png",
    alt: "",
    style: {
      width: 40,
      height: 40,
      objectFit: 'contain',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, "Photo coming soon")), condition && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      background: 'rgba(20,18,14,0.75)',
      color: 'var(--bone-white)'
    }
  }, condition), onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      background: 'var(--amber-orange)',
      color: '#1E1E1E',
      boxShadow: 'var(--glow-amber)'
    }
  }, "Sale")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-sm)',
      margin: '0 0 6px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      lineHeight: 1.25
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--fg-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, [location, listed_label].filter(Boolean).join(' · ')), attrEntries.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 'var(--space-4)'
    }
  }, attrEntries.map(([k, v]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--fg-body)',
      background: 'var(--bg-inset)',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-sm)',
      padding: '3px 8px'
    }
  }, k, ": ", String(v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-sm)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, price == null ? /*#__PURE__*/React.createElement("span", null, "Inquire") : /*#__PURE__*/React.createElement(React.Fragment, null, onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--fg-soft)',
      textDecoration: 'line-through'
    }
  }, "$", original_price.toFixed(0)), /*#__PURE__*/React.createElement("span", null, "$", price.toFixed(0)))), /*#__PURE__*/React.createElement("a", {
    href: external_url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--celestial-yellow)',
      border: 'var(--border-1)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, "View Listing \u2192")), (seller_name || seller_rating) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      paddingTop: 'var(--space-3)',
      borderTop: 'var(--border-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--fg-soft)'
    }
  }, [seller_name, seller_rating].filter(Boolean).join(' · '))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_homepage/components/ProductCard.reference.jsx", error: String((e && e.message) || e) }); }

// design_handoff_homepage/components/ProductGrid.reference.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Reference only — rename ProductGridRef to ProductGrid in your target codebase.
/**
 * ProductGrid — Renders a `products` array (Supabase output) as a responsive card grid
 * @kind component
 */
function ProductGridCard({
  title,
  price,
  original_price,
  condition,
  location,
  listed_label,
  attributes,
  image_url,
  external_url,
  seller_name,
  seller_rating
}) {
  const attrEntries = attributes ? Object.entries(attributes).slice(0, 3) : [];
  const onSale = original_price != null && price != null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-card-2) 100%)',
      border: 'var(--border-1)',
      transition: 'all var(--dur-base) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.borderColor = 'rgba(245,200,66,0.4)';
      e.currentTarget.style.boxShadow = 'var(--glow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      background: 'var(--bg-inset)'
    }
  }, image_url ? /*#__PURE__*/React.createElement("img", {
    src: image_url,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      color: 'var(--fg-soft)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/icons/woven-basket.png",
    alt: "",
    style: {
      width: 40,
      height: 40,
      objectFit: 'contain',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, "Photo coming soon")), condition && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      background: 'rgba(20,18,14,0.75)',
      color: 'var(--bone-white)'
    }
  }, condition), onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      background: 'var(--amber-orange)',
      color: '#1E1E1E',
      boxShadow: 'var(--glow-amber)'
    }
  }, "Sale")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-sm)',
      margin: '0 0 6px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      lineHeight: 1.25
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--fg-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, [location, listed_label].filter(Boolean).join(' · ')), attrEntries.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 'var(--space-4)'
    }
  }, attrEntries.map(([k, v]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--fg-body)',
      background: 'var(--bg-inset)',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-sm)',
      padding: '3px 8px'
    }
  }, k, ": ", String(v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-sm)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, price == null ? /*#__PURE__*/React.createElement("span", null, "Inquire") : /*#__PURE__*/React.createElement(React.Fragment, null, onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--fg-soft)',
      textDecoration: 'line-through'
    }
  }, "$", original_price.toFixed(0)), /*#__PURE__*/React.createElement("span", null, "$", price.toFixed(0)))), /*#__PURE__*/React.createElement("a", {
    href: external_url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--celestial-yellow)',
      border: 'var(--border-1)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, "View Listing \u2192")), (seller_name || seller_rating) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      paddingTop: 'var(--space-3)',
      borderTop: 'var(--border-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--fg-soft)'
    }
  }, [seller_name, seller_rating].filter(Boolean).join(' · '))));
}
function ProductGridRef({
  title = 'Featured Finds',
  products = [],
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      ...props.style
    }
  }), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-md)',
      textAlign: 'center',
      margin: '0 0 var(--space-10)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--space-6)'
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductGridCard, _extends({
    key: p.id
  }, p)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_homepage/components/ProductGrid.reference.jsx", error: String((e && e.message) || e) }); }

// design_handoff_product_grid/ProductCard.reference.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Reference only — rename ProductCardRef to ProductCard in your target codebase.
/**
 * ProductCard — Single product from the live Supabase `products` table
 * @kind component
 */
function ProductCardRef({
  title,
  description,
  price,
  original_price,
  condition,
  location,
  listed_label,
  attributes,
  image_url,
  external_url,
  seller_name,
  seller_rating,
  ...props
}) {
  const attrEntries = attributes ? Object.entries(attributes).slice(0, 3) : [];
  const onSale = original_price != null && price != null;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-card-2) 100%)',
      border: 'var(--border-1)',
      transition: 'all var(--dur-base) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      ...props.style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.borderColor = 'rgba(245,200,66,0.4)';
      e.currentTarget.style.boxShadow = 'var(--glow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      background: 'var(--bg-inset)'
    }
  }, image_url ? /*#__PURE__*/React.createElement("img", {
    src: image_url,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      color: 'var(--fg-soft)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/icons/woven-basket.png",
    alt: "",
    style: {
      width: 40,
      height: 40,
      objectFit: 'contain',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, "Photo coming soon")), condition && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      background: 'rgba(20,18,14,0.75)',
      color: 'var(--bone-white)'
    }
  }, condition), onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      background: 'var(--amber-orange)',
      color: '#1E1E1E',
      boxShadow: 'var(--glow-amber)'
    }
  }, "Sale")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-sm)',
      margin: '0 0 6px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      lineHeight: 1.25
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--fg-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, [location, listed_label].filter(Boolean).join(' · ')), attrEntries.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 'var(--space-4)'
    }
  }, attrEntries.map(([k, v]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--fg-body)',
      background: 'var(--bg-inset)',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-sm)',
      padding: '3px 8px'
    }
  }, k, ": ", String(v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-sm)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, price == null ? /*#__PURE__*/React.createElement("span", null, "Inquire") : /*#__PURE__*/React.createElement(React.Fragment, null, onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--fg-soft)',
      textDecoration: 'line-through'
    }
  }, "$", original_price.toFixed(0)), /*#__PURE__*/React.createElement("span", null, "$", price.toFixed(0)))), /*#__PURE__*/React.createElement("a", {
    href: external_url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--celestial-yellow)',
      border: 'var(--border-1)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, "View Listing \u2192")), (seller_name || seller_rating) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      paddingTop: 'var(--space-3)',
      borderTop: 'var(--border-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--fg-soft)'
    }
  }, [seller_name, seller_rating].filter(Boolean).join(' · '))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_product_grid/ProductCard.reference.jsx", error: String((e && e.message) || e) }); }

// design_handoff_product_grid/ProductGrid.reference.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Reference only — rename ProductGridRef to ProductGrid in your target codebase.
/**
 * ProductGrid — Renders a `products` array (Supabase output) as a responsive card grid
 * @kind component
 */
function ProductGridCardRef({
  title,
  price,
  original_price,
  condition,
  location,
  listed_label,
  attributes,
  image_url,
  external_url,
  seller_name,
  seller_rating
}) {
  const attrEntries = attributes ? Object.entries(attributes).slice(0, 3) : [];
  const onSale = original_price != null && price != null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-card-2) 100%)',
      border: 'var(--border-1)',
      transition: 'all var(--dur-base) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-6px)';
      e.currentTarget.style.borderColor = 'rgba(245,200,66,0.4)';
      e.currentTarget.style.boxShadow = 'var(--glow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      background: 'var(--bg-inset)'
    }
  }, image_url ? /*#__PURE__*/React.createElement("img", {
    src: image_url,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      color: 'var(--fg-soft)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/icons/woven-basket.png",
    alt: "",
    style: {
      width: 40,
      height: 40,
      objectFit: 'contain',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, "Photo coming soon")), condition && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      background: 'rgba(20,18,14,0.75)',
      color: 'var(--bone-white)'
    }
  }, condition), onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      background: 'var(--amber-orange)',
      color: '#1E1E1E',
      boxShadow: 'var(--glow-amber)'
    }
  }, "Sale")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-sm)',
      margin: '0 0 6px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      lineHeight: 1.25
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--fg-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, [location, listed_label].filter(Boolean).join(' · ')), attrEntries.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 'var(--space-4)'
    }
  }, attrEntries.map(([k, v]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--fg-body)',
      background: 'var(--bg-inset)',
      border: 'var(--border-1)',
      borderRadius: 'var(--radius-sm)',
      padding: '3px 8px'
    }
  }, k, ": ", String(v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-sm)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, price == null ? /*#__PURE__*/React.createElement("span", null, "Inquire") : /*#__PURE__*/React.createElement(React.Fragment, null, onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--fg-soft)',
      textDecoration: 'line-through'
    }
  }, "$", original_price.toFixed(0)), /*#__PURE__*/React.createElement("span", null, "$", price.toFixed(0)))), /*#__PURE__*/React.createElement("a", {
    href: external_url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--celestial-yellow)',
      border: 'var(--border-1)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, "View Listing \u2192")), (seller_name || seller_rating) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      paddingTop: 'var(--space-3)',
      borderTop: 'var(--border-1)',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      color: 'var(--fg-soft)'
    }
  }, [seller_name, seller_rating].filter(Boolean).join(' · '))));
}
function ProductGridRef({
  title = 'Featured Finds',
  products = [],
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      ...props.style
    }
  }), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      color: 'var(--celestial-yellow)',
      textShadow: 'var(--glow-md)',
      textAlign: 'center',
      margin: '0 0 var(--space-10)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--space-6)'
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductGridCardRef, _extends({
    key: p.id
  }, p)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_product_grid/ProductGrid.reference.jsx", error: String((e && e.message) || e) }); }

// previews/galaxy-card-scene.jsx
try { (() => {
// Frame-accurate re-creation of GalaxyCard's ring/planet + dialog, driven by
// the animations.jsx timeline (t) instead of CSS @keyframes, so video export
// (which steps time frame-by-frame) renders correctly.

function GalaxyCardScene() {
  const t = useTime();
  const spinDeg = t * 14.4 % 360; // 360deg / 25s
  const revDeg = -t * 14.4 % 360; // counter-rotation

  const hoverScale = interpolate([2.4, 3.2, 10.6, 11.4], [1, 1.03, 1.03, 1], Easing.easeOutCubic)(t);
  const openProgress = interpolate([5.0, 5.4, 9.3, 9.7], [0, 1, 1, 0], [Easing.easeOutCubic, Easing.linear, Easing.easeInCubic])(t);
  const caption = interpolate([0, 0.3, 2.2, 2.6, 3.0, 4.6, 5.0, 5.4, 9.0, 9.4, 9.8, 10.2, 11.4, 11.8], [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0]);
  let captionText = '';
  if (t >= 0.3 && t < 2.6) captionText = 'Idle — ring orbits continuously';else if (t >= 3.0 && t < 4.6) captionText = 'Hover — scene lifts + scales';else if (t >= 5.4 && t < 9.4) captionText = 'Click — opens product detail';else if (t >= 9.8 && t < 11.4) captionText = 'Back to browse';
  const gold = 'rgba(245, 200, 66, 0.7)';
  const title = 'Peacock';
  const script = 'vintage find';
  const desc = '1970s rattan peacock chair, restored cane back. A dramatic seating option for sunrooms.';
  const price = '1,450';
  const image = '../assets/products/product-peacock-chair-02.png';
  const bg = '../assets/patterns/nebula-ochre.webp';
  const dimensions = 'H 58" x W 40" x D 32"';
  const origin = 'Philippines';
  const era = '1970s';
  const imageBg = '#2D2D2D';
  const cardBg = `linear-gradient(160deg, rgba(20,17,12,0.32) 0%, rgba(12,11,8,0.74) 80%), url("${bg}") center/cover no-repeat`;
  const OrbitIcon = ({
    size = 16
  }) => /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      opacity: 0.8
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "5",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "19",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.4 21.9a10 10 0 0 0 9.941-15.416"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.5 2.1a10 10 0 0 0-9.841 15.416"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse at 25% 25%, rgba(245,200,66,0.10) 0%, transparent 45%),' + 'radial-gradient(ellipse at 78% 72%, rgba(212,130,42,0.10) 0%, transparent 45%),' + 'linear-gradient(160deg, #211C14 0%, #16140F 60%, #1A160F 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '360px',
      height: '520px',
      transform: `scale(${hoverScale})`,
      transformOrigin: 'center',
      perspective: '1200px',
      isolation: 'isolate'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '700px',
      height: '700px',
      transform: 'translate(-50%, -50%)',
      transformStyle: 'preserve-3d',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotateZ(-35deg) rotateX(75deg)',
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: `4px solid ${gold}`,
      boxShadow: '0 0 30px rgba(245,200,66,0.6), inset 0 0 20px rgba(245,200,66,0.4)',
      transformStyle: 'preserve-3d',
      transform: `rotateZ(${spinDeg}deg)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '10px',
      borderRadius: '50%',
      border: '1px solid rgba(245,200,66,0.3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 50%)',
      transformStyle: 'preserve-3d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transformStyle: 'preserve-3d',
      transform: `rotateZ(${revDeg}deg)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      boxShadow: '0 0 15px rgba(163,228,215,0.8), inset 0 0 8px rgba(0,0,0,0.5)',
      border: '1px solid rgba(207,255,245,0.5)',
      transform: 'rotateX(-75deg) rotateZ(35deg)',
      background: 'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #A3E4D7 20%, #2B8271 60%, #0A362E 100%)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '20%',
      left: '10%',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: '#F0E8D8',
      boxShadow: '0 0 15px #F0E8D8'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '20%',
      right: '10%',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: '#F5C842',
      boxShadow: '0 0 20px #F5C842'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '40%',
      right: '5%',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: '#F0E8D8',
      boxShadow: '0 0 10px #F0E8D8'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: '24px',
      background: cardBg,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      border: '2px solid rgba(245,200,66,0.4)',
      boxShadow: '0 0 40px rgba(0,0,0,0.8), inset 0 0 30px rgba(245,200,66,0.15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '260px',
      width: '94%',
      margin: '12px auto 0',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
      border: '2px solid rgba(245,200,66,0.4)',
      backgroundColor: imageBg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '90%',
      height: '90%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '16px 24px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: 'var(--bone-white)',
      background: 'linear-gradient(180deg, rgba(14,12,9,0) 0%, rgba(14,12,9,0.42) 55%, rgba(14,12,9,0.72) 100%)',
      position: 'relative',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '42px',
      letterSpacing: '0.01em',
      color: 'var(--celestial-yellow)',
      lineHeight: 1,
      margin: 0,
      textShadow: '0 2px 4px rgba(0,0,0,0.8)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '30px',
      color: 'var(--amber-orange)',
      margin: '0 0 12px 0',
      lineHeight: 1.1
    }
  }, script), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--fg-muted)',
      lineHeight: 1.55,
      margin: 0,
      opacity: 0.95,
      textShadow: '0 1px 6px rgba(0,0,0,0.9)',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      background: 'var(--celestial-yellow)',
      color: '#1E1E1E',
      padding: '2px 16px',
      borderRadius: '999px',
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      boxShadow: '0 0 15px rgba(245,200,66,0.3)'
    }
  }, "$", price, /*#__PURE__*/React.createElement(OrbitIcon, {
    size: 16
  }))))))), openProgress > 0.001 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1000,
      background: `rgba(0,0,0,${0.8 * openProgress})`,
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '900px',
      maxWidth: '90%',
      maxHeight: '90%',
      overflow: 'hidden',
      background: 'var(--bg-card-2)',
      borderRadius: '18px',
      border: '1px solid rgba(245,200,66,0.3)',
      boxShadow: '0 0 50px rgba(245,200,66,0.12)',
      display: 'flex',
      flexWrap: 'wrap',
      opacity: openProgress,
      transform: `scale(${0.94 + 0.06 * openProgress})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px',
      minHeight: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px',
      backgroundColor: imageBg
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px',
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      color: 'var(--bone-white)',
      background: 'linear-gradient(180deg, #242424 0%, #16140F 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '24px',
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '30px',
      color: 'var(--amber-orange)',
      margin: '0 0 8px 0',
      lineHeight: 1.1
    }
  }, script), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '48px',
      color: 'var(--celestial-yellow)',
      lineHeight: 1,
      margin: '0 0 20px 0'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--fg-body)',
      lineHeight: 1.7,
      margin: 0
    }
  }, desc, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Dimensions: ", dimensions, /*#__PURE__*/React.createElement("br", null), "Origin: ", origin, /*#__PURE__*/React.createElement("br", null), "Era: ", era)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '12px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '36px',
      color: 'var(--celestial-yellow)'
    }
  }, "$", price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--fg-muted)',
      marginBottom: '6px'
    }
  }, "Tax included.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      background: 'var(--celestial-yellow)',
      color: '#1E1E1E',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '15px',
      letterSpacing: '0.04em',
      padding: '16px 24px',
      borderRadius: '999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(OrbitIcon, {
    size: 18
  }), "Add to Cart"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '48px',
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body), Inter, system-ui, sans-serif',
      fontSize: '20px',
      letterSpacing: '0.02em',
      color: 'rgba(240,232,216,0.9)',
      background: 'rgba(0,0,0,0.35)',
      padding: '10px 22px',
      borderRadius: '999px',
      opacity: caption(t),
      transition: 'none'
    }
  }, captionText)));
}
window.GalaxyCardScene = GalaxyCardScene;
})(); } catch (e) { __ds_ns.__errors.push({ path: "previews/galaxy-card-scene.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.GalaxyCard = __ds_scope.GalaxyCard;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ProductGrid = __ds_scope.ProductGrid;

__ds_ns.GalaxyCardRef = __ds_scope.GalaxyCardRef;

__ds_ns.IconRef = __ds_scope.IconRef;

})();
