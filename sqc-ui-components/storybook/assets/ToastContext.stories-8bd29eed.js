import{a as m,j as o}from"./jsx-runtime-670450c2.js";import{r as s}from"./index-f1f749bf.js";import{T as v}from"./Toast-1e1d59fe.js";import"./_commonjsHelpers-042e6b4d.js";import"./close-c4b2fa08.js";const T=s.createContext({}),i=()=>s.useContext(T);function l({children:e}){const[c,r]=s.useState(!1),[x,_]=s.useState("default"),[f,g]=s.useState(""),n=(t,S)=>{_(t),g(S),r(!0)},y=t=>{n("default",t)},C=t=>{n("success",t)},h=t=>{n("error",t)};return m(T.Provider,{value:{toast:y,toastSuccess:C,toastError:h},children:[e,c&&o(v,{type:x,text:f,onClose:()=>r(!1)})]})}try{i.displayName="useToastContext",i.__docgenInfo={description:"Hook to access toast context",displayName:"useToastContext",props:{}}}catch{}try{l.displayName="ToastProvider",l.__docgenInfo={description:"Provider element to wrap other elements to access toast context",displayName:"ToastProvider",props:{}}}catch{}const N={title:"Components/ToastContext",component:l,tags:["docsPage"],argTypes:{children:{control:{type:"object"}}}},P=()=>{const{toast:e,toastSuccess:c,toastError:r}=i();return m("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[o("button",{onClick:()=>e("Default toast message"),children:"Toast"}),o("button",{onClick:()=>c("Success toast message"),children:"Toast success"}),o("button",{onClick:()=>r("Error toast message"),children:"Toast error"})]})},a={args:{children:o(P,{})}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <TestComponent />
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const w=["Default"];export{a as Default,w as __namedExportsOrder,N as default};
//# sourceMappingURL=ToastContext.stories-8bd29eed.js.map