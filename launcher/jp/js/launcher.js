var ___ga_uaid = "UA-82931804-1";

function trackPageView(e, E) {
    "use strict";
    e = String(e), E = String(E);
    try { ga("send", "pageview", { page: e, title: E }) }
    catch (e) { }
}

function trackEvent(e, E, t, r) {
    "use strict";
    e = String(e),
        E = String(E),
        t = String(t),
        r = isNaN(r) ? null : r;
    try { ga("send", "event", e, E, t, r) }
    catch (e) { }
}

function CustomScroll(e) {
    "use strict";
    this.element = e,
        this.setScrollPx(18),
        this.init()
} !function () {
    "use strict";

    var e, E, t, r, a, _; ___ga_uaid && (e = window, E = document, t = "script", r = "ga", e.GoogleAnalyticsObject = r, e.ga = e.ga ||
        function () { (e.ga.q = e.ga.q || []).push(arguments) }, e.ga.l = 1 * new Date,
        a = E.createElement(t),
        _ = E.getElementsByTagName(t)[0], a.async = 1, a.src = "http://www.google-analytics.com/analytics.js",
        _.parentNode.insertBefore(a, _), ga("create",
            ___ga_uaid, "auto", { allowLinker: !0 }), ga("require", "linkid", "linkid.js"), ga("require", "displayfeatures"), ga("require", "linker"), ga("send", "pageview"))
}(),

    CustomScroll.prototype.clear = function (e) {
        "use strict";
        this.element.off("mousewheel"),
            this.element.off("scroll"),
            this.element.off("keydown"),
            this.sbox && (this.sbar && (this.sbar.off("mousedown"),
                this.sbar.remove(),
                this.sbar = null),
                this.sbase && (this.sbase.off("mouseup"),
                    this.sbase.remove(),
                    this.sbase = null),
                this.sbox.remove(),
                this.sbox = null), e || this.scrollV(0)
    },

    CustomScroll.prototype.setScrollPx = function (e) { "use strict"; this.speed = -1 * e },

    CustomScroll.prototype.hide = function (e) { "use strict"; this.sbox && (e = e || 100, this.sbox.fadeOut(e)) },

    CustomScroll.prototype.show = function (e) { "use strict"; this.sbox && (e = e || 200, this.sbox.fadeIn(e)) },

    CustomScroll.prototype.updateElement = function (e) {
        "use strict";
        if (this.height = this.element.innerHeight(), this.maxScroll = this.getMaxScroll(), e || this.scrollV(0), 0 < this.maxScroll) if (this.sbox) {
            if (this.slaneHei = this.height - 4, this.sbox) { this.sbox.css("height", this.slaneHei + 2 + "px"); var E = $(this.element.offsetParent()[0]).offset(), t = this.element.offset(); this.sbox.css("left", t.left - E.left + this.element.innerWidth() - 11 + "px"), this.sbox.css("top", t.top - E.top + 1 + "px") } this.sbar && (this.sbarHei = Math.max(20, this.slaneHei * (this.height / (this.height + this.maxScroll))), this.sbarMaxY = this.slaneHei - this.sbarHei - 2, this.setScrollPx(Math.max(18, Math.min(30, this.sbarMaxY / 10))), this.sbar.css("height", this.sbarHei + "px"))
        }
        else this.initScrollBar();
        else this.sbox && (this.sbar && (this.sbar.off("mousedown"), this.sbar.remove(), this.sbar = null), this.sbase && (this.sbase.off("mouseup"), this.sbase.remove(), this.sbase = null), this.sbox.remove(), this.sbox = null); this.onScroll()
    },

    CustomScroll.prototype.initScrollBar = function () { "use strict"; var a = this; this.slaneHei = this.height - 4, this.sbox = $('<div class="scroll_bar_box"></div>'), this.sbox.css("height", this.slaneHei + 2 + "px"); var e = $(this.element.offsetParent()[0]).offset(), E = this.element.offset(); this.sbox.css("left", E.left - e.left + this.element.innerWidth() - 11 + "px"), this.sbox.css("top", E.top - e.top + 1 + "px"), this.sbox.attr("unselectable", "on"), this.sbox.attr("onSelectStart", "return false;"), this.sbase = $('<div class="scroll_bar_box_base"></div>'), this.sbase.attr("unselectable", "on"), this.sbase.attr("onSelectStart", "return false;"), this.sbox.append(this.sbase), this.sbar = $('<div class="scroll_bar_box_body"></div>'), this.sbarHei = Math.max(20, this.slaneHei * (this.height / (this.height + this.maxScroll))), this.sbarMaxY = this.slaneHei - this.sbarHei - 2, this.setScrollPx(Math.max(18, Math.min(30, this.sbarMaxY / 10))), this.sbar.css("height", this.sbarHei + "px"), this.sbar.attr("unselectable", "on"), this.sbar.attr("onSelectStart", "return false;"), this.sbox.append(this.sbar), this.onScroll(), this.sbox.insertAfter(this.element), this.sbar.on("mousedown", function (e) { return a.startMY = e.clientY, a.startBY = a.sbarTop, $(document).on("mousemove", function (e) { var E = Math.max(0, Math.min(a.sbarMaxY, a.startBY - (a.startMY - e.clientY))) / a.sbarMaxY; a.scrollV(a.maxScroll * E) }), a.sbar.addClass("active"), !1 }), this.sbase.on("mouseup", function (e) { var E, t = e.offsetY; t < a.sbarTop ? E = Math.max(0, Math.min(a.sbarMaxY, a.sbarTop - a.sbarHei)) : a.sbarTop + a.sbarHei < t && (E = Math.max(0, Math.min(a.sbarMaxY, a.sbarTop + a.sbarHei))); var r = E / a.sbarMaxY; a.scrollV(a.maxScroll * r) }), $(document).mouseup(function () { $(document).off("mousemove"); try { a.sbar.removeClass("active") } catch (e) { } return !0 }) },

    CustomScroll.prototype.init = function (e) { "use strict"; this.height = this.element.innerHeight(), this.maxScroll = this.getMaxScroll(), this.clear(e); var a = this; this.element.on("scroll", function () { a.onScroll() }), this.element.on("mousewheel", function (e, E, t, r) { r /= Math.abs(r), a.scrollAddV(r * a.speed), a.onScroll() }), this.element.attr("tabindex", "-1"), this.element.css("outline", 0), this.element.on("keydown", function (e) { var E, t = !1; switch (e.which) { case 36: a.scrollV(0), a.onScroll(); break; case 35: a.scrollV(a.maxScroll), a.onScroll(); break; case 38: a.scrollAddV(1 * a.speed * .5), a.onScroll(); break; case 40: a.scrollAddV(-1 * a.speed * .5), a.onScroll(); break; case 33: E = Math.max(0, Math.min(a.sbarMaxY, a.sbarTop - a.sbarHei)) / a.sbarMaxY, a.scrollV(a.maxScroll * E), a.onScroll(); break; case 34: E = Math.max(0, Math.min(a.sbarMaxY, a.sbarTop + a.sbarHei)) / a.sbarMaxY, a.scrollV(a.maxScroll * E), a.onScroll(); break; default: t = !0 }return t }), 0 < this.maxScroll && this.initScrollBar(), e && a.onScroll() },

    CustomScroll.prototype.onScroll = function () { "use strict"; if (this.sbox) { var e = this.scrollV(); this.sbarTop = this.sbarMaxY * (e / this.maxScroll) + 2, this.sbar.css("top", this.sbarTop + "px") } },

    CustomScroll.prototype.getMaxScroll = function () { "use strict"; return this.element.get(0).scrollHeight - this.element.get(0).offsetHeight },

    CustomScroll.prototype.scrollAddV = function (e) { "use strict"; return this.scrollV(this.scrollV() + e) },

    CustomScroll.prototype.scrollV = function (e) { "use strict"; return isNaN(e) || (e = Math.max(0, Math.min(e, this.maxScroll)), this.element.scrollTop(e)), this.element.scrollTop() }; var _EUCS = {};

