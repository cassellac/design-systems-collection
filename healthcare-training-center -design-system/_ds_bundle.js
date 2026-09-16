/* @ds-bundle: {"format":4,"namespace":"HealthcareTrainingCenterDesignSystem_e713df","components":[],"sourceHashes":{"doc-page.js":"371bab66f42d","ui_kits/learner-app/components.jsx":"e0e676044175","ui_kits/learner-app/rooms.jsx":"9d0f1fea21b6","ui_kits/learner-app/screens.jsx":"4a7dc5146ec5","ui_kits/marketing/sections.jsx":"666d5ab9ef26"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HealthcareTrainingCenterDesignSystem_e713df = window.HealthcareTrainingCenterDesignSystem_e713df || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// doc-page.js
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/learner-app/components.jsx
try { (() => {
// components.jsx — shared presentational components for the Learner App kit.
// Relies on rooms.jsx being loaded first. Exports to window at the end.

const {
  useState
} = React;

/* ---------- Top Navigation ---------- */
function TopNav({
  accent,
  onLogo,
  room
}) {
  const links = ['Lobby', 'My Progress', 'Live Classes', 'Study Lounge', 'Resources'];
  const [active] = useState('Lobby');
  return /*#__PURE__*/React.createElement("header", {
    className: "ln-nav",
    style: {
      '--accent': accent || 'var(--color-teal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-nav-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-logo",
    onClick: onLogo,
    role: "button",
    tabIndex: 0
  }, /*#__PURE__*/React.createElement("span", {
    className: "ln-logo-mark"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-first-aid"
  })), /*#__PURE__*/React.createElement("span", {
    className: "ln-logo-word"
  }, "Healthcare Training Center")), /*#__PURE__*/React.createElement("nav", {
    className: "ln-links"
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    className: 'ln-link' + (l === active ? ' is-active' : '')
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "ln-nav-right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ln-iconbtn",
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-bell"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ln-dot"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ln-avatar"
  }, "MD"), /*#__PURE__*/React.createElement("span", {
    className: "ln-username"
  }, "Maria D."))), /*#__PURE__*/React.createElement("div", {
    className: "ln-accentbar"
  }));
}

/* ---------- Button ---------- */
function Button({
  variant = 'primary',
  size = 'md',
  accent,
  children,
  onClick,
  full
}) {
  const style = {};
  if (variant === 'track' && accent) style.background = accent;
  return /*#__PURE__*/React.createElement("button", {
    className: `ln-btn ln-btn-${variant} ln-btn-${size}${full ? ' ln-btn-full' : ''}`,
    style: style,
    onClick: onClick
  }, children);
}

/* ---------- Progress bar ---------- */
function ProgressBar({
  pct,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ln-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-fill",
    style: {
      width: pct + '%',
      background: color || 'var(--color-teal)'
    }
  }));
}

/* ---------- Progress ring ---------- */
function ProgressRing({
  pct,
  size = 40,
  stroke = 5,
  color,
  label
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - pct / 100);
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    className: "ln-ring"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--color-border)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color || 'var(--color-teal)',
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: off,
    transform: `rotate(-90 ${size / 2} ${size / 2})`,
    style: {
      transition: 'stroke-dashoffset .4s'
    }
  }), label && /*#__PURE__*/React.createElement("text", {
    x: "50%",
    y: "52%",
    textAnchor: "middle",
    dominantBaseline: "middle",
    fontFamily: "Montserrat",
    fontWeight: "800",
    fontSize: size * 0.26,
    fill: "var(--color-navy)"
  }, label));
}

/* ---------- Status pill ---------- */
function StatusPill({
  status
}) {
  const map = {
    'complete': {
      t: 'Completed',
      cls: 'is-success',
      icon: 'ph-check-circle'
    },
    'in-progress': {
      t: 'In Progress',
      cls: 'is-warning',
      icon: null
    },
    'not-started': {
      t: 'Not Started',
      cls: 'is-muted',
      icon: null
    }
  };
  const s = map[status] || map['not-started'];
  return /*#__PURE__*/React.createElement("span", {
    className: 'ln-pill ' + s.cls
  }, s.icon && /*#__PURE__*/React.createElement("i", {
    className: 'ph ' + s.icon
  }), s.t);
}

