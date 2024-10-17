"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[877],{3441:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(843).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},5159:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(843).Z)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},7907:function(e,t,n){var r=n(5313);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},9562:function(e,t,n){n.d(t,{VY:function(){return e_},ZA:function(){return ek},JO:function(){return eC},ck:function(){return eM},wU:function(){return eI},eT:function(){return eT},__:function(){return eP},h_:function(){return ex},fC:function(){return ey},$G:function(){return eV},u_:function(){return eD},Z0:function(){return eW},xz:function(){return eS},B4:function(){return eE},l_:function(){return eR}});var r=n(2110),l=n(2265),o=n(4887);function a(e,[t,n]){return Math.min(n,Math.max(t,e))}var i=n(4991),u=n(7533),c=n(1266),d=n(4104),s=n(3876),p=n(1260),f=n(6007),v=n(8082),h=n(8687),m=n(4671),g=n(7881),w=n(9586),b=n(9143),y=n(9830),S=n(9310),E=n(2618);let C=(0,l.forwardRef)((e,t)=>(0,l.createElement)(w.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}})));var x=n(6674),_=n(7225);let R=[" ","Enter","ArrowUp","ArrowDown"],k=[" ","Enter"],P="Select",[M,T,I]=(0,u.B)(P),[D,V]=(0,d.b)(P,[I,m.D7]),W=(0,m.D7)(),[Z,L]=D(P),[O,H]=D(P),A=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,disabled:o=!1,...a}=e,u=W(n),d=L("SelectTrigger",n),s=d.disabled||o,p=(0,c.e)(t,d.onTriggerChange),f=T(n),[v,h,g]=ew(e=>{let t=f().filter(e=>!e.disabled),n=t.find(e=>e.value===d.value),r=eb(t,e,n);void 0!==r&&d.onValueChange(r.value)}),b=()=>{s||(d.onOpenChange(!0),g())};return(0,l.createElement)(m.ee,(0,r.Z)({asChild:!0},u),(0,l.createElement)(w.WV.button,(0,r.Z)({type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:s,"data-disabled":s?"":void 0,"data-placeholder":em(d.value)?"":void 0},a,{ref:p,onClick:(0,i.M)(a.onClick,e=>{e.currentTarget.focus()}),onPointerDown:(0,i.M)(a.onPointerDown,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(b(),d.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())}),onKeyDown:(0,i.M)(a.onKeyDown,e=>{let t=""!==v.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||h(e.key),(!t||" "!==e.key)&&R.includes(e.key)&&(b(),e.preventDefault())})})))}),B=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,className:o,style:a,children:i,placeholder:u="",...d}=e,s=L("SelectValue",n),{onValueNodeHasChildrenChange:p}=s,f=void 0!==i,v=(0,c.e)(t,s.onValueNodeChange);return(0,E.b)(()=>{p(f)},[p,f]),(0,l.createElement)(w.WV.span,(0,r.Z)({},d,{ref:v,style:{pointerEvents:"none"}}),em(s.value)?(0,l.createElement)(l.Fragment,null,u):i)}),N=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,children:o,...a}=e;return(0,l.createElement)(w.WV.span,(0,r.Z)({"aria-hidden":!0},a,{ref:t}),o||"▼")}),K="SelectContent",F=(0,l.forwardRef)((e,t)=>{let n=L(K,e.__scopeSelect),[a,i]=(0,l.useState)();return((0,E.b)(()=>{i(new DocumentFragment)},[]),n.open)?(0,l.createElement)(q,(0,r.Z)({},e,{ref:t})):a?(0,o.createPortal)((0,l.createElement)(z,{scope:e.__scopeSelect},(0,l.createElement)(M.Slot,{scope:e.__scopeSelect},(0,l.createElement)("div",null,e.children))),a):null}),[z,U]=D(K),q=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,position:o="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:u,onPointerDownOutside:d,side:s,sideOffset:h,align:m,alignOffset:g,arrowPadding:w,collisionBoundary:y,collisionPadding:S,sticky:E,hideWhenDetached:C,avoidCollisions:R,...k}=e,P=L(K,n),[M,I]=(0,l.useState)(null),[D,V]=(0,l.useState)(null),W=(0,c.e)(t,e=>I(e)),[Z,O]=(0,l.useState)(null),[H,A]=(0,l.useState)(null),B=T(n),[N,F]=(0,l.useState)(!1),U=(0,l.useRef)(!1);(0,l.useEffect)(()=>{if(M)return(0,x.Ry)(M)},[M]),(0,f.EW)();let q=(0,l.useCallback)(e=>{let[t,...n]=B().map(e=>e.ref.current),[r]=n.slice(-1),l=document.activeElement;for(let n of e)if(n===l||(null==n||n.scrollIntoView({block:"nearest"}),n===t&&D&&(D.scrollTop=0),n===r&&D&&(D.scrollTop=D.scrollHeight),null==n||n.focus(),document.activeElement!==l))return},[B,D]),j=(0,l.useCallback)(()=>q([Z,M]),[q,Z,M]);(0,l.useEffect)(()=>{N&&j()},[N,j]);let{onOpenChange:X,triggerPointerDownPosRef:G}=P;(0,l.useEffect)(()=>{if(M){let e={x:0,y:0},t=t=>{var n,r,l,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(n=null===(r=G.current)||void 0===r?void 0:r.x)&&void 0!==n?n:0)),y:Math.abs(Math.round(t.pageY)-(null!==(l=null===(o=G.current)||void 0===o?void 0:o.y)&&void 0!==l?l:0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():M.contains(n.target)||X(!1),document.removeEventListener("pointermove",t),G.current=null};return null!==G.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}},[M,X,G]),(0,l.useEffect)(()=>{let e=()=>X(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[X]);let[J,Q]=ew(e=>{let t=B().filter(e=>!e.disabled),n=t.find(e=>e.ref.current===document.activeElement),r=eb(t,e,n);r&&setTimeout(()=>r.ref.current.focus())}),ee=(0,l.useCallback)((e,t,n)=>{let r=!U.current&&!n;(void 0!==P.value&&P.value===t||r)&&(O(e),r&&(U.current=!0))},[P.value]),et=(0,l.useCallback)(()=>null==M?void 0:M.focus(),[M]),en=(0,l.useCallback)((e,t,n)=>{let r=!U.current&&!n;(void 0!==P.value&&P.value===t||r)&&A(e)},[P.value]),er="popper"===o?$:Y;return(0,l.createElement)(z,{scope:n,content:M,viewport:D,onViewportChange:V,itemRefCallback:ee,selectedItem:Z,onItemLeave:et,itemTextRefCallback:en,focusSelectedItem:j,selectedItemText:H,position:o,isPositioned:N,searchRef:J},(0,l.createElement)(_.Z,{as:b.g7,allowPinchZoom:!0},(0,l.createElement)(v.M,{asChild:!0,trapped:P.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,i.M)(a,e=>{var t;null===(t=P.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()})},(0,l.createElement)(p.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>P.onOpenChange(!1)},(0,l.createElement)(er,(0,r.Z)({role:"listbox",id:P.contentId,"data-state":P.open?"open":"closed",dir:P.dir,onContextMenu:e=>e.preventDefault()},k,er===$?{side:s,sideOffset:h,align:m,alignOffset:g,arrowPadding:w,collisionBoundary:y,collisionPadding:S,sticky:E,hideWhenDetached:C,avoidCollisions:R}:{},{onPlaced:()=>F(!0),ref:W,style:{display:"flex",flexDirection:"column",outline:"none",...k.style},onKeyDown:(0,i.M)(k.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||Q(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=B().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>q(t)),e.preventDefault()}})}))))))}),Y=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,onPlaced:o,...i}=e,u=L(K,n),d=U(K,n),[s,p]=(0,l.useState)(null),[f,v]=(0,l.useState)(null),h=(0,c.e)(t,e=>v(e)),m=T(n),g=(0,l.useRef)(!1),b=(0,l.useRef)(!0),{viewport:y,selectedItem:S,selectedItemText:C,focusSelectedItem:x}=d,_=(0,l.useCallback)(()=>{if(u.trigger&&u.valueNode&&s&&f&&y&&S&&C){let e=u.trigger.getBoundingClientRect(),t=f.getBoundingClientRect(),n=u.valueNode.getBoundingClientRect(),r=C.getBoundingClientRect();if("rtl"!==u.dir){let l=r.left-t.left,o=n.left-l,i=e.left-o,u=e.width+i,c=Math.max(u,t.width),d=a(o,[10,window.innerWidth-10-c]);s.style.minWidth=u+"px",s.style.left=d+"px"}else{let l=t.right-r.right,o=window.innerWidth-n.right-l,i=window.innerWidth-e.right-o,u=e.width+i,c=Math.max(u,t.width),d=a(o,[10,window.innerWidth-10-c]);s.style.minWidth=u+"px",s.style.right=d+"px"}let l=m(),i=window.innerHeight-20,c=y.scrollHeight,d=window.getComputedStyle(f),p=parseInt(d.borderTopWidth,10),v=parseInt(d.paddingTop,10),h=parseInt(d.borderBottomWidth,10),w=p+v+c+parseInt(d.paddingBottom,10)+h,b=Math.min(5*S.offsetHeight,w),E=window.getComputedStyle(y),x=parseInt(E.paddingTop,10),_=parseInt(E.paddingBottom,10),R=e.top+e.height/2-10,k=S.offsetHeight/2,P=p+v+(S.offsetTop+k);if(P<=R){let e=S===l[l.length-1].ref.current;s.style.bottom="0px";let t=f.clientHeight-y.offsetTop-y.offsetHeight;s.style.height=P+Math.max(i-R,k+(e?_:0)+t+h)+"px"}else{let e=S===l[0].ref.current;s.style.top="0px";let t=Math.max(R,p+y.offsetTop+(e?x:0)+k);s.style.height=t+(w-P)+"px",y.scrollTop=P-R+y.offsetTop}s.style.margin="10px 0",s.style.minHeight=b+"px",s.style.maxHeight=i+"px",null==o||o(),requestAnimationFrame(()=>g.current=!0)}},[m,u.trigger,u.valueNode,s,f,y,S,C,u.dir,o]);(0,E.b)(()=>_(),[_]);let[R,k]=(0,l.useState)();(0,E.b)(()=>{f&&k(window.getComputedStyle(f).zIndex)},[f]);let P=(0,l.useCallback)(e=>{e&&!0===b.current&&(_(),null==x||x(),b.current=!1)},[_,x]);return(0,l.createElement)(j,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:g,onScrollButtonChange:P},(0,l.createElement)("div",{ref:p,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:R}},(0,l.createElement)(w.WV.div,(0,r.Z)({},i,{ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}}))))}),$=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,align:o="start",collisionPadding:a=10,...i}=e,u=W(n);return(0,l.createElement)(m.VY,(0,r.Z)({},u,i,{ref:t,align:o,collisionPadding:a,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[j,X]=D(K,{}),G="SelectViewport",J=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e,a=U(G,n),u=X(G,n),d=(0,c.e)(t,a.onViewportChange),s=(0,l.useRef)(0);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),(0,l.createElement)(M.Slot,{scope:n},(0,l.createElement)(w.WV.div,(0,r.Z)({"data-radix-select-viewport":"",role:"presentation"},o,{ref:d,style:{position:"relative",flex:1,overflow:"auto",...o.style},onScroll:(0,i.M)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=u;if(null!=r&&r.current&&n){let e=Math.abs(s.current-t.scrollTop);if(e>0){let r=window.innerHeight-20,l=Math.max(parseFloat(n.style.minHeight),parseFloat(n.style.height));if(l<r){let o=l+e,a=Math.min(r,o),i=o-a;n.style.height=a+"px","0px"===n.style.bottom&&(t.scrollTop=i>0?i:0,n.style.justifyContent="flex-end")}}}s.current=t.scrollTop})}))))}),[Q,ee]=D("SelectGroup"),et=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e,a=(0,h.M)();return(0,l.createElement)(Q,{scope:n,id:a},(0,l.createElement)(w.WV.div,(0,r.Z)({role:"group","aria-labelledby":a},o,{ref:t})))}),en=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e,a=ee("SelectLabel",n);return(0,l.createElement)(w.WV.div,(0,r.Z)({id:a.id},o,{ref:t}))}),er="SelectItem",[el,eo]=D(er),ea=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,value:o,disabled:a=!1,textValue:u,...d}=e,s=L(er,n),p=U(er,n),f=s.value===o,[v,m]=(0,l.useState)(null!=u?u:""),[g,b]=(0,l.useState)(!1),y=(0,c.e)(t,e=>{var t;return null===(t=p.itemRefCallback)||void 0===t?void 0:t.call(p,e,o,a)}),S=(0,h.M)(),E=()=>{a||(s.onValueChange(o),s.onOpenChange(!1))};if(""===o)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,l.createElement)(el,{scope:n,value:o,disabled:a,textId:S,isSelected:f,onItemTextChange:(0,l.useCallback)(e=>{m(t=>{var n;return t||(null!==(n=null==e?void 0:e.textContent)&&void 0!==n?n:"").trim()})},[])},(0,l.createElement)(M.ItemSlot,{scope:n,value:o,disabled:a,textValue:v},(0,l.createElement)(w.WV.div,(0,r.Z)({role:"option","aria-labelledby":S,"data-highlighted":g?"":void 0,"aria-selected":f&&g,"data-state":f?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1},d,{ref:y,onFocus:(0,i.M)(d.onFocus,()=>b(!0)),onBlur:(0,i.M)(d.onBlur,()=>b(!1)),onPointerUp:(0,i.M)(d.onPointerUp,E),onPointerMove:(0,i.M)(d.onPointerMove,e=>{if(a){var t;null===(t=p.onItemLeave)||void 0===t||t.call(p)}else e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,i.M)(d.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=p.onItemLeave)||void 0===t||t.call(p)}}),onKeyDown:(0,i.M)(d.onKeyDown,e=>{var t;(null===(t=p.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(k.includes(e.key)&&E()," "===e.key&&e.preventDefault())})}))))}),ei="SelectItemText",eu=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,className:a,style:i,...u}=e,d=L(ei,n),s=U(ei,n),p=eo(ei,n),f=H(ei,n),[v,h]=(0,l.useState)(null),m=(0,c.e)(t,e=>h(e),p.onItemTextChange,e=>{var t;return null===(t=s.itemTextRefCallback)||void 0===t?void 0:t.call(s,e,p.value,p.disabled)}),g=null==v?void 0:v.textContent,b=(0,l.useMemo)(()=>(0,l.createElement)("option",{key:p.value,value:p.value,disabled:p.disabled},g),[p.disabled,p.value,g]),{onNativeOptionAdd:y,onNativeOptionRemove:S}=f;return(0,E.b)(()=>(y(b),()=>S(b)),[y,S,b]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(w.WV.span,(0,r.Z)({id:p.textId},u,{ref:m})),p.isSelected&&d.valueNode&&!d.valueNodeHasChildren?(0,o.createPortal)(u.children,d.valueNode):null)}),ec=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e;return eo("SelectItemIndicator",n).isSelected?(0,l.createElement)(w.WV.span,(0,r.Z)({"aria-hidden":!0},o,{ref:t})):null}),ed="SelectScrollUpButton",es=(0,l.forwardRef)((e,t)=>{let n=U(ed,e.__scopeSelect),o=X(ed,e.__scopeSelect),[a,i]=(0,l.useState)(!1),u=(0,c.e)(t,o.onScrollButtonChange);return(0,E.b)(()=>{if(n.viewport&&n.isPositioned){let t=n.viewport;function e(){i(t.scrollTop>0)}return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[n.viewport,n.isPositioned]),a?(0,l.createElement)(ev,(0,r.Z)({},e,{ref:u,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}})):null}),ep="SelectScrollDownButton",ef=(0,l.forwardRef)((e,t)=>{let n=U(ep,e.__scopeSelect),o=X(ep,e.__scopeSelect),[a,i]=(0,l.useState)(!1),u=(0,c.e)(t,o.onScrollButtonChange);return(0,E.b)(()=>{if(n.viewport&&n.isPositioned){let t=n.viewport;function e(){let e=t.scrollHeight-t.clientHeight;i(Math.ceil(t.scrollTop)<e)}return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[n.viewport,n.isPositioned]),a?(0,l.createElement)(ev,(0,r.Z)({},e,{ref:u,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}})):null}),ev=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,onAutoScroll:o,...a}=e,u=U("SelectScrollButton",n),c=(0,l.useRef)(null),d=T(n),s=(0,l.useCallback)(()=>{null!==c.current&&(window.clearInterval(c.current),c.current=null)},[]);return(0,l.useEffect)(()=>()=>s(),[s]),(0,E.b)(()=>{var e;let t=d().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[d]),(0,l.createElement)(w.WV.div,(0,r.Z)({"aria-hidden":!0},a,{ref:t,style:{flexShrink:0,...a.style},onPointerDown:(0,i.M)(a.onPointerDown,()=>{null===c.current&&(c.current=window.setInterval(o,50))}),onPointerMove:(0,i.M)(a.onPointerMove,()=>{var e;null===(e=u.onItemLeave)||void 0===e||e.call(u),null===c.current&&(c.current=window.setInterval(o,50))}),onPointerLeave:(0,i.M)(a.onPointerLeave,()=>{s()})}))}),eh=(0,l.forwardRef)((e,t)=>{let{__scopeSelect:n,...o}=e;return(0,l.createElement)(w.WV.div,(0,r.Z)({"aria-hidden":!0},o,{ref:t}))});function em(e){return""===e||void 0===e}let eg=(0,l.forwardRef)((e,t)=>{let{value:n,...o}=e,a=(0,l.useRef)(null),i=(0,c.e)(t,a),u=function(e){let t=(0,l.useRef)({value:e,previous:e});return(0,l.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(n);return(0,l.useEffect)(()=>{let e=a.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(u!==n&&t){let r=new Event("change",{bubbles:!0});t.call(e,n),e.dispatchEvent(r)}},[u,n]),(0,l.createElement)(C,{asChild:!0},(0,l.createElement)("select",(0,r.Z)({},o,{ref:i,defaultValue:n})))});function ew(e){let t=(0,y.W)(e),n=(0,l.useRef)(""),r=(0,l.useRef)(0),o=(0,l.useCallback)(e=>{let l=n.current+e;t(l),function e(t){n.current=t,window.clearTimeout(r.current),""!==t&&(r.current=window.setTimeout(()=>e(""),1e3))}(l)},[t]),a=(0,l.useCallback)(()=>{n.current="",window.clearTimeout(r.current)},[]);return(0,l.useEffect)(()=>()=>window.clearTimeout(r.current),[]),[n,o,a]}function eb(e,t,n){var r;let l=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,o=(r=Math.max(n?e.indexOf(n):-1,0),e.map((t,n)=>e[(r+n)%e.length]));1===l.length&&(o=o.filter(e=>e!==n));let a=o.find(e=>e.textValue.toLowerCase().startsWith(l.toLowerCase()));return a!==n?a:void 0}eg.displayName="BubbleSelect";let ey=e=>{let{__scopeSelect:t,children:n,open:r,defaultOpen:o,onOpenChange:a,value:i,defaultValue:u,onValueChange:c,dir:d,name:p,autoComplete:f,disabled:v,required:g}=e,w=W(t),[b,y]=(0,l.useState)(null),[E,C]=(0,l.useState)(null),[x,_]=(0,l.useState)(!1),R=(0,s.gm)(d),[k=!1,P]=(0,S.T)({prop:r,defaultProp:o,onChange:a}),[T,I]=(0,S.T)({prop:i,defaultProp:u,onChange:c}),D=(0,l.useRef)(null),V=!b||!!b.closest("form"),[L,H]=(0,l.useState)(new Set),A=Array.from(L).map(e=>e.props.value).join(";");return(0,l.createElement)(m.fC,w,(0,l.createElement)(Z,{required:g,scope:t,trigger:b,onTriggerChange:y,valueNode:E,onValueNodeChange:C,valueNodeHasChildren:x,onValueNodeHasChildrenChange:_,contentId:(0,h.M)(),value:T,onValueChange:I,open:k,onOpenChange:P,dir:R,triggerPointerDownPosRef:D,disabled:v},(0,l.createElement)(M.Provider,{scope:t},(0,l.createElement)(O,{scope:e.__scopeSelect,onNativeOptionAdd:(0,l.useCallback)(e=>{H(t=>new Set(t).add(e))},[]),onNativeOptionRemove:(0,l.useCallback)(e=>{H(t=>{let n=new Set(t);return n.delete(e),n})},[])},n)),V?(0,l.createElement)(eg,{key:A,"aria-hidden":!0,required:g,tabIndex:-1,name:p,autoComplete:f,value:T,onChange:e=>I(e.target.value),disabled:v},void 0===T?(0,l.createElement)("option",{value:""}):null,Array.from(L)):null))},eS=A,eE=B,eC=N,ex=e=>(0,l.createElement)(g.h,(0,r.Z)({asChild:!0},e)),e_=F,eR=J,ek=et,eP=en,eM=ea,eT=eu,eI=ec,eD=es,eV=ef,eW=eh},1014:function(e,t,n){n.d(t,{f:function(){return d}});var r=n(2110),l=n(2265),o=n(9586);let a="horizontal",i=["horizontal","vertical"],u=(0,l.forwardRef)((e,t)=>{let{decorative:n,orientation:i=a,...u}=e,d=c(i)?i:a;return(0,l.createElement)(o.WV.div,(0,r.Z)({"data-orientation":d},n?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},u,{ref:t}))});function c(e){return i.includes(e)}u.propTypes={orientation(e,t,n){let r=e[t],l=String(r);return r&&!c(r)?Error(`Invalid prop \`orientation\` of value \`${l}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${a}\`.`):null}};let d=u}}]);