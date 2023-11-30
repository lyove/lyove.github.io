"use strict";(self.webpackChunknext_popover_document=self.webpackChunknext_popover_document||[]).push([[103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},i="Usage",s={unversionedId:"getting-started/usage",id:"getting-started/usage",title:"Usage",description:"Basic",source:"@site/docs/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/next-popover/docs/getting-started/usage",draft:!1,editUrl:"https://github.com/lyove/next-popover/docs/getting-started/usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/next-popover/docs/getting-started/install"},next:{title:"Configuration",permalink:"/next-popover/docs/category/configuration"}},l={},p=[{value:"Basic",id:"basic",level:3},{value:"CSS Animation",id:"css-animation",level:3},{value:"Scroll",id:"scroll",level:3},{value:"AutoUpdate",id:"autoupdate",level:3},{value:"Hook",id:"hook",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic"},"Basic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import Popover, { PlacementType, EmitType } from "next-popover";\n\nconst trigger = document.querySelector(".trigger");\n\nconst content = "Hello Next-Popover";\n// or\n// const content = document.createElement(\'div\'); // You need to pop up the displayed content\n// content.classList.add(\'content\');\n// content.innerHTML = "Hello Next-Popover";\n\nconst appendTo = document.querySelector(".mount-container"); // default: document.body\n\nconst popover = new Popover({\n  trigger, // required\n  content, // required\n  appendTo,\n  placement: PlacementType.Top, // Set the position of the popover\n  emit: EmitType.Hover, // Set to open the popover when the mouse hovers over the trigger\n});\n\ntrigger.onclick = () => {\n  popover.toggle();\n  // or\n  // if (popover.opened) {\n  //   popover.close();\n  // } else {\n  //   popover.open();\n  // }\n};\n\n// if you don\'t need it anymore\npopover.destroy();\n')),(0,r.kt)("admonition",{title:"My tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If use CDN, use ",(0,r.kt)("inlineCode",{parentName:"p"},"new NextPopover.default({...})"),", note ",(0,r.kt)("inlineCode",{parentName:"p"},"default"))),(0,r.kt)("h3",{id:"css-animation"},"CSS Animation"),(0,r.kt)("p",null,"The animationClass parameter allows you to add CSS animations when showing and hiding the popover."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const popover = new Popover({\n  animationClass: "fade",\n});\n')),(0,r.kt)("p",null,"Popover will add the following 6 classes through the animationClass."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"`${animationClass}-enter-from` // Starts displaying and is removed in the next frame.\n`${animationClass}-enter-active` // Added in the next frame and removed when the animation ends.\n`${animationClass}-enter-to` // Added in the next frame and removed when the animation ends.\n`${animationClass}-exit-from` // Starts hiding and is removed in the next frame.\n`${animationClass}-exit-active` // Added in the next frame and removed when the animation ends.\n`${animationClass}-exit-to` // Added in the next frame and removed when the animation ends.\n`${animationClass}-${Placement}`; // Current popover placement\n")),(0,r.kt)("p",null,"You can write CSS styles like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".fade-enter-from,\n.fade-exit-to {\n  transform: scale(0.7);\n  opacity: 0;\n}\n.fade-enter-active,\n.fade-exit-active {\n  transition: transform 0.1s ease, opacity 0.1s ease;\n}\n")),(0,r.kt)("h3",{id:"scroll"},"Scroll"),(0,r.kt)("p",null,"The closeOnScroll parameter controls whether the popover automatically closes when the trigger element is scrolled."),(0,r.kt)("h3",{id:"autoupdate"},"AutoUpdate"),(0,r.kt)("p",null,"The autoUpdate parameter controls whether the popover's position is automatically updated when the size of the mount container, content, or trigger element changes. This feature relies on the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"},"ResizeObserver"),"."),(0,r.kt)("h3",{id:"hook"},"Hook"),(0,r.kt)("p",null,"Popover provides rich hook functions that can execute code during various stages of the popover's lifecycle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Popover({\n  onBeforeEnter() {\n    // Executed before the CSS display animation starts.\n  },\n  onEntered() {\n    // Executed after the CSS display animation completes.\n  },\n  onBeforeExit() {\n    // Executed before the CSS hide animation starts.\n  },\n  onExited() {\n    // Executed after the CSS hide animation completes.\n  },\n  onOpen() {\n    // Executed when the popover is displayed.\n  },\n  onClose() {\n    // Executed when the popover is closed.\n  },\n});\n")))}u.isMDXComponent=!0}}]);