!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], t)
    : "object" == typeof exports
    ? (exports.CodeHighlight = t(require("react")))
    : (e.CodeHighlight = t(e.react));
})(this, function (e) {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 0))
    );
  })([
    function (e, t, n) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function u(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        s = n(1),
        c = r(s),
        f = n(2),
        p = r(f),
        l = (function (e) {
          function t() {
            return (
              o(this, t),
              i(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
              )
            );
          }
          return (
            u(t, e),
            a(t, [
              {
                key: "startRain",
                value: function () {
                  for (
                    var e = document.getElementById("Rain"), t = 1;
                    t < this.props.numDrops;
                    t++
                  ) {
                    var n = this.randRange(0, 1600),
                      r = this.randRange(-1e3, 1400),
                      o = document.createElement("div");
                    o.setAttribute("class", "drop"),
                      o.setAttribute("id", "drop" + t),
                      e.appendChild(o),
                      (o.style.left = n + "px"),
                      (o.style.top = r + "px");
                  }
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  this.props.numDrops !== e.numDrops &&
                    (this.stopRain(), this.startRain());
                },
              },
              {
                key: "stopRain",
                value: function () {
                  for (
                    var e = document.getElementById("Rain");
                    e.hasChildNodes();

                  )
                    e.removeChild(e.lastChild);
                },
              },
              {
                key: "randRange",
                value: function (e, t) {
                  return Math.floor(Math.random() * (t - e + 1)) + e;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.startRain();
                },
              },
              {
                key: "render",
                value: function () {
                  return c.default.createElement("div", { id: "Rain" });
                },
              },
            ]),
            t
          );
        })(s.Component);
      (l.propTypes = { numDrops: p.default.number.isRequired }),
        (t.default = l);
    },
    function (t, n) {
      t.exports = e;
    },
    function (e, t, n) {
      e.exports = n(3)();
    },
    function (e, t, n) {
      "use strict";
      var r = n(4),
        o = n(5),
        i = n(6);
      e.exports = function () {
        function e(e, t, n, r, u, a) {
          a !== i &&
            o(
              !1,
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
        };
        return (n.checkPropTypes = r), (n.PropTypes = n), n;
      };
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          return e;
        };
      }
      var o = function () {};
      (o.thatReturns = r),
        (o.thatReturnsFalse = r(!1)),
        (o.thatReturnsTrue = r(!0)),
        (o.thatReturnsNull = r(null)),
        (o.thatReturnsThis = function () {
          return this;
        }),
        (o.thatReturnsArgument = function (e) {
          return e;
        }),
        (e.exports = o);
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n, r, i, u, a, s) {
        if ((o(t), !e)) {
          var c;
          if (void 0 === t)
            c = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var f = [n, r, i, u, a, s],
              p = 0;
            (c = new Error(
              t.replace(/%s/g, function () {
                return f[p++];
              })
            )),
              (c.name = "Invariant Violation");
          }
          throw ((c.framesToPop = 1), c);
        }
      }
      var o = function (e) {};
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
  ]);
});