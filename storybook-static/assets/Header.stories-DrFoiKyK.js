import{f as a}from"./Button-JuqpsKCI.js";import{_ as o}from"./Header-CxhTyxF8.js";import"./index-C8k3Z-3Y.js";import"./vue.esm-bundler-CVCAAh9E.js";const c={title:"Example/Header",component:o,render:s=>({components:{MyHeader:o},setup(){return{args:s}},template:'<my-header :user="args.user" />'}),parameters:{layout:"fullscreen"},args:{onLogin:a(),onLogout:a(),onCreateAccount:a()},tags:["autodocs"]},e={args:{user:{name:"Jane Doe"}}},r={args:{user:null}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    user: null
  }
}`,...r.parameters?.docs?.source}}};const p=["LoggedIn","LoggedOut"];export{e as LoggedIn,r as LoggedOut,p as __namedExportsOrder,c as default};
