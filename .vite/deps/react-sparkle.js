import {
  __commonJS,
  require_react
} from "./chunk-64MM4EP5.js";

// node_modules/react-sparkle/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-sparkle/dist/index.js"(exports, module) {
    (() => {
      "use strict";
      var e = { n: (t2) => {
        var r2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return e.d(r2, { a: r2 }), r2;
      }, d: (t2, r2) => {
        for (var n2 in r2)
          e.o(r2, n2) && !e.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: r2[n2] });
      }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      } }, t = {};
      e.r(t), e.d(t, { default: () => K });
      const r = require_react();
      var n, o = e.n(r), i = [], a = "ResizeObserver loop completed with undelivered notifications.";
      !function(e2) {
        e2.BORDER_BOX = "border-box", e2.CONTENT_BOX = "content-box", e2.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
      }(n || (n = {}));
      var s, c = function(e2) {
        return Object.freeze(e2);
      }, u = function(e2, t2) {
        this.inlineSize = e2, this.blockSize = t2, c(this);
      }, l = function() {
        function e2(e3, t2, r2, n2) {
          return this.x = e3, this.y = t2, this.width = r2, this.height = n2, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, c(this);
        }
        return e2.prototype.toJSON = function() {
          var e3 = this;
          return { x: e3.x, y: e3.y, top: e3.top, right: e3.right, bottom: e3.bottom, left: e3.left, width: e3.width, height: e3.height };
        }, e2.fromRect = function(t2) {
          return new e2(t2.x, t2.y, t2.width, t2.height);
        }, e2;
      }(), p = function(e2) {
        return e2 instanceof SVGElement && "getBBox" in e2;
      }, f = function(e2) {
        if (p(e2)) {
          var t2 = e2.getBBox(), r2 = t2.width, n2 = t2.height;
          return !r2 && !n2;
        }
        var o2 = e2, i2 = o2.offsetWidth, a2 = o2.offsetHeight;
        return !(i2 || a2 || e2.getClientRects().length);
      }, h = function(e2) {
        var t2;
        if (e2 instanceof Element)
          return true;
        var r2 = null === (t2 = null == e2 ? void 0 : e2.ownerDocument) || void 0 === t2 ? void 0 : t2.defaultView;
        return !!(r2 && e2 instanceof r2.Element);
      }, d = "undefined" != typeof window ? window : {}, v = /* @__PURE__ */ new WeakMap(), b = /auto|scroll/, y = /^tb|vertical/, g = /msie|trident/i.test(d.navigator && d.navigator.userAgent), m = function(e2) {
        return parseFloat(e2 || "0");
      }, w = function(e2, t2, r2) {
        return void 0 === e2 && (e2 = 0), void 0 === t2 && (t2 = 0), void 0 === r2 && (r2 = false), new u((r2 ? t2 : e2) || 0, (r2 ? e2 : t2) || 0);
      }, S = c({ devicePixelContentBoxSize: w(), borderBoxSize: w(), contentBoxSize: w(), contentRect: new l(0, 0, 0, 0) }), k = function(e2, t2) {
        if (void 0 === t2 && (t2 = false), v.has(e2) && !t2)
          return v.get(e2);
        if (f(e2))
          return v.set(e2, S), S;
        var r2 = getComputedStyle(e2), n2 = p(e2) && e2.ownerSVGElement && e2.getBBox(), o2 = !g && "border-box" === r2.boxSizing, i2 = y.test(r2.writingMode || ""), a2 = !n2 && b.test(r2.overflowY || ""), s2 = !n2 && b.test(r2.overflowX || ""), u2 = n2 ? 0 : m(r2.paddingTop), h2 = n2 ? 0 : m(r2.paddingRight), d2 = n2 ? 0 : m(r2.paddingBottom), k2 = n2 ? 0 : m(r2.paddingLeft), x2 = n2 ? 0 : m(r2.borderTopWidth), E2 = n2 ? 0 : m(r2.borderRightWidth), z2 = n2 ? 0 : m(r2.borderBottomWidth), O2 = k2 + h2, A2 = u2 + d2, T2 = (n2 ? 0 : m(r2.borderLeftWidth)) + E2, M2 = x2 + z2, R2 = s2 ? e2.offsetHeight - M2 - e2.clientHeight : 0, C2 = a2 ? e2.offsetWidth - T2 - e2.clientWidth : 0, B2 = o2 ? O2 + T2 : 0, j2 = o2 ? A2 + M2 : 0, I2 = n2 ? n2.width : m(r2.width) - B2 - C2, D2 = n2 ? n2.height : m(r2.height) - j2 - R2, N2 = I2 + O2 + C2 + T2, P2 = D2 + A2 + R2 + M2, G2 = c({ devicePixelContentBoxSize: w(Math.round(I2 * devicePixelRatio), Math.round(D2 * devicePixelRatio), i2), borderBoxSize: w(N2, P2, i2), contentBoxSize: w(I2, D2, i2), contentRect: new l(k2, u2, I2, D2) });
        return v.set(e2, G2), G2;
      }, x = function(e2, t2, r2) {
        var o2 = k(e2, r2), i2 = o2.borderBoxSize, a2 = o2.contentBoxSize, s2 = o2.devicePixelContentBoxSize;
        switch (t2) {
          case n.DEVICE_PIXEL_CONTENT_BOX:
            return s2;
          case n.BORDER_BOX:
            return i2;
          default:
            return a2;
        }
      }, E = function(e2) {
        var t2 = k(e2);
        this.target = e2, this.contentRect = t2.contentRect, this.borderBoxSize = c([t2.borderBoxSize]), this.contentBoxSize = c([t2.contentBoxSize]), this.devicePixelContentBoxSize = c([t2.devicePixelContentBoxSize]);
      }, z = function(e2) {
        if (f(e2))
          return 1 / 0;
        for (var t2 = 0, r2 = e2.parentNode; r2; )
          t2 += 1, r2 = r2.parentNode;
        return t2;
      }, O = function() {
        var e2 = 1 / 0, t2 = [];
        i.forEach(function(r3) {
          if (0 !== r3.activeTargets.length) {
            var n3 = [];
            r3.activeTargets.forEach(function(t3) {
              var r4 = new E(t3.target), o2 = z(t3.target);
              n3.push(r4), t3.lastReportedSize = x(t3.target, t3.observedBox), o2 < e2 && (e2 = o2);
            }), t2.push(function() {
              r3.callback.call(r3.observer, n3, r3.observer);
            }), r3.activeTargets.splice(0, r3.activeTargets.length);
          }
        });
        for (var r2 = 0, n2 = t2; r2 < n2.length; r2++)
          (0, n2[r2])();
        return e2;
      }, A = function(e2) {
        i.forEach(function(t2) {
          t2.activeTargets.splice(0, t2.activeTargets.length), t2.skippedTargets.splice(0, t2.skippedTargets.length), t2.observationTargets.forEach(function(r2) {
            r2.isActive() && (z(r2.target) > e2 ? t2.activeTargets.push(r2) : t2.skippedTargets.push(r2));
          });
        });
      }, T = [], M = 0, R = { attributes: true, characterData: true, childList: true, subtree: true }, C = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], B = function(e2) {
        return void 0 === e2 && (e2 = 0), Date.now() + e2;
      }, j = false, I = new (function() {
        function e2() {
          var e3 = this;
          this.stopped = true, this.listener = function() {
            return e3.schedule();
          };
        }
        return e2.prototype.run = function(e3) {
          var t2 = this;
          if (void 0 === e3 && (e3 = 250), !j) {
            j = true;
            var r2, n2 = B(e3);
            r2 = function() {
              var r3 = false;
              try {
                r3 = function() {
                  var e4, t3 = 0;
                  for (A(t3); i.some(function(e5) {
                    return e5.activeTargets.length > 0;
                  }); )
                    t3 = O(), A(t3);
                  return i.some(function(e5) {
                    return e5.skippedTargets.length > 0;
                  }) && ("function" == typeof ErrorEvent ? e4 = new ErrorEvent("error", { message: a }) : ((e4 = document.createEvent("Event")).initEvent("error", false, false), e4.message = a), window.dispatchEvent(e4)), t3 > 0;
                }();
              } finally {
                if (j = false, e3 = n2 - B(), !M)
                  return;
                r3 ? t2.run(1e3) : e3 > 0 ? t2.run(e3) : t2.start();
              }
            }, function(e4) {
              if (!s) {
                var t3 = 0, r3 = document.createTextNode("");
                new MutationObserver(function() {
                  return T.splice(0).forEach(function(e5) {
                    return e5();
                  });
                }).observe(r3, { characterData: true }), s = function() {
                  r3.textContent = "".concat(t3 ? t3-- : t3++);
                };
              }
              T.push(e4), s();
            }(function() {
              requestAnimationFrame(r2);
            });
          }
        }, e2.prototype.schedule = function() {
          this.stop(), this.run();
        }, e2.prototype.observe = function() {
          var e3 = this, t2 = function() {
            return e3.observer && e3.observer.observe(document.body, R);
          };
          document.body ? t2() : d.addEventListener("DOMContentLoaded", t2);
        }, e2.prototype.start = function() {
          var e3 = this;
          this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), C.forEach(function(t2) {
            return d.addEventListener(t2, e3.listener, true);
          }));
        }, e2.prototype.stop = function() {
          var e3 = this;
          this.stopped || (this.observer && this.observer.disconnect(), C.forEach(function(t2) {
            return d.removeEventListener(t2, e3.listener, true);
          }), this.stopped = true);
        }, e2;
      }())(), D = function(e2) {
        !M && e2 > 0 && I.start(), !(M += e2) && I.stop();
      }, N = function() {
        function e2(e3, t2) {
          this.target = e3, this.observedBox = t2 || n.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
        }
        return e2.prototype.isActive = function() {
          var e3, t2 = x(this.target, this.observedBox, true);
          return e3 = this.target, p(e3) || function(e4) {
            switch (e4.tagName) {
              case "INPUT":
                if ("image" !== e4.type)
                  break;
              case "VIDEO":
              case "AUDIO":
              case "EMBED":
              case "OBJECT":
              case "CANVAS":
              case "IFRAME":
              case "IMG":
                return true;
            }
            return false;
          }(e3) || "inline" !== getComputedStyle(e3).display || (this.lastReportedSize = t2), this.lastReportedSize.inlineSize !== t2.inlineSize || this.lastReportedSize.blockSize !== t2.blockSize;
        }, e2;
      }(), P = function(e2, t2) {
        this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e2, this.callback = t2;
      }, G = /* @__PURE__ */ new WeakMap(), F = function(e2, t2) {
        for (var r2 = 0; r2 < e2.length; r2 += 1)
          if (e2[r2].target === t2)
            return r2;
        return -1;
      }, W = function() {
        function e2() {
        }
        return e2.connect = function(e3, t2) {
          var r2 = new P(e3, t2);
          G.set(e3, r2);
        }, e2.observe = function(e3, t2, r2) {
          var n2 = G.get(e3), o2 = 0 === n2.observationTargets.length;
          F(n2.observationTargets, t2) < 0 && (o2 && i.push(n2), n2.observationTargets.push(new N(t2, r2 && r2.box)), D(1), I.schedule());
        }, e2.unobserve = function(e3, t2) {
          var r2 = G.get(e3), n2 = F(r2.observationTargets, t2), o2 = 1 === r2.observationTargets.length;
          n2 >= 0 && (o2 && i.splice(i.indexOf(r2), 1), r2.observationTargets.splice(n2, 1), D(-1));
        }, e2.disconnect = function(e3) {
          var t2 = this, r2 = G.get(e3);
          r2.observationTargets.slice().forEach(function(r3) {
            return t2.unobserve(e3, r3.target);
          }), r2.activeTargets.splice(0, r2.activeTargets.length);
        }, e2;
      }(), U = function() {
        function e2(e3) {
          if (0 === arguments.length)
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
          if ("function" != typeof e3)
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
          W.connect(this, e3);
        }
        return e2.prototype.observe = function(e3, t2) {
          if (0 === arguments.length)
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
          if (!h(e3))
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
          W.observe(this, e3, t2);
        }, e2.prototype.unobserve = function(e3) {
          if (0 === arguments.length)
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
          if (!h(e3))
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
          W.unobserve(this, e3);
        }, e2.prototype.disconnect = function() {
          W.disconnect(this);
        }, e2.toString = function() {
          return "function ResizeObserver () { [polyfill code] }";
        }, e2;
      }();
      function Z(e2) {
        return Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        }, Z(e2);
      }
      function J(e2, t2) {
        if (e2) {
          if ("string" == typeof e2)
            return L(e2, t2);
          var r2 = Object.prototype.toString.call(e2).slice(8, -1);
          return "Object" === r2 && e2.constructor && (r2 = e2.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(e2) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? L(e2, t2) : void 0;
        }
      }
      function L(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var r2 = 0, n2 = new Array(t2); r2 < t2; r2++)
          n2[r2] = e2[r2];
        return n2;
      }
      function V(e2, t2) {
        for (var r2 = 0; r2 < t2.length; r2++) {
          var n2 = t2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, (void 0, o2 = function(e3, t3) {
            if ("object" !== Z(e3) || null === e3)
              return e3;
            var r3 = e3[Symbol.toPrimitive];
            if (void 0 !== r3) {
              var n3 = r3.call(e3, "string");
              if ("object" !== Z(n3))
                return n3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e3);
          }(n2.key), "symbol" === Z(o2) ? o2 : String(o2)), n2);
        }
        var o2;
      }
      function X(e2, t2) {
        return X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
          return e3.__proto__ = t3, e3;
        }, X(e2, t2);
      }
      function Y(e2, t2) {
        if (t2 && ("object" === Z(t2) || "function" == typeof t2))
          return t2;
        if (void 0 !== t2)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }(e2);
      }
      function H(e2) {
        return H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
          return e3.__proto__ || Object.getPrototypeOf(e3);
        }, H(e2);
      }
      var _ = [0, 6, 13, 20], Q = { slowest: 50, slower: 20, slow: 12, normal: 7, fast: 4, faster: 2, fastest: 0 }, q = function(e2) {
        !function(e3, t3) {
          if ("function" != typeof t3 && null !== t3)
            throw new TypeError("Super expression must either be null or a function");
          e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, "prototype", { writable: false }), t3 && X(e3, t3);
        }(c2, e2);
        var t2, r2, n2, i2, a2, s2 = (i2 = c2, a2 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e3) {
            return false;
          }
        }(), function() {
          var e3, t3 = H(i2);
          if (a2) {
            var r3 = H(this).constructor;
            e3 = Reflect.construct(t3, arguments, r3);
          } else
            e3 = t3.apply(this, arguments);
          return Y(this, e3);
        });
        function c2(e3) {
          var t3;
          return function(e4, t4) {
            if (!(e4 instanceof t4))
              throw new TypeError("Cannot call a class as a function");
          }(this, c2), (t3 = s2.call(this, e3)).sparkleWrapper = null, t3.sparkleCanvas = null, t3.sparkleContext = null, t3.sparkles = [], t3.animationFrame = null, t3.sprite = null, t3;
        }
        return t2 = c2, r2 = [{ key: "componentDidMount", value: function() {
          this.init();
        } }, { key: "componentWillUnmount", value: function() {
          this.end();
        } }, { key: "getColor", value: function() {
          var e3 = this.props.color;
          return "random" === e3 ? c2.randomHexColor() : Array.isArray && Array.isArray(e3) || e3 instanceof Array ? e3[Math.floor(Math.random() * e3.length)] : e3;
        } }, { key: "randomSparkleSize", value: function() {
          var e3 = this.props, t3 = e3.minSize, r3 = e3.maxSize;
          return Math.floor(Math.random() * (r3 - t3 + 1) + t3);
        } }, { key: "recreateSparkle", value: function(e3) {
          if (!this.sparkleCanvas)
            return null;
          var t3 = this.randomSparkleSize();
          return Object.assign(e3, { position: { x: Math.floor(Math.random() * (this.sparkleCanvas.width - t3)), y: Math.floor(Math.random() * (this.sparkleCanvas.height - t3)) }, size: t3, opacity: c2.getOpacity(), color: this.getColor(), variant: c2.getSpriteVariant() });
        } }, { key: "createSparkle", value: function() {
          return this.recreateSparkle({});
        } }, { key: "createSparkles", value: function() {
          for (var e3 = this.props.count, t3 = 0; t3 < e3; t3 += 1)
            this.sparkles.push(this.createSparkle());
        } }, { key: "drawSparkles", value: function() {
          var e3 = this;
          if (this.sparkleCanvas && this.sparkleContext) {
            this.sparkleContext.clearRect(0, 0, this.sparkleCanvas.width, this.sparkleCanvas.height);
            var t3 = this;
            this.sparkles.forEach(function(r3) {
              t3.sparkleContext.save(), t3.sparkleContext.globalAlpha = r3.opacity, t3.sparkleContext.drawImage(e3.sprite, r3.variant, 0, 7, 7, r3.position.x, r3.position.y, r3.size, r3.size), r3.color && (t3.sparkleContext.globalCompositeOperation = "source-atop", t3.sparkleContext.globalAlpha = 0.6, t3.sparkleContext.fillStyle = r3.color, t3.sparkleContext.fillRect(r3.position.x, r3.position.y, r3.size, r3.size)), t3.sparkleContext.restore();
            });
          }
        } }, { key: "updateSparkles", value: function() {
          var e3 = this, t3 = this.props, r3 = t3.flicker, n3 = t3.flickerSpeed, o2 = t3.fadeOutSpeed, i3 = t3.newSparkleOnFadeOut, a3 = this;
          this.animationFrame = window.requestAnimationFrame(function(t4) {
            var s3 = Math.floor(t4);
            e3.sparkles.forEach(function(e4) {
              if (e4.opacity -= 1e-3 * o2, r3) {
                var t5 = Q[n3];
                s3 % Math.floor(Math.random() * t5 + 1) == 0 && (e4.variant = c2.getSpriteVariant());
              }
              e4.opacity < 0 && (i3 ? a3.recreateSparkle(e4) : e4.opacity = c2.getOpacity());
            }), a3.drawSparkles(), a3.updateSparkles();
          });
        } }, { key: "parentResizeObserver", value: function() {
          var e3 = window.getComputedStyle(this.sparkleWrapper.parentNode), t3 = e3["box-sizing"], r3 = "horizontal-tb" === e3["writing-mode"], n3 = this;
          new U(function(e4) {
            var t4, o2, i3, a3 = function(e5, t5) {
              var r4 = "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
              if (!r4) {
                if (Array.isArray(e5) || (r4 = J(e5))) {
                  r4 && (e5 = r4);
                  var n4 = 0, o3 = function() {
                  };
                  return { s: o3, n: function() {
                    return n4 >= e5.length ? { done: true } : { done: false, value: e5[n4++] };
                  }, e: function(e6) {
                    throw e6;
                  }, f: o3 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var i4, a4 = true, s4 = false;
              return { s: function() {
                r4 = r4.call(e5);
              }, n: function() {
                var e6 = r4.next();
                return a4 = e6.done, e6;
              }, e: function(e6) {
                s4 = true, i4 = e6;
              }, f: function() {
                try {
                  a4 || null == r4.return || r4.return();
                } finally {
                  if (s4)
                    throw i4;
                }
              } };
            }(e4);
            try {
              for (a3.s(); !(t4 = a3.n()).done; ) {
                var s3 = t4.value.borderBoxSize[0], c3 = s3.blockSize, u2 = s3.inlineSize, l2 = (i3 = 2, function(e5) {
                  if (Array.isArray(e5))
                    return e5;
                }(o2 = r3 ? [u2, c3] : [c3, u2]) || function(e5, t5) {
                  var r4 = null == e5 ? null : "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
                  if (null != r4) {
                    var n4, o3, i4, a4, s4 = [], c4 = true, u3 = false;
                    try {
                      if (i4 = (r4 = r4.call(e5)).next, 0 === t5) {
                        if (Object(r4) !== r4)
                          return;
                        c4 = false;
                      } else
                        for (; !(c4 = (n4 = i4.call(r4)).done) && (s4.push(n4.value), s4.length !== t5); c4 = true)
                          ;
                    } catch (e6) {
                      u3 = true, o3 = e6;
                    } finally {
                      try {
                        if (!c4 && null != r4.return && (a4 = r4.return(), Object(a4) !== a4))
                          return;
                      } finally {
                        if (u3)
                          throw o3;
                      }
                    }
                    return s4;
                  }
                }(o2, i3) || J(o2, i3) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }()), p2 = l2[0], f2 = l2[1];
                n3.sizeCanvas(p2, f2);
              }
            } catch (e5) {
              a3.e(e5);
            } finally {
              a3.f();
            }
          }).observe(this.sparkleWrapper.parentNode, { box: t3 });
        } }, { key: "sizeCanvas", value: function(e3, t3) {
          if (this.sparkleCanvas) {
            var r3 = this.props.overflowPx;
            this.sparkleCanvas.width = e3 + 2 * r3, this.sparkleCanvas.height = t3 + 2 * r3;
          }
        } }, { key: "start", value: function() {
          this.createSparkles(), this.drawSparkles(), this.updateSparkles();
        } }, { key: "end", value: function() {
          window.cancelAnimationFrame(this.animationFrame), this.sparkles = [];
        } }, { key: "init", value: function() {
          if (this.sparkleCanvas) {
            var e3 = new Image();
            e3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAHCAYAAAD5wDa1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDNFMzM5REEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDNFMzM5RUEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0M0UzMzlCQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0M0UzMzlDQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jzOsUQAAANhJREFUeNqsks0KhCAUhW/Sz6pFSc1AD9HL+OBFbdsVOKWLajH9EE7GFBEjOMxcUNHD8dxPBCEE/DKyLGMqraoqcd4j0ChpUmlBEGCFRBzH2dbj5JycJAn90CEpy1J2SK4apVSM4yiKonhePYwxMU2TaJrm8BpykpWmKQ3D8FbX9SOO4/tOhDEG0zRhGAZo2xaiKDLyPGeSyPM8sCxr868+WC/mvu9j13XBtm1ACME8z7AsC/R9r0fGOf+arOu6jUwS7l6tT/B+xo+aDFRo5BykHfav3/gSYAAtIdQ1IT0puAAAAABJRU5ErkJggg==", this.sprite = e3, this.sparkleContext = this.sparkleCanvas.getContext("2d"), this.parentResizeObserver(), this.start();
          } else
            console.warn("No sparkles today :( The canvas did not render.");
        } }, { key: "render", value: function() {
          var e3 = this, t3 = this.props.overflowPx;
          return o().createElement("span", { ref: function(t4) {
            e3.sparkleWrapper = t4;
          }, style: { width: "100%", height: "100%", overflow: "visible", position: "absolute", top: "-".concat(t3, "px"), left: "-".concat(t3, "px"), pointerEvents: "none" } }, o().createElement("canvas", { ref: function(t4) {
            e3.sparkleCanvas = t4;
          } }));
        } }], n2 = [{ key: "getSpriteVariant", value: function() {
          return _[Math.floor(Math.random() * _.length)];
        } }, { key: "getOpacity", value: function() {
          return Math.random();
        } }, { key: "randomHexColor", value: function() {
          return "#".concat("000000".concat(Math.floor(16777215 * Math.random()).toString(16)).slice(-6));
        } }], r2 && V(t2.prototype, r2), n2 && V(t2, n2), Object.defineProperty(t2, "prototype", { writable: false }), c2;
      }(o().Component);
      q.defaultProps = { color: "#FFF", count: 50, minSize: 5, maxSize: 8, overflowPx: 20, fadeOutSpeed: 50, newSparkleOnFadeOut: true, flicker: true, flickerSpeed: "normal" };
      const K = q;
      module.exports = t;
    })();
  }
});
export default require_dist();
//# sourceMappingURL=react-sparkle.js.map