function duc(e) {
    "use strict";
    return decodeURIComponent(_EUCS[e])
} !function () {
    "use strict";
    _EUCS.xhrspr="%3C!--%23%23%23content%23%23%23--%3E",
    _EUCS.dmsrvs="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3E%3Cserver_groups%3E%3Cgroup%20nam%3D%22%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E2%91%A0%22%20cog%3D%22pre%22%20%2F%3E%3C%2Fserver_groups%3E",
    _EUCS.anch="%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%92%E6%96%B0%E8%A6%8F%E4%BD%9C%E6%88%90%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%3Cbr%3E%E3%80%8C%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%80%8D%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%92%E6%8A%BC%E3%81%97%E3%81%A6%E3%80%81%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%92%E4%BD%9C%E6%88%90%E3%81%97%E3%81%BE%E3%81%97%E3%82%87%E3%81%86%E3%80%82",
    _EUCS.cwpt="%E7%8F%BE%E5%9C%A8%E3%81%AE%E8%A3%85%E5%82%99%E6%AD%A6%E5%99%A8%E7%A8%AE",
    _EUCS.pcst="%E5%89%8D%E5%9B%9E%E6%8E%A5%E7%B6%9A",
    _EUCS.afac="%E4%B8%8D%E6%AD%A3%E3%81%AA%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%A7%E3%81%99%E3%80%82",
    _EUCS.afde="%E5%AF%BE%E5%BF%9C%E3%81%97%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E6%96%87%E5%AD%97%E3%82%A8%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%A7%E3%81%99%E3%80%82",
    _EUCS.afnsrv="%e3%82%b5%e3%83%bc%e3%83%90%e3%83%bc%e3%82%92%e9%81%b8%e6%8a%9e%e3%81%97%e3%81%a6%e3%81%8f%e3%81%a0%e3%81%95%e3%81%84%e3%80%82",
    _EUCS.afipe="COG%20ID%E3%81%BE%E3%81%9F%E3%81%AF%E3%83%91%E3%82%B9%E3%83%AF%E3%83%BC%E3%83%89%E3%81%8C%E9%81%95%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
    _EUCS.af102="%E3%81%9F%E3%81%A0%E3%81%84%E3%81%BE%E3%82%B5%E3%83%BC%E3%83%90%E3%81%8C%E8%BE%BC%E3%81%BF%E5%90%88%E3%81%A3%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%3Cbr%3E%E7%94%B3%E3%81%97%E8%A8%B3%E3%81%82%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93%E3%81%8C%E3%81%97%E3%81%B0%E3%82%89%E3%81%8F%E3%81%8A%E5%BE%85%E3%81%A1%E4%B8%8B%E3%81%95%E3%81%84%E3%80%82",
    _EUCS.af301="%E7%8F%BE%E5%9C%A8%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E8%AA%8D%E8%A8%BC%E3%82%92%E4%B8%80%E6%99%82%E5%81%9C%E6%AD%A2%E3%81%97%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82",
    _EUCS.af304="%E3%83%91%E3%82%B9%E3%83%AF%E3%83%BC%E3%83%89%E3%82%92%E9%80%A3%E7%B6%9A%E3%81%97%E3%81%A6%E9%96%93%E9%81%95%E3%82%8F%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%3Cbr%3E%E8%AA%8D%E8%A8%BC%E3%82%92%E4%B8%80%E6%99%82%E5%81%9C%E6%AD%A2%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%3Cbr%3E%EF%BC%91%E6%99%82%E9%96%93%E3%81%BB%E3%81%A9%E5%BE%85%E3%81%A3%E3%81%A6%E3%81%8B%E3%82%89%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%82%92%E3%81%8A%E9%A1%98%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82",
    _EUCS.aferr="%E4%B8%8D%E6%98%8E%E3%81%AA%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%8C%E7%99%BA%E7%94%9F%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
    _EUCS.af321="%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%82%AB%E3%83%BC%E3%83%89%E3%83%87%E3%83%BC%E3%82%BF%E3%81%8C%E9%81%95%E3%81%84%E3%81%BE%E3%81%99%E3%80%82",
    _EUCS.afipl="%EF%BC%A9%EF%BC%A4%E3%80%81%E3%83%91%E3%82%B9%E3%83%AF%E3%83%BC%E3%83%89%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%9F%E5%BE%8C%E3%80%81%3Cbr%3E%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%92%E9%81%B8%E6%8A%9E%E3%81%97%E3%81%A6%E3%80%8C%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%80%8D%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%92%E6%8A%BC%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82",
    _EUCS.uflm0="%E7%8F%BE%E5%9C%A8%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%83%A1%E3%83%B3%E3%83%86%E3%83%8A%E3%83%B3%E3%82%B9%E4%B8%AD%E3%81%AE%E3%81%9F%E3%82%81%E3%80%81%E8%B5%B7%E5%8B%95%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%9B%E3%82%93%E3%80%82%3Cbr%3E%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E9%96%8B%E5%A7%8B%E3%81%BE%E3%81%A7%E4%BB%8A%E3%81%97%E3%81%B0%E3%82%89%E3%81%8F%E3%81%8A%E5%BE%85%E3%81%A1%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82",
    _EUCS.dmb0="%E4%BB%8A%E3%81%99%E3%81%90%E7%99%BB%E9%8C%B2",
    _EUCS.dmb1="%E5%86%8D%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3",
    _EUCS.dmb2="%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B",
    _EUCS.dmb3="%E5%89%8A%E9%99%A4%E3%81%97%E3%81%AA%E3%81%84",
    _EUCS.dmb4="%E9%96%89%E3%81%98%E3%82%8B",
    _EUCS.dmb5="%E3%81%AF%E3%81%84",
    _EUCS.dmb6="%E3%81%84%E3%81%84%E3%81%88",
    _EUCS.dmb7="%E4%BB%8A%E3%81%99%E3%81%90%E8%B3%BC%E5%85%A5",
    _EUCS.dmb8="%E8%B3%BC%E5%85%A5%E3%81%97%E3%81%AA%E3%81%84",
    _EUCS.dmb9="%E8%B3%BC%E5%85%A5%E3%81%97%E3%81%AA%E3%81%84%E3%81%A7%E7%B6%9A%E8%A1%8C",
    _EUCS.dmt0="%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%B3%E3%83%BC%E3%82%B9%E3%81%AE%E7%99%BB%E9%8C%B2%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%A7%E3%81%99%E3%80%82%3Cbr%3E%E4%B8%8B%E8%A8%98%E3%82%88%E3%82%8A%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%B3%E3%83%BC%E3%82%B9%E3%81%AE%E7%99%BB%E9%8C%B2%E3%82%92%E8%A1%8C%E3%81%A3%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%3Cbr%3E%EF%BC%88%E7%84%A1%E6%96%99%E3%81%A7%E7%99%BB%E9%8C%B2%E3%82%92%E8%A1%8C%E3%81%88%E3%81%BE%E3%81%99%EF%BC%89",
    _EUCS.dmt1="%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB%E3%82%B3%E3%83%BC%E3%82%B9%E3%81%AE%E7%99%BB%E9%8C%B2%E3%81%8C%E5%AE%8C%E4%BA%86%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%82%89%E3%80%81%3Cbr%3E%E3%81%97%E3%81%B0%E3%82%89%E3%81%8F%E6%99%82%E9%96%93%E3%82%92%E7%BD%AE%E3%81%84%E3%81%A6%E3%81%8B%E3%82%89%3Cbr%3E%E4%B8%8B%E8%A8%98%E3%81%AE%E5%86%8D%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%92%E6%8A%BC%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82",
    _EUCS.dmca0="%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E8%BF%BD%E5%8A%A0%E6%A8%A9%E3%81%AE%E8%B3%BC%E5%85%A5%E3%82%92%E8%A1%8C%E3%81%AA%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%3Cbr%3E%E4%B8%8B%E8%A8%98%E3%81%AE%E4%BB%8A%E3%81%99%E3%81%90%E8%B3%BC%E5%85%A5%E3%82%92%E6%8A%BC%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%3Cbr%3E%EF%BC%88%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%81%8C%E9%96%8B%E3%81%8D%E3%81%BE%E3%81%99%EF%BC%89",
    _EUCS.dmca1="%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E8%BF%BD%E5%8A%A0%E6%A8%A9%E3%81%AE%E8%B3%BC%E5%85%A5%E3%81%8C%E5%AE%8C%E4%BA%86%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%82%89%E3%80%81%3Cbr%3E%E3%81%97%E3%81%B0%E3%82%89%E3%81%8F%E6%99%82%E9%96%93%E3%82%92%E7%BD%AE%E3%81%84%E3%81%A6%E3%81%8B%E3%82%89%3Cbr%3E%E4%B8%8B%E8%A8%98%E3%81%AE%E5%86%8D%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%92%E6%8A%BC%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82",
    _EUCS.dmcd0="%E6%9C%AC%E5%BD%93%E3%81%AB%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%3Cbr%3E",
    _EUCS.dmcd1="%3Cspan%20class%3D%22uid%22%3E%20(ID%3A",
    _EUCS.dmcd2=")%20%3C%2Fspan%3E%E3%82%92%E5%89%8A%E9%99%A4%E3%81%97%E3%81%BE%E3%81%99%E3%81%8B%EF%BC%9F%3Cbr%3E%3Cdiv%20class%3D%22sp%22%3E%3C%2Fdiv%3E",
    _EUCS.dmcd3="%3Cspan%20class%3D%22attention%22%3E%E5%89%8A%E9%99%A4%E3%81%97%E3%81%9F%E5%A0%B4%E5%90%88%E3%80%81%E7%8B%A9%E4%BA%BA%E7%94%B3%E8%AB%8B%E5%8F%AF%E8%83%BD%E7%8A%B6%E6%85%8B%E3%81%AB%E3%81%AF%E6%88%BB%E3%82%89%E3%81%9A%3Cbr%3E%E5%AE%8C%E5%85%A8%E3%81%AB%E5%89%8A%E9%99%A4%E3%81%95%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82%3C%2Fspan%3E",
    _EUCS.dmcd4="%3Cspan%20class%3D%22notes%22%3E%E3%80%90%E3%81%94%E6%B3%A8%E6%84%8F%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%EF%BC%81%E3%80%91%3Cbr%3E%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%92%E5%89%8A%E9%99%A4%E3%81%97%E3%81%A6%E3%82%82%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E8%BF%BD%E5%8A%A0%E6%A8%A9%E3%81%AB%E3%81%AF%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93%E3%80%82%3Cbr%3E%E5%86%8D%E5%BA%A6%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B%E3%81%AB%E3%81%AF%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E8%BF%BD%E5%8A%A0%E6%A8%A9%E3%82%92%3Cbr%3E%E6%96%B0%E3%81%9F%E3%81%AB%E8%B3%BC%E5%85%A5%E3%81%99%E3%82%8B%E5%BF%85%E8%A6%81%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%3C%2Fspan%3E",
    _EUCS.dmcd4_2="%3Cspan%20class%3D%22notes%22%3E%E6%9C%80%E5%BE%8C%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%92%E5%89%8A%E9%99%A4%E3%81%97%E3%82%88%E3%81%86%E3%81%A8%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%3Cbr%3E%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%92%E5%89%8A%E9%99%A4%E3%81%97%E3%81%9F%E5%A0%B4%E5%90%88%E3%81%AF%E3%80%81%3Cbr%3E%E5%9F%BA%E6%9C%AC%E5%A5%91%E7%B4%84%E4%BF%9D%E8%A8%BC%E5%88%86%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%92%EF%BC%91%E4%BD%93%E8%B4%88%E5%91%88%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%3C%2Fspan%3E",
    _EUCS.dmcd5="%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%3Cbr%3E",
    _EUCS.dmcd6=")%20%3C%2Fspan%3E%E3%82%92%E5%89%8A%E9%99%A4%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%3Cbr%3E",
    _EUCS.dmcd7="%3Cspan%20class%3D%22attention%22%3E%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%81%AEID%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%A6%3Cbr%3E%5B%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B%5D%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%92%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%3C%2Fspan%3E%3Cbr%3E%3Cdiv%20class%3D%22sp%22%3E%3C%2Fdiv%3E",
    _EUCS.dmcd8="%3Cform%20action%3D%22javascript%3Avoid(0)%3B%22%3E%3Cinput%20type%3D%22text%22%20border%3D%220%22%20align%3D%22left%22%20name%3D%22del_uid%22%20id%3D%22del_uid%22%3E%3C%2Fform%3E",
    _EUCS.dmcd9="%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%92%E5%89%8A%E9%99%A4%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%9B%E3%82%93%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82%3Cbr%3E%3Cdiv%20class%3D%22sp%22%3E%3C%2Fdiv%3E%3Cspan%20class%3D%22attention%22%3E%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%9F%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BCID%E3%81%A8%E5%85%A5%E5%8A%9B%E3%81%95%E3%82%8C%E3%81%9FID%E3%81%8C%E4%B8%80%E8%87%B4%E3%81%97%E3%81%BE%E3%81%9B%E3%82%93%E3%80%82%3C%2Fspan%3E",
    _EUCS.dmcd10=")%3Cbr%3E%E3%82%92%E5%89%8A%E9%99%A4%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%3Cbr%3E%E3%81%97%E3%81%B0%E3%82%89%E3%81%8F%E3%81%8A%E5%BE%85%E3%81%A1%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82",
    _EUCS.dmcd11="%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%81%AE%E5%89%8A%E9%99%A4%E3%81%AB%E5%A4%B1%E6%95%97%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%3Cbr%3E%E3%81%97%E3%81%B0%E3%82%89%E3%81%8F%E6%99%82%E9%96%93%E3%82%92%E7%BD%AE%E3%81%84%E3%81%A6%E3%81%8B%E3%82%89%E5%86%8D%E5%BA%A6%E5%AE%9F%E8%A1%8C%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82",
    _EUCS.dmcd12="%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%81%AE%E5%89%8A%E9%99%A4%E3%81%AB%E5%A4%B1%E6%95%97%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%3Cbr%3E%E5%85%A8%E3%81%A6%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%92%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B%E3%81%AB%E3%81%AF%3Cbr%3E7%E6%97%A5%E4%BB%A5%E4%B8%8A%E7%BD%AE%E3%81%84%E3%81%A6%E3%81%8B%E3%82%89%E5%86%8D%E5%BA%A6%E5%AE%9F%E8%A1%8C%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82",
    _EUCS.dmcd13="%3Cspan%20class%3D%22attention%22%3E%E5%9F%BA%E6%9C%AC%E5%A5%91%E7%B4%84%E4%BF%9D%E8%A8%BC%E5%88%86%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%81%AE%E8%B4%88%E5%91%88%3C%2Fspan%3E%3Cbr%3E%3Cspan%3E%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%81%8C%E5%89%8A%E9%99%A4%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%3Cbr%3E%E5%9F%BA%E6%9C%AC%E5%A5%91%E7%B4%84%E4%BF%9D%E8%A8%BC%E5%88%86%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%92%3Cbr%3E%EF%BC%91%E4%BD%93%E8%B4%88%E5%91%88%E3%81%97%E3%81%BE%E3%81%99%EF%BC%81%EF%BC%81%3C%2Fspan%3E%3Cbr%3E%3Cspan%20class%3D%22notes%22%3E%E2%80%BB%E3%81%93%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%92%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B%E3%81%AB%E3%81%AF%3Cbr%3E%E6%9C%AC%E6%97%A5%E3%81%8B%E3%82%897%E6%97%A5%E9%96%93%E3%81%AE%E6%9C%9F%E9%96%93%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%A8%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%3C%2Fspan%3E",
    _EUCS.dmcd14="%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%81%AE%E5%89%8A%E9%99%A4%E3%81%8C%3Cbr%3E%E5%AE%8C%E4%BA%86%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
    _EUCS.dmhl0="%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B3%E3%83%BC%E3%82%B9%E3%81%AE%E6%9C%89%E5%8A%B9%E6%9C%9F%E9%99%90%E3%81%8C%E5%88%87%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82%3Cbr%3E%E4%B8%8B%E8%A8%98%E3%82%88%E3%82%8A%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B3%E3%83%BC%E3%82%B9%E3%82%92%E8%B3%BC%E5%85%A5%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%3Cbr%3E%EF%BC%88%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%81%8C%E9%96%8B%E3%81%8D%E3%81%BE%E3%81%99%EF%BC%89",
    _EUCS.dmhl1="%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B3%E3%83%BC%E3%82%B9%E3%81%AE%E8%B3%BC%E5%85%A5%E3%81%8C%E5%AE%8C%E4%BA%86%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%82%89%E3%80%81%3Cbr%3E%E3%81%97%E3%81%B0%E3%82%89%E3%81%8F%E6%99%82%E9%96%93%E3%82%92%E7%BD%AE%E3%81%84%E3%81%A6%E3%81%8B%E3%82%89%3Cbr%3E%E4%B8%8B%E8%A8%98%E3%81%AE%E5%86%8D%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%92%E6%8A%BC%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82",
    _EUCS.dmgs0="%E9%81%B8%E6%8A%9E%E3%81%97%E3%81%9F%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%3Cbr%3E",
    _EUCS.dmgs1=")%3C%2Fspan%3E%3Cbr%3E%3Cbr%3E%E3%81%93%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%81%A7%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%92%E8%B5%B7%E5%8B%95%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%3Cbr%3E%E3%82%88%E3%82%8D%E3%81%97%E3%81%84%E3%81%A7%E3%81%99%E3%81%8B%EF%BC%9F",
    _EUCS.SIGN_EFAILED="%E8%AA%8D%E8%A8%BC%E3%82%B5%E3%83%BC%E3%83%90%E3%81%A8%E3%81%AE%E9%80%9A%E4%BF%A1%E3%81%AB%E5%A4%B1%E6%95%97%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F",
    _EUCS.SIGN_EILLEGAL="%E4%B8%8D%E6%AD%A3%E3%81%AA%E5%85%A5%E5%8A%9B%E3%81%AB%E3%82%88%E3%82%8A%E8%AA%8D%E8%A8%BC%E3%81%8C%E4%B8%AD%E6%AD%A2%E3%81%95%E3%82%8C%E3%81%BE%E3%81%97%E3%81%9F",
    _EUCS.SIGN_EALERT="%E8%AA%8D%E8%A8%BC%E3%82%B5%E3%83%BC%E3%83%90%E3%81%AE%E5%87%A6%E7%90%86%E3%81%AB%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%8C%E7%99%BA%E7%94%9F%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F",
    _EUCS.SIGN_EALERT_COOP="COG%e9%80%a3%e6%90%ba%e3%81%8c%e5%ae%8c%e4%ba%86%e3%81%97%e3%81%a6%e3%81%84%e3%81%aa%e3%81%84%e3%82%a2%e3%82%ab%e3%82%a6%e3%83%b3%e3%83%88%e3%80%81%3cbr%3e%e3%81%be%e3%81%9f%e3%81%af%e3%81%93%e3%81%ae%e3%82%a2%e3%82%ab%e3%82%a6%e3%83%b3%e3%83%88%e3%81%a7%e3%83%ad%e3%82%b0%e3%82%a4%e3%83%b3%e3%81%a7%e3%81%8d%e3%81%aa%e3%81%84%e3%82%b5%e3%83%bc%e3%83%90%e3%83%bc%e3%82%92%e9%81%b8%e6%8a%9e%e3%81%97%e3%81%a6%e3%81%84%e3%81%be%e3%81%99%e3%80%82",
    _EUCS.SIGN_EABORT="%E8%AA%8D%E8%A8%BC%E3%82%B5%E3%83%BC%E3%83%90%E5%86%85%E9%83%A8%E5%87%A6%E7%90%86%E3%81%8C%E7%95%B0%E5%B8%B8%E7%B5%82%E4%BA%86%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F",
    _EUCS.SIGN_ERESPONSE="%E8%AA%8D%E8%A8%BC%E3%83%AC%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B9%E3%81%AE%E7%95%B0%E5%B8%B8%E3%81%AB%E3%82%88%E3%82%8A%E5%87%A6%E7%90%86%E3%81%8C%E7%B5%82%E4%BA%86%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F",
    _EUCS.SIGN_EDATABASE="%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%81%B8%E3%81%AE%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E5%A4%B1%E6%95%97%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F",
    _EUCS.SIGN_ESUSPEND="%E3%81%93%E3%81%AE%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%AF%E4%B8%80%E6%99%82%E5%81%9C%E6%AD%A2%E4%B8%AD%E3%81%A7%E3%81%99%E3%80%82%E8%A9%B3%E7%B4%B0%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AF%E3%83%A1%E3%83%BC%E3%83%AB%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84",
    _EUCS.SIGN_EELIMINATE="%E3%81%93%E3%81%AE%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%AF%E6%B0%B8%E4%B9%85%E5%81%9C%E6%AD%A2%E4%B8%AD%E3%81%A7%E3%81%99%E3%80%82%E8%A9%B3%E7%B4%B0%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AF%E3%83%A1%E3%83%BC%E3%83%AB%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84",_EUCS.SIGN_ECLOSE_EX="%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E5%87%A6%E7%90%86%E3%81%8C%E5%A4%A7%E5%A4%89%E6%B7%B7%E9%9B%91%E3%81%97%E3%81%A6%E3%81%8A%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82%3Cbr%3E%E3%81%97%E3%81%B0%E3%82%89%E3%81%8F%E3%81%9F%E3%81%A3%E3%81%A6%E3%81%8B%E3%82%89%E5%86%8D%E5%BA%A6%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%82%92%E3%81%8A%E9%A1%98%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99",
    _EUCS.SIGN_EIPADDR="%E3%81%8A%E5%AE%A2%E6%A7%98%E3%81%AE%E7%92%B0%E5%A2%83%E3%81%8B%E3%82%89%E3%81%AF%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%AB%E6%8E%A5%E7%B6%9A%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%9B%E3%82%93%E3%80%82%3Cbr%3E%E8%A9%B3%E7%B4%B0%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AF%E3%81%93%E3%81%AE%E3%82%A8%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E3%82%92%E3%81%8A%E6%9B%B8%E3%81%8D%E6%B7%BB%E3%81%88%E3%81%AE%E4%B8%8A%E3%80%81%3Cbr%3EMHF-%EF%BC%BA%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E7%AA%93%E5%8F%A3%E3%82%88%E3%82%8A%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84",
    _EUCS.SIGN_EOTHER="%EF%BC%A9%EF%BC%A4%E3%81%AE%E8%AA%8D%E8%A8%BC%E3%81%AB%E5%A4%B1%E6%95%97%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F",
    _EUCS.SIGN_EAPP="%E3%82%A2%E3%83%97%E3%83%AA%E5%86%85%E3%81%AE%E6%83%B3%E5%AE%9A%E3%81%97%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%A7%E8%AA%8D%E8%A8%BC%E3%81%AB%E5%A4%B1%E6%95%97%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82",
    _EUCS.SRV_MNT="%3Cspan%20class%3D%22attention%22%3E%E7%8F%BE%E5%9C%A8%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%83%A1%E3%83%B3%E3%83%86%E3%83%8A%E3%83%B3%E3%82%B9%E4%B8%AD%E3%81%AE%E3%81%9F%E3%82%81%E3%80%81%3Cbr%3E%20%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%9B%E3%82%93%E3%80%82%3C%2Fspan%3E%3Cbr%3E%3Cbr%3E%E3%83%A1%E3%83%B3%E3%83%86%E3%83%8A%E3%83%B3%E3%82%B9%E7%B5%82%E4%BA%86%E3%81%BE%E3%81%A7%E4%BB%8A%E3%81%97%E3%81%B0%E3%82%89%E3%81%8F%E3%81%8A%E5%BE%85%E3%81%A1%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%0A%0A"
}
    (); var _EXT_MODE = "launcher", _MODE_BRANCH = !1;