/* ---------- Room Entry Card (the "door") ---------- */
function RoomCard({
  room,
  onEnter
}) {
  const status = roomStatus(room);
  const pct = Math.round(room.done / room.total * 100);
  const cta = roomCta(room);
  return /*#__PURE__*/React.createElement("article", {
    className: 'ln-roomcard ln-status-' + status,
    onClick: () => onEnter(room),
    role: "button",
    tabIndex: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-roomcard-band",
    style: {
      background: room.color
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ln-roomnum"
  }, "ROOM ", room.n), status === 'complete' && /*#__PURE__*/React.createElement("span", {
    className: "ln-roomcheck"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  })), /*#__PURE__*/React.createElement("i", {
    className: 'ph-fill ' + room.icon
  })), /*#__PURE__*/React.createElement("div", {
    className: "ln-roomcard-body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ln-roomname"
  }, room.name), /*#__PURE__*/React.createElement("p", {
    className: "ln-roomdesc"
  }, room.desc), status !== 'not-started' && /*#__PURE__*/React.createElement("div", {
    className: "ln-roomprog"
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    pct: pct,
    color: status === 'complete' ? 'var(--color-success)' : room.color
  }), /*#__PURE__*/React.createElement("span", {
    className: "ln-roomprog-lbl"
  }, room.done, " of ", room.total, " courses")), /*#__PURE__*/React.createElement(Button, {
    variant: "track",
    accent: room.color,
    full: true
  }, cta, " ", /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-arrow-right"
  }))));
}

