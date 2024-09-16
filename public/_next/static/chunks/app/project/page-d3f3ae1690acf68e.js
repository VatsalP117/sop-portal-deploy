(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[880],{4287:function(e,t,a){Promise.resolve().then(a.bind(a,2675))},2675:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return A}});var s=a(7437),r=a(1270),n=a(2670),l=a(248),i=a(5890),o=a(7307),c=a(5754),d=a(8670),u=a(1657),m=a(553),x=a(9259),f=a(2265),h=a(9108),p=a(7805),j=a(4719);function y(e){let{className:t,classNames:a,showOutsideDays:r=!0,...n}=e;return(0,s.jsx)(j._W,{showOutsideDays:r,className:(0,u.cn)("p-3",t),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,u.cn)((0,c.d)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:(0,u.cn)((0,c.d)({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...a},components:{IconLeft:e=>{let{...t}=e;return(0,s.jsx)(h.Z,{className:"h-4 w-4"})},IconRight:e=>{let{...t}=e;return(0,s.jsx)(p.Z,{className:"h-4 w-4"})}},...n})}y.displayName="Calendar";var v=a(7474),g=a(7907),b=a(5216),N=a(9323);a(3367);var w=a(541);a(180);var S=a(4848);function C(e){let t="dark"==(0,S.F)().resolvedTheme?w.V8:w.hp,a=(0,w.$c)({initialContent:e.initial});return(0,s.jsx)(w.L6,{editor:a,editable:e.editable,className:"-mt-3",theme:t,onChange:()=>{e.setDescription(a.document)}})}var _=a(5179),D=a(1478),I=a(6288),F=a(3930),P=a(7390);let z=a(4830).Z.map(e=>({key:e,value:e})),k=[{label:"Open",value:"Open"},{label:"Closed",value:"Closed"},{label:"Completed",value:"Completed"}],O=l.z.object({project_title:l.z.string().min(5,{message:"Project Title must be at least 5 characters."}),status:l.z.string({required_error:"A status is required."}),date:l.z.date({required_error:"A date is required."}).min(new Date,"Date must be in the future"),minStudents:l.z.number().min(1,{message:"Minimum students must be at least 1"}),maxStudents:l.z.number().min(1,{message:"Maximum students must be at least 1"})});var A=(0,P.Z)(function(e){let t=(0,g.useSearchParams)().get("projectId"),[a,l]=(0,f.useState)(""),[h,p]=(0,f.useState)(null),j=(0,g.useRouter)(),[w,S]=(0,f.useState)([]),[P,A]=(0,f.useState)([]),[J,R]=(0,f.useState)(""),T=z.filter(e=>e.value.toLowerCase().includes(J.toLowerCase()));(0,f.useEffect)(()=>{"new"!==t?fetch("".concat("","/api/faculty/getprojectdescription"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectid:t}),withCredentials:!0}).then(e=>e.json()).then(t=>{G.reset({project_title:t.project_title,status:t.status,date:new Date(t.date),gpsrn:e.user.id,minStudents:t.minStudents,maxStudents:t.maxStudents}),S(t.tags||[]),A(t.description),p(t)}):G.reset({minStudents:1,maxStudents:1})},[]),(0,f.useEffect)(()=>{l(e.user.id)},[]);let W=e=>{if(w.includes(e)){let t=[...w],a=t.indexOf(e);t.splice(a,1),S(t)}else S(t=>[...t,e])},Z=e=>!!w.includes(e),G=(0,n.cI)({resolver:(0,r.F)(O),mode:"onChange"});async function M(a){if("new"===t)try{let t=await fetch("".concat("","/api/faculty/createproject"),{method:"POST",headers:{"Content-Type":"application/json"},witthCredentials:!0,body:JSON.stringify({...a,date:a.date.toDateString(),tags:w,description:P,gpsrn:e.user.id})});200===t.status?((0,I.A)("Project added successfully"),j.push("/faculty")):(0,I.A)("Failed to add project")}catch(e){console.log(e),(0,I.A)("unable to connect to server")}else try{let s=await fetch("".concat("","/api/faculty/editproject"),{method:"POST",headers:{"Content-Type":"application/json"},witthCredentials:!0,body:JSON.stringify({...a,date:a.date.toDateString(),tags:w,description:P,projectid:t,gpsrn:e.user.id})});200===s.status?((0,I.A)("Project Updated Successfully"),j.push("/faculty")):(0,I.A)("Failed to update project")}catch(e){console.log(e),(0,I.A)("unable to connect to server")}}return(0,s.jsxs)("div",{className:"container pt-12 flex flex-col",children:[(0,s.jsx)("h1",{className:"text-5xl font-bold mb-8",children:"Project Details"}),(0,s.jsx)(v.l0,{...G,children:(0,s.jsxs)("form",{onSubmit:G.handleSubmit(M),className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex flex-row gap-20 items-center",children:[(0,s.jsx)(v.Wi,{control:G.control,name:"project_title",render:e=>{let{field:t}=e;return(0,s.jsxs)(v.xJ,{id:"project_title",children:[(0,s.jsx)(v.lX,{children:"Project Title"}),(0,s.jsx)(v.NI,{children:(0,s.jsx)(_.I,{...t,defaultValue:null==h?void 0:h.project_title})}),(0,s.jsx)(v.zG,{})]})}}),(0,s.jsx)(v.Wi,{control:G.control,name:"status",render:e=>{var t;let{field:a}=e;return(0,s.jsxs)(v.xJ,{className:"flex flex-col h-full mt-2 ml-3 ",children:[(0,s.jsx)(v.lX,{children:"Status"}),(0,s.jsxs)(b.J2,{children:[(0,s.jsx)(b.xo,{asChild:!0,children:(0,s.jsx)(v.NI,{children:(0,s.jsxs)(c.z,{variant:"outline",role:"combobox",className:(0,u.cn)("w-[200px] justify-between",!a.value&&"text-muted-foreground"),children:[a.value?null===(t=k.find(e=>e.value===a.value))||void 0===t?void 0:t.label:"Select status",(0,s.jsx)(m.Z,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})})}),(0,s.jsx)(b.yk,{className:"w-[200px] p-0",children:(0,s.jsxs)(N.mY,{children:[(0,s.jsx)(N.sZ,{placeholder:"Search status..."}),(0,s.jsx)(N.rb,{children:"Not found."}),(0,s.jsx)(N.e8,{children:k.map(e=>(0,s.jsxs)(N.di,{value:e.label,onSelect:()=>{G.setValue("status",e.value)},children:[(0,s.jsx)(x.Z,{className:(0,u.cn)("mr-2 h-4 w-4",e.value===a.value?"opacity-100":"opacity-0")}),e.label]},e.value))})]})})]}),(0,s.jsx)(v.zG,{})]})}})]}),(0,s.jsxs)("div",{className:"flex flex-row gap-16 items-center",children:[(0,s.jsx)(v.Wi,{control:G.control,name:"date",render:e=>{let{field:t}=e;return(0,s.jsxs)(v.xJ,{className:"flex flex-col",children:[(0,s.jsx)(v.lX,{children:"Start Date"}),(0,s.jsxs)(b.J2,{children:[(0,s.jsx)(b.xo,{asChild:!0,children:(0,s.jsx)(v.NI,{children:(0,s.jsxs)(c.z,{variant:"outline",className:(0,u.cn)("w-[240px] pl-3 text-left font-normal",!t.value&&"text-muted-foreground"),children:[t.value?(0,i.WU)(t.value,"PPP"):(0,s.jsx)("span",{children:"Date"}),(0,s.jsx)(o.Z,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),(0,s.jsx)(b.yk,{className:"w-auto p-0",align:"start",children:(0,s.jsx)(y,{mode:"single",selected:t.value,onSelect:t.onChange,initialFocus:!0})})]}),(0,s.jsx)(v.zG,{})]})}}),(0,s.jsx)(v.Wi,{control:G.control,name:"minStudents",render:e=>{let{field:t}=e;return(0,s.jsxs)(v.xJ,{children:[(0,s.jsx)(v.lX,{children:"Minimum Students"}),(0,s.jsx)(v.NI,{children:(0,s.jsx)(_.I,{type:"number",placeholder:"Minimum Students",...t,onChange:e=>t.onChange(e.target.valueAsNumber),defaultValue:1})}),(0,s.jsx)(v.zG,{})]})}}),(0,s.jsx)(v.Wi,{control:G.control,name:"maxStudents",render:e=>{let{field:t}=e;return(0,s.jsxs)(v.xJ,{children:[(0,s.jsx)(v.lX,{children:"Maximum Students"}),(0,s.jsx)(v.NI,{children:(0,s.jsx)(_.I,{type:"number",placeholder:"Maximum Students",...t,onChange:e=>t.onChange(e.target.valueAsNumber),defaultValue:1})}),(0,s.jsx)(v.zG,{})]})}})]}),(0,s.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,s.jsxs)(F.h_,{children:[(0,s.jsx)(F.$F,{asChild:!0,children:(0,s.jsx)(c.z,{variant:"outline",className:"flex gap-2 font-bold",children:(0,s.jsx)("span",{children:"Select Domains"})})}),(0,s.jsxs)(F.AW,{className:"w-[50vw] max-h-96 overflow-y-auto m-12",onCloseAutoFocus:e=>e.preventDefault(),children:[(0,s.jsx)(F.VD,{}),(0,s.jsx)("div",{className:"px-2 py-2",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(d.Z,{className:"absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"}),(0,s.jsx)(_.I,{placeholder:"Search Domains...",value:J,onChange:e=>R(e.target.value),className:"pl-8",onKeyDown:e=>e.stopPropagation()})]})}),(0,s.jsx)(F.VD,{}),T.map((e,t)=>(0,s.jsx)(F.bO,{onSelect:e=>e.preventDefault(),checked:Z(e.key),onCheckedChange:()=>W(e.key),children:e.value},t))]})]}),(0,s.jsx)("div",{className:"flex flex-row gap-2 flex-wrap",children:w.map(e=>(0,s.jsx)(D.C,{children:e}))})]}),(0,s.jsx)("h3",{children:"Project Description"}),(0,s.jsxs)(D.C,{variant:"outline",children:["Faculty GPSRN : ",a]}),(h||"new"===t)&&(0,s.jsx)(C,{editable:!0,setDescription:A}),(0,s.jsx)(c.z,{type:"submit",children:"Submit"})]})})]})},"faculty")},7474:function(e,t,a){"use strict";a.d(t,{NI:function(){return p},Wi:function(){return u},l0:function(){return c},lX:function(){return h},xJ:function(){return f},zG:function(){return j}});var s=a(7437),r=a(2265),n=a(9143),l=a(2670),i=a(1657),o=a(9842);let c=l.RV,d=r.createContext({}),u=e=>{let{...t}=e;return(0,s.jsx)(d.Provider,{value:{name:t.name},children:(0,s.jsx)(l.Qr,{...t})})},m=()=>{let e=r.useContext(d),t=r.useContext(x),{getFieldState:a,formState:s}=(0,l.Gc)(),n=a(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...n}},x=r.createContext({}),f=r.forwardRef((e,t)=>{let{className:a,...n}=e,l=r.useId();return(0,s.jsx)(x.Provider,{value:{id:l},children:(0,s.jsx)("div",{ref:t,className:(0,i.cn)("space-y-2",a),...n})})});f.displayName="FormItem";let h=r.forwardRef((e,t)=>{let{className:a,...r}=e,{error:n,formItemId:l}=m();return(0,s.jsx)(o._,{ref:t,className:(0,i.cn)(n&&"text-destructive",a),htmlFor:l,...r})});h.displayName="FormLabel";let p=r.forwardRef((e,t)=>{let{...a}=e,{error:r,formItemId:l,formDescriptionId:i,formMessageId:o}=m();return(0,s.jsx)(n.g7,{ref:t,id:l,"aria-describedby":r?"".concat(i," ").concat(o):"".concat(i),"aria-invalid":!!r,...a})});p.displayName="FormControl",r.forwardRef((e,t)=>{let{className:a,...r}=e,{formDescriptionId:n}=m();return(0,s.jsx)("p",{ref:t,id:n,className:(0,i.cn)("text-sm text-muted-foreground",a),...r})}).displayName="FormDescription";let j=r.forwardRef((e,t)=>{let{className:a,children:r,...n}=e,{error:l,formMessageId:o}=m(),c=l?String(null==l?void 0:l.message):r;return c?(0,s.jsx)("p",{ref:t,id:o,className:(0,i.cn)("text-sm font-medium text-destructive",a),...n,children:c}):null});j.displayName="FormMessage"},9842:function(e,t,a){"use strict";a.d(t,{_:function(){return c}});var s=a(7437),r=a(2265),n=a(4602),l=a(7742),i=a(1657);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.f,{ref:t,className:(0,i.cn)(o(),a),...r})});c.displayName=n.f.displayName}},function(e){e.O(0,[900,572,950,902,442,363,49,794,831,288,830,137,766,399,241,971,69,744],function(){return e(e.s=4287)}),_N_E=e.O()}]);