function extPreTry() { "use strict"; _EXT_MODE = "launcher" }

function extCatchE() { "use strict"; _EXT_MODE = "" }

function extCatchReturn(e) {
    "use strict";
    return extCatchE(), e
}

function DoGetMhfBootMode() {
    "use strict"; extPreTry();
    try {
        return window.external.getMhfBootMode()
    }
    catch (e) {
        return extCatchReturn("_MHF_NORMAL")
    }
}

function DoGetIniLastServerIndex() {
    "use strict"; extPreTry();
    try {
        return window.external.getIniLastServerIndex()
    }
    catch (e) {
        return extCatchReturn(0)
    }
}

function DoSetIniLastServerIndex(e) {
    "use strict";
    try {
        window.external.setIniLastServerIndex(e)
    }
    catch (e) { }
}

function DoGetServerListXml() {
    "use strict"; extPreTry();
    try {
        return window.external.getServerListXml()
    }
    catch (e) {
        return extCatchReturn(duc("dmsrvs"))
    }
}

function DoGetMhfMutexNumber() {
    "use strict"; extPreTry();
    try {
        return window.external.getMhfMutexNumber()
    }
    catch (e) {
        return extCatchReturn(0)
    }
}

function DoMinimizeWindow() {
    "use strict";
    DoPlaySound("IDR_WAV_OK");
    try {
        window.external.minimizeWindow()
    } catch (e) { }
}

function DoCloseWindow() {
    "use strict";
    DoPlaySound("IDR_WAV_OK");
    try {
        window.external.closeWindow()
    } catch (e) { }
}

function DoOpenMhlConfig() {
    "use strict";
    DoPlaySound("IDR_WAV_OK");
    try {
        window.external.openMhlConfig()
    } catch (e) { }
}

function DoRestartMhf() {
    "use strict";
    DoPlaySound("IDR_WAV_OK");
    try {
        window.external.restartMhf()
    } catch (e) { }
}

function DoOpenBrowser(e) {
    "use strict";
    try {
        window.external.openBrowser(e)
    } catch (e) { }
}

function DoBeginDrag(e) {
    "use strict";
    try {
        window.external.beginDrag(e)
    } catch (e) { }
}

function DoGetUserId() {
    "use strict";
    extPreTry();
    try {
        return window.external.getUserId() || ""
    } catch (e) {
        return extCatchReturn("")
    }
}

function DoGetPassword() {
    "use strict";
    extPreTry();
    try {
        return window.external.getPassword() || ""
    } catch (e) {
        return extCatchReturn("")
    }
}

function DoLoginCog(e, E, t) {
    "use strict";
    try {
        return window.external.loginCog(e, E, t)
    } catch (e) { }
}

function DoLoginHangame() {
    "use strict";
    try {
        window.external.loginHangame()
    } catch (e) { }
}

function DoLoginDmm() {
    "use strict";
    try {
        window.external.loginDmm()
    } catch (e) { }
}

function DoGetLastAuthResult() {
    "use strict";
    extPreTry();
    try {
        return window.external.getLastAuthResult()
    } catch (e) {
        return extCatchReturn("NULL")
    }
}

function DoGetSignResult() {
    "use strict";
    extPreTry();
    try {
        return window.external.getSignResult()
    } catch (e) {
        return extCatchReturn("SIGN_EFAILED")
    }
}

function DoStartUpdate() {
    "use strict";
    extPreTry();
    try {
        return false
    } catch (e) {
        return extCatchReturn(!0)
    }
}

function DoGetUpdatePercentageTotal() {
    "use strict";
    extPreTry();
    try {
        return window.external.getUpdatePercentageTotal()
    } catch (e) {
        return extCatchReturn(0)
    }
}

function DoGetUpdatePercentageFile() {
    "use strict";
    extPreTry();
    try {
        return window.external.getUpdatePercentageFile()
    } catch (e) {
        return extCatchReturn(0)
    }
}

function DoGetUpdateStatus() {
    "use strict";
    try {
        return String(window.external.getUpdateStatus())
    } catch (e) {
        return "UM_UPDATE_OK"
    }
}

function DoGetAccountRights() {
    "use strict";
    extPreTry();
    try {
        return window.external.getAccountRights()
    } catch (e) {
        return extCatchReturn("")
    }
}

function DoGetLauncherReturnCode() {
    "use strict";
    extPreTry();
    try {
        return String(window.external.getLauncherReturnCode())
    } catch (e) {
        return extCatchReturn("NULL")
    }
}

function DoExitLauncher() {
    "use strict";
    try {
        window.external.exitLauncher()
    } catch (e) { }
}

function DoCheckIsEnableSessionId() {
    "use strict";
    try {
        return window.external.isEnableSessionId()
    } catch (e) {
        return !0
    }
}

function DoGetCharacterInfo() {
    "use strict";
    extPreTry();
    try {
        return window.external.getCharacterInfo()
    } catch (e) {
        return extCatchReturn("")
    }
}

function DoDeleteCharacter(e) {
    "use strict";
    extPreTry();
    try {
        return window.external.deleteCharacter(e)
    } catch (e) {
        return extCatchReturn(!0)
    }
}

function DoSelectCharacter(e, E) {
    "use strict";
    try {
        window.external.selectCharacter(e, E)
    } catch (e) { }
}

function DoPlaySound(e) {
    "use strict";
    try { window.external.playSound(e) } catch (e) { }
}

function DoExtractLog(e) {
    "use strict";
    try {
        return window.external.extractLog(e)
    } catch (e) {
        return ""
    }
}

function DoDebugGetIniUserId() {
    "use strict";
    if (!_MODE_BRANCH)
        return "";
    try {
        return window.external.debugGetIniUserId() || ""
    } catch (e) {
        return ""
    }
}

function DoDebugGetIniPassword() {
    "use strict";
    if (!_MODE_BRANCH)
        return "";
    try {
        return window.external.debugGetIniPassword() || ""
    } catch (e) {
        return ""
    }
}

var _EXE_MUTEX = 0,
    _EVT_PHASE = "prepare",
    _STORAGE = {},
    _TRG_STORAGE_KEY = {},
    _HOSTS = {},
    _COG_MODE = !0,
    _NHN_MODE = !0,
    _IE_STATE = {},
    _CS_ELMS = {},
    _ABS_DOC = null,
    _IS_MODAL = !1;

function switchEvtPhase(e) { "use strict"; _EVT_PHASE = e }

function addEvent(e) {
    "use strict";
    trackEvent("launcher", _EVT_PHASE, e)
}

var _KEY_ACT_MODAL = function () { }, _KEY_ACT_DEF;

function resetKeyActDefMode() {
    "use strict";
    _KEY_ACT_DEF = function (e) {
        switch (e.which) {
            case 9:
                return !1
        }return !0
    }
}

function initScrollBar(e) {
    "use strict";
    var E = $(e);
    E.css("overflow", "hidden"), _CS_ELMS[e] = new CustomScroll(E)
}

function updateScrollBar(e, E) {
    "use strict";
    _CS_ELMS[e] ? _CS_ELMS[e].init(E) : initScrollBar(e)
}

function updateScrollBarElm(e, E) {
    "use strict";
    _CS_ELMS[e] && _CS_ELMS[e].updateElement(E)
}

function hideScrollBar(e, E) {
    "use strict";
    _CS_ELMS[e] && _CS_ELMS[e].hide(E)
}

function showScrollBar(e, E) {
    "use strict";
    _CS_ELMS[e] && _CS_ELMS[e].show(E)
}

function openDefBrowser(e) {
    "use strict";
    DoPlaySound("IDR_WAV_OK"), trackPageView(e, ""), DoOpenBrowser(e)
}

function getAbsPath(e, E) {
    "use strict";
    var t = (E = E || location.href).split("/");
    if (t.pop(), E = t.join("/") + "/", !_ABS_DOC) {
        var r = $('<iframe style="display:none;"></iframe>');
        $(document.body).prepend(r), _ABS_DOC = r[0].contentWindow.document
    }
    return _ABS_DOC.open(), _ABS_DOC.write('<head><base href="' + E + '" /></head><body><a href="' + e + '"></a></body>'), _ABS_DOC.close(), _ABS_DOC.getElementsByTagName("a")[0].href
}

function overrideAnker(e, E) {
    "use strict";
    for (
        var t = (e = e || $("#launcher_body")).find("a"), r = 0;
        r < t.length; r++)"_blank" === $(t[r]).attr("target") ? $(t[r]).attr("href", 'javascript:openDefBrowser("' + getAbsPath($(t[r]).attr("href"), E) + '");') : (2 === String($(t[r]).attr("href")).split("/sp/news/").length ? $(t[r]).attr("href", 'javascript:loadtoInnerElement("' + getAbsPath($(t[r]).attr("href"), E) + '");') : 2 !== String($(t[r]).attr("href")).split("openDefBrowser").length && $(t[r]).attr("href", 'javascript:openDefBrowser("' + getAbsPath($(t[r]).attr("href"), E) + '");'), $(t[r]).attr("onclick", "DoPlaySound('IDR_WAV_OK');")), $(t[r]).removeAttr("target")
}

function getIEVer() {
    "use strict";
    var e = { isIE: !1, version: 0 }, E = window.navigator.userAgent.toLowerCase();
    if (E.match(/(msie|MSIE)/) || E.match(/(T|t)rident/)) {
        e.isIE = !0;
        var t = E.match(/((msie|MSIE)\s|rv:)([\d\.]+)/)[3]; e.version = parseInt(t, 10)
    } trackEvent("launcher", "ie", e.version)
}

function modeCheck(e, E) {
    "use strict";
    return e.indexOf(E) + E.length === e.length
}

function isTrEnabled() {
    "use strict";
    var e = DoGetAccountRights(); e = e.toLowerCase();
    var E = $("<div>" + e + "</div>"), t = !1;
    return E.find("right").each(function (e, E) {
        if ("trial" === $(E).attr("name"))
            return !(t = !0)
    }), t
}

function isHlEnabled() {
    "use strict";
    var e = DoGetAccountRights(); e = e.toLowerCase();
    var E = $("<div>" + e + "</div>"), t = !1;
    return E.find("right").each(function (e, E) {
        if ("basic" === $(E).attr("name"))
            return !(t = !0)
    }), t
}

function readCookie() {
    "use strict";
    var e = ""; _STORAGE = {};
    try { e = document.cookie } catch (e) { }
    if ("" !== e) {
        e = e.split(";");
        for (
            var E = 0; E < e.length; E++) {
            var t = e[E].split("="), r = t[0].split(" ").join("");
            _TRG_STORAGE_KEY[r] && (_STORAGE[r] = decodeURIComponent(t[1]))
        }
    } _STORAGE["cogid" + _EXE_MUTEX] || (_STORAGE["cogid" + _EXE_MUTEX] = "")
}

function writeCookie() {
    "use strict";
    var e = [];
    for (
        var E in _STORAGE) _STORAGE.hasOwnProperty(E) && e.push(E + "=" + _STORAGE[E]);
    if (e.length) {
        var t = new Date; t.setDate(t.getDate() + 365);
        try {
            for (
                var r = 0; r < e.length; r++)document.cookie = e[r] + "; expires=" + t.toGMTString()
        } catch (e) { }
    }
}

