(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{T4Lz:function(e,t,o){"use strict";var r=o("wx14"),n=o("vOnD"),i=o("q1tI"),a=o.n(i),c=o("Wbzz"),l=o("vrFN"),s=o("Rnav");var d={blue:"#003e90",darkBlue:"#000032",lightBlue:"#00aaff",green:"#89ba17",darkGreen:"#008c65",lightGreen:"#00d69b",yellowgreen:"#a5dc70",yellow:"#f9ff00",darkYellow:"#ffca35",orange:"#FF7D00",lightYellow:"#fbff6c",gray:"#464849",lightGray:"#d8d8d8",lighterGray:"#efefef",lightestGray:"#f6f6f6",darkGray:"#2a2c30",maxWidth:"40em",smallBorder:"0.1em",mediumBorder:"0.15em",largeBorder:"0.2em",smallBorderRadius:"0.2em",mediumBorderRadius:"0.5em",largeBorderRadius:"1em",shortTrans:"0.3s",mediumTrans:"0.6s",longTrans:"1s"},m=o("HRZ9"),h=o("crtd"),p=i.forwardRef((function(e,t){return i.createElement(h.a,Object(m.a)({iconAttrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),i.createElement("circle",{cx:12,cy:12,r:10,key:"k0"}),i.createElement("polyline",{points:"8 12 12 16 16 12",key:"k1"}),i.createElement("line",{x1:12,x2:12,y1:8,y2:16,key:"k2"}))}));p.displayName="ArrowDownCircle";var b=i.forwardRef((function(e,t){return i.createElement(h.a,Object(m.a)({iconAttrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),i.createElement("circle",{cx:12,cy:12,r:10,key:"k0"}),i.createElement("polyline",{points:"16 12 12 8 8 12",key:"k1"}),i.createElement("line",{x1:12,x2:12,y1:16,y2:8,key:"k2"}))}));b.displayName="ArrowUpCircle";const u=Object(n.d)(p).attrs(e=>({as:"up"===e.direction&&b})).withConfig({displayName:"styles__Arrow",componentId:"sc-1avm3yh-0"})(["z-index:10;background:"," !important;border-radius:50% !important;padding:0 !important;color:white;transition:",";position:absolute;bottom:calc(70px + 0.5vw);margin-right:calc(10px + 1vw);opacity:",";visibility:",";width:calc(30px + 2vw);height:calc(30px + 2vw);cursor:pointer;:hover{transform:scale(1.15);background:",";}"],e=>e.theme.lightBlue,e=>e.theme.shortTrans,e=>e.show?1:0,e=>e.show?"visible":"hidden",e=>e.theme.orange);var w=o("qKvR");var g=o("bBPc");var f={fonts:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',minFontSize:.9,maxFontSize:5,minLineHeight:1.3,maxLineHeight:1.7};o("Yqwa");const{phone:y,desktop:v}=g.a.screens,{fonts:x,minFontSize:k,maxFontSize:j,minLineHeight:O,maxLineHeight:B}=f,z=Object(n.b)(["a{text-decoration:none;color:",";:hover{color:",';}}div[role="group"][tabindex]{min-height:100vh;display:flex;flex-direction:column;}.btn{background:',";color:white !important;border-radius:",";padding:0.4em 0.6em;font-size:",";transition:",";margin:0 auto;:hover{background:",";}}"],e=>e.theme.blue,e=>e.theme.lightBlue,e=>e.theme.darkBlue,e=>e.theme.smallBorderRadius,e=>e.size,e=>e.theme.shortTrans,e=>e.theme.lightBlue),T=e=>{let{children:t,site:o,path:i,...c}=e;return Object(w.b)(n.a,{theme:d},Object(w.b)(a.a.Fragment,null,Object(w.b)(l.a,Object(r.a)({site:o.meta},c)),Object(w.b)(z,null),Object(w.b)(s.a,{site:o.meta,path:i}),t,Object(w.b)(E,{showBelow:1500})))};t.a=e=>Object(w.b)(c.StaticQuery,{query:"366938907",render:t=>Object(w.b)(T,Object(r.a)({},t,e))});var E=Object(n.d)((function(e){let{direction:t="up",by:o,to:n,...a}=e;const{showBelow:c,className:l,size:s="calc(1em + 30px)"}=a;if(!["up","down"].includes(t))throw TypeError("Scroll 'direction' prop must be either 'up' or 'down'");if(n&&("number"!=typeof n||n<=0))throw TypeError("Scroll 'to' prop must be a positive number");if(o&&"number"!=typeof o)throw TypeError("Scroll 'by' prop must be a number");const{0:d,1:m}=Object(i.useState)(!c),h=e=>{let{mode:t,to:o}=e;return window["scroll"+t]({top:o,behavior:"smooth"})},p=()=>{window.pageYOffset>c?d||m(!0):d&&m(!1)};Object(i.useEffect)(()=>{if(c)return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)});const b={show:d,direction:t,className:l,size:s};return Object(w.b)(u,Object(r.a)({onClick:()=>{h(n?{mode:"To",to:n*window.innerHeight}:o?{mode:"By",to:o*window.innerHeight}:"up"===t?{mode:"To",to:0}:{mode:"To",to:document.body.scrollHeight})}},b))})).withConfig({displayName:"Global___StyledScroll",componentId:"sc-m4lkxp-0"})(["position:fixed;right:1em;"])},Yqwa:function(e,t,o){},w2l6:function(e,t,o){"use strict";o.r(t);var r=o("wTIg"),n=(o("q1tI"),o("T4Lz")),i=o("Bl7J"),a=o("vrFN"),c=o("qKvR");const l=Object(r.a)("div",{target:"e1lc3qoy0"})({name:"odf2s2",styles:"background-color:#000032;width:100%;min-height:100vh;color:white;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:calc(150px + 5vw) 0;h1#h404{font-size:calc(35px + 4vw);line-height:calc(50px + 4vw);margin:calc(15px + 4vw);}p#p404{font-size:calc(12px + 2.5vw);line-height:calc(40px + 2.5vw);margin:calc(15px + 4vw);opacity:0.7;}"});t.default=()=>Object(c.b)(n.a,{pageTitle:"404",path:"/404",description:"404 - Page Not Found"},Object(c.b)(i.a,null,Object(c.b)(a.a,{title:"404: Not found"}),Object(c.b)(l,null,Object(c.b)("h1",{id:"h404"},"Page Not Found!"),Object(c.b)("p",{id:"p404"},"Uh oh, there doesn't seem to be any page here!"))))}}]);
//# sourceMappingURL=component---src-pages-404-js-4cb910fa1e2c0728c55d.js.map