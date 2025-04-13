(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/Carousel.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Carousel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const slides = [
    {
        id: 1,
        url: "/Carousel/pic-1.jpg",
        alt: "pic-1"
    },
    {
        id: 2,
        url: "/Carousel/pic-2.jpg",
        alt: "pic-2"
    },
    {
        id: 3,
        url: "/Carousel/pic-3.jpg",
        alt: "pic-3"
    },
    {
        id: 4,
        url: "/Carousel/pic-4.jpg",
        alt: "pic-4"
    },
    {
        id: 5,
        url: "/Carousel/pic-5.jpg",
        alt: "pic-5"
    }
];
function Carousel() {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const nextSlide = ()=>setCurrent((prev)=>(prev + 1) % slides.length);
    const prevSlide = ()=>setCurrent((prev)=>(prev - 1 + slides.length) % slides.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full  mx-auto overflow-hidden rounded-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex transition-transform duration-500",
                style: {
                    transform: `translateX(-${current * 100}% )`
                },
                children: slides.map((slide)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex-shrink-0  h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: slide.url,
                            alt: slide.alt,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Carousel.jsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this)
                    }, slide.id, false, {
                        fileName: "[project]/src/app/components/Carousel.jsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Carousel.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: prevSlide,
                className: "absolute  left-2 top-1/2 transform -translate-y-1/2 text-white  px-3 py-1 rounded-full",
                children: "◀"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Carousel.jsx",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: nextSlide,
                className: "absolute  right-2 top-1/2 transform -translate-y-1/2 text-white  px-3 py-1 rounded-full",
                children: "▶"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Carousel.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Carousel.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Carousel, "bEU80ZmgFkvFIa3mtt0tHYEkgcI=");
_c = Carousel;
var _c;
__turbopack_context__.k.register(_c, "Carousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/app/page.js'

Expression expected`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
}]);

//# sourceMappingURL=src_app_70e2c84f._.js.map