function delCoockie(e) {
    "use strict";
    if (_STORAGE[e])
        try { document.cookie = e + "=" + _STORAGE[e] + "; expires=" + new Date(0).toGMTString() }
        catch (e) { }
} resetKeyActDefMode(), function () {
    "use strict";
    getIEVer(), _EXE_MUTEX = DoGetMhfMutexNumber(), (_TRG_STORAGE_KEY = {})["cogid" + _EXE_MUTEX] = !0
}(), function () {
    "use strict";
    var e, E, t, r = location.host;

    if (_COG_MODE = -1 !== r.indexOf("zerulight"), _NHN_MODE = -1 !== r.indexOf("hangame-"), t = _COG_MODE ? "cog-" : _NHN_MODE ? "hangame-" : "dmm-", modeCheck(r, "mhf-z.jp")) _MODE_BRANCH = !1, e = "", E = "jp";
    else {
        if (!modeCheck(r, "mhf-z.net"))
            return;
        _MODE_BRANCH = !0, e = -1 !== r.indexOf("stage") ? "stage-" : "debug-", E = "net"
    } (_HOSTS = {}).s = "http://zerulight.cc", _HOSTS.g = "http://zerulight.cc", _HOSTS.i = "http://zerulight.cc", _HOSTS.p = "http://zerulight.cc", _HOSTS.c = "http://zerulight.cc"
}();
var _BNR_INT = 5e3, _BNR_CRR = 0, _BNR_TOI = null;

function startBnrSwitchTimer() {
    "use strict";
    clearBnrSwitchTimer(), _BNR_TOI = setTimeout(function () {
        _BNR_CRR++, $("#launcher_bnr .dots ul li").length <= _BNR_CRR && (_BNR_CRR = 0), switchBnr(_BNR_CRR)
    }, _BNR_INT)
}

function clearBnrSwitchTimer() {
    "use strict";
    if (_BNR_TOI) {
        try {
            clearTimeout(_BNR_TOI)
        } catch (e) { } _BNR_TOI = null
    }
}

function getBnrElm(e) {
    "use strict";
    return $("#launcher_bnr .dots ul li .dot")[e]
}

function switchBnr(e) {
    "use strict";
    clearBnrSwitchTimer(), _BNR_CRR = e, $("#launcher_bnr .dots ul li .dot").removeClass("crr");
    var E = getBnrElm(e);
    $(E).addClass("crr"),
        $("#launcher_bnr .bnr").html(""),
        $("#launcher_bnr .bnr").append($($(E).find("img")[0]).clone());
    try {
        $("#launcher_bnr .bnr img").removeAttr("onerror")
    } catch (e) { }
    $("#launcher_bnr .bnr img").hide(),
        $("#launcher_bnr .bnr").append($("<div class=\"frame\" onClick=\"DoPlaySound('IDR_WAV_OK'); openDefBrowser('" + $(E).attr("href") + "');\" onMouseOver=\"DoPlaySound('IDR_WAV_SEL');\"></div>")),
        $("#launcher_bnr .bnr img").fadeIn(), startBnrSwitchTimer()
}

function retryBnrImgLoad(e) {
    "use strict";
    var E = parseInt($(e).attr("cnt") || "0", 10);
    E++, $(e).attr("cnt", String(E));
    var t = String(e.src).split("?").shift();
    setTimeout(function () { e.src = t + "?c=" + E }, _BNR_INT)
}

function beginLoadBnr() {
    "use strict";
    var s = "./bnr/launcher.html"; $("#launcher_bnr .bnr").hover(function () {
        clearBnrSwitchTimer(),
            $(this).find("img").fadeTo(300, .9)
    }, function () {
        $(this).find("img").fadeTo(200, 1), startBnrSwitchTimer()
    }), $.ajax({
        type: "GET",
        url: s,
        dataType: "text",
        cache: !1,
        success: function (e) {
            var E = e.split(duc("xhrspr"));
            3 === E.length && ($("#launcher_bnr .dots ul").html(""),
                E = (E = (E = (E = E[1].split('src="/').join('src_root="/')).split('src="').join('srcpre="')).split('srcpre="img/').join('srcpre="/sp_contents/banner/img/')).split('src_root="/').join('src="/'),
                (E = $("<ul>" + E + "</ul>")).find("li").each(function (e, E) {
                    var t = $("#launcher_bnr .dots ul li").length;

                    if (5 <= t)
                        return !1; var r = $(E).find("a");
                    if (_COG_MODE) {
                        if (r.hasClass("cogHide") || r.hasClass("nhnOnly") || r.hasClass("dmmOnly"))
                            return !0
                    } else if (_NHN_MODE) {
                        if (r.hasClass("nhnHide") || r.hasClass("cogOnly") || r.hasClass("dmmOnly"))
                            return !0
                    } else if (r.hasClass("dmmHide") || r.hasClass("cogOnly") || r.hasClass("nhnOnly"))
                        return !0;
                    var a = getAbsPath(r.attr("href"), s), _ = getAbsPath($(r.find("img")[0]).attr("srcpre"), s);
                    $("#launcher_bnr .dots ul").append($('<li><div class="dot" onClick="DoPlaySound(\'IDR_WAV_OK\'); switchBnr(' + t + ');" href="' + a + '"><img src="' + _ + '" onerror="retryBnrImgLoad(this);"/></div></li>'))
                }), E = null, switchBnr(0),
                $("#launcher_bnr").show())
        }
    })
}
var _INF_URL = "./launcher_list.html", _INF_SEL_LI = "#launcher_info_list", _INF_SEL_US = "#launcher_info_list img, #launcher_info_list a", _INF_SEL_BACK = "#launcher_bnr,#launcher_info_list", _INF_SEL_DETAIL = "#launcher_info_detail", _INF_SEL_FRAME = _INF_SEL_DETAIL + " .article_frame", _INF_SEL_BODY = _INF_SEL_FRAME + " .article", _INF_SEL_DUS = "#launcher_info_detail img, #launcher_info_detail a";

function formattingInfoDetail(e, r) {
    "use strict";
    var E = ""; -1 !== e[0].indexOf('showLocalNaviInformation("bug_t")') ? E = " bug_trouble" : -1 !== e[0].indexOf('showLocalNaviInformation("info")') ? E = " info" : -1 !== e[0].indexOf('showLocalNaviInformation("g_event")') ? E = " game_event" : -1 !== e[0].indexOf('showLocalNaviInformation("campaign")') ? E = " campaign" : -1 !== e[0].indexOf('showLocalNaviInformation("system")') ? E = " system" : -1 !== e[0].indexOf('showLocalNaviInformation("o_news")') && (E = " other_news"), e[1] = e[1].split('src="').join('srcpre="');

    var t = '<div class="article_category' + E + '"></div>' + e[1] + '<div style="width:100%; height:20px;"></div>'; $(_INF_SEL_BODY).html(t), $(_INF_SEL_BODY + " a").each(function (e, E) {
        $(E).removeAttr("target");

        var t = String($(E).attr("href")); 2 === t.split("/sp/news/").length ? $(E).attr("href", 'javascript:loadtoInnerElement("' + getAbsPath(t, r) + '");') : 0 === t.indexOf("#") ? $(E).attr("href", 'javascript:scrollToInfoDetail("' + t.substr(1) + '");') : $(E).attr("href", 'javascript:openDefBrowser("' + getAbsPath(t, r) + '");')
    }), $(_INF_SEL_BODY + " img").each(function (e, E) { $(E).attr("src", getAbsPath($(E).attr("srcpre"), r)), $(E).removeAttr("srcpre") }), $([_INF_SEL_BODY + " script", _INF_SEL_BODY + " iframe", _INF_SEL_BODY + " video", _INF_SEL_BODY + " audio", _INF_SEL_BODY + " source", _INF_SEL_BODY + " video", _INF_SEL_BODY + " input"].join(",")).each(function (e, E) { $(E).attr("src", getAbsPath($(E).attr("srcpre"), r)), $(E).removeAttr("srcpre") }), $(_INF_SEL_BODY).css("visibility", "hidden"), $(_INF_SEL_BACK).css("visibility", "hidden"), $(_INF_SEL_DETAIL).show(), $($(_INF_SEL_FRAME)[0]).scrollTop(0), $(_INF_SEL_BODY).css("visibility", "visible"), hideScrollBar(_INF_SEL_LI), $(_INF_SEL_DUS).attr("unselectable", "on"), $(_INF_SEL_DUS).attr("onSelectStart", "return false;"), updateScrollBar(_INF_SEL_FRAME)
}

function hideInfoDetail() { "use strict"; DoPlaySound("IDR_WAV_OK"), $(_INF_SEL_DETAIL).hide(), $(_INF_SEL_BODY).html(""), $(_INF_SEL_BACK).css("visibility", "visible"), showScrollBar(_INF_SEL_LI) }

function scrollToInfoDetail(e) { "use strict"; var E = 0; "contents_top" !== e && (E = ($(_INF_SEL_BODY + ' a[name="' + e + '"]') || $(_INF_SEL_BODY + " #" + e + "]")).offset().top, E -= $(_INF_SEL_BODY).offset().top); $(_INF_SEL_FRAME).animate({ scrollTop: E }) }

function loadtoInnerElement(t) { "use strict"; _IE_STATE.isIE && _IE_STATE.version < 8 ? openDefBrowser(t) : $.ajax({ type: "GET", url: t, dataType: "text", cache: !1, error: function () { openDefBrowser(t) }, success: function (e) { var E = e.split(duc("xhrspr")); 3 === E.length ? (trackPageView(t, ""), formattingInfoDetail(E, t)) : openDefBrowser(t) } }) }

function beginLoadInfo() {
    "use strict";
    $.ajax({
        type: "GET",
        url: _INF_URL,
        dataType: "text",
        cache: !1,
        success: function (e) {
            var E = e.split(duc("xhrspr")); 3 === E.length && ($(_INF_SEL_LI).html(E[1]), $(_INF_SEL_LI + " a").each(function (e, E) {
                $(E).removeAttr("target");
                var t = String($(E).attr("href")); 2 === t.split("/sp/news/").length ? $(E).attr("href", 'javascript:loadtoInnerElement("' + getAbsPath(t, _INF_URL) + '");') : $(E).attr("href", 'javascript:openDefBrowser("' + getAbsPath(t, _INF_URL) + '");'), $(E).attr("onclick", "DoPlaySound('IDR_WAV_OK');")
            }), initScrollBar(_INF_SEL_LI), $(_INF_SEL_LI).show(), updateScrollBar(_INF_SEL_LI), $(_INF_SEL_US).attr("unselectable", "on"), $(_INF_SEL_US).attr("onSelectStart", "return false;"))
        }
    })
}

var _CHR_CRR = 0,
    _CHR_DEF = 0,
    _CHR_UNIT_Y = [0, 18, 60, 102, 120],
    _CHR_UNIT_I = Math.floor(.5 * _CHR_UNIT_Y.length),
    _CHR_SCR = !1,
    _CHR_UID = null,
    _CHR_HR = null,
    _CHR_DEL_TOI = null,
    _CHR_DEL_STATE = "NULL",
    _CHR_DEL_NAME = "",
    _CHR_DEL_UID = null,
    _CHR_SEL_BOX = "#launcher_character_select",
    _CHR_SEL_UNIT = _CHR_SEL_BOX + " .unit",
    _CHR_SEL_UP = _CHR_SEL_BOX + " .scroll.up",
    _CHR_SEL_DOWN = _CHR_SEL_BOX + " .scroll.down",
    _CHR_SEL_ADD = _CHR_SEL_BOX + " .btn_add",
    _CHR_SEL_DEL = _CHR_SEL_BOX + " .btn_del",
    _CHR_IS_WAIT = !1;

function convWpType(e) {
    "use strict";
    var E = {
        "%E7%89%87%E6%89%8B%E5%89%A3": "onehandsword",
        "%E5%8F%8C%E5%89%A3": "twinsword",
        "%E5%A4%A7%E5%89%A3": "largesword",
        "%E5%A4%AA%E5%88%80": "longsword",
        "%E3%83%8F%E3%83%B3%E3%83%9E%E3%83%BC": "hammer",
        "%E7%8B%A9%E7%8C%9F%E7%AC%9B": "horn",
        "%E3%83%A9%E3%83%B3%E3%82%B9": "lance",
        "%E3%82%AC%E3%83%B3%E3%83%A9%E3%83%B3%E3%82%B9": "gunlance",
        "%E7%A9%BF%E9%BE%8D%E6%A3%8D": "senryukon",
        "%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%82%A2%E3%83%83%E3%82%AF%E3%82%B9": "slashaxe",
        "%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%82%A2%E3%83%83%E3%82%AF%E3%82%B9F": "slashaxe",
        "%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%82%A2%E3%83%83%E3%82%AF%E3%82%B9%EF%BC%A6": "slashaxe",
        "%E3%83%9E%E3%82%B0%E3%83%8D%E3%83%83%E3%83%88%E3%82%B9%E3%83%91%E3%82%A4%E3%82%AF": "magnetspike",
        "%E3%83%A9%E3%82%A4%E3%83%88%E3%83%9C%E3%82%A6%E3%82%AC%E3%83%B3": "lbowgun",
        "%E3%83%98%E3%83%93%E3%82%A3%E3%83%9C%E3%82%A6%E3%82%AC%E3%83%B3": "hbowgun",
        "%E5%BC%93": "bow"
    };
    return E[encodeURIComponent(e)] || ""
}

function convLastDateStr(e) {
    "use strict";
    var E = new Date(1e3 * e);
    return E.getFullYear() + "." + (E.getMonth() + 1) + "." + E.getDate()
}

function entityRef(e) {
    "use strict";
    return e = (e = (e = (e = e.split("&").join("&amp;")).split("<").join("&lt;")).split(">").join("&gt;")).split('"').join("&quot;")
}

function createCharUnit(e, E, t, r, a, _, s, n) {
    "use strict"; _ = _.split("F").join("Ｆ");
    var o = $('<div class="unit" uid="' + t + '" name="' + E + '" hr="' + r + '" to="0"></div>');
    if (o.append($('<div class="num n' + e + '"></div>')), o.append($('<div class="sign"></div>')), o.append($('<p class="name">' + entityRef(E) + "</p>")), 0 === r) o.addClass("new"), o.append($('<p class="new">' + duc("anch") + "</p>"));
    else {
        var i = convWpType(_); o.addClass(i), o.append($('<div class="icon' + ("" !== i ? " " + i : "") + '"></div>')), o.append($('<p class="wp">' + duc("cwpt") + "<br>" + _ + "</p>")), o.append($('<p class="data">HR' + r + (0 < a ? "　GR" + a : "") + "　" + ("M" === s ? "♂" : "♀") + "<br>ID:" + t + "<br>" + duc("pcst") + ":" + convLastDateStr(n) + "</p>"))
    }
    return o.append($('<div class="cover"></div>')), o.click(function () {
        $(this).hasClass("crr") && gameStart()
    }), o
}

