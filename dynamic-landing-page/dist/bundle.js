! function(e) {
    var t = {};

    function n(o) { if (t[o]) return t[o].exports; var r = t[o] = { i: o, l: !1, exports: {} }; return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports }
    n.m = e, n.c = t, n.d = function(e, t, o) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) { return e[t] }.bind(null, r));
        return o
    }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    n.r(t);
    n(1);
    console.log("Hello, SASS"), console.log("Hello, HTML");
    const o = document.querySelector(".temp"),
        r = (document.querySelector(".feels-like"), document.querySelector(".precipitation")),
        c = document.querySelector(".city"),
        a = document.querySelector(".weather__wrapper");
    document.querySelector(".weather__icon");
    let l = !1;
    const i = () => {
        let e = c.textContent;
        0 == e && (e = "London"), console.log("city: ", e);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&lang=en&units=metric&appid=5b58aee62c41eb64fcab16edce2e5cc1`).then(e => e.json()).then(e => {
            window.data = e, console.log(e), 200 !== e.cod && (console.log("City not found"), x.classList.add("block"), localStorage.setItem("usersСity", "London"));
            let t = e.weather[0].icon;
            a.style.backgroundImage = `url(img/icons/${t}.jpg`, r.textContent = e.weather[0].description, o.textContent = window.data.main.temp.toFixed(1) + " °C"
        })
    };
    const u = document.querySelector(".time"),
        s = document.querySelector(".date");
    let d = !1;

    function m(e) { return (parseInt(e, 10) < 10 ? "0" : "") + e }

    function g(e) { 13 != e.which && 13 != e.keyCode && "blur" != e.type || (0 == c.textContent ? (c.textContent = localStorage.getItem("usersСity").trim(), localStorage.setItem("usersСity", e.target.textContent)) : (localStorage.setItem("usersСity", e.target.textContent), c.blur())), 13 != e.which && 13 != e.keyCode && "blur" != e.type || (c.blur(), i()) }
    const y = document.querySelector(".name");

    function f(e) { 13 != e.which && 13 != e.keyCode && "blur" != e.type || (0 == y.textContent ? (y.textContent = localStorage.getItem("name").trim(), localStorage.setItem("name", e.target.textContent)) : (localStorage.setItem("name", e.target.textContent), y.blur())) }
    const b = document.querySelector(".focus");

    function p(e) { 13 != e.which && 13 != e.keyCode && "blur" != e.type || (0 == b.textContent ? (b.textContent = localStorage.getItem("focus").trim(), localStorage.setItem("focus", e.target.textContent)) : (localStorage.setItem("focus", e.target.textContent), b.blur())) }

    function S(e) {
        const t = e.target;
        console.log(t), "city" !== t.className && "name" !== t.className && "focus" !== t.className || (t.textContent = "")
    }
    const x = document.querySelector(".modal"),
        C = x.querySelector(".modal__button"),
        k = x.querySelector(".modal__button-close"),
        v = () => { x.classList.remove("block"), c.textContent = "London", i() };
    document.addEventListener("keydown", e => { 27 === e.keyCode && (x.classList.remove("block"), c.textContent = "London", i()) }), c.addEventListener("keypress", g), c.addEventListener("blur", g), c.addEventListener("click", S), u.addEventListener("click", (function() { d = !d })), o.addEventListener("click", (function() { l ? (o.textContent = "Feels like: " + window.data.main.feels_like.toFixed(1) + " °C", l = !1) : (o.textContent = window.data.main.temp.toFixed(1) + " °C", l = !0) })), y.addEventListener("keypress", f), y.addEventListener("blur", f), y.addEventListener("click", S), b.addEventListener("keypress", p), b.addEventListener("blur", p), b.addEventListener("click", S), k.addEventListener("click", v), C.addEventListener("click", v), 0 == localStorage.getItem("usersСity") ? c.textContent = "[Enter Сity]" : c.textContent = localStorage.getItem("usersСity"), i(),
        function e() {
            let t = new Date,
                n = t.getHours(),
                o = t.getMinutes(),
                r = t.getSeconds();
            const c = n >= 12 ? "PM" : "AM";
            n = d ? n % 12 || 12 : n % 24 || 0, u.innerHTML = `${n}:${m(o)}:${m(r)}\n    ${d?c:""}`, setTimeout(e, 1e3)
        }(),
        function() {
            let e = (new Date).toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
            s.innerText = "" + e, console.log(e)
        }(),
        function() {
            const e = document.querySelector(".greeting");
            let t, n = (new Date).getHours();
            switch (!0) {
                case n < 4:
                    e.textContent = "Good Night, ", t = "night";
                    break;
                case n < 12:
                    e.textContent = "Good Morning, ", t = "morning";
                    break;
                case n < 17:
                    e.textContent = "Good Afternoon, ", t = "day";
                    break;
                case n < 24:
                    e.textContent = "Good Evening, ", t = "evening";
                    break;
                default:
                    console.log(n)
            }
            document.body.style.backgroundImage = `url(img/background/${t}.jpg)`
        }(), 0 == localStorage.getItem("name") ? y.textContent = "[Enter Name]" : y.textContent = localStorage.getItem("name"), 0 == localStorage.getItem("focus") ? b.textContent = "[Enter Focus]" : b.textContent = localStorage.getItem("focus")
}, function(e, t) {}]);