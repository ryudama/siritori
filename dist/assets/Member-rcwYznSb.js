import{n as f,r as u,w as b,c as l,a,g as n,v,d as y,F as k,b as w,q as V,o as r,p as g,l as I}from"./index-5O5kk1MI.js";import{_ as M,u as N}from"./_plugin-vue_export-helper-6GQ0Xf8B.js";const S=o=>(g("data-v-2796a4d8"),o=o(),I(),o),x={class:"modal"},B={class:"modal-content"},C=S(()=>a("div",null,"ゲームの参加人数を入力してください",-1)),U={key:0,class:"mt-3"},F=["onUpdate:modelValue"],G={class:"toGame"},P={__name:"Member",setup(o){const p=f(),i=N(),e=u(2),t=u([]),c=u(!1);b([()=>e.value,()=>t.value.length],()=>{t.value.length===e.value&&(c.value=!0)});const _=()=>{t.value.every(d=>d!=="")?(i.setPlayerName(t.value),p.push({name:"Top"})):alert("名前が入っていない人がいます")};return(d,m)=>(r(),l("div",x,[a("div",B,[C,n(a("input",{type:"number",class:"mt-3 number","onUpdate:modelValue":m[0]||(m[0]=s=>e.value=s),min:2},null,512),[[v,e.value]]),e.value?(r(),l("div",U,"参加するメンバーの名前を入力してください")):y("",!0),(r(!0),l(k,null,w(e.value,s=>(r(),l("div",{key:s},[n(a("input",{type:"text","onUpdate:modelValue":h=>t.value[s-1]=h,class:"mt-3"},null,8,F),[[v,t.value[s-1]]])]))),128)),a("div",G,[n(a("button",{onClick:_},"ゲームスタート！",512),[[V,c.value]])])])]))}},D=M(P,[["__scopeId","data-v-2796a4d8"]]);export{D as default};