function removeStampe() { }

function addStamp() { }

function getCrrChar() {
    "use strict";
    return $($(_CHR_SEL_UNIT)[_CHR_CRR])
}

function convTop2Z(e) {
    "use strict";
    var E = Math.max(0, Math.min(120, parseInt($(e).css("top"), 10)));
    return 100 - Math.abs(E - 60) / 60 * 100
}

function scrollCharUni(e, r) {
    "use strict";
    if (!_CHR_SCR) {
        _CHR_SCR = !0;
        var a = "easeOutBounce" !== (r = r || "easeOutBounce") ? 1 : 400; _CHR_CRR += e;
        var E = $(_CHR_SEL_UNIT).length; _CHR_CRR = Math.max(0, Math.min(_CHR_CRR, E - 1)), "easeOutBounce" === r && (updateScrollBtnState(), updateCharCtrlBtnState()), $(_CHR_SEL_UNIT).each(function (E, t) {
            $(t).stop();
            var e = E - _CHR_CRR + _CHR_UNIT_I; e < 0 ? ($(t).css("top", _CHR_UNIT_Y[0] + "px"), $(t).css("display", "none"), $(t).css("z-index", "0"), $(t).removeClass("crr"), $($(t).children(".cover")[0]).stop().fadeTo(100, 1), removeStampe(t)) : _CHR_UNIT_Y.length <= e ? ($(t).css("top", _CHR_UNIT_Y[_CHR_UNIT_Y.length - 1] + "px"), $(t).css("display", "none"), $(t).css("z-index", "0"), $(t).removeClass("crr"), $($(t).children(".cover")[0]).stop().fadeTo(100, 1), removeStampe(t)) : ($(t).css("display", "block"), $($(t).children(".cover")[0]).stop().fadeTo(a, Math.min(.85, .65 * Math.abs(e - _CHR_UNIT_I))), $(t).animate({ top: _CHR_UNIT_Y[e] }, {
                duration: a, easing: r, progress: function () {
                    var e = convTop2Z(t); $(this).css("z-index", e), 60 < e ? E === _CHR_CRR && ($($(t).children(".cover")[0]).stop().fadeTo(100, 0), $(t).addClass("crr"), addStamp(t)) : ($(t).removeClass("crr"), removeStampe(t))
                }, complete: function () { _CHR_SCR = !1, E === _CHR_CRR && "easeOutBounce" !== r && (_CHR_CRR !== _CHR_DEF ? scrollCharUni(1, "swing") : (addStamp(t), updateScrollBtnState(), updateCharCtrlBtnState(), $(_CHR_SEL_BOX).show())) }
            }))
        })
    }
}

function updateScrollBtnState() {
    "use strict";
    var e = $(_CHR_SEL_UNIT).length; 1 < e ? (0 !== _CHR_CRR ? $(_CHR_SEL_UP).removeClass("disabled") : $(_CHR_SEL_UP).addClass("disabled"), _CHR_CRR !== e - 1 ? $(_CHR_SEL_DOWN).removeClass("disabled") : $(_CHR_SEL_DOWN).addClass("disabled"), $(_CHR_SEL_BOX + " .scroll").show()) : $(_CHR_SEL_BOX + " .scroll").hide(), kdCharSelMode()
}

function updateCharCtrlBtnState() { "use strict"; $(_CHR_SEL_UNIT).length < 11 ? ($(_CHR_SEL_ADD).removeClass("disabled"), $(_CHR_SEL_ADD).fadeTo(100, 1), $(_CHR_SEL_ADD).attr("onMouseOver", "DoPlaySound('IDR_WAV_SEL');")) : ($(_CHR_SEL_ADD).attr("onMouseOver", ""), $(_CHR_SEL_ADD).removeAttr("onMouseOver"), $(_CHR_SEL_ADD).addClass("disabled"), $(_CHR_SEL_ADD).fadeTo(200, .4)), "0" !== getCrrChar().attr("hr") ? ($(_CHR_SEL_DEL).removeClass("disabled"), $(_CHR_SEL_DEL).fadeTo(100, 1), $(_CHR_SEL_DEL).attr("onMouseOver", "DoPlaySound('IDR_WAV_SEL');")) : ($(_CHR_SEL_DEL).attr("onMouseOver", ""), $(_CHR_SEL_DEL).removeAttr("onMouseOver"), $(_CHR_SEL_DEL).addClass("disabled"), $(_CHR_SEL_DEL).fadeTo(200, .4)) }

function kdCharSelMode() {
    "use strict";
    _KEY_ACT_DEF = function (e) {
        if (_IS_MODAL)
            return !1;
        var E = !0;
        switch (e.which) {
            case 38:
            case 33: _CHR_SCR || !$(_CHR_SEL_UP).is(":visible") || $(_CHR_SEL_UP).hasClass("disabled") || $(_CHR_SEL_UP).click(), E = !1;
                break;
            case 40:
            case 34: _CHR_SCR || !$(_CHR_SEL_DOWN).is(":visible") || $(_CHR_SEL_DOWN).hasClass("disabled") || $(_CHR_SEL_DOWN).click(), E = !1;
                break;
            case 13: _CHR_IS_WAIT || (_CHR_IS_WAIT = !0, $(_CHR_SEL_BOX + " .btn_start").click()), E = !1;
                break;
            case 9: E = !1
        }return E
    }
}

function showCharSelector() {
    "use strict";
    switchEvtPhase("standby"), _CHR_DEF = _CHR_CRR = 0, _CHR_IS_WAIT = !1,
        $("#launcher_login_panel").hide(),
        $("#launcher_update_progress").hide(),
        $("#launcher_log_area").hide(), $(_CHR_SEL_BOX).hide(),
        $(_CHR_SEL_BOX + " .units").html(""), $(_CHR_SEL_BOX + " .scroll").hide();

    var e = DoGetCharacterInfo();
    e = (e = e.split("'").join('"')).split("&apos;").join("'"), e = $("<div>" + e + "</div>");

    var t = $(e.find("CharacterInfo")[0]).attr("defaultUid");
    e.find("Character").each(function (e, E) {
        $(E).attr("uid") === t && (_CHR_DEF = e),
            $(_CHR_SEL_BOX + " .units").append(createCharUnit(e + 1,
                $(E).attr("name"),
                $(E).attr("uid"), parseInt(
                    $(E).attr("HR"), 10), parseInt(
                        $(E).attr("GR"), 10),
                $(E).attr("weapon"),
                $(E).attr("sex"), parseInt(
                    $(E).attr("lastLogin"), 10)))
    }), $(_CHR_SEL_UNIT).each(function (e, E) {
        $(E).removeClass("crr"),
            $(E).css("display", "none"),
            $(E).css("z-index", "0");
        var t = e - _CHR_CRR + _CHR_UNIT_I;
        t < 0 ? $(E).css("top", _CHR_UNIT_Y[0] + "px") : _CHR_UNIT_Y.length <= t ? $(E).css("top", _CHR_UNIT_Y[_CHR_UNIT_Y.length - 1] + "px") : ($(E).css("top", _CHR_UNIT_Y[t] + "px"), $(E).css("display", "block"), $(E).css("z-index", convTop2Z(E)), t === _CHR_UNIT_I ? ($(E).addClass("crr"), $($(E).children(".cover")[0]).stop().fadeTo(0, 1), addStamp(E)) : $($(E).children(".cover")[0]).stop().fadeTo(0, Math.min(.75, .45 * Math.abs(t - _CHR_UNIT_I))))
    }), _CHR_CRR !== _CHR_DEF ? scrollCharUni(1, "swing") : (updateScrollBtnState(), updateCharCtrlBtnState(), $(_CHR_SEL_BOX).show())
}

function charDelPolling() {
    "use strict"; stopCharDelPolling();
    var e = DoGetLastAuthResult();
    if (e !== _CHR_DEL_STATE)
        switch (_CHR_DEL_STATE = e) {
            case "AUTH_NULL":
            case "AUTH_PROGRESS":
            case "AUTH_SUCCESS":
            case "AUTH_ERROR_NET":
            case "AUTH_ERROR_ACC":
            case "AUTH_ERROR_PWD":
            case "DEL_PROGRESS":
                break;
            case "DEL_SUCCESS":
                return 1 < $(_CHR_SEL_UNIT).length ? showCompleteDelCharDialog() : showAddGuaranteeCharDialog(), showCharSelector(), void (_CHR_DEL_UID = null);
            case "DEL_ERROR_NET":
            case "DEL_ERROR_IVL":
            case "DEL_ERROR_MNC":
                return void showFailDelCharDialog($(_CHR_SEL_UNIT).length)
        }_CHR_DEL_TOI = setTimeout(function () {
            charDelPolling()
        }, 1e3)
}

function stopCharDelPolling() {
    "use strict";
    if (_CHR_DEL_TOI) {
        try {
            clearTimeout(_CHR_DEL_TOI)
        } catch (e) { } _CHR_DEL_TOI = null
    }
}

function charDelReset() {
    "use strict";
    _CHR_DEL_UID = null, hideModalDialog()
}

function charDelete() {
    "use strict";
    stopCharDelPolling(), _CHR_DEL_STATE = "NULL",
        DoDeleteCharacter(_CHR_DEL_UID), _CHR_DEL_TOI = setTimeout(function () {
            charDelPolling()
        }, 1e3)
}

function waitGameStart() {
    "use strict";
    DoSelectCharacter(_CHR_UID, _CHR_UID),
        DoPlaySound("IDR_WAV_LOGIN"),
        $("#launcher_game_start_wait").show(), hideModalDialog(), setTimeout(function () {
            DoExitLauncher()
        }, 500)
}

function checkHasHL() {
    "use strict";
    100 <= _CHR_HR ? isHlEnabled() ? waitGameStart() : (DoPlaySound("IDR_WAV_OK"),
        showGetHLDialog()) : waitGameStart()
}

function gameStartCalcel() {
    "use strict";
    _CHR_IS_WAIT = !1, hideModalDialog()
}

function gameStart() {
    "use strict";
    DoPlaySound("IDR_WAV_OK");
    var e = getCrrChar();
    _CHR_UID = e.attr("uid"),
        _CHR_HR = parseInt(e.attr("hr"), 10),
        showGameStartDialog(e.attr("name"), e.attr("uid"))
}

function checkDelID() {
    "use strict";
    _CHR_DEL_UID === $("#del_uid").val() ? showWaitDelCharDialog(_CHR_DEL_NAME, _CHR_DEL_UID) : showWaitDelCharIdErrorDialog()

} var _UPD_ANIM_SEQ = { loop: [] };
_UPD_ANIM_SEQ.loop.push({ c: "f0", delay: 100 }),
    _UPD_ANIM_SEQ.loop.push({ c: "f1", delay: 300 }),
    _UPD_ANIM_SEQ.loop.push({ c: "f2", delay: 100 }),
    _UPD_ANIM_SEQ.loop.push({ c: "f3", delay: 300 }),
    _UPD_ANIM_SEQ.fini = [],
    _UPD_ANIM_SEQ.fini.push({ c: "f4", delay: 100 }),
    _UPD_ANIM_SEQ.fini.push({ c: "f5", delay: 50 }),
    _UPD_ANIM_SEQ.fini.push({ c: "f6", delay: 50 }),
    _UPD_ANIM_SEQ.fini.push({ c: "f7", delay: 2e3 });

var _UPD_POLLING = !0,
    _UPD_PRE = "f0",
    _UPD_FRM_LOOP = 0,
    _UPD_FRM_FINI = 0,
    _UPD_TOTAL = 0,
    _UPD_BAR_WID = 302,
    _UPD_BAR_PER = .01 * _UPD_BAR_WID,
    _EXIT_WAIT = 3e3,
    _UPD_ANIM_TOI = null;

function clearAnimSq() {
    "use strict";
    if (_UPD_ANIM_TOI) {
        try {
            clearTimeout(_UPD_ANIM_TOI)
        } catch (e) { } _UPD_ANIM_TOI = null
    }
}

function updateProgressAnimation() {
    "use strict"; clearAnimSq();
    var e = $("#launcher_update_progress .anim"),
        E = _UPD_ANIM_SEQ.loop[_UPD_FRM_LOOP];
    e.removeClass(_UPD_PRE),
        _UPD_PRE = E.c, e.addClass(E.c),
        _UPD_ANIM_TOI = setTimeout(function () {
            _UPD_FRM_LOOP++, _UPD_POLLING ? (_UPD_ANIM_SEQ.loop.length <= _UPD_FRM_LOOP && (_UPD_FRM_LOOP = 0),
                updateProgressAnimation()) : _UPD_ANIM_SEQ.loop.length <= _UPD_FRM_LOOP ? (_UPD_FRM_FINI = 0, updateProgressAnimationFinish()) : updateProgressAnimation()
        }, E.delay)
}

function updateProgressAnimationFinish() {
    "use strict"; clearAnimSq();
    var e = $("#launcher_update_progress .anim"),
        E = _UPD_ANIM_SEQ.fini[_UPD_FRM_FINI];
    e.removeClass(_UPD_PRE), _UPD_PRE = E.c, e.addClass(E.c), _UPD_ANIM_TOI = setTimeout(function () {
        _UPD_FRM_FINI++, _UPD_ANIM_SEQ.fini.length > _UPD_FRM_FINI ? (_UPD_ANIM_SEQ.fini.length === _UPD_FRM_FINI + 1 && DoPlaySound("IDR_NIKU"),
            updateProgressAnimationFinish()) : (clearAnimSq(),
                finishUpdateProcess())
    }, E.delay)
}

function switchUpdateAfterState() {
    "use strict";
    switch (DoGetUpdateStatus()) {
        case "UM_UPDATE_OK":
            switch (DoGetLauncherReturnCode()) {
                case "NORMAL":
                    return void (_UPD_POLLING = !1);
                case "SELFUP":
                    return void setTimeout(function () {
                        DoExitLauncher()
                    }, _EXIT_WAIT);
                case "ERR":
                    return void switchAuthMode()
            }break;
        case "UM_UPDATE_NG":
            return void switchAuthMode()
    }setTimeout(function () {
        progressUpdatePercentage()
    }, 50)
}

