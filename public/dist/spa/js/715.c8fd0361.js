(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[715,797],{4261:(e,a,t)=>{"use strict";function s(){const e=JSON.parse(localStorage.getItem("userInfo"));return e||{}}t.d(a,{V:()=>s})},1715:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>E});var s=t(3673),l=t(2323),n=t(8880);const o=(0,s.Uk)("Disturb"),r=(0,s.Wm)("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1),u=(0,s.Uk)("Sala global"),i={class:"column items-center"},m={class:"seccion-usuarios q-mt-md"},d={class:"seccion-lista-usuarios"},c={class:"usuario"},p={class:"avatar"},g=(0,s.Wm)("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1),f={class:"cuerpo"},w=(0,s.Wm)("span",null," Sala global",-1),v={class:"q-mini-drawer-hide absolute",style:{top:"15px",right:"0px"}};function h(e,a,t,h,b,W){const q=(0,s.up)("q-btn"),k=(0,s.up)("q-toolbar-title"),y=(0,s.up)("q-icon"),Z=(0,s.up)("q-item-section"),_=(0,s.up)("q-item"),I=(0,s.up)("q-toolbar"),x=(0,s.up)("q-avatar"),C=(0,s.up)("q-item-label"),Q=(0,s.up)("q-field"),S=(0,s.up)("q-header"),V=(0,s.up)("q-input"),j=(0,s.up)("q-footer"),R=(0,s.up)("q-scroll-area"),H=(0,s.up)("q-list"),z=(0,s.up)("q-drawer"),T=(0,s.up)("router-view"),U=(0,s.up)("q-page-container"),A=(0,s.up)("q-layout");return(0,s.wg)(),(0,s.j4)(A,{view:"lHh LpR lFf"},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{elevated:"",class:"bg-dark"},{default:(0,s.w5)((()=>[(0,s.Wm)(I,null,{default:(0,s.w5)((()=>["/login"!==e.$route.path?((0,s.wg)(),(0,s.j4)(q,{key:0,flat:"",onClick:a[1]||(a[1]=a=>e.drawer=!e.drawer),round:"",dense:"",icon:"menu"})):(0,s.kq)("",!0),(0,s.Wm)(k,null,{default:(0,s.w5)((()=>[o])),_:1}),(0,s.Wm)(_,{clickable:"",onClick:e.logout},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(y,{rounded:"",flat:"",name:"logout"})])),_:1})])),_:1},8,["onClick"])])),_:1}),"/login"!==e.$route.path?((0,s.wg)(),(0,s.j4)(I,{key:0,inset:"",class:"bg-white text-primary q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{borderless:"","stack-label":"",class:"full-width"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(x,null,{default:(0,s.w5)((()=>[r])),_:1})])),control:(0,s.w5)((()=>[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[u])),_:1}),(0,s.Wm)(C,{caption:""},{default:(0,s.w5)((()=>[(0,s.Uk)("Integrantes: "+(0,l.zw)(e.usersActiveGlobal)+".",1)])),_:1})])),_:1})])),append:(0,s.w5)((()=>[(0,s.Wm)(q,{icon:"phone",rounded:"",push:"",color:"white","text-color":"primary"})])),_:1})])),_:1})):(0,s.kq)("",!0)])),_:1}),"/login"!==e.$route.path?((0,s.wg)(),(0,s.j4)(j,{key:0,class:"bg-white text-primary q-pa-md row"},{default:(0,s.w5)((()=>[(0,s.Wm)(V,{onKeyup:(0,n.D2)(e.sendMessage,["enter"]),modelValue:e.msg,"onUpdate:modelValue":a[3]||(a[3]=a=>e.msg=a),modelModifiers:{trim:!0},class:"full-width",label:"Escribe un mensaje",outlined:"",type:"textarea"},{before:(0,s.w5)((()=>[(0,s.Wm)(x,null,{default:(0,s.w5)((()=>[(0,s.Wm)("img",{src:`http://localhost:3000/uploads/${e.userInfo.avatar}`},null,8,["src"])])),_:1})])),append:(0,s.w5)((()=>[e.msg?((0,s.wg)(),(0,s.j4)(y,{key:0,name:"close",onClick:a[2]||(a[2]=a=>e.msg=""),class:"cursor-pointer"})):(0,s.kq)("",!0),(0,s.Wm)(y,{name:"schedule"})])),after:(0,s.w5)((()=>[(0,s.Wm)(q,{onClick:(0,n.iM)(e.sendMessage,["prevent"]),disabled:!e.msg,round:"",dense:"",flat:"",icon:"send"},null,8,["onClick","disabled"])])),_:1},8,["onKeyup","modelValue"])])),_:1})):(0,s.kq)("",!0),"/login"!==e.$route.path?((0,s.wg)(),(0,s.j4)(z,{key:1,modelValue:e.drawer,"onUpdate:modelValue":a[7]||(a[7]=a=>e.drawer=a),"show-if-above":"",mini:!e.drawer||e.miniState,width:320,breakpoint:500,class:"bg-dark text-white"},{mini:(0,s.w5)((()=>[(0,s.Wm)(R,{class:"fit mini-slot cursor-pointer"},{default:(0,s.w5)((()=>[(0,s.Wm)("div",{class:"q-py-lg",onClickCapture:a[4]||(a[4]=a=>e.miniState=!e.miniState)},[(0,s.Wm)("div",i,[(0,s.Wm)(y,{name:"inbox",color:"blue",size:"md",class:"q-m-md"})])],32)])),_:1})])),default:(0,s.w5)((()=>[(0,s.Wm)(R,{class:"fit"},{default:(0,s.w5)((()=>[(0,s.Wm)(H,{padding:""},{default:(0,s.w5)((()=>[(0,s.Wm)(V,{dark:"",dense:"",standout:"",label:"Busca un usuario","input-class":"text-left",class:"q-ml-sm q-mr-lg q-pr-lg"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(y,{name:"search"}),(0,s.Wm)(y,{name:"clear",class:"cursor-pointer",onClick:a[5]||(a[5]=a=>e.text="")})])),_:1}),(0,s.Wm)(_,{clickable:"",to:"/"},{default:(0,s.w5)((()=>[(0,s.Wm)("div",m,[(0,s.Wm)("div",d,[(0,s.Wm)("div",c,[(0,s.Wm)("div",p,[(0,s.Wm)(x,null,{default:(0,s.w5)((()=>[g])),_:1})]),(0,s.Wm)("div",f,[w,(0,s.Wm)("span",null,(0,l.zw)(e.messages&&e.messages.length&&e.messages[e.messages.length-1].user?`${e.messages[e.messages.length-1].user.username.substring(0,10)}: ${e.messages[e.messages.length-1].message.substring(0,15)}`:""),1)])])])])])),_:1})])),_:1})])),_:1}),(0,s.Wm)("div",v,[(0,s.Wm)(q,{dense:"",round:"",unelevated:"",color:"accent",icon:"chevron_left",onClick:a[6]||(a[6]=a=>e.miniState=!0)})])])),_:1},8,["modelValue","mini"])):(0,s.kq)("",!0),(0,s.Wm)(U,null,{default:(0,s.w5)((()=>[(0,s.Wm)(T,{messages:e.messages,key:e.$route.fullPath},null,8,["messages"])])),_:1})])),_:1})}var b=t(9582),W=t(4773),q=t(52),k=t.n(q),y=t(4261),Z=t(1959),_=t(797);const I=(0,W.ZP)("http://localhost:3000"),x=(0,s.aZ)({setup(){const e=(0,b.tv)(),a=(0,Z.iH)(!1),t=(0,Z.iH)(!1);function l(){return localStorage.removeItem("user"),localStorage.removeItem("userInfo"),e.push("/login")}const{notifyError:n}=(0,_.alertsCustom)(),o=(0,Z.iH)(""),r=(0,Z.iH)([]),u=(0,Z.iH)(""),i=(0,Z.iH)([]);let m=(0,y.V)();function d(){I.emit("message",{msg:o,userId:m.userId,username:m.username,avatar:m.avatar}),o.value="",I.emit("username",{username:m.username})}function c(){g(),p(),I.on("message",(e=>{console.log("se recibió message",e),console.log("se recibió avatar",e.avatar);const a={user:{username:e.user},message:e.msg,createdAt:e.createdAt,avatar:e.avatar};i.value.push(a)}))}function p(){k().get("http://localhost:3000/api/messages").then((e=>{200==e.status&&(i.value=e.data)})).catch((()=>{n("Ha ocurrido un error inesperado, por favor intenta mas tarde.")}))}function g(){I.on("userActive",(e=>{console.log("users count",e)}))}return(0,s.bv)((()=>{const a=localStorage.getItem("user");if(!a)return e.push("/login")})),I.on("userActive",(e=>{u.value=e})),(0,s.bv)((()=>{c()})),{sendMessage:d,userInfo:m,messages:i,usersActiveGlobal:u,users:r,msg:o,drawer:a,miniState:t,logout:l}}});var C=t(9214),Q=t(3812),S=t(9570),V=t(4607),j=t(3747),R=t(3414),H=t(2035),z=t(4554),T=t(6115),U=t(5096),A=t(2350),F=t(1762),$=t(2426),M=t(223),O=t(7704),N=t(7011),D=t(2652),L=t(7518),P=t.n(L);x.render=h;const E=x;P()(x,"components",{QLayout:C.Z,QHeader:Q.Z,QToolbar:S.Z,QBtn:V.Z,QToolbarTitle:j.Z,QItem:R.Z,QItemSection:H.Z,QIcon:z.Z,QField:T.Z,QAvatar:U.Z,QItemLabel:A.Z,QFooter:F.Z,QInput:$.Z,QDrawer:M.Z,QScrollArea:O.Z,QList:N.Z,QPageContainer:D.Z})},797:(e,a,t)=>{"use strict";t.r(a),t.d(a,{alertsCustom:()=>b,default:()=>R});var s=t(3673),l=t(2323),n=t(8880);const o=(0,s.HX)("data-v-7a4e9280");(0,s.dD)("data-v-7a4e9280");const r={class:"container bg-custom"},u={class:"abs-center"},i={class:"text-h5 text-center"},m={class:"q-mt-lg"},d=(0,s.Wm)("span",null," o ",-1);(0,s.Cn)();const c=o(((e,a,t,c,p,g)=>{const f=(0,s.up)("q-resize-observer"),w=(0,s.up)("q-img"),v=(0,s.up)("q-input"),h=(0,s.up)("q-icon"),b=(0,s.up)("q-file"),W=(0,s.up)("q-btn"),q=(0,s.up)("q-form"),k=(0,s.up)("q-card-section"),y=(0,s.up)("q-card"),Z=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(Z,null,{default:o((()=>[(0,s.Wm)("div",r,[(0,s.Wm)(f,{onResize:e.onResize},null,8,["onResize"]),(0,s.Wm)("div",u,[(0,s.Wm)(y,{class:"my-card q-m-lg",flat:"",bordered:""},{default:o((()=>[(0,s.Wm)(k,{horizontal:e.windowWidth>400},{default:o((()=>[e.isRegister?((0,s.wg)(),(0,s.j4)(w,{key:0,class:"col-5",src:"https://cdn.quasar.dev/img/parallax2.jpg"})):(0,s.kq)("",!0),(0,s.Wm)(k,null,{default:o((()=>[(0,s.Wm)("h4",i,(0,l.zw)(e.textContextTitle),1),(0,s.Wm)(q,{onSubmit:(0,n.iM)(e.validateValues,["prevent"])},{default:o((()=>[(0,s.Wm)(v,{class:"q-mt-sm",dense:!0,rounded:"",type:"text",outlined:"",modelValue:e.user.username,"onUpdate:modelValue":a[1]||(a[1]=a=>e.user.username=a),label:"Usuario",rules:[e=>e&&e.length>0||"Introduce tu nombre de usuario"]},null,8,["modelValue","rules"]),e.isRegister?((0,s.wg)(),(0,s.j4)(v,{key:0,class:"q-mt-sm",dense:!0,rounded:"",type:"emaiil",outlined:"",modelValue:e.user.email,"onUpdate:modelValue":a[2]||(a[2]=a=>e.user.email=a),label:"Correo electrónico",rules:[e=>e&&e.length>0&&e.includes("@")||"Introduce tu correo"]},null,8,["modelValue","rules"])):(0,s.kq)("",!0),(0,s.Wm)(v,{class:"q-mt-sm q-mb-sm",dense:!0,rounded:"",type:"password",outlined:"",modelValue:e.user.password,"onUpdate:modelValue":a[3]||(a[3]=a=>e.user.password=a),label:"Contraseña...",rules:[e=>e&&e.length>0||"Introduce tu contraseña"]},null,8,["modelValue","rules"]),e.isRegister?((0,s.wg)(),(0,s.j4)(b,{key:1,class:"q-mt-sm q-mb-sm",dense:!0,rounded:"",outlined:"","bottom-slots":"",modelValue:e.file,"onUpdate:modelValue":a[5]||(a[5]=a=>e.file=a),label:"Selecciona una foto de perfil",counter:"","max-files":"1"},{append:o((()=>[null!==e.file?((0,s.wg)(),(0,s.j4)(h,{key:0,name:"close",onClick:a[4]||(a[4]=(0,n.iM)((a=>e.file=null),["stop"])),class:"cursor-pointer"})):(0,s.kq)("",!0)])),_:1},8,["modelValue"])):(0,s.kq)("",!0),(0,s.Wm)("span",m,[(0,s.Wm)(W,{push:"",type:"submit",color:"primary",label:e.textContextTitle},null,8,["label"]),d,(0,s.Wm)("a",{onClick:a[6]||(a[6]=a=>e.isRegister=!e.isRegister),class:"text-blue"},(0,l.zw)(e.textContextTitleOpposite),1)])])),_:1},8,["onSubmit"])])),_:1}),e.isRegister?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(w,{key:1,class:"col-5",src:"https://cdn.quasar.dev/img/parallax2.jpg"}))])),_:1},8,["horizontal"])])),_:1})])])])),_:1})}));var p=t(1959),g=t(9582),f=t(52),w=t.n(f),v=t(8825),h=t(51);const b=()=>{const e=(0,v.Z)(),a=a=>e.notify({type:"positive",message:a}),t=a=>e.notify({type:"warning",message:a}),s=a=>e.notify({type:"negative",message:a}),l=a=>e.notify({type:"info",message:a});return{notifySuccess:a,notifyError:s,notifyWarning:t,notifyInfo:l}},W=(0,s.aZ)({name:"PageAbout",setup(){const{notifySuccess:e,notifyError:a,notifyWarning:t}=b(),l=(0,g.tv)(),n=(0,p.qj)({username:"",password:"",email:""}),o=(0,p.iH)(null),r=(0,p.iH)(window.innerWidth),u=(0,p.iH)(!1),i=(0,s.Fl)((()=>u.value?"Registrarse":"Iniciar sesión")),m=(0,s.Fl)((()=>u.value?"Iniciar sesión":"Registrarse"));function d(e){r.value=e.width}function c(){if(u.value){if(!o.value)return t("Selecciona una imagen de perfil para continuar");var s=new FormData;s.append("username",n.username),s.append("password",n.password),s.append("email",n.email),s.append("file",o.value),s.append("roles",JSON.stringify(["admin"])),w().post("http://localhost:3000/auth/register",s).then((a=>{200==a.status?(e("Registrado con exito"),u.value=!1):t("Valida tus datos")})).catch((()=>{a("Ha ocurrido un error inesperado, por favor intenta mas tarde.")}))}else w().post("http://localhost:3000/auth/login",{username:n.username,password:n.password}).then((a=>{if(200==a.status){if(a.data&&a.data.accessToken){localStorage.setItem("user",JSON.stringify(a.data));var s=a.data.accessToken,n=(0,h.Z)(s);localStorage.setItem("userInfo",JSON.stringify(n))}e("Logueado con exito"),l.go(NaN)}else t("Valida tus datos")})).catch((()=>{a("Ha ocurrido un error inesperado, por favor intenta mas tarde.")}))}return(0,s.bv)((()=>{const e=localStorage.getItem("user");if(e)return l.push("/")})),{windowWidth:r,onResize:d,user:n,file:o,validateValues:c,isRegister:u,textContextTitle:i,textContextTitleOpposite:m}}});var q=t(4379),k=t(5151),y=t(151),Z=t(5589),_=t(4027),I=t(8689),x=t(2426),C=t(4816),Q=t(4554),S=t(4607),V=t(7518),j=t.n(V);W.render=c,W.__scopeId="data-v-7a4e9280";const R=W;j()(W,"components",{QPage:q.Z,QResizeObserver:k.Z,QCard:y.Z,QCardSection:Z.Z,QImg:_.Z,QForm:I.Z,QInput:x.Z,QFile:C.Z,QIcon:Q.Z,QBtn:S.Z})}}]);