/* ---------- Course Card ---------- */
function CourseCard({
  course,
  room
}) {
  let action = 'Start',
    icon = 'ph-circle-dashed',
    label = 'Not started';
  if (course.pct === 100) {
    action = 'Review';
    icon = 'ph-check-circle';
    label = 'Completed';
  } else if (course.pct > 0) {
    action = 'Continue';
    label = course.pct + '% done';
  }
  return /*#__PURE__*/React.createElement("article", {
    className: "ln-course"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-course-thumb",
    style: {
      background: room.color
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph ' + room.icon
  })), /*#__PURE__*/React.createElement("div", {
    className: "ln-course-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-course-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ln-tag"
  }, course.min, " MIN"), /*#__PURE__*/React.createElement("span", {
    className: "ln-tag"
  }, course.lvl.toUpperCase())), /*#__PURE__*/React.createElement("h4", {
    className: "ln-course-title"
  }, course.t), /*#__PURE__*/React.createElement("div", {
    className: "ln-course-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ln-course-status"
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph ' + icon
  }), " ", label), /*#__PURE__*/React.createElement("span", {
    className: "ln-course-go",
    style: {
      color: room.color
    }
  }, action, " \u2192"))));
}
Object.assign(window, {
  TopNav,
  Button,
  ProgressBar,
  ProgressRing,
  StatusPill,
  RoomCard,
  CourseCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learner-app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learner-app/rooms.jsx
try { (() => {
// rooms.jsx — shared room data + small helpers for the Learner App kit
// Exposed on window for the other babel scripts.

const ROOMS = [{
  id: 'cs',
  n: 1,
  name: 'Customer Service',
  icon: 'ph-users',
  color: '#3B7DD8',
  tint: '#ECF3FC',
  desc: 'Communication, empathy, and de-escalation for every patient interaction.',
  why: 'Patients remember how they were treated long after they forget a diagnosis. The first voice they hear sets the tone for their entire experience of care.',
  done: 18,
  total: 24,
  courses: [{
    t: 'The Importance of Customer Service in Healthcare',
    min: 30,
    lvl: 'Beginner',
    pct: 100
  }, {
    t: 'Communication Skills: Phone, Email & In-Person',
    min: 45,
    lvl: 'Beginner',
    pct: 100
  }, {
    t: 'Active Listening & Empathy',
    min: 35,
    lvl: 'Core',
    pct: 80
  }, {
    t: 'Handling Difficult Situations',
    min: 40,
    lvl: 'Core',
    pct: 40
  }, {
    t: 'Cultural Competency',
    min: 30,
    lvl: 'Core',
    pct: 0
  }, {
    t: 'Service Recovery & Best Practices',
    min: 25,
    lvl: 'Advanced',
    pct: 0
  }]
}, {
  id: 'hipaa',
  n: 2,
  name: 'HIPAA, Privacy & Security',
  icon: 'ph-shield-check',
  color: '#2BA89A',
  tint: '#E7F6F4',
  desc: 'PHI, the privacy rule, and the habits that keep patient data safe.',
  why: 'A single careless click can expose thousands of patients. Protecting privacy is not paperwork — it is the trust that makes honest care possible.',
  done: 6,
  total: 12,
  courses: [{
    t: 'Introduction to HIPAA',
    min: 30,
    lvl: 'Beginner',
    pct: 100
  }, {
    t: 'Protected Health Information (PHI)',
    min: 45,
    lvl: 'Beginner',
    pct: 100
  }, {
    t: 'The Privacy Rule & Patient Rights',
    min: 40,
    lvl: 'Core',
    pct: 60
  }, {
    t: 'Minimum Necessary Standard',
    min: 25,
    lvl: 'Core',
    pct: 0
  }, {
    t: 'Data Breach Prevention & Reporting',
    min: 35,
    lvl: 'Core',
    pct: 0
  }, {
    t: 'Consequences of HIPAA Violations',
    min: 30,
    lvl: 'Advanced',
    pct: 0
  }]
}, {
  id: 'compliance',
  n: 3,
  name: 'Compliance',
  icon: 'ph-clipboard-text',
  color: '#2EAA6E',
  tint: '#E8F7EF',
  desc: 'Laws, fraud/waste/abuse, and the ethics that keep care honest.',
  why: 'Compliance is how an organization proves — to patients and regulators alike — that it does the right thing even when no one is watching.',
  done: 12,
  total: 12,
  courses: [{
    t: 'Introduction to Healthcare Compliance',
    min: 30,
    lvl: 'Beginner',
    pct: 100
  }, {
    t: 'Laws & Regulations Overview',
    min: 45,
    lvl: 'Beginner',
    pct: 100
  }, {
    t: 'Fraud, Waste & Abuse (FWA)',
    min: 40,
    lvl: 'Core',
    pct: 100
  }, {
    t: 'The Anti-Kickback Statute & Stark Law',
    min: 50,
    lvl: 'Advanced',
    pct: 100
  }, {
    t: 'Reporting Concerns (Whistleblowing)',
    min: 30,
    lvl: 'Core',
    pct: 100
  }, {
    t: 'Internal Audits & Monitoring',
    min: 35,
    lvl: 'Advanced',
    pct: 100
  }]
}, {
  id: 'records',
  n: 4,
  name: 'Medical Records',
  icon: 'ph-folder-open',
  color: '#7B5EA7',
  tint: '#F1ECF7',
  desc: 'EHR, documentation standards, and reading a record with confidence.',
  why: 'The record is the patient’s story in clinical form. Accurate documentation is what lets the next caregiver pick up exactly where the last one left off.',
  done: 3,
  total: 14,
  courses: [{
    t: 'Introduction to Medical Records',
    min: 30,
    lvl: 'Beginner',
    pct: 100
  }, {
    t: 'Electronic Health Records (EHR)',
    min: 45,
    lvl: 'Beginner',
    pct: 60
  }, {
    t: 'Documenting Patient Information',
    min: 40,
    lvl: 'Core',
    pct: 0
  }, {
    t: 'How to Read a Medical Record',
    min: 35,
    lvl: 'Core',
    pct: 0
  }, {
    t: 'Retention & Destruction Policies',
    min: 30,
    lvl: 'Advanced',
    pct: 0
  }, {
    t: 'Release of Information (ROI)',
    min: 35,
    lvl: 'Advanced',
    pct: 0
  }]
}, {
  id: 'finance',
  n: 5,
  name: 'Finance',
  icon: 'ph-currency-dollar',
  color: '#D4A017',
  tint: '#FBF3DD',
  desc: 'Revenue cycle, billing, and collections done accurately and fairly.',
  why: 'Billing errors cost patients real money and erode their trust. Getting finance right is part of treating people with dignity.',
  done: 0,
  total: 13,
  courses: [{
    t: 'Introduction to Healthcare Finance',
    min: 30,
    lvl: 'Beginner',
    pct: 0
  }, {
    t: 'Revenue Cycle Overview',
    min: 45,
    lvl: 'Beginner',
    pct: 0
  }, {
    t: 'Coding & Charge Capture (CPT/ICD-10)',
    min: 50,
    lvl: 'Core',
    pct: 0
  }, {
    t: 'Claims Submission & Denials',
    min: 40,
    lvl: 'Core',
    pct: 0
  }, {
    t: 'Patient Statements & Collections',
    min: 35,
    lvl: 'Advanced',
    pct: 0
  }, {
    t: 'Fraud & Abuse in Billing',
    min: 30,
    lvl: 'Advanced',
    pct: 0
  }]
}];
function roomStatus(r) {
  if (r.done === 0) return 'not-started';
  if (r.done >= r.total) return 'complete';
  return 'in-progress';
}
function roomCta(r) {
  const s = roomStatus(r);
  if (s === 'complete') return 'Review';
  if (s === 'in-progress') return 'Continue';
  return 'Enter Room';
}
Object.assign(window, {
  ROOMS,
  roomStatus,
  roomCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learner-app/rooms.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learner-app/screens.jsx
try { (() => {
// screens.jsx — Lobby + Room screens and the App shell.
// Relies on rooms.jsx + components.jsx. Exports App to window.

const {
  useState,
  useEffect
} = React;

/* ---------- Lobby (Reception) ---------- */
function LobbyScreen({
  onEnter
}) {
  const overall = Math.round(100 * ROOMS.reduce((a, r) => a + r.done, 0) / ROOMS.reduce((a, r) => a + r.total, 0));
  return /*#__PURE__*/React.createElement("div", {
    className: "ln-lobby"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-lobby-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "ln-eyebrow"
  }, "Welcome back"), /*#__PURE__*/React.createElement("h1", {
    className: "ln-lobby-title"
  }, "Hello, Maria"), /*#__PURE__*/React.createElement("p", {
    className: "ln-lobby-sub"
  }, "Choose your training path \u2014 step into any room to pick up where you left off.")), /*#__PURE__*/React.createElement("div", {
    className: "ln-overall"
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    pct: overall,
    size: 108,
    stroke: 12,
    color: "var(--color-teal)",
    label: overall + '%'
  }), /*#__PURE__*/React.createElement("div", {
    className: "ln-overall-meta"
  }, /*#__PURE__*/React.createElement("strong", null, "Overall progress"), /*#__PURE__*/React.createElement("span", null, "39 of 75 courses complete")))), /*#__PURE__*/React.createElement("div", {
    className: "ln-lobby-grid-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-section-label"
  }, /*#__PURE__*/React.createElement("span", null, "Choose Your Training Path")), /*#__PURE__*/React.createElement("div", {
    className: "ln-roomgrid"
  }, ROOMS.map(r => /*#__PURE__*/React.createElement(RoomCard, {
    key: r.id,
    room: r,
    onEnter: onEnter
  })), /*#__PURE__*/React.createElement("aside", {
    className: "ln-lobby-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-aside-card ln-aside-live"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ln-live-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ln-live-dot"
  }), " LIVE NOW"), /*#__PURE__*/React.createElement("h4", null, "HIPAA Basics \u2014 Live Class"), /*#__PURE__*/React.createElement("p", null, "With instructor Dr. Alan Reyes"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Join Live Class")), /*#__PURE__*/React.createElement("div", {
    className: "ln-aside-card"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ln-eyebrow"
  }, "Upcoming"), /*#__PURE__*/React.createElement("h4", {
    className: "ln-aside-h"
  }, "Study Group Session"), /*#__PURE__*/React.createElement("p", {
    className: "ln-aside-p"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-calendar-blank"
  }), " May 22, 2026 \xB7 6:00 PM EST"), /*#__PURE__*/React.createElement("a", {
    className: "ln-aside-link"
  }, "View calendar \u2192"))))));
}