function progressUpdatePercentage() {
    "use strict";
    var e = Math.ceil(DoGetUpdatePercentageTotal() * _UPD_BAR_PER);
    if (0 === e)
        switch (DoGetUpdateStatus()) {
            case "UM_UPDATE_OK":
                switch (DoGetLauncherReturnCode()) {
                    case "NORMAL":
                        return void (_UPD_POLLING = !1);
                    case "SELFUP":
                        return void setTimeout(function () { DoExitLauncher() }, _EXIT_WAIT)
                }break;
            case "UM_UPDATE_NG":
                return void switchAuthMode()
        }_UPD_TOTAL < e ? (_UPD_TOTAL = e, $("#launcher_update_progress .bar_area .file_progress").width(_UPD_TOTAL === _UPD_BAR_WID ? 0 : _UPD_BAR_WID), $("#launcher_update_progress .bar_area .total_progress").stop().animate({ width: _UPD_TOTAL }, 150,
            function () { switchUpdateAfterState() })) : ($("#launcher_update_progress .bar_area .file_progress").width(Math.ceil(DoGetUpdatePercentageFile() * _UPD_BAR_PER)), switchUpdateAfterState())
}

function finishUpdateProcess() {
    "use strict";
    DoCheckIsEnableSessionId() ? (showCharSelector(), $("#btn_config").show()) : ($("#launcher_login_panel").hide(), $("#launcher_update_progress").hide(), $("#launcher_log_area").hide(), showMaintenanceDialog())
}

function startUpdateProcess() {
    "use strict";
    $("#btn_config").hide(), switchEvtPhase("update"),
        _KEY_ACT_DEF = function (e) {
            switch (e.which) {
                case 9:
                    return !1;
                default:
                    return !0
            }
        }
    $("#launcher_update_progress .bar_area .file_progress").width(0)
    $("#launcher_update_progress .bar_area .total_progress").width(0)
    $("#launcher_login_panel").hide()

    _UPD_POLLING ?
        DoStartUpdate() ?
            (_UPD_FRM_LOOP = 0,
                    updateProgressAnimation(),
                    $("#launcher_update_progress").show(),
                    setTimeout(function () {
                        progressUpdatePercentage()
                    }, 50)
            ) : (
                finishUpdateProcess()
            ) : finishUpdateProcess()
}

var _AT_IS_ENABLED = !0,
    _AT_ID = "",
    _AT_PW = "",
    _AT_FRAME = null,
    _AT_FRAME_CB = Math.floor(1e3 * Math.random()),
    _AT_TOI = null,
    _AT_STATUS = "AUTH_NULL",
    _AT_COG_MODE = "c",
    _AT_SEL_ID = "#launcher_login_panel .form_area input#l_uid",
    _AT_SEL_PW = "#launcher_login_panel .form_area input#l_pw",
    _AT_SEL_SBOX = "#launcher_login_panel .form_area .l_srv_box",
    _AT_SEL_SUNIT = "#launcher_login_panel .form_area .l_srv_box .srv",
    _AT_SEL_SRV = "#launcher_login_panel .form_area #l_srv",
    _AT_SEL_SBTN = "#launcher_login_panel .form_area .sel_btn",
    _AT_SEL_LBTN = "#launcher_login_panel .btn_login",
    _AT_SEL_ICHK = "#launcher_login_panel .check_save_id",
    _AT_SEL_PFGT = "#launcher_login_panel .btn_forgot",
    _AT_SBOX_TOI = null,
    _AT_SBOX_SEL_ENABLED = !0,
    _AT_SBOX_IS_ENABLED = !1,
    _AT_ANIM_TOI = null,
    _AT_IS_AUTOLC = !1,
    _AT_MODE = "",
    _AT_FOCUS_ELMS = [],
    _AT_FOCUS_IDX = 0,
    _AT_BB_TOI = null,
    _AT_SVID,
    _AT_SVID_DEF = "1000",
    _AT_IS_NO_SRV;

function onReceiveMsg(evt) {
    "use strict";
    var res;
    if (modeCheck(evt.origin, "capcom-onlinegames.jp"))
        switch (eval("res = " + evt.data), String(res.action)) {
            case "standby": parent.cslak.postMessage('{id:"' + _AT_ID + '", pw:"' + _AT_PW + '", svid:"' + (_AT_SVID || _AT_SVID_DEF) + '", lifetime:"60", action:"login"}', evt.origin);
                break;
            default: filteShortLifeAuthKeyResponse(res)
        }
}

function showMhfMaintenanceDialog() { "use strict"; $("#launcher_login_panel").hide(), $("#launcher_auth_maintenance").addClass("mhf"), resetKeyActDefMode(), $("#launcher_auth_maintenance").show() }

function onAuthError(e, E) {
    "use strict";
    switchEvtPhase("prepare"), e && addLogMsg(e, E = E || "y"), hideAuthProgress(), unlockAuthEdit(), setTimeout(function () { $(_AT_SEL_LBTN).fadeTo(200, 1, function () { $(_AT_SEL_LBTN).removeClass("disabled"), _AT_IS_ENABLED = !0 }) }, 5e3)
}

function stopLoginPolling() {
    "use strict";
    if (_AT_TOI) {
        try {
            clearInterval(_AT_TOI)
        } catch (e) { } _AT_TOI = null
    }
}

function loginPolling() {
    "use strict";
    var e = DoGetLastAuthResult();
    if (e !== _AT_STATUS)
        switch (_AT_STATUS = e) {
            case "AUTH_NULL":
            case "AUTH_PROGRESS":
            case "DELETE_PROGRESS":
            case "DELETE_SUCCESS":
            case "DELETE_ERROR_NET":
            case "DELETE_ERROR_IVL":
            case "DELETE_ERROR_MNC":
                break;
            case "AUTH_SUCCESS":
                if (stopLoginPolling(), hideAuthProgress(),
                    _COG_MODE && ($(_AT_SEL_ICHK).hasClass("checked") && (_STORAGE["cogid" + _EXE_MUTEX] = $(_AT_SEL_ID).val(),
                        writeCookie()), $("#launcher_version p.login_id").text($(_AT_SEL_ID).val() + "@" + $(_AT_SEL_SRV).text()), !isTrEnabled()))
                    return void showNoTRDialog(); startUpdateProcess();
                break;
            case "AUTH_ERROR_NET":
                stopLoginPolling(), onAuthError(duc("SIGN_EFAILED"), "r");
                break;
            case "AUTH_ERROR_ACC":
            case "AUTH_ERROR_PWD":
                stopLoginPolling();

                var E = DoGetSignResult();
                switch (E) {
                    case "SIGN_EFAILED":
                    case "SIGN_EILLEGAL":
                    case "SIGN_EABORT":
                    case "SIGN_ERESPONSE":
                    case "SIGN_EDATABASE": onAuthError(duc(E), "r");
                        break;
                    case "SIGN_EALERT":
                        if ("1018" === _AT_SVID) onAuthError(duc("SIGN_EALERT_COOP"));
                        else { var t = $(_AT_SEL_SRV).text(); 0 <= t.indexOf("④") ? onAuthError(duc("SIGN_EALERT_COOP")) : 0 <= t.toUpperCase().indexOf("XBOX") ? onAuthError(duc("SIGN_EALERT_COOP")) : onAuthError(duc(E), "r") }
                        break;
                    case "SIGN_ESUSPEND":
                    case "SIGN_EELIMINATE":
                    case "SIGN_ECLOSE_EX":
                    case "SIGN_EIPADDR": onAuthError(duc(E));
                        break;
                    case "SIGN_ECLOSE":
                    case "SIGN_ENOTREADY":
                    case "SIGN_EALREADY": onAuthError(), showMhfMaintenanceDialog();
                        break;
                    case "SIGN_ERIGHT": isTrEnabled() ? onAuthError(duc("SIGN_EOTHER")) : (onAuthError(), showNoTRDialog());
                        break;
                    default: onAuthError(duc("SIGN_EOTHER"))
                }
                break;
            default: stopLoginPolling(), onAuthError(duc("aferr") + " [" + _AT_STATUS + "]")
        }
}

function createShortLifeAuthKeyDone(e) {
    "use strict";
    !(_AT_STATUS = "AUTH_NULL") ===
        DoLoginCog($(_AT_SEL_ID).val(), $(_AT_SEL_PW).val(),
            $(_AT_SEL_PW).val()) ? onAuthError(duc("SIGN_EAPP"), "r") :
        _AT_TOI = setInterval(function () { loginPolling() },
            1e3)
}

function createShortLifeAuthKey(e, E) {
    //"use strict"; "" !== _EXT_MODE ? (_AT_ID = e, _AT_PW = E, _AT_FRAME ? (_AT_FRAME.attr("src", ""), _AT_FRAME.attr("src", _HOSTS[_AT_COG_MODE] + "./bnr/launcher.html?q=" + _AT_FRAME_CB)) : ((_AT_FRAME = $('<iframe id="cslak" name="cslak" width="1" height="1" style="overflow:hidden; position:fixed; left:-500px; top:-700px; visibility:hidden;"></iframe>')).attr("src", _HOSTS[_AT_COG_MODE] + "./bnr/launcher.html?q=" + _AT_FRAME_CB), $(document.body).append(_AT_FRAME)), _AT_FRAME_CB++) :
    filteShortLifeAuthKeyResponse({ code: "000" })
}

function showCogMaintenanceDialog() {
    "use strict";
    $("#launcher_login_panel").hide(), resetKeyActDefMode(),
        $("#launcher_auth_maintenance").show()
}

function filteShortLifeAuthKeyResponse(e) {
    "use strict";
    switch (e.code && clearBBTO(), "000" !== String(e.code) && addEvent("code_" + String(e.code)), String(e.code)) {
        case "000": createShortLifeAuthKeyDone(e.skey);
            break;
        case "777":
        case "202":
        case "220":
        case "221":
        case "227": onAuthError(duc("afac") + " [" + e.code + "]", "r");
            break;
        case "200": onAuthError(duc("afde"));
            break;
        case "201":
        case "300":
        case "302":
        case "320": onAuthError(duc("afipe"));
            break;
        case "102": onAuthError(duc("af102"));
            break;
        case "301": onAuthError(duc("af301"));
            break;
        case "304": onAuthError(duc("af304"), "r");
            break;
        case "235":
        case "309":
        case "360": onAuthError(duc("aferr") + "（" + e.code + "）");
            break;
        case "321": onAuthError(duc("af321"));
            break;
        case "9000": onAuthError(), showCogMaintenanceDialog();
            break;
        default: e.code ? onAuthError(duc("aferr") + "（" + e.code + "）") : onAuthError(duc("aferr"))
    }
}

function lockAuthEdit() { "use strict"; _AT_SBOX_SEL_ENABLED = !1, $(_AT_SEL_ID).attr("disabled", !0), $(_AT_SEL_PW).attr("disabled", !0) }

function unlockAuthEdit() { "use strict"; _AT_SBOX_SEL_ENABLED = !0, $(_AT_SEL_ID).attr("disabled", !1), $(_AT_SEL_PW).attr("disabled", !1), $("#btn_config").show() }

function switchAuthSrv(e) { "use strict"; _AT_COG_MODE = $(e).attr("mode"), _AT_SVID = $(e).attr("svid"), _AT_IS_NO_SRV = "true" === $(e).attr("block"), $(_AT_SEL_SRV).text($(e).text()) }

function hideSrvSelList() { "use strict"; $(_AT_SEL_SBOX).hide(), _AT_SBOX_IS_ENABLED = !1 }

function initSrvSelList() {
    "use strict";
    var e = "<div>" + DoGetServerListXml() + "</div>",
        E = DoGetIniLastServerIndex();
    E = parseInt(E, 10),
        $(_AT_SEL_SBOX).children().remove(),
        $(_AT_SEL_SBOX).append($('<div class="box_top"></div><div class="box_mid"></div><div class="box_btm"></div>')),
        $(e).find("group").each(function (e, E) {
            var t = $(E).attr("svid") ?
                $(E).attr("svid") : _AT_SVID_DEF, r = "" === $(E).attr("ip");
            $(_AT_SEL_SBOX + " .box_mid").append($("<div" + (r ? ' block="true"' : "") + ' class="srv" idx="' + e + '" svid="' + t + '" mode="' + ("pre" === $(E).attr("cog") ? "p" : "c") + '">' + $(E).attr("nam") + "</div>"))
        }),
        (E < 0 || E > $(_AT_SEL_SUNIT).length) && (E = 0),
        switchAuthSrv($(_AT_SEL_SUNIT)[E]),
        DoSetIniLastServerIndex(String(E)),
        $(_AT_SEL_SBOX).hide(), 1 < $(_AT_SEL_SUNIT).length ? (_AT_FOCUS_ELMS.push(_AT_SEL_SBTN),
            $(_AT_SEL_SBTN).mousedown(function () {
                _AT_SBOX_SEL_ENABLED && (DoPlaySound("IDR_WAV_OK"),
                    _AT_SBOX_IS_ENABLED ? hideSrvSelList() : ($(_AT_SEL_SBOX).show(), DoBeginDrag(!1), forceFocus(_AT_SEL_SBOX + " .box_mid"), _AT_SBOX_IS_ENABLED = !0))
            }),
            $(_AT_SEL_SUNIT).mouseover(function () {
                DoPlaySound("IDR_WAV_SEL")
            }),
            $(_AT_SEL_SUNIT).mousedown(function () {
                DoPlaySound("IDR_WAV_OK"), _AT_SBOX_TOI && (clearTimeout(_AT_SBOX_TOI), _AT_SBOX_TOI = null),
                    switchAuthSrv(this),
                    E = parseInt($(this).attr("idx"), 10),
                    DoSetIniLastServerIndex(String(E)),
                    hideSrvSelList()
            })) :
            $(_AT_SEL_SBTN).hide(),
        $(document).click(function () {
            hideSrvSelList()
        }),
        $(_AT_SEL_SBOX + " .box_mid," + _AT_SEL_SBTN).click(function (e) {
            e.stopPropagation()
        })
}

function chechIdInputState() {
    "use strict"; "" ===
        $(_AT_SEL_ID).val() ? ($(_AT_SEL_ID).val($(_AT_SEL_ID).attr("default")),
            $(_AT_SEL_ID).css("color", "#7f8095")) :
        $(_AT_SEL_ID).css("color", "#fff")
}

