(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    4322: function(e, s, l) {
        "use strict";
        l.r(s),
        l.d(s, {
            default: function() {
                return u
            }
        });
        var t = l(5785)
          , a = l(7294)
          , n = l(1044)
          , i = l(6215)
          , r = l(3802)
          , c = l(6373)
          , o = l(5893)
          , d = function(e) {
            var s = e.selected
              , l = void 0 !== s && s
              , t = e.onClick
              , a = void 0 === t ? function(e) {
                return e
            }
            : t;
            return (0,
            o.jsx)("div", {
                className: l ? "circle selected" : "circle",
                onClick: a
            })
        }
          , x = function(e) {
            var s = e.totalStars
              , l = (0,
            a.useState)(0)
              , n = l[0]
              , i = l[1];
            return (0,
            o.jsx)("div", {
                className: "circle-rating mr-2",
                children: (0,
                t.Z)(Array(s)).map((function(e, s) {
                    return (0,
                    o.jsx)(d, {
                        selected: s < n,
                        onClick: function() {
                            return i(s + 1)
                        }
                    }, s)
                }
                ))
            })
        };
        var m = function() {
            var e = (0,
            a.useState)(c.s9[0])
              , s = e[0]
              , l = e[1]
              , t = (0,
            a.useState)(c.pF[0])
              , d = t[0]
              , m = t[1];
            return (0,
            o.jsx)(o.Fragment, {
                children: (0,
                o.jsxs)("div", {
                    className: "mt-10 max-w-7xl mx-auto",
                    children: [(0,
                    o.jsx)("h1", {
                        className: "text-4xl m-8 font-bold",
                        children: " My Cart"
                    }), (0,
                    o.jsxs)("div", {
                        className: "grid grid-cols-12 gap-6",
                        children: [(0,
                        o.jsxs)("div", {
                            className: "col-span-12 sm:col-span-7 md:col-span-12 lg:col-span-7 xxl:col-span-7",
                            children: [(0,
                            o.jsx)("div", {
                                className: "bg-white py-8 px-1 sm:px-4 shadow-lg rounded-lg my-4 mx-4 sm:px-1",
                                children: (0,
                                o.jsxs)("div", {
                                    className: "flex justify-around px-4 items-center",
                                    children: [(0,
                                    o.jsx)("div", {
                                        className: "flex mr-5 sm:mr-10",
                                        children: (0,
                                        o.jsx)("img", {
                                            className: "h-7 w-7 sm:w-10 sm:h-10",
                                            src: "/delete-btn.png",
                                            alt: "image"
                                        })
                                    }), (0,
                                    o.jsxs)("div", {
                                        className: "mr-4 bg-blue-300 shadow-xl rounded-lg w-60 h-40",
                                        children: [(0,
                                        o.jsx)("div", {
                                            className: "flex bg-white py-2 px-1 sm:px-2 shadow-xl rounded-lg my-4 mx-4 sm:px-1 w-9",
                                            children: (0,
                                            o.jsx)("img", {
                                                className: "h-5 w-5 ",
                                                src: "/file-icon-blue.png",
                                                alt: "image"
                                            })
                                        }), (0,
                                        o.jsx)("div", {
                                            className: "flex text-white my-2 font-medium sm:text-lg ml-4 text-base",
                                            children: "Google Doc"
                                        }), (0,
                                        o.jsx)("div", {
                                            className: "text-white ml-4 sm:text-sm font-light text-xs",
                                            children: "Used for Business"
                                        })]
                                    }), (0,
                                    o.jsxs)("div", {
                                        className: "",
                                        children: [(0,
                                        o.jsx)("p", {
                                            className: "sm:text-2xl font-light text-xl",
                                            children: "Google Doc"
                                        }), (0,
                                        o.jsx)("div", {
                                            children: (0,
                                            o.jsxs)("div", {
                                                className: "flex justify-start items-center flex-col sm:flex-row mt-1",
                                                children: [(0,
                                                o.jsx)("div", {
                                                    className: "",
                                                    children: (0,
                                                    o.jsx)(x, {
                                                        totalStars: 3
                                                    })
                                                }), (0,
                                                o.jsx)("div", {
                                                    className: "py-2 md:col-span-2 col-span-6",
                                                    children: (0,
                                                    o.jsx)(n.R, {
                                                        value: s,
                                                        onChange: l,
                                                        children: (0,
                                                        o.jsxs)("div", {
                                                            className: "relative mt-1",
                                                            children: [(0,
                                                            o.jsxs)(n.R.Button, {
                                                                className: "relative w-28 px-3 py-2 text-left border border-gray-300 bg-white  rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm focus:placeholder-green-400 focus:bg-white focus:border-green-400 ",
                                                                children: [(0,
                                                                o.jsx)("span", {
                                                                    className: "truncate text-base block  py-0.3",
                                                                    children: s.level
                                                                }), (0,
                                                                o.jsx)("span", {
                                                                    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
                                                                    children: (0,
                                                                    o.jsx)(r.Ta4, {
                                                                        className: "w-5 h-5 text-gray-400",
                                                                        "aria-hidden": "true"
                                                                    })
                                                                })]
                                                            }), (0,
                                                            o.jsx)(i.u, {
                                                                as: a.Fragment,
                                                                leave: "transition ease-in duration-100",
                                                                leaveFrom: "opacity-100",
                                                                leaveTo: "opacity-0",
                                                                children: (0,
                                                                o.jsx)(n.R.Options, {
                                                                    className: "absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                                                                    children: c.s9.map((function(e, s) {
                                                                        return (0,
                                                                        o.jsx)(n.R.Option, {
                                                                            className: function(e) {
                                                                                var s = e.active;
                                                                                return "".concat(s ? "text-black bg-gray-100" : "text-gray-900", "\n                          cursor-default select-none relative py-2 pl-10 pr-4")
                                                                            },
                                                                            value: e,
                                                                            children: function(s) {
                                                                                var l = s.selected;
                                                                                s.active;
                                                                                return (0,
                                                                                o.jsxs)(o.Fragment, {
                                                                                    children: [(0,
                                                                                    o.jsx)("span", {
                                                                                        className: "".concat(l ? "font-medium" : "font-normal", " block truncate"),
                                                                                        children: e.level
                                                                                    }), l ? (0,
                                                                                    o.jsx)("span", {
                                                                                        className: "".concat("text-amber-600", "\n                                absolute inset-y-0 left-0 flex items-center pl-3"),
                                                                                        children: (0,
                                                                                        o.jsx)(r.nQG, {
                                                                                            className: "w-5 h-5",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    }) : null]
                                                                                })
                                                                            }
                                                                        }, s)
                                                                    }
                                                                    ))
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0,
                                        o.jsx)("div", {
                                            className: "text-gray-400 font-light",
                                            children: "150 THB"
                                        })]
                                    })]
                                })
                            }), (0,
                            o.jsx)("div", {
                                className: "bg-white py-8 px-1 sm:px-4 shadow-lg rounded-lg my-4 mx-4 sm:px-1 mt-6",
                                children: (0,
                                o.jsxs)("div", {
                                    className: "flex justify-around px-4 items-center",
                                    children: [(0,
                                    o.jsx)("div", {
                                        className: "flex mr-5 sm:mr-10",
                                        children: (0,
                                        o.jsx)("img", {
                                            className: "h-7 w-7 sm:w-10 sm:h-10",
                                            src: "/delete-btn.png",
                                            alt: "image"
                                        })
                                    }), (0,
                                    o.jsxs)("div", {
                                        className: "mr-4 bg-yellow-500 shadow-xl rounded-lg w-60 h-40",
                                        children: [(0,
                                        o.jsx)("div", {
                                            className: "flex bg-white py-2 px-1 sm:px-2 shadow-xl rounded-lg my-4 mx-4 sm:px-1 w-9",
                                            children: (0,
                                            o.jsx)("img", {
                                                className: "h-5 w-5 ",
                                                src: "/file-orange.png",
                                                alt: "image"
                                            })
                                        }), (0,
                                        o.jsx)("div", {
                                            className: "flex text-white my-2 font-medium sm:text-lg ml-4 text-base",
                                            children: "Google Slides"
                                        }), (0,
                                        o.jsx)("div", {
                                            className: "text-white ml-4 sm:text-sm font-light text-xs",
                                            children: "Used for Business"
                                        })]
                                    }), (0,
                                    o.jsxs)("div", {
                                        className: "",
                                        children: [(0,
                                        o.jsx)("p", {
                                            className: "sm:text-2xl font-light text-xl",
                                            children: "Google Slides"
                                        }), (0,
                                        o.jsx)("div", {
                                            children: (0,
                                            o.jsxs)("div", {
                                                className: "flex justify-start items-center flex-col sm:flex-row mt-1",
                                                children: [(0,
                                                o.jsx)("div", {
                                                    className: "",
                                                    children: (0,
                                                    o.jsx)(x, {
                                                        totalStars: 3
                                                    })
                                                }), (0,
                                                o.jsx)("div", {
                                                    className: "py-2 md:col-span-2 col-span-6",
                                                    children: (0,
                                                    o.jsx)(n.R, {
                                                        value: d,
                                                        onChange: m,
                                                        children: (0,
                                                        o.jsxs)("div", {
                                                            className: "relative mt-1",
                                                            children: [(0,
                                                            o.jsxs)(n.R.Button, {
                                                                className: "relative w-28 px-3 py-2 text-left border border-gray-300 bg-white  rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm focus:placeholder-green-400 focus:bg-white focus:border-green-400 ",
                                                                children: [(0,
                                                                o.jsx)("span", {
                                                                    className: "truncate text-base block  py-0.3",
                                                                    children: d.leveltwo
                                                                }), (0,
                                                                o.jsx)("span", {
                                                                    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
                                                                    children: (0,
                                                                    o.jsx)(r.Ta4, {
                                                                        className: "w-5 h-5 text-gray-400",
                                                                        "aria-hidden": "true"
                                                                    })
                                                                })]
                                                            }), (0,
                                                            o.jsx)(i.u, {
                                                                as: a.Fragment,
                                                                leave: "transition ease-in duration-100",
                                                                leaveFrom: "opacity-100",
                                                                leaveTo: "opacity-0",
                                                                children: (0,
                                                                o.jsx)(n.R.Options, {
                                                                    className: "absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                                                                    children: c.pF.map((function(e, s) {
                                                                        return (0,
                                                                        o.jsx)(n.R.Option, {
                                                                            className: function(e) {
                                                                                var s = e.active;
                                                                                return "".concat(s ? "text-black bg-gray-100" : "text-gray-900", "\n                          cursor-default select-none relative py-2 pl-10 pr-4")
                                                                            },
                                                                            value: e,
                                                                            children: function(s) {
                                                                                var l = s.selected;
                                                                                s.active;
                                                                                return (0,
                                                                                o.jsxs)(o.Fragment, {
                                                                                    children: [(0,
                                                                                    o.jsx)("span", {
                                                                                        className: "".concat(l ? "font-medium" : "font-normal", " block truncate"),
                                                                                        children: e.leveltwo
                                                                                    }), l ? (0,
                                                                                    o.jsx)("span", {
                                                                                        className: "".concat("text-amber-600", "\n                                absolute inset-y-0 left-0 flex items-center pl-3"),
                                                                                        children: (0,
                                                                                        o.jsx)(r.nQG, {
                                                                                            className: "w-5 h-5",
                                                                                            "aria-hidden": "true"
                                                                                        })
                                                                                    }) : null]
                                                                                })
                                                                            }
                                                                        }, s)
                                                                    }
                                                                    ))
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0,
                                        o.jsx)("div", {
                                            className: "text-gray-400 font-light",
                                            children: "150 THB"
                                        })]
                                    })]
                                })
                            })]
                        }), (0,
                        o.jsx)("div", {
                            className: "col-span-12 sm:col-span-5 md:col-span-12 lg:col-span-5 xxl:col-span-5",
                            children: (0,
                            o.jsxs)("div", {
                                className: "bg-white py-4 px-4 border border-gray-200 rounded-lg my-4 mx-4",
                                children: [(0,
                                o.jsx)("div", {
                                    className: "text-2xl py-2 mb-4 font-medium",
                                    children: (0,
                                    o.jsx)("p", {
                                        children: "Order Info"
                                    })
                                }), (0,
                                o.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [(0,
                                    o.jsx)("div", {
                                        className: "text-lg py-2 text-gray-400 font-light",
                                        children: (0,
                                        o.jsx)("p", {
                                            children: "Subtotal"
                                        })
                                    }), (0,
                                    o.jsx)("div", {
                                        className: "text-lg py-2",
                                        children: (0,
                                        o.jsx)("div", {
                                            className: "flex flex-row space-x-2 w-full items-center rounded-lg text-gray-400 font-light",
                                            children: (0,
                                            o.jsx)("p", {
                                                children: "THB 300"
                                            })
                                        })
                                    })]
                                }), (0,
                                o.jsxs)("div", {
                                    className: "py-2 border-b mb-2 pb-10 flex justify-around mt-6",
                                    children: [(0,
                                    o.jsx)("div", {
                                        className: "mt-3 mr-4",
                                        children: (0,
                                        o.jsx)("img", {
                                            className: "h-5 w-5",
                                            src: "/cupon-icon.png"
                                        })
                                    }), (0,
                                    o.jsx)("div", {
                                        className: "mr-6",
                                        children: (0,
                                        o.jsx)("input", {
                                            name: "shippingcart",
                                            placeholder: "Promotion code",
                                            type: "text",
                                            className: "text-md block px-3 py-2.5 mr-14 rounded w-full bg-white border border-gray-200 placeholder-gray-300  focus:placeholder-gray-400 focus:bg-white focus:border-green-400 focus:outline-none"
                                        })
                                    }), (0,
                                    o.jsx)("div", {
                                        className: "",
                                        children: (0,
                                        o.jsx)("button", {
                                            type: "button",
                                            className: "text-lg font-semibold text-green-400 w-full rounded-2xl px-10 py-2 block border border-green-400 hover:text-white hover:bg-green-400",
                                            children: "Apply"
                                        })
                                    })]
                                }), (0,
                                o.jsxs)("div", {
                                    className: "flex justify-between items-center text-center mt-6",
                                    children: [(0,
                                    o.jsx)("div", {
                                        className: "text-xl",
                                        children: (0,
                                        o.jsx)("p", {
                                            children: "Total Payment"
                                        })
                                    }), (0,
                                    o.jsx)("div", {
                                        className: "text-lg py-2",
                                        children: (0,
                                        o.jsx)("div", {
                                            className: "flex flex-row space-x-2 w-full items-center  font-semibold text-4xl text-green-400",
                                            children: (0,
                                            o.jsx)("p", {
                                                children: "THB 300"
                                            })
                                        })
                                    })]
                                }), (0,
                                o.jsx)("div", {
                                    className: "mt-10 mb-4",
                                    children: (0,
                                    o.jsx)("button", {
                                        type: "button",
                                        className: "mt-3 text-lg font-semibold bg-green-400 w-full text-black rounded-2xl px-6 py-3 block shadow-xl hover:bg-green-500",
                                        children: "Login To Checkout"
                                    })
                                })]
                            })
                        })]
                    })]
                })
            })
        };
        function u() {
            return (0,
            o.jsx)(o.Fragment, {
                children: (0,
                o.jsx)(m, {})
            })
        }
    },
    8581: function(e, s, l) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return l(4322)
        }
        ])
    }
}, function(e) {
    e.O(0, [897, 774, 888, 179], (function() {
        return s = 8581,
        e(e.s = s);
        var s
    }
    ));
    var s = e.O();
    _N_E = s
}
]);