/* ---------- Room (immersive) ---------- */
function RoomScreen({
  room,
  onBack
}) {
  const pct = Math.round(room.done / room.total * 100);
  return /*#__PURE__*/React.createElement("div", {
    className: "ln-room",
    style: {
      '--accent': room.color,
      '--tint': room.tint,
      background: room.tint
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-room-banner",
    style: {
      background: room.color
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-room-banner-inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ln-back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-arrow-left"
  }), " Back to Lobby"), /*#__PURE__*/React.createElement("div", {
    className: "ln-room-banner-main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ln-room-banner-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph-fill ' + room.icon
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "ln-room-banner-num"
  }, "ROOM ", room.n), /*#__PURE__*/React.createElement("h1", {
    className: "ln-room-banner-name"
  }, room.name), /*#__PURE__*/React.createElement("p", {
    className: "ln-room-banner-tag"
  }, room.desc)), /*#__PURE__*/React.createElement("div", {
    className: "ln-room-banner-prog"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ln-room-banner-pct"
  }, room.done, " of ", room.total, " complete"), /*#__PURE__*/React.createElement("div", {
    className: "ln-track ln-track-oncolor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-fill",
    style: {
      width: pct + '%',
      background: '#fff'
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "ln-room-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-breadcrumb"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onBack
  }, "Lobby"), " ", /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-right"
  }), " ", /*#__PURE__*/React.createElement("strong", null, room.name)), /*#__PURE__*/React.createElement("div", {
    className: "ln-room-cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-coursegrid"
  }, room.courses.map((c, i) => /*#__PURE__*/React.createElement(CourseCard, {
    key: i,
    course: c,
    room: room
  }))), /*#__PURE__*/React.createElement("aside", {
    className: "ln-room-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ln-why",
    style: {
      borderTopColor: room.color
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ln-eyebrow",
    style: {
      color: room.color
    }
  }, "Why This Room Matters"), /*#__PURE__*/React.createElement("p", {
    className: "ln-why-text"
  }, room.why)), /*#__PURE__*/React.createElement("div", {
    className: "ln-forum",
    style: {
      background: room.tint
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph-fill ' + room.icon,
    style: {
      color: room.color
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Got questions?"), /*#__PURE__*/React.createElement("span", null, "Ask in the ", room.name, " forum \u2192")))))), /*#__PURE__*/React.createElement("button", {
    className: "ln-ask",
    style: {
      background: room.color
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-chat-circle-dots"
  }), " Ask a Question"));
}