function showAuthProgress() {
    "use strict";
    var e = 0;
    _AT_ANIM_TOI = setInterval(function () {
        $("#launcher_login_panel .progress .anim").removeClass("f" + e),
            e = 11 <= e ? 0 : e + 1,
            $("#launcher_login_panel .progress .anim").addClass("f" + e)
    }, 100),
        $("#launcher_login_panel .progress").fadeIn(200)
}

function hideAuthProgress() {
    "use strict";
    $("#launcher_login_panel .progress").stop().fadeOut(200, function () {
        _AT_ANIM_TOI && (clearInterval(_AT_ANIM_TOI), _AT_ANIM_TOI = null)
    })
}

function showBackboneTimeoutDialog() {
    "use strict";
    $("#launcher_login_panel").hide(),
        $("#launcher_auth_maintenance").addClass("error"), resetKeyActDefMode(),
        $("#launcher_auth_maintenance").show()
}

function clearBBTO() {
    "use strict";
    if (_AT_BB_TOI) {
        try {
            clearTimeout(_AT_BB_TOI)
        }
        catch (e) { }
        _AT_BB_TOI = null
    }
}

function onBackboneTimeout() {
    "use strict";
    addEvent("backbone_timeout"),
        clearBBTO(),
        onAuthError(),
        showBackboneTimeoutDialog()
}

function authExec() {
    "use strict";
    return !0
}

function beginAuthProcess(e) {
    "use strict";
    if ($("#btn_config").hide(),
        e && (_AT_IS_ENABLED = !0, clearLog()), _AT_IS_ENABLED)
        if (DoPlaySound("IDR_WAV_PRE_LOGIN"),
            switchEvtPhase("auth"),
            switchAuthMode(), _COG_MODE) {
            if ("" === $(_AT_SEL_ID).val() || $(_AT_SEL_ID).val() === $(_AT_SEL_ID).attr("default"))
                onAuthError(duc("afipl"), "w");
            else if (authExec()) {
                _AT_IS_ENABLED = !1,
                    lockAuthEdit(),
                    showAuthProgress(),
                    clearBBTO();
                var E = setTimeout(function () { onBackboneTimeout() }, 6e4);
                _AT_BB_TOI = E, $(_AT_SEL_LBTN).addClass("disabled"), $(_AT_SEL_LBTN).fadeTo(200, .6),
                    createShortLifeAuthKey($(_AT_SEL_ID).val(), $(_AT_SEL_PW).val())
            }
        }
        else
            _NHN_MODE ? (_AT_IS_ENABLED = !1,
                lockAuthEdit(),
                showAuthProgress(),
                _AT_STATUS = "AUTH_NULL",
                DoLoginHangame()) : (_AT_IS_ENABLED = !1,
                    lockAuthEdit(),
                    showAuthProgress(),
                    _AT_STATUS = "AUTH_NULL",
                    DoLoginDmm()),
                _AT_TOI = setInterval(function () {
                    loginPolling()
                }, 1e3)
}

function isAutoLogin() {
    "use strict";
    var e = !1;
    switch (_AT_MODE = DoGetMhfBootMode()) {
        case "_MHF_SELFUP":
        case "_MHF_DMM_SELF_UPDATE":
        case "_MHF_AUTOLC":
        case "_MHF_DMM_AUTO_LAUNCH":
            e = !0
    }
    return e
}

function removeAuthHover(e) {
    "use strict";
    for (var E = 0; E < _AT_FOCUS_ELMS.length; E++)$(_AT_FOCUS_ELMS[E]).removeClass("hover"); e && (_AT_FOCUS_IDX = -1)
}

function setAuthHover(e) {
    "use strict";
    for (var E = 0; E < _AT_FOCUS_ELMS.length; E++)e === _AT_FOCUS_ELMS[E] ? (_AT_FOCUS_IDX = E, $(_AT_FOCUS_ELMS[E]).addClass("hover")) : $(_AT_FOCUS_ELMS[E]).removeClass("hover")
}

function forceFocus(e) {
    "use strict";
    if ($(e).is(":visible")) {
        switch (e) {
            case _AT_SEL_LBTN:
            case _AT_SEL_ICHK:
            case _AT_SEL_PFGT: DoPlaySound("IDR_WAV_SEL")
        }
        try {
            $(e).focus()
        } catch (e) { }
    }
}

function switchAuthMode() {
    "use strict";
    $("#launcher_update_progress").hide(),
        $(_CHR_SEL_BOX).hide(),
        $("#launcher_log_area").show(),
        $("#launcher_login_panel").show(),
        $(_AT_FOCUS_ELMS[_AT_FOCUS_IDX]).addClass("hover"), forceFocus(_AT_FOCUS_ELMS[_AT_FOCUS_IDX]), _KEY_ACT_DEF = function (e) {
            if (_IS_MODAL) return !1;
            var E = _AT_FOCUS_IDX, t = !0;
            switch (e.which) {
                case 13:
                    if (_AT_IS_ENABLED)
                        switch (_AT_FOCUS_ELMS[E]) {
                            case _AT_SEL_SBTN: _AT_SBOX_IS_ENABLED || $(_AT_SEL_SBTN).mousedown();
                                break;
                            case _AT_SEL_ID: removeAuthHover(), E++, E = _AT_FOCUS_ELMS.length <= E ? 0 : E, $(_AT_FOCUS_ELMS[E]).addClass("hover"), forceFocus(_AT_FOCUS_ELMS[E]);
                                break;
                            case _AT_SEL_PW: "" !== $(_AT_SEL_PW).val() && $(_AT_SEL_LBTN).click();
                                break;
                            default: $(_AT_FOCUS_ELMS[E]).click()
                        }t = !1;
                    break;
                case 9:
                    if (removeAuthHover(), _AT_IS_ENABLED) {
                        if (e.shiftKey ? E = --E < 0 ? _AT_FOCUS_ELMS.length - 1 : E : (E++, E = _AT_FOCUS_ELMS.length <= E ? 0 : E), $(_AT_FOCUS_ELMS[E]).hasClass("disabled"))
                            return _AT_FOCUS_IDX = E, _KEY_ACT_DEF(e); $(_AT_FOCUS_ELMS[E]).addClass("hover"), forceFocus(_AT_FOCUS_ELMS[E]), _AT_FOCUS_ELMS[E] === _AT_SEL_SBTN ? $(_AT_SEL_SBTN).mousedown() : hideSrvSelList()
                    } t = !1
            }
            return _AT_FOCUS_IDX = E, t
        }, unlockAuthEdit(), $(_AT_SEL_LBTN).fadeTo(1, 1), $(_AT_SEL_LBTN).removeClass("disabled"), _AT_IS_ENABLED = !0
}

function initAuth() {
    "use strict";
    if (_COG_MODE && (_AT_FOCUS_ELMS.push(_AT_SEL_ID), _AT_FOCUS_ELMS.push(_AT_SEL_PW)), initSrvSelList(), _AT_FOCUS_ELMS.push(_AT_SEL_LBTN), _COG_MODE && (_AT_FOCUS_ELMS.push(_AT_SEL_ICHK), _AT_FOCUS_ELMS.push(_AT_SEL_PFGT)), $(_AT_SEL_LBTN).click(function () { _AT_IS_NO_SRV ? onAuthError(duc("afnsrv")) : (addEvent("login_click"), beginAuthProcess()) }), _AT_IS_AUTOLC = isAutoLogin(), _COG_MODE) {
        readCookie();
        var e = ""; "" === (e = DoGetUserId()) && _MODE_BRANCH && (e = DoDebugGetIniUserId()), "" === e && _STORAGE["cogid" + _EXE_MUTEX] && (e = _STORAGE["cogid" + _EXE_MUTEX]), $(_AT_SEL_ID).val(e), chechIdInputState(), $(_AT_SEL_ID).blur(function () { chechIdInputState() }), $(_AT_SEL_ID).focus(function () { DoPlaySound("IDR_WAV_OK"), $(_AT_SEL_ID).val() === $(_AT_SEL_ID).attr("default") && ($(_AT_SEL_ID).val(""), $(_AT_SEL_ID).css("color", "#fff")), setAuthHover(_AT_SEL_ID) });
        var E = "";
        if ("" === (E = DoGetPassword()) && _MODE_BRANCH && (E = DoDebugGetIniPassword()), E = "" !== E ? E : $(_AT_SEL_PW).attr("default"), $(_AT_SEL_PW).val(E), $(_AT_SEL_PW).focus(function () { DoPlaySound("IDR_WAV_OK"), setAuthHover(_AT_SEL_PW) }), $(_AT_SEL_ID + "," + _AT_SEL_PW).keydown(function (e) {
            switch (e.which) {
                case 117:
                    return !1;
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 96:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 109:
                case 110:
                case 111:
                case 186:
                case 187:
                case 188:
                case 189:
                case 190:
                case 191:
                case 192:
                case 219:
                case 220:
                case 221:
                case 222:
                case 226: DoPlaySound("IDR_WAV_SEL")
            }
        }), "" !== e && "" === E && forceFocus(_AT_SEL_PW), $(_AT_SEL_ICHK).click(function () { $(_AT_SEL_ICHK).toggleClass("checked"), DoPlaySound("IDR_WAV_OK"), $(_AT_SEL_ICHK).hasClass("checked") ? addEvent("save_id") : (addEvent("delete_id"), delCoockie("cogid" + _EXE_MUTEX)) }), $(_AT_SEL_ICHK).hover(function () { setAuthHover(_AT_SEL_ICHK) }, function () { removeAuthHover() }), $(_AT_SEL_PFGT).hover(function () { setAuthHover(_AT_SEL_PFGT) }, function () { removeAuthHover() }), _STORAGE["cogid" + _EXE_MUTEX] && !_AT_IS_AUTOLC && $(_AT_SEL_ICHK).addClass("checked"), _AT_IS_AUTOLC && "" !== e && "" !== E) "_MHF_AUTOLC" === _AT_MODE && addEvent("login_autolc"), beginAuthProcess();
        else if ("" !== e && "" !== E)
            for (var t = 0; t < _AT_FOCUS_ELMS.length; t++)
                if (_AT_FOCUS_ELMS[t] === _AT_SEL_LBTN) {
                    _AT_FOCUS_IDX = t;
                    break
                }
    }
    else _AT_IS_AUTOLC && beginAuthProcess(); switchAuthMode()
} !function () {
    "use strict";
    try { window.addEventListener ? window.addEventListener("message", onReceiveMsg, !1) : window.attachEvent ? window.attachEvent("onmessage", onReceiveMsg) : window.onmessage = onReceiveMsg }
    catch (e) { }
}();
var _SEL_LOG = "#launcher_log_area .msg", _CACHE_CR1 = "", _CACHE_CR2 = "", _LOG_TOI = null, _LOG_INT = 100, _BTNS_IS_ENABLED = null, _DIALOG_BTN_TOI = null, _CONF_SND_BLOCK = !1, _ENTERDOWN_TOI = null, _LAST_KEYDOWN = 0;

function addLogMsg(e, E, t) {
    "use strict";
    if (e) {
        switch (E) {
            case "g": e = '<span class="green">' + e + "</span>";
                break;
            case "b": e = '<span class="blue">' + e + "</span>";
                break;
            case "y": e = '<span class="yellow">' + e + "</span>";
                break;
            case "r": e = '<span class="red">' + e + "</span>"
        }t ? ($(_SEL_LOG + " p").html(_CACHE_CR1 + e + "<br>"), "" === _CACHE_CR2 && $(_SEL_LOG).scrollTop($(_SEL_LOG).get(0).scrollHeight), updateScrollBarElm(_SEL_LOG, !0), _CACHE_CR2 = e) : ("" !== _CACHE_CR2 && (e = _CACHE_CR2 + "<br>" + e, _CACHE_CR2 = ""), _CACHE_CR1 += e + "<br>", $(_SEL_LOG + " p").html(_CACHE_CR1), $(_SEL_LOG).scrollTop($(_SEL_LOG).get(0).scrollHeight), updateScrollBarElm(_SEL_LOG, !0))
    }
}

function clearLog() { "use strict"; _CACHE_CR1 = "", $(_SEL_LOG + " p").html(""), $(_SEL_LOG).scrollTop($(_SEL_LOG).get(0).scrollHeight), updateScrollBar(_SEL_LOG) }

function debugLogMsg(e, E) { "use strict"; _MODE_BRANCH && addLogMsg("DEBUG:" + e, "r", !1 !== E || E) }

function getExLog() {
    "use strict"; stopExLog();
    var e = DoExtractLog();
    if (e)
        for (var E, t = (e = (e = (e = (e = (e = (e = (e = e.split("&").join("&amp;")).split('"').join("&quot;")).split("<").join("&lt;")).split(">").join("&gt;")).replace(/[\n\r]/g, "<br>")).replace(/[\r]/g, "<br>")).replace(/[\n]/g, "<br>")).split("<br>"), r = !1, a = 0; a < t.length; a++)t[a] && (r = !(E = "w"), -1 !== t[a].indexOf("再度お試しください") && (E = "y"), -1 !== t[a].indexOf("失敗") && (E = "y"), -1 !== t[a].indexOf("できませんでした") && (E = "y"), 0 === t[a].indexOf("Winsock Ver.") && (E = "g"), 0 === t[a].indexOf("DEBUG:") && (E = "r"), 0 === t[a].indexOf("PRM[") && (E = "r"), 0 === t[a].indexOf("UG:") && (E = "r"), 0 === t[a].indexOf("Cache-Control:") && (E = "r"), 0 === t[a].indexOf("Connection:") && (E = "r"), 0 === t[a].indexOf("User-Agent:") && (E = "r"), 0 === t[a].indexOf("Host:") && (E = "r"), 0 === t[a].indexOf("]") && (E = "r"), -1 !== t[a].indexOf("(DEBUG)") && (E = "r"), 0 === t[a].indexOf("AUTH_SUCCESS") && (E = "b"), 0 === t[a].indexOf("[") && (-1 !== t[a].indexOf("%]") ? (r = !0, E = "y") : E = "r"), addLogMsg(t[a], E, r)); startExLog()
}

function stopExLog() {
    "use strict";
    if (_LOG_TOI) {
        try { clearTimeout(_LOG_TOI) }
        catch (e) { } _LOG_TOI = null
    }
}

function startExLog() {
    "use strict";
    _LOG_TOI = setTimeout(function () { getExLog() }, _LOG_INT)
}

