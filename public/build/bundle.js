var app = function () { "use strict"; function t() { } function e(t) { return t() } function n() { return Object.create(null) } function o(t) { t.forEach(e) } function r(t) { return "function" == typeof t } function c(t, e) { return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t } let i, s; function l(t, e) { return i || (i = document.createElement("a")), i.href = e, t === i.href } function a(t, e) { t.appendChild(e) } function u(t, e, n) { t.insertBefore(e, n || null) } function f(t) { t.parentNode && t.parentNode.removeChild(t) } function d(t) { return document.createElement(t) } function A(t) { return document.createTextNode(t) } function g() { return A(" ") } function p(t, e, n, o) { return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o) } function h(t, e, n) { null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n) } function m(t, e) { t.value = null == e ? "" : e } function b(t) { s = t } const w = [], y = [], $ = [], k = [], v = Promise.resolve(); let C = !1; function E(t) { $.push(t) } const _ = new Set; let x = 0; function J() { if (0 !== x) return; const t = s; do { try { for (; x < w.length;) { const t = w[x]; x++, b(t), M(t.$$) } } catch (t) { throw w.length = 0, x = 0, t } for (b(null), w.length = 0, x = 0; y.length;)y.pop()(); for (let t = 0; t < $.length; t += 1) { const e = $[t]; _.has(e) || (_.add(e), e()) } $.length = 0 } while (w.length); for (; k.length;)k.pop()(); C = !1, _.clear(), b(t) } function M(t) { if (null !== t.fragment) { t.update(), o(t.before_update); const e = t.dirty; t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(E) } } const B = new Set; function D(t, e) { t && t.i && (B.delete(t), t.i(e)) } const O = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global; function I(t, e) { t.d(1), e.delete(t.key) } function K(t, e, n, o, r, c, i, s, l, a, u, f) { let d = t.length, A = c.length, g = d; const p = {}; for (; g--;)p[t[g].key] = g; const h = [], m = new Map, b = new Map; for (g = A; g--;) { const t = f(r, c, g), s = n(t); let l = i.get(s); l ? o && l.p(t, e) : (l = a(s, t), l.c()), m.set(s, h[g] = l), s in p && b.set(s, Math.abs(g - p[s])) } const w = new Set, y = new Set; function $(t) { D(t, 1), t.m(s, u), i.set(t.key, t), u = t.first, A-- } for (; d && A;) { const e = h[A - 1], n = t[d - 1], o = e.key, r = n.key; e === n ? (u = e.first, d--, A--) : m.has(r) ? !i.has(o) || w.has(o) ? $(e) : y.has(r) ? d-- : b.get(o) > b.get(r) ? (y.add(o), $(e)) : (w.add(r), d--) : (l(n, i), d--) } for (; d--;) { const e = t[d]; m.has(e.key) || l(e, i) } for (; A;)$(h[A - 1]); return h } function N(t, e) { -1 === t.$$.dirty[0] && (w.push(t), C || (C = !0, v.then(J)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31 } function Q(c, i, l, a, u, d, A, g = [-1]) { const p = s; b(c); const h = c.$$ = { fragment: null, ctx: [], props: d, update: t, not_equal: u, bound: n(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(i.context || (p ? p.$$.context : [])), callbacks: n(), dirty: g, skip_bound: !1, root: i.target || p.$$.root }; A && A(h.root); let m = !1; if (h.ctx = l ? l(c, i.props || {}, ((t, e, ...n) => { const o = n.length ? n[0] : e; return h.ctx && u(h.ctx[t], h.ctx[t] = o) && (!h.skip_bound && h.bound[t] && h.bound[t](o), m && N(c, t)), e })) : [], h.update(), m = !0, o(h.before_update), h.fragment = !!a && a(h.ctx), i.target) { if (i.hydrate) { const t = function (t) { return Array.from(t.childNodes) }(i.target); h.fragment && h.fragment.l(t), t.forEach(f) } else h.fragment && h.fragment.c(); i.intro && D(c.$$.fragment), function (t, n, c, i) { const { fragment: s, after_update: l } = t.$$; s && s.m(n, c), i || E((() => { const n = t.$$.on_mount.map(e).filter(r); t.$$.on_destroy ? t.$$.on_destroy.push(...n) : o(n), t.$$.on_mount = [] })), l.forEach(E) }(c, i.target, i.anchor, i.customElement), J() } b(p) } class S { $destroy() { !function (t, e) { const n = t.$$; null !== n.fragment && (o(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []) }(this, 1), this.$destroy = t } $on(e, n) { if (!r(n)) return t; const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []); return o.push(n), () => { const t = o.indexOf(n); -1 !== t && o.splice(t, 1) } } $set(t) { var e; this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1) } } const { window: T } = O; function j(t, e, n) { const o = t.slice(); return o[16] = e[n], o[17] = e, o[18] = n, o } function U(t, e, n) { const o = t.slice(); return o[16] = e[n], o[19] = e, o[18] = n, o } function X(t, e) { let n, r, c, i, s, A, m, b, w, y, $, k = e[18]; function v(...t) { return e[9](e[16], ...t) } function C() { return e[10](e[16]) } const E = () => e[11](n, k), _ = () => e[11](null, k); return { key: t, first: null, c() { n = d("button"), r = d("img"), i = g(), s = d("p"), s.textContent = "New tab", A = g(), m = d("button"), m.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>', b = g(), h(r, "class", "favicon"), h(r, "alt", "new tab icon"), l(r.src, c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO2ZwWrCQBRFj0KC/oe/2NpV0U9w1ZX+Qb+i3Xdf/ZFK4ElgCsNAMDOaPIP3wNvlJfdyJ1ncgBBCiIFYAlvgBDSAjTxNePYmaMkW/+0g2jqm1bLIMbB9ANGWzHuOgVO0+AJUV65fAZ/JA/fAnHIq4DW632/Ocnzm65478yD6nibq5J3oTSwihxnwkewfbjRhJVpKDXQlUTJn4MfDQFcS95jRDPwnsQP+pmrgVqrkKzQ5A+lXaJIGWmTAG9MRcsaUgDOmBJwxJeCMKQFnTAk4Y0rAGXvKBJqCYmsI6tJiK64W104mauCttFrcDNDpjFruLh+sXv/KrdcJC63ro+MPjmPQkC1eCCEEfbgAuJ68dbQb+kgAAAAASUVORK5CYII=") || h(r, "src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO2ZwWrCQBRFj0KC/oe/2NpV0U9w1ZX+Qb+i3Xdf/ZFK4ElgCsNAMDOaPIP3wNvlJfdyJ1ncgBBCiIFYAlvgBDSAjTxNePYmaMkW/+0g2jqm1bLIMbB9ANGWzHuOgVO0+AJUV65fAZ/JA/fAnHIq4DW632/Ocnzm65478yD6nibq5J3oTSwihxnwkewfbjRhJVpKDXQlUTJn4MfDQFcS95jRDPwnsQP+pmrgVqrkKzQ5A+lXaJIGWmTAG9MRcsaUgDOmBJwxJeCMKQFnTAk4Y0rAGXvKBJqCYmsI6tJiK64W104mauCttFrcDNDpjFruLh+sXv/KrdcJC63ro+MPjmPQkC1eCCEEfbgAuJ68dbQb+kgAAAAASUVORK5CYII="), h(m, "class", "tabclose"), h(n, "class", "tab"), h(n, "id", w = "tab" + e[16]), this.first = n }, m(t, e) { u(t, n, e), a(n, r), a(n, i), a(n, s), a(n, A), a(n, m), a(n, b), E(), y || ($ = [p(m, "click", v), p(n, "click", C)], y = !0) }, p(t, o) { e = t, 1 & o && w !== (w = "tab" + e[16]) && h(n, "id", w), k !== e[18] && (_(), k = e[18], E()) }, d(t) { t && f(n), _(), y = !1, o($) } } } function q(t, e) { let n, o, r, c = e[18]; const i = () => e[15](n, c), s = () => e[15](null, c); return { key: t, first: null, c() { n = d("iframe"), h(n, "id", o = e[16]), h(n, "title", "iframe"), l(n.src, r = "") || h(n, "src", ""), this.first = n }, m(t, e) { u(t, n, e), i() }, p(t, r) { e = t, 1 & r && o !== (o = e[16]) && h(n, "id", o), c !== e[18] && (s(), c = e[18], i()) }, d(t) { t && f(n), s() } } } function L(e) { let n, r, c, i, s, l, b, w, y, $, k, v, C, E, _, x, J, M = [], B = new Map, D = [], O = new Map, N = e[0]; const Q = t => t[16]; for (let t = 0; t < N.length; t += 1) { let n = U(e, N, t), o = Q(n); B.set(o, M[t] = X(o, n)) } let S = e[0]; const L = t => t[16]; for (let t = 0; t < S.length; t += 1) { let n = j(e, S, t), o = L(n); O.set(o, D[t] = q(o, n)) } return { c() { n = d("div"), r = d("div"), c = d("div"); for (let t = 0; t < M.length; t += 1)M[t].c(); i = g(), s = d("div"), l = d("button"), l.innerHTML = '<i class="fa-brands fa-discord"></i>', b = g(), w = d("button"), w.innerHTML = '<i class="fa-solid fa-gear"></i>', y = g(), $ = d("button"), $.innerHTML = '<i class="fa-solid fa-plus"></i>', k = g(), v = d("form"), C = d("input"), E = g(); for (let t = 0; t < D.length; t += 1)D[t].c(); _ = A(""), h(c, "id", "tabs"), h(l, "onclick", "go('https://discord.gg/goabyss/');"), h(w, "id", "settingsbutton"), h($, "id", "newtabbutton"), h(s, "id", "settingsandnewtab"), h(r, "id", "tabsandmore"), h(C, "placeholder", "Search or type a URL"), h(C, "type", "text"), h(v, "id", "urlbar"), h(n, "id", "topbar") }, m(t, o) { u(t, n, o), a(n, r), a(r, c); for (let t = 0; t < M.length; t += 1)M[t].m(c, null); a(r, i), a(r, s), a(s, l), a(s, b), a(s, w), a(s, y), a(s, $), a(n, k), a(n, v), a(v, C), m(C, e[1]), u(t, E, o); for (let e = 0; e < D.length; e += 1)D[e].m(t, o); var f; u(t, _, o), x || (J = [p(T, "load", e[8]), p($, "click", e[12]), p(C, "input", e[13]), p(v, "submit", (f = e[14], function (t) { return t.preventDefault(), f.call(this, t) }))], x = !0) }, p(t, [e]) { 187 & e && (N = t[0], M = K(M, e, Q, 1, t, N, B, c, I, X, null, U)), 2 & e && C.value !== t[1] && m(C, t[1]), 33 & e && (S = t[0], D = K(D, e, L, 1, t, S, O, _.parentNode, I, q, _, j)) }, i: t, o: t, d(t) { t && f(n); for (let t = 0; t < M.length; t += 1)M[t].d(); t && f(E); for (let e = 0; e < D.length; e += 1)D[e].d(t); t && f(_), x = !1, o(J) } } } function W(t, e, n) { let o, r = [], c = 1, i = []; function s(t) { let e = t.trim(); !function (t = "") { return !!(/^http(s?):\/\//.test(t) || t.includes(".") && " " !== t.substr(0, 1)) }(e) ? e = "https://www.google.com/search?q=" + e : e.startsWith("https://") || e.startsWith("http://") || (e = "https://" + e); let r = document.querySelector("iframe.active"); e = __uv$config.encodeUrl(e), r.style.display = "block", r.src = "/service/" + e, n(1, o = __uv$config.decodeUrl(e)) } function l(t) { r.splice(r.indexOf(t), 1), n(0, r), i.splice(i.indexOf(t), 1), n(3, i), document.getElementById("tab" + i.slice(-1)[0]).click() } let a = [], u = []; return [r, o, c, i, a, u, s, l, () => { document.querySelector("#newtabbutton").click(), window.navigator.serviceWorker.register("./sw.js", { scope: __uv$config.prefix }) }, (t, e) => { e.stopPropagation(), l(t) }, t => { i.indexOf(t) > -1 && i.splice(i.indexOf(t), 1), n(3, i[i.length] = t, i); let e = document.querySelector("#tab" + t), r = document.getElementById(t); a.forEach((t => { t.classList = "tab" })), u.forEach((t => { t.classList = "", t.style.display = "none" })), e.classList.add("active"), r.classList.add("active"), "" !== r.src ? r.style.display = "block" : r.style.display = "none"; let c = r.src.split(__uv$config.prefix)[1]; n(1, o = __uv$config.decodeUrl(c)) }, function (t, e) { y[t ? "unshift" : "push"]((() => { a[e] = t, n(4, a) })) }, () => { let t = c, e = [...r, t]; n(0, r = e), n(2, c += 1), function e() { null == document.querySelector("#tab" + t) ? window.setTimeout(e, 50) : (document.querySelector("#tab" + t).click(), s("https://google.com")) }() }, function () { o = this.value, n(1, o) }, () => s(o), function (t, e) { y[t ? "unshift" : "push"]((() => { u[e] = t, n(5, u) })) }] } return new class extends S { constructor(t) { super(), Q(this, t, W, L, c, {}) } }({ target: document.body }) }();
//# sourceMappingURL=bundle.js.map