/* ---------- App shell with room-entry transition ---------- */
function App() {
  const [room, setRoom] = useState(null);
  const [entering, setEntering] = useState(false);
  const enter = r => {
    setEntering(true);
    setTimeout(() => {
      setRoom(r);
      setEntering(false);
      window.scrollTo(0, 0);
    }, 180);
  };
  const back = () => {
    setEntering(true);
    setTimeout(() => {
      setRoom(null);
      setEntering(false);
      window.scrollTo(0, 0);
    }, 150);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ln-app"
  }, /*#__PURE__*/React.createElement(TopNav, {
    accent: room ? room.color : null,
    onLogo: back,
    room: room
  }), /*#__PURE__*/React.createElement("main", {
    className: 'ln-main' + (entering ? ' is-entering' : '')
  }, room ? /*#__PURE__*/React.createElement(RoomScreen, {
    room: room,
    onBack: back
  }) : /*#__PURE__*/React.createElement(LobbyScreen, {
    onEnter: enter
  })), /*#__PURE__*/React.createElement("div", {
    className: "ln-help"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-headset"
  })));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learner-app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/sections.jsx
try { (() => {
// sections.jsx — Marketing site sections. Exports to window.
// Reuses the 5-room concept. Loaded after React/Babel.

const {
  useState
} = React;
const TRACKS = [{
  n: 1,
  name: 'Customer Service',
  icon: 'ph-users',
  color: '#3B7DD8',
  blurb: 'Communication, empathy, and de-escalation for every patient interaction.'
}, {
  n: 2,
  name: 'HIPAA, Privacy & Security',
  icon: 'ph-shield-check',
  color: '#2BA89A',
  blurb: 'Protect patient information, maintain privacy, and prevent data breaches.'
}, {
  n: 3,
  name: 'Compliance',
  icon: 'ph-clipboard-text',
  color: '#2EAA6E',
  blurb: 'Meet legal and ethical standards and build a culture of integrity.'
}, {
  n: 4,
  name: 'Medical Records',
  icon: 'ph-folder-open',
  color: '#7B5EA7',
  blurb: 'Keep records accurate, complete, and secure — every single time.'
}, {
  n: 5,
  name: 'Finance',
  icon: 'ph-currency-dollar',
  color: '#D4A017',
  blurb: 'Understand the revenue cycle and support accurate reimbursement.'
}];

/* ---------- Nav ---------- */
function SiteNav() {
  return /*#__PURE__*/React.createElement("header", {
    className: "mk-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mk-logo",
    href: "#top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-logo-mark"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-first-aid"
  })), /*#__PURE__*/React.createElement("span", {
    className: "mk-logo-word"
  }, "Healthcare Training Center")), /*#__PURE__*/React.createElement("nav", {
    className: "mk-nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#tracks"
  }, "Training Rooms"), /*#__PURE__*/React.createElement("a", {
    href: "#story"
  }, "Our Story"), /*#__PURE__*/React.createElement("a", {
    href: "#audience"
  }, "Who It's For"), /*#__PURE__*/React.createElement("a", {
    href: "#pricing"
  }, "Pricing")), /*#__PURE__*/React.createElement("div", {
    className: "mk-nav-cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mk-btn mk-btn-ghost",
    href: "#"
  }, "Log In"), /*#__PURE__*/React.createElement("a", {
    className: "mk-btn mk-btn-primary",
    href: "#"
  }, "Start Free Trial"))));
}

