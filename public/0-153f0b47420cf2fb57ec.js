(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,n){"use strict";var r=n(9);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var a=r(n(151)),i=r(n(57)),o=r(n(7)),s=r(n(54)),l=r(n(55)),c=r(n(4)),d=r(n(0)),u=n(26),p=n(149);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},m=function(e){function t(t){var n;n=e.call(this,t)||this,(0,l.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,a=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(a.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,o=void 0===r?this.defaultGetProps:r,s=t.onClick,l=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,m=(0,a.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var g=f(n);return d.default.createElement(u.Link,(0,i.default)({to:g,state:c,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(n,{state:c,replace:h})),!0}},m))},t}(d.default.Component);m.propTypes=(0,i.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var g=d.default.forwardRef(function(e,t){return d.default.createElement(m,(0,i.default)({innerRef:t},e))});t.default=g;var y=function(e,t){window.___navigate(f(e),t)};t.navigate=y;var v=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=v;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),v(e)}},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return h}),n.d(t,"useStaticQuery",function(){return m});var r=n(8),a=n(0),i=n.n(a),o=n(4),s=n.n(o),l=n(148),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var d=n(150),u=n.n(d);n.d(t,"PageRenderer",function(){return u.a});var p=n(35);n.d(t,"parsePath",function(){return p.a});var f=i.a.createContext({}),h=function(e){return Object(r.c)(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(r.c)("div",null,"Loading (StaticQuery)")})},m=function(e){i.a.useContext;var t=i.a.useContext(f);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},150:function(e,t,n){var r;e.exports=(r=n(152))&&r.default||r},151:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},152:function(e,t,n){"use strict";n.r(t);n(56);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=n(58),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"a",function(){return d}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return p});var r=n(154),a={parentBg:"#2C365E",color:"#F7F7F8",childBg:"#445492",border:"#181E34"},i=a.parentBg,o=a.color,s=a.childBg,l=a.border,c=Object(r.a)("div",{target:"esb8sd10"})("display:flex;min-height:100vh;flex-direction:column;font-family:'avenir';color:",o,";"),d=Object(r.a)("div",{target:"esb8sd11"})("flex:1;background:",i,";padding-top:10px;"),u=Object(r.a)("div",{target:"esb8sd12"})({name:"dvxtzn",styles:"display:flex;flex-direction:column;align-items:center;"}),p=Object(r.a)("div",{target:"esb8sd13"})("font-family:'avenir';width:80%;background:",s,";padding:15px;border:2px solid ",l,";")},154:function(e,t,n){"use strict";var r=n(0),a=n(62),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=Object(a.a)(function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),s=n(59),l=n.n(s),c=n(8),d=n(18),u=n(15),p=o,f=function(e){return"theme"!==e&&"innerRef"!==e},h=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:f};t.a=function e(t,n){var a,i,o;void 0!==n&&(a=n.label,o=n.target,i=t.__emotion_forwardProp&&n.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp);var s=t.__emotion_real===t,p=s&&t.__emotion_base||t;"function"!=typeof i&&s&&(i=t.__emotion_forwardProp);var f=i||h(p),m=!f("as");return function(){var g=arguments,y=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&y.push("label:"+a+";"),null==g[0]||void 0===g[0].raw)y.push.apply(y,g);else{y.push(g[0][0]);for(var v=g.length,b=1;b<v;b++)y.push(g[b],g[0][b])}var w=Object(c.d)(function(e,t,n){return Object(r.createElement)(c.b.Consumer,null,function(a){var s=m&&e.as||p,l="",c=[],g=e;if(null==e.theme){for(var v in g={},e)g[v]=e[v];g.theme=a}"string"==typeof e.className&&(l+=Object(d.a)(t.registered,c,e.className));var b=Object(u.a)(y.concat(c),t.registered,g);Object(d.b)(t,b,"string"==typeof s),l+=t.key+"-"+b.name,void 0!==o&&(l+=" "+o);var w=m&&void 0===i?h(s):f,k={};for(var x in e)m&&"as"===x||w(x)&&(k[x]=e[x]);return k.className=l,k.ref=n||e.innerRef,Object(r.createElement)(s,k)})});return w.displayName=void 0!==a?a:"Styled("+("string"==typeof p?p:p.displayName||p.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=p,w.__emotion_styles=y,w.__emotion_forwardProp=i,Object.defineProperty(w,"toString",{value:function(){return"."+o}}),w.withComponent=function(t,r){return e(t,void 0!==r?l()({},n||{},r):n).apply(void 0,y)},w}}},155:function(e,t,n){"use strict";var r=n(8),a=(n(0),n(154)),i=a.a.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){i[e]=i(e)});var o=n(4),s=n(156),l=n(149),c=n(153),d=Object(a.a)("div",{target:"e1dwugdh0"})({name:"djzghw",styles:"display:flex;flex-direction:column;text-align:center;width:60%;"}),u=Object(a.a)("div",{target:"e1dwugdh1"})({name:"jn46sz",styles:"display:flex;width:100%;align-items:center;justify-content:space-around;background:#fff;color:#445492;padding-bottom:10px;border-bottom:2px solid #181e34;"}),p=function(e){var t=e.data,n=t.site.siteMetadata.title,a=t.site.siteMetadata.description;return Object(r.c)(u,null,Object(r.c)(d,null,Object(r.c)("h2",{style:{marginBottom:0}},n),Object(r.c)("p",null,a)))},f=function(){return Object(r.c)(l.StaticQuery,{query:"3501179355",render:function(e){return Object(r.c)(p,{data:e})},data:s})},h=function(e){var t=e.text,n=void 0===t?"Created by TG":t;return Object(r.c)("div",{style:{backgroundColor:"#363732"}},Object(r.c)("p",null,n))};n.d(t,"a",function(){return c.e});var m={name:"opo8wj",styles:"body{margin:0;padding:0;}a{color:#fff;text-decoration:none;transition:all 0.3s ease-in-out;}a:hover{transform:scale(1.1);}"},g=function(e){var t=e.children;return Object(r.c)(c.d,null,Object(r.c)(r.a,{styles:m}),Object(r.c)(f,null),Object(r.c)(c.a,null,t),Object(r.c)(h,null))};g.propTypes={children:o.func};t.b=g},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Functor.xyz",description:"A personal blog created with one goal in mind: Bringing readers from A to Z in the world of FP."}}}}}}]);
//# sourceMappingURL=0-153f0b47420cf2fb57ec.js.map