function resetModalDialogBtnWaitTimer() {
    "use strict";
    if (_DIALOG_BTN_TOI) {
        try { clearTimeout(_DIALOG_BTN_TOI) }
        catch (e) { } _DIALOG_BTN_TOI = null
    }
}
var kuModalAction = function () { };

function showModalDialog(e, E, t) { "use strict"; resetModalDialogBtnWaitTimer(), _IS_MODAL = !0, _KEY_ACT_MODAL = function () { }, DoBeginDrag(!(kuModalAction = function () { })), t = t || {}, $("#launcher_modal .dialog p").html(e), $("#launcher_modal .dialog p").removeClass(), t.elmClass && $("#launcher_modal .dialog p").addClass(t.elmClass), $("#launcher_modal .dialog .btns").html("<ul></ul>"), _BTNS_IS_ENABLED = t.wait; for (var r = 0; r < E.length; r++) { var a = $("<div></div>"); a.addClass("md_btn"); var _ = ""; "IDR_SILENCE" !== E[r].snd && (_ = 'DoPlaySound("' + (_ = E[r].snd ? "IDR_SILENCE" !== E[r].snd ? E[r].snd : null : "IDR_WAV_OK") + '");'), E[r].isWait ? (a.addClass("wait"), a.attr("onMouseOver", 'if (_BTNS_IS_ENABLED) {return; } else {DoPlaySound("IDR_WAV_SEL");}'), "" !== _ && (_ = " " + _), a.attr("onclick", "if (_BTNS_IS_ENABLED) {return false;} else {" + _ + " " + E[r].cmd + "}")) : (a.attr("onMouseOver", 'DoPlaySound("IDR_WAV_SEL");'), a.attr("onclick", _ + " " + E[r].cmd)), a.attr("unselectable", "on"), a.attr("onSelectStart", "return false;"), E[r].fcs && a.addClass("hover"), a.text(E[r].label); var s = $("<li></li>"); s.append(a.clone()), E[r].key && s.append($('<div class="sign key_' + E[r].key + '"></div>')), $("#launcher_modal .dialog .btns ul").append(s.clone()) } $("#launcher_modal .dialog .btns ul li div").hover(function () { $("#launcher_modal .dialog .btns ul li div").removeClass("hover"), $(this).addClass("hover") }, function () { $(this).removeClass("hover") }), $("#launcher_modal .dialog .btns .wait").fadeTo(10, .4), $("#launcher_modal").show(), t.wait && (_DIALOG_BTN_TOI = setTimeout(function () { $("#launcher_modal .dialog .btns .wait").fadeTo(200, 1, function () { _BTNS_IS_ENABLED = !1, $("#launcher_modal .dialog .btns .wait").removeClass("wait") }) }, t.wait)) }

function hideModalDialog() { "use strict"; _KEY_ACT_MODAL = function () { }, kuModalAction = function () { }, $("#launcher_modal").hide(), resetModalDialogBtnWaitTimer(), _IS_MODAL = !1 }

function showNoTRDialog() { "use strict"; showModalDialog(duc("dmt0"), [{ label: duc("dmb0"), cmd: 'openDefBrowser("' + (_COG_MODE ? "http://www.capcom-onlinegames.jp/pc/right?m=6&service=mhf&right=free" : "http://members.mh-frontier.jp/auth/dmm_regist/regist.php") + '"); showWaitTRDialog();' }]) }

function showWaitTRDialog() { "use strict"; showModalDialog(duc("dmt1"), [{ label: duc("dmb1"), cmd: "beginAuthProcess(true); hideModalDialog();" }]) }

function showMaintenanceDialog() { "use strict"; showModalDialog(duc("SRV_MNT"), [{ label: duc("dmb4"), cmd: "addEvent('close_click_maintenance'); DoCloseWindow();" }]) }

function showAddCharDialog() { "use strict"; var e = "http://"; e += _COG_MODE ? "cog" : _NHN_MODE ? "hangame" : "dmm", e += "-members.mhf-z.jp/sp/payment/charadd.html", showModalDialog(duc("dmca0"), [{ label: duc("dmb7"), cmd: 'DoLoginCog("'+$(_AT_SEL_ID).val()+'+'+'", "'+$(_AT_SEL_PW).val()+'","'+$(_AT_SEL_PW).val()+'"); showWaitCharAddDialog();' }, { label: duc("dmb8"), cmd: "hideModalDialog();" }]) }

function showWaitCharAddDialog() { "use strict"; showModalDialog(duc("dmca1"), [{ label: duc("dmb1"), cmd: "beginAuthProcess(true); hideModalDialog();" }]) }

function showDelCharDialog(e, E) { "use strict"; showModalDialog(duc("dmcd0") + e + duc("dmcd1") + E + duc("dmcd2") + duc("dmcd3"), [{ label: duc("dmb2"), cmd: 'showDelCharDialog2("' + e + '", "' + E + '");', isWait: !0 }, { label: duc("dmb3"), cmd: "charDelReset();" }], { elmClass: "alert", wait: 3e3 }) }

function showDelCharDialog2(e, E) { "use strict"; showModalDialog(duc("dmcd0") + e + duc("dmcd1") + E + duc("dmcd2") + (1 < $(_CHR_SEL_UNIT).length ? duc("dmcd4") : duc("dmcd4_2")), [{ label: duc("dmb2"), cmd: 'showDelCharDialog3("' + e + '", "' + E + '");', isWait: !0 }, { label: duc("dmb3"), cmd: "charDelReset();" }], { elmClass: "alert", wait: 2e3 }) }

function showDelCharDialog3(e, E) { "use strict"; showModalDialog(duc("dmcd5") + e + duc("dmcd1") + E + duc("dmcd6") + duc("dmcd7") + duc("dmcd8"), [{ label: duc("dmb2"), cmd: "checkDelID();", isWait: !0 }, { label: duc("dmb3"), cmd: "charDelReset();" }], { elmClass: "alert", wait: 1e3 }), $("input#del_uid").keydown(function (e) { switch (e.which) { case 13: return !1 } }), _KEY_ACT_MODAL = function (e) { switch (e.which) { case 13: return !1 } } }

function showWaitDelCharIdErrorDialog() { "use strict"; showModalDialog(duc("dmcd9"), [{ label: duc("dmb4"), cmd: "charDelReset();" }]) }

function showWaitDelCharDialog(e, E) { "use strict"; showModalDialog(duc("dmcd5") + e + " (ID:" + E + duc("dmcd10"), []), charDelete() }

function showFailDelCharDialog(e) { "use strict"; showModalDialog(duc(1 < e ? "dmcd11" : "dmcd12"), [{ label: duc("dmb4"), cmd: "charDelReset();" }]) }

function showAddGuaranteeCharDialog() { "use strict"; showModalDialog(duc("dmcd13"), [{ label: duc("dmb4"), cmd: "charDelReset();" }], { elmClass: "alert" }) }

function showCompleteDelCharDialog() { "use strict"; showModalDialog(duc("dmcd14"), [{ label: duc("dmb4"), cmd: "charDelReset();" }]) }

function showGetHLDialog() { "use strict"; var e = _COG_MODE ? "http://www.capcom-onlinegames.jp/pc/right?m=5&service=mhf&templateName=hunterlife" : _NHN_MODE ? "http://hangame-members.mhf-z.jp/sp/payment/basic.html#basic_price" : "http://dmm-members.mhf-z.jp/sp/payment/basic.html#basic_price"; showModalDialog(duc("dmhl0"), [{ label: duc("dmb7"), cmd: 'openDefBrowser("' + e + '"); showWaitCharAddDialog();' }, { label: duc("dmb9"), cmd: "waitGameStart();", snd: "IDR_SILENCE" }]) }

function showWaitHLDialog() { "use strict"; showModalDialog(duc("dmhl1"), [{ label: duc("dmb1"), cmd: "beginAuthProcess(true); hideModalDialog();" }]) }

function clearEnterDownTimeout() { "use strict"; if (_ENTERDOWN_TOI) { try { clearTimeout(_ENTERDOWN_TOI) } catch (e) { } _ENTERDOWN_TOI = null } }

function showGameStartDialog(e, E) {
    "use strict";
    showModalDialog(duc("dmgs0") + e + duc("dmcd1") + E + duc("dmgs1"), [{
        label: duc("dmb5"),
        cmd: "checkHasHL();",
        snd: "IDR_SILENCE",
        fcs: !0,
        key: "y"
    }, {
        label: duc("dmb6"),
        cmd: "gameStartCalcel();",
        key: "n"
    }], {
        elmClass: "alert"
    }),
        _LAST_KEYDOWN = 0,
        _ENTERDOWN_TOI = null,
        _KEY_ACT_MODAL = function (e) {
            var E, t, r = (new Date).getTime();
            if (r - _LAST_KEYDOWN < 100)
                return !0;
            switch (_LAST_KEYDOWN = r, e.which) {
                case 13:
                    return E = "#launcher_modal .dialog .btns ul li div.md_btn", -1 !== (t = function () {
                        for (var e = 0; e < $(E).length; e++)
                            if ($($(E)[e]).hasClass("hover"))
                                return e;
                        return -1
                    }()) && (clearEnterDownTimeout(),
                        _ENTERDOWN_TOI = setTimeout(function () { $($(E)[t]).click() }, 100)), !1;
                case 89:
                    return clearEnterDownTimeout(), checkHasHL(), !1;
                case 27:
                case 78:
                    return clearEnterDownTimeout(), DoPlaySound("IDR_WAV_OK"), gameStartCalcel(), !1;
                case 9:
                case 38:
                case 40:
                    if (E = "#launcher_modal .dialog .btns ul li div.md_btn", t = function () {
                        for (var e = 0; e < $(E).length; e++)
                            if ($($(E)[e]).hasClass("hover"))
                                return e;
                        return -1
                    }(),
                        $(E).removeClass("hover"), -1 !== t) {
                        t += e.shiftKey || 37 === e.which || 38 === e.which ? -1 : 1;
                        var a = $(E).length - 1; t = t < 0 ? a : a < t ? 0 : t
                    }
                    else t = 0;
                    return $($(E)[t]).addClass("hover"), !1
            }
        }
}

function openMemberSite() { "use strict"; openDefBrowser("http://" + (_COG_MODE ? "cog-members.mhf-z.jp/" : _NHN_MODE ? "members-mhf-z.hange.jp/" : "dmm-members.mhf-z.jp/")) }

function openInquiry() { "use strict"; openDefBrowser("http://" + (_COG_MODE ? "cog" : _NHN_MODE ? "hangame" : "dmm") + "-members.mhf-z.jp/sp/inquiry/") }

function openManual() { "use strict"; openDefBrowser("http://" + (_COG_MODE ? "cog" : _NHN_MODE ? "hangame" : "dmm") + "-members.mhf-z.jp/sp/manual/") }

function openPayment() {
    "use strict";
    openDefBrowser("http://" + (_COG_MODE ? "cog" : _NHN_MODE ? "hangame" : "dmm") + "-members.mhf-z.jp/sp/payment/")
}
$(function () {
    "use strict"; $("html").keydown(function (e) {
        return !!_KEY_ACT_MODAL(e) || !1 !== _KEY_ACT_MODAL(e) && _KEY_ACT_DEF(e)
    }), (!_IE_STATE.isIE || 8 <= _IE_STATE.version) && (beginLoadBnr(), beginLoadInfo()), $("a").bind("focus", function () { this.blur && this.blur() }), overrideAnker();
    for (var e = "2.000", E = location.search.split("?").join("").split("&"), t = 0; t < E.length; t++) {
        var r = E[t].split("=");
        if ("ver" === r[0]) {
            e = r[1];
            break
        }
    } $("#launcher_version p.ver").text("release ver. " + e), $("p:not(.selectable),img,li,td,th,.unselectable,.btn,.modal").attr("unselectable", "on"), $("p:not(.selectable),img,li,td,th,.unselectable,.btn,.modal").attr("onSelectStart", "return false;"), $("#btn_config").click(function () { _CONF_SND_BLOCK = !0, clearBnrSwitchTimer(), stopExLog(), addEvent("config_click"), DoOpenMhlConfig() }), $("#btn_config").mouseover(function () { _CONF_SND_BLOCK ? (_CONF_SND_BLOCK = !1, startBnrSwitchTimer(), startExLog()) : DoPlaySound("IDR_WAV_SEL") }), $("#launcher_menu a,.selsnd,.btn").mouseover(function () { DoPlaySound("IDR_WAV_SEL"), DoBeginDrag(!1) }), $(".unselectable").mouseover(function () { DoBeginDrag(!1) }), $(".glove,.draggable").hover(function () {
        return DoBeginDrag(!0), !1
    }, function () { DoBeginDrag(!1) }), $(".glove,.draggable").attr("unselectable", "on"), $(".glove,.draggable").attr("onSelectStart", "DoBeginDrag(true); return false;"), $(".glove,.draggable").mousedown(function () {
        DoBeginDrag(!0);

        try { hideSrvSelList() }
        catch (e) { }
    }),
        $(".glove,.draggable").mouseup(function () {
            DoBeginDrag(!0)
        }),
        $(_CHR_SEL_UP).click(function () {
            DoPlaySound("IDR_WAV_OK"), scrollCharUni(-1)
        }),
        $(_CHR_SEL_DOWN).click(function () {
            DoPlaySound("IDR_WAV_OK"), scrollCharUni(1)
        }),
        $(_CHR_SEL_DEL).click(function () {
            if (!$(this).hasClass("disabled") && !_CHR_DEL_UID) {
                DoPlaySound("IDR_WAV_OK"), addEvent("del_click");
                var e = getCrrChar();
                _CHR_DEL_NAME = e.attr("name"),
                    _CHR_DEL_UID = e.attr("uid"),
                    showDelCharDialog(_CHR_DEL_NAME, _CHR_DEL_UID)
            }
        }),
        $(_CHR_SEL_ADD).click(function () {
            $(this).hasClass("disabled") || (DoPlaySound("IDR_WAV_OK"), addEvent("add_click"), showAddCharDialog())
        }),
        $(_CHR_SEL_BOX + " .btn_start").click(function () {
            gameStart()
        }), initAuth(),
        initScrollBar(_SEL_LOG),
        initScrollBar("#launcher_info_detail .article_frame"),
        startExLog(),
        debugLogMsg("<br>UA > " + String(window.navigator.userAgent), !1)
});