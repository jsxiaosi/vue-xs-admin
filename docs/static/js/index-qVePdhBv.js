var y=(t,n,s)=>new Promise((p,c)=>{var g=r=>{try{m(s.next(r))}catch(e){c(e)}},w=r=>{try{m(s.throw(r))}catch(e){c(e)}},m=r=>r.done?p(r.value):Promise.resolve(r.value).then(g,w);m((s=s.apply(t,n)).next())});import{A as B,a as R,_ as S}from"./index-iNo8zIn8.js";import{ev as A,d as $,j as x,r as b,V as C,R as T,a as u,o as I,e as j,w as i,ew as q,u as f,h as o,ex as z,t as V,g as k,f as l,er as H,eu as L,c as M,x as P,y as D}from"./index-Mu6vz_nv.js";import{_ as F}from"./plugin-vueexport-helper-x3n3nnut.js";import"./index-5p-ePwJY.js";import"./index-_oWKVQIj.js";import"./logo-X81rH-3O.js";const X=(t,n)=>A.post({url:"/mock_api/login",data:{username:t,password:n}},{errorMessageMode:"modal",withToken:!1}),E={class:"form-item-container"},G=$({__name:"form",setup(t){const n=x(),s=b({username:"",password:""}),p=x(!1),{t:c}=C(),g=b({username:[{required:!0,trigger:"blur",message:c("sys.login.rules.userName")}],password:[{required:!0,trigger:"blur",message:c("sys.login.rules.password")}]}),w=e=>{e&&e.validate(a=>{if(a)r();else return console.log("error submit!"),!1})},m=T(),r=()=>y(this,null,function*(){const e=yield X(s.username,s.password);e.code===1&&(H().setUserInfo(e.data),yield L(e.data.role),m.push("/"))});return(e,a)=>{const h=u("el-input"),_=u("el-form-item"),N=u("el-checkbox"),v=u("el-button"),U=u("el-form");return I(),j(U,{ref_key:"ruleFormRef",ref:n,model:s,rules:g,size:"large",class:"demo-ruleForm"},{default:i(()=>[o(_,{prop:"username",class:"enter-y"},{default:i(()=>[o(h,{modelValue:s.username,"onUpdate:modelValue":a[0]||(a[0]=d=>s.username=d),"prefix-icon":f(q),clearable:"",placeholder:`${e.$t("sys.login.userName")}：admin`},null,8,["modelValue","prefix-icon","placeholder"])]),_:1}),o(_,{prop:"password",class:"enter-y"},{default:i(()=>[o(h,{modelValue:s.password,"onUpdate:modelValue":a[1]||(a[1]=d=>s.password=d),type:"password","prefix-icon":f(z),clearable:"","show-password":"",placeholder:`${e.$t("sys.login.password")}：admin123`},null,8,["modelValue","prefix-icon","placeholder"])]),_:1}),o(_,{class:"enter-y"},{default:i(()=>[l("div",E,[o(N,{modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=d=>p.value=d),label:e.$t("sys.login.rememberPassword")},null,8,["modelValue","label"]),o(v,{link:"",type:"primary"},{default:i(()=>[k(V(e.$t("sys.login.forgotPassword")),1)]),_:1})])]),_:1}),o(_,{class:"enter-y"},{default:i(()=>[o(v,{class:"submit-btn",onClick:a[3]||(a[3]=d=>w(n.value))},{default:i(()=>[k(V(e.$t("sys.login.loginButton")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])}}}),J=F(G,[["__scopeId","data-v-7ee853ed"]]),K=t=>(P("data-v-00c2fdce"),t=t(),D(),t),O={class:"page-container"},Q={class:"container mx-auto"},W={class:"head"},Y={class:"application"},Z={class:"login-box"},ee=K(()=>l("div",{className:"mb-10 flex flex-row items-center justify-center enter-y"},[l("img",{class:"w-[44px] h-[44px]",src:S,mode:"scaleToFill",alt:"logo"}),l("h2",{className:"m-0 ml-4"},"Vue Xs Admin")],-1)),se={class:"login-form"},oe=$({__name:"index",setup(t){return(n,s)=>(I(),M("div",O,[l("div",Q,[l("div",W,[l("div",Y,[o(f(B),{class:"item icon-size enter-x"}),o(f(R),{class:"item enter-x"})])]),l("div",Z,[ee,l("div",se,[o(J)])])])]))}}),ce=F(oe,[["__scopeId","data-v-00c2fdce"]]);export{ce as default};
