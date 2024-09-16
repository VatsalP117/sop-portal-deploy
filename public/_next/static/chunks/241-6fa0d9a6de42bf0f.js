"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[241],{7390:function(e,t,a){var r=a(7437),n=a(2265),o=a(7907),i=a(7815);let s=async(e,t)=>{try{let a=await fetch("".concat("","/api/auth/user"),{method:"GET",withCredentials:!0});if(200===a.status){let r=await a.json();if(e(r),r.type!==t)return!1;return!0}return!1}catch(e){return!1}};t.Z=(e,t)=>a=>{let[d,c]=(0,n.useState)(!0),[l,u]=(0,n.useState)({}),m=(0,o.useRouter)();return((0,n.useEffect)(()=>{s(u,t).then(e=>{e?c(!1):m.push("/login")}).catch(e=>{m.push("/login")})},[]),d)?(0,r.jsx)(i.Zb,{className:"h-[100vh] flex items-center justify-center text-5xl",children:"Loading..."}):(0,r.jsx)(e,{...a,user:l})}},1478:function(e,t,a){a.d(t,{C:function(){return s}});var r=a(7437);a(2265);var n=a(7742),o=a(1657);let i=(0,n.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function s(e){let{className:t,variant:a,...n}=e;return(0,r.jsx)("div",{className:(0,o.cn)(i({variant:a}),t),...n})}},5754:function(e,t,a){a.d(t,{d:function(){return d},z:function(){return c}});var r=a(7437),n=a(2265),o=a(9143),i=a(7742),s=a(1657);let d=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:a,variant:n,size:i,asChild:c=!1,...l}=e,u=c?o.g7:"button";return(0,r.jsx)(u,{className:(0,s.cn)(d({variant:n,size:i,className:a})),ref:t,...l})});c.displayName="Button"},7815:function(e,t,a){a.d(t,{Ol:function(){return s},SZ:function(){return c},Zb:function(){return i},aY:function(){return l},ll:function(){return d}});var r=a(7437),n=a(2265),o=a(1657);let i=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("div",{ref:t,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",a),...n})});i.displayName="Card";let s=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("div",{ref:t,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",a),...n})});s.displayName="CardHeader";let d=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("h3",{ref:t,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",a),...n})});d.displayName="CardTitle";let c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("p",{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...n})});c.displayName="CardDescription";let l=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("div",{ref:t,className:(0,o.cn)("p-6 pt-0",a),...n})});l.displayName="CardContent",n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("div",{ref:t,className:(0,o.cn)("flex items-center p-6 pt-0",a),...n})}).displayName="CardFooter"},9323:function(e,t,a){a.d(t,{di:function(){return m},e8:function(){return l},mY:function(){return d},rb:function(){return u},sZ:function(){return c}});var r=a(7437),n=a(2265),o=a(8594),i=a(8670),s=a(1657);a(2706);let d=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(o.mY,{ref:t,className:(0,s.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",a),...n})});d.displayName=o.mY.displayName;let c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,r.jsx)(i.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,r.jsx)(o.mY.Input,{ref:t,className:(0,s.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",a),...n})]})});c.displayName=o.mY.Input.displayName;let l=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(o.mY.List,{ref:t,className:(0,s.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",a),...n})});l.displayName=o.mY.List.displayName;let u=n.forwardRef((e,t)=>(0,r.jsx)(o.mY.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));u.displayName=o.mY.Empty.displayName,n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(o.mY.Group,{ref:t,className:(0,s.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",a),...n})}).displayName=o.mY.Group.displayName,n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(o.mY.Separator,{ref:t,className:(0,s.cn)("-mx-1 h-px bg-border",a),...n})}).displayName=o.mY.Separator.displayName;let m=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(o.mY.Item,{ref:t,className:(0,s.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",a),...n})});m.displayName=o.mY.Item.displayName},2706:function(e,t,a){a.d(t,{Vq:function(){return d},cZ:function(){return m},hg:function(){return c}});var r=a(7437),n=a(2265),o=a(2936),i=a(2235),s=a(1657);let d=o.fC,c=o.xz,l=o.h_;o.x8;let u=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(o.aV,{ref:t,className:(0,s.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...n})});u.displayName=o.aV.displayName;let m=n.forwardRef((e,t)=>{let{className:a,children:n,...d}=e;return(0,r.jsxs)(l,{children:[(0,r.jsx)(u,{}),(0,r.jsxs)(o.VY,{ref:t,className:(0,s.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...d,children:[n,(0,r.jsxs)(o.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(i.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=o.VY.displayName,n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(o.Dx,{ref:t,className:(0,s.cn)("text-lg font-semibold leading-none tracking-tight",a),...n})}).displayName=o.Dx.displayName,n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(o.dk,{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",a),...n})}).displayName=o.dk.displayName},3930:function(e,t,a){a.d(t,{$F:function(){return u},AW:function(){return m},VD:function(){return g},Xi:function(){return f},bO:function(){return p},h_:function(){return l}});var r=a(7437),n=a(2265),o=a(3685),i=a(7805),s=a(9259),d=a(7501),c=a(1657);let l=o.fC,u=o.xz;o.ZA,o.Uv,o.Tr,o.Ee,n.forwardRef((e,t)=>{let{className:a,inset:n,children:s,...d}=e;return(0,r.jsxs)(o.fF,{ref:t,className:(0,c.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",n&&"pl-8",a),...d,children:[s,(0,r.jsx)(i.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=o.fF.displayName,n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(o.tu,{ref:t,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...n})}).displayName=o.tu.displayName;let m=n.forwardRef((e,t)=>{let{className:a,sideOffset:n=4,...i}=e;return(0,r.jsx)(o.Uv,{children:(0,r.jsx)(o.VY,{ref:t,sideOffset:n,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...i})})});m.displayName=o.VY.displayName;let f=n.forwardRef((e,t)=>{let{className:a,inset:n,...i}=e;return(0,r.jsx)(o.ck,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",a),...i})});f.displayName=o.ck.displayName;let p=n.forwardRef((e,t)=>{let{className:a,children:n,checked:i,...d}=e;return(0,r.jsxs)(o.oC,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:i,...d,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(o.wU,{children:(0,r.jsx)(s.Z,{className:"h-4 w-4"})})}),n]})});p.displayName=o.oC.displayName,n.forwardRef((e,t)=>{let{className:a,children:n,...i}=e;return(0,r.jsxs)(o.Rk,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...i,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(o.wU,{children:(0,r.jsx)(d.Z,{className:"h-2 w-2 fill-current"})})}),n]})}).displayName=o.Rk.displayName,n.forwardRef((e,t)=>{let{className:a,inset:n,...i}=e;return(0,r.jsx)(o.__,{ref:t,className:(0,c.cn)("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",a),...i})}).displayName=o.__.displayName;let g=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(o.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",a),...n})});g.displayName=o.Z0.displayName},5179:function(e,t,a){a.d(t,{I:function(){return i}});var r=a(7437),n=a(2265),o=a(1657);let i=n.forwardRef((e,t)=>{let{className:a,type:n,...i}=e;return(0,r.jsx)("input",{type:n,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...i})});i.displayName="Input"},5216:function(e,t,a){a.d(t,{J2:function(){return s},xo:function(){return d},yk:function(){return c}});var r=a(7437),n=a(2265),o=a(7427),i=a(1657);let s=o.fC,d=o.xz,c=n.forwardRef((e,t)=>{let{className:a,align:n="center",sideOffset:s=4,...d}=e;return(0,r.jsx)(o.h_,{children:(0,r.jsx)(o.VY,{ref:t,align:n,sideOffset:s,className:(0,i.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...d})})});c.displayName=o.VY.displayName},1657:function(e,t,a){a.d(t,{cn:function(){return o}});var r=a(3167),n=a(1367);function o(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.m6)((0,r.W)(t))}},4830:function(e,t){t.Z=["Hardware:Printed circuit boards","Hardware:Communication hardware, interfaces and storage","Hardware:Integrated circuits","Hardware:VLSI design","Hardware:Power and energy","Hardware:Electronic design automation","Hardware:Hardware validation","Hardware:Hardware test","Hardware:Robustness","Hardware:Emerging technologies","Computer systems organization:Architectures (Serial, Parallel, Distributed, Cloud, Edge)","Computer systems organization:Special Purpose (Neural, reconfigurable, dataflow, quantum, molicular, optical)","Computer systems organization:Embedded and cyber-physical systems (Sensor, Robotics, SoC)","Computer systems organization:Real-time systems (OS, Language)","Computer systems organization:Dependable and fault-tolerant systems (Reliability, Availability, Redundancy)","Networks:architectures","Networks:protocols","Networks:Network components","Networks:algorithms","Networks:performance evaluation","Networks:security, reliability","Networks:services (Naming, Cloud, Location, Programmable)","Networks:types (NoC, SAN, Data center, Sensor and Mobile network, Overlay, Adhoc, Wireless)","Software engineering:Software organization (Middleware, OS, Architecture)","Software engineering:Languages, Models, Tools","Software engineering:Software Generation, Maintenance","Software engineering:Testing, Model Checking, Validation and Verification","Theory of computation:Models of computation","Theory of computation:Formal languages and automata theory","Theory of computation:Computational complexity and cryptography","Theory of computation:Logic","Theory of computation:Design and analysis of algorithms (Graph, Approximate, Optimization, Parallel and Distributed)","Theory of computation:Randomness, geometry and discrete structures","Theory of computation:Theory and algorithms for application domains (ML Theory, Game Theory, Database theory)","Theory of computation:Semantics and reasoning","Mathematics of computing:Discrete mathematics","Mathematics of computing:Probability and statistics","Mathematics of computing:Mathematical software","Mathematics of computing:Information theory","Mathematics of computing:Mathematical analysis","Mathematics of computing:Continuous mathematics","Information systems:Data management systems","Information systems:Information storage systems","Information systems:Information systems applications (Social Computing, Spatio-temporal, DSS, Data mining, Advertising)","Information systems:WWW (Search, Advertising, Web mining, EComm, Social Network, Web services)","Information systems:Information retrieval","Security and privacy:Cryptography","Security and privacy:Formal methods and theory of security","Security and privacy:Security services","Security and privacy:Intrusion/anomaly detection and malware mitigation","Security and privacy:Security in hardware","Security and privacy:Systems security","Security and privacy:Network security","Security and privacy:Database and storage security","Security and privacy:Software and application security","Security and privacy:Human and societal aspects of security and privacy","Human-centered computing:Human computer interaction (HCI)","Human-centered computing:Interaction design","Human-centered computing:Collaborative and social computing","Human-centered computing:Ubiquitous and mobile computing","Human-centered computing:Data Visualization","Human-centered computing:Accessibility","Computing methodologies:Symbolic and algebraic manipulation","Computing methodologies:Parallel and concurrent computing","Computing methodologies:Artificial intelligence (NLP, Knowledge representation, Planning, Search, Distributed AI, Computer Vision)","Computing methodologies:Machine learning (Learning Paradigm, Setting, Approaches & Algorithms)","Computing methodologies:Modeling and simulation","Computing methodologies:Computer graphics","Computing methodologies:Distributed computing","Applied computing:Electronic commerce","Applied computing:Enterprise computing (BPM, EIS, SOA, IT architecture and governance)","Applied computing:Physical sciences and engineering","Applied computing:Life and medical sciences","Applied computing:Law, social and behavioral sciences","Applied computing:Computer forensics","Applied computing:Arts and humanities","Applied computing:Other domains (digital library, military, agriculture, government)","Applied computing:Operations research","Applied computing:Education","Applied computing:Document management and text processing","Social and professional topics:Professional topics","Social and professional topics:Computing / technology policy","Social and professional topics:User characteristics"]}}]);