/* ---------- Hero ---------- */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-hero-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-eyebrow mk-eyebrow-light"
  }, "A New Innovative Way to Learn"), /*#__PURE__*/React.createElement("h1", {
    className: "mk-hero-title"
  }, "Step Inside.", /*#__PURE__*/React.createElement("br", null), "Step Up."), /*#__PURE__*/React.createElement("p", {
    className: "mk-hero-sub"
  }, "A people-first training platform for healthcare professionals. Five training rooms. One mission: better care. Learn virtually \u2014 anytime, anywhere."), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mk-btn mk-btn-track mk-btn-lg",
    href: "#tracks"
  }, "Choose Your Training Path ", /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    className: "mk-btn mk-btn-outline-light mk-btn-lg",
    href: "#story"
  }, "Why We Exist")), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero-stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "5"), /*#__PURE__*/React.createElement("span", null, "Training rooms")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "75+"), /*#__PURE__*/React.createElement("span", null, "On-demand courses")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "WCAG AA"), /*#__PURE__*/React.createElement("span", null, "Accessible by design")))));
}

/* ---------- Training tracks ---------- */
function TracksRow() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-section",
    id: "tracks"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-eyebrow"
  }, "Choose Your Training Path"), /*#__PURE__*/React.createElement("h2", {
    className: "mk-h2"
  }, "Five rooms. One mission. Better healthcare."), /*#__PURE__*/React.createElement("p", {
    className: "mk-lead"
  }, "Each room is a focused world of its own \u2014 enter and the whole experience takes on its subject and color.")), /*#__PURE__*/React.createElement("div", {
    className: "mk-tracks"
  }, TRACKS.map(t => /*#__PURE__*/React.createElement("article", {
    className: "mk-track",
    key: t.n,
    style: {
      '--c': t.color
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-track-icon",
    style: {
      background: t.color
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph-fill ' + t.icon
  })), /*#__PURE__*/React.createElement("span", {
    className: "mk-track-num"
  }, "Room ", t.n), /*#__PURE__*/React.createElement("h3", {
    className: "mk-track-name"
  }, t.name), /*#__PURE__*/React.createElement("p", {
    className: "mk-track-blurb"
  }, t.blurb), /*#__PURE__*/React.createElement("a", {
    className: "mk-track-link",
    href: "#",
    style: {
      color: t.color
    }
  }, "Explore room \u2192")))));
}

/* ---------- Founder story ---------- */
function StorySection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-story",
    id: "story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-story-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-story-quote"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-quote-mark"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-quotes"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mk-quote"
  }, "This system is broken \u2014 but ", /*#__PURE__*/React.createElement("em", null, "you"), " can be the change in it. Healthcare workers who understand ", /*#__PURE__*/React.createElement("em", null, "why"), " care matters don't just follow the rules. They treat people better."), /*#__PURE__*/React.createElement("div", {
    className: "mk-quote-by"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-quote-name"
  }, "Our Founder"), /*#__PURE__*/React.createElement("span", {
    className: "mk-quote-role"
  }, "Attorney & patient advocate"))), /*#__PURE__*/React.createElement("div", {
    className: "mk-story-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-eyebrow"
  }, "Why This Exists"), /*#__PURE__*/React.createElement("h2", {
    className: "mk-h2"
  }, "Built by a lawyer. Designed for people."), /*#__PURE__*/React.createElement("p", null, "Our founder watched a family member receive care from people who knew the procedures but had never been taught the ", /*#__PURE__*/React.createElement("em", null, "why"), " behind them. The training existed to satisfy a regulation \u2014 not to serve a patient."), /*#__PURE__*/React.createElement("p", null, "Healthcare Training Center exists to close that gap: legally sound, patient-first training that leaves every learner more capable \u2014 and more humane \u2014 than when they arrived."), /*#__PURE__*/React.createElement("a", {
    className: "mk-btn mk-btn-secondary",
    href: "#"
  }, "Read our full story"))));
}

/* ---------- Who it's for ---------- */
function AudienceSplit() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-section",
    id: "audience"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-eyebrow"
  }, "Who It's For"), /*#__PURE__*/React.createElement("h2", {
    className: "mk-h2"
  }, "Two paths into the same building.")), /*#__PURE__*/React.createElement("div", {
    className: "mk-audience"
  }, /*#__PURE__*/React.createElement("article", {
    className: "mk-aud-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-aud-icon",
    style: {
      background: 'var(--color-navy)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-buildings"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "mk-h3"
  }, "For Organizations"), /*#__PURE__*/React.createElement("p", null, "Train your whole team, assign required paths, set deadlines, and pull audit-ready compliance reports. Manage seats and billing in one portal."), /*#__PURE__*/React.createElement("ul", {
    className: "mk-checklist"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  }), " Team roster & progress tracking"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  }), " Downloadable compliance reports"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  }), " Deadlines & automated reminders")), /*#__PURE__*/React.createElement("a", {
    className: "mk-btn mk-btn-primary mk-btn-full",
    href: "#pricing"
  }, "See org plans")), /*#__PURE__*/React.createElement("article", {
    className: "mk-aud-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-aud-icon",
    style: {
      background: 'var(--color-teal)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-user"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "mk-h3"
  }, "For Individuals"), /*#__PURE__*/React.createElement("p", null, "Advance your career on your own schedule. Earn certificates and digital badges that prove your skills to current and future employers."), /*#__PURE__*/React.createElement("ul", {
    className: "mk-checklist"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  }), " Learn at your own pace"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  }), " Certificates of completion"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  }), " Mobile-friendly, learn anywhere")), /*#__PURE__*/React.createElement("a", {
    className: "mk-btn mk-btn-secondary mk-btn-full",
    href: "#pricing"
  }, "See individual plan"))));
}

/* ---------- Features ---------- */
function FeatureGrid() {
  const feats = [{
    icon: 'ph-monitor-play',
    t: 'Live & On-Demand',
    d: 'Instructor-led sessions plus a full on-demand library you can take anytime.'
  }, {
    icon: 'ph-cube',
    t: 'Interactive Simulations',
    d: 'Real-world scenarios let you practice safely before it counts.'
  }, {
    icon: 'ph-certificate',
    t: 'Certificates & Badges',
    d: 'Prove your skills and advance your career with shareable credentials.'
  }, {
    icon: 'ph-device-mobile',
    t: 'Mobile Friendly',
    d: 'Train between shifts on any device — your progress follows you.'
  }, {
    icon: 'ph-chart-line-up',
    t: 'Track Your Progress',
    d: 'A clear dashboard shows exactly how far you’ve come, room by room.'
  }, {
    icon: 'ph-headset',
    t: 'Support When You Need It',
    d: 'A real help desk — live chat, FAQs, and people who want you to succeed.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-section-head mk-section-head-light"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-eyebrow mk-eyebrow-light"
  }, "A Better Way to Learn Virtually"), /*#__PURE__*/React.createElement("h2", {
    className: "mk-h2",
    style: {
      color: '#fff'
    }
  }, "Everything you need to get it right.")), /*#__PURE__*/React.createElement("div", {
    className: "mk-feature-grid"
  }, feats.map(f => /*#__PURE__*/React.createElement("article", {
    className: "mk-feature",
    key: f.t
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-feature-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph ' + f.icon
  })), /*#__PURE__*/React.createElement("h4", {
    className: "mk-feature-t"
  }, f.t), /*#__PURE__*/React.createElement("p", {
    className: "mk-feature-d"
  }, f.d)))));
}

/* ---------- Pricing ---------- */
function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-section",
    id: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-eyebrow"
  }, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    className: "mk-h2"
  }, "Simple plans for teams and individuals.")), /*#__PURE__*/React.createElement("div", {
    className: "mk-pricing"
  }, /*#__PURE__*/React.createElement("article", {
    className: "mk-price"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mk-price-name"
  }, "Individual"), /*#__PURE__*/React.createElement("div", {
    className: "mk-price-amt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-price-cur"
  }, "$"), "29", /*#__PURE__*/React.createElement("span", {
    className: "mk-price-per"
  }, "/mo")), /*#__PURE__*/React.createElement("p", {
    className: "mk-price-sub"
  }, "For one learner advancing their career."), /*#__PURE__*/React.createElement("ul", {
    className: "mk-checklist"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  }), " All 5 training rooms"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  }), " Certificates & badges"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  }), " Live class access")), /*#__PURE__*/React.createElement("a", {
    className: "mk-btn mk-btn-outline mk-btn-full",
    href: "#"
  }, "Start free trial")), /*#__PURE__*/React.createElement("article", {
    className: "mk-price mk-price-featured"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-price-flag"
  }, "Most popular"), /*#__PURE__*/React.createElement("h3", {
    className: "mk-price-name"
  }, "Organization"), /*#__PURE__*/React.createElement("div", {
    className: "mk-price-amt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-price-cur"
  }, "$"), "19", /*#__PURE__*/React.createElement("span", {
    className: "mk-price-per"
  }, "/seat/mo")), /*#__PURE__*/React.createElement("p", {
    className: "mk-price-sub"
  }, "For teams that need audit-ready compliance."), /*#__PURE__*/React.createElement("ul", {
    className: "mk-checklist"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  }), " Everything in Individual"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  }), " Admin portal & roster"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  }), " Compliance reports & deadlines"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-check"
  }), " Priority help desk")), /*#__PURE__*/React.createElement("a", {
    className: "mk-btn mk-btn-primary mk-btn-full",
    href: "#"
  }, "Talk to sales"))));
}

/* ---------- Footer ---------- */
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "mk-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-footer-brand"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mk-logo",
    href: "#top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-logo-mark"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-first-aid"
  })), /*#__PURE__*/React.createElement("span", {
    className: "mk-logo-word"
  }, "Healthcare Training Center")), /*#__PURE__*/React.createElement("p", {
    className: "mk-footer-tag"
  }, "Empowering Knowledge. Enhancing Care.", /*#__PURE__*/React.createElement("br", null), "Building a Better Future.")), /*#__PURE__*/React.createElement("div", {
    className: "mk-footer-cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Platform"), /*#__PURE__*/React.createElement("a", {
    href: "#tracks"
  }, "Training Rooms"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Live Classes"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Study Lounge"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Resources")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Company"), /*#__PURE__*/React.createElement("a", {
    href: "#story"
  }, "Our Story"), /*#__PURE__*/React.createElement("a", {
    href: "#pricing"
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Careers")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Account"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Log In"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Start Free Trial"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "For Organizations")))), /*#__PURE__*/React.createElement("div", {
    className: "mk-footer-legal"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Healthcare Training Center. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Learn. Grow. Make a Difference.")));
}
Object.assign(window, {
  SiteNav,
  Hero,
  TracksRow,
  StorySection,
  AudienceSplit,
  FeatureGrid,
  Pricing,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/sections.jsx", error: String((e && e.message) || e) }); }

})();
