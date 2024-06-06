import{a as D,u as E,d as M,r as d,j as e,p as O}from"./index-BBnfrm9i.js";import{F as T,a as q,b as p,E as m}from"./formik.esm-BcKGEoCv.js";import{D as A}from"./react-datepicker-DgmR9Bdx.js";import{S as P}from"./react-select.esm-B98e281f.js";import{c as $}from"./clsx-B-dksMZM.js";import{c as f,a as B,b as z,d as R,I as W,_ as X}from"./index.esm-Co3wsXzJ.js";import L from"./CustomInputCalendar-CGAJl4iS.js";import V from"./Modal-C9nGsjwZ.js";import G from"./Toggle-BZc-trYc.js";import{I as _}from"./Icon-D93qrst1.js";import{s as H}from"./selectors-DIK-Bg5I.js";import"./hoist-non-react-statics.cjs-CR0WdkPu.js";import"./floating-ui.dom-C4l1LKLb.js";const J={control:()=>({}),container:t=>({...t,border:"none",borderBottom:"1px solid var(--white-40)",borderRadius:0,fontFamily:"Poppins",fontWeight:400,fontSize:18,backgroundColor:"transparent",color:"red"}),dropdownIndicator:()=>({display:"none"}),indicatorsContainer:()=>({display:"none"}),singleValue:t=>({...t,fontFamily:"Poppins",fontWeight:400,fontSize:16,color:"#fbfbfb"}),input:t=>({...t,caretColor:"#fbfbfb",fontFamily:"Poppins",fontWeight:400,fontSize:16,color:"#fbfbfb"}),valueContainer:t=>({...t,padding:"12px 20px"}),menu:t=>({...t,background:"linear-gradient(360deg, rgba(83, 61, 186, 0.7) 0%, rgba(80, 48, 154, 0.7) 35.94%, rgba(106, 70, 165, 0.7) 61.04%, rgba(133, 93, 175, 0.7) 100%);",backdropFilter:"blur(100px)",boxShadow:"0 4px 60px 0 rgba(0, 0, 0, 0.25)",borderRadius:8,cursor:"pointer",overflow:"hidden"}),menuList:t=>({...t,display:"flex",flexDirection:"column",height:158,padding:0,"::-webkit-scrollbar":{display:"none"}}),option:(t,i)=>({...t,backgroundColor:i.isFocused&&"rgba(255, 255, 255, 0.1)",color:i.isFocused?"#ff868d":"#fbfbfb",cursor:"pointer",padding:"8px 20px",display:"block",":active":{backgroundColor:"rgba(255, 255, 255, 0.1)"}})},K="_title_c0ukj_1",Q="_addButton_c0ukj_11",U="_dateInput_c0ukj_61",Y="_inputField_c0ukj_69",Z="_commentInput_c0ukj_73",ee="_categorySelect_c0ukj_75",te="_inputs_c0ukj_153",oe="_iconClose_c0ukj_181",ne="_select_wrapper_c0ukj_209",ae="_icon_c0ukj_181",se="_is_active_c0ukj_273",re="_inputContainer_c0ukj_281",ie="_error_c0ukj_377",n={title:K,addButton:Q,dateInput:U,inputField:Y,commentInput:Z,categorySelect:ee,inputs:te,iconClose:oe,select_wrapper:ne,icon:ae,is_active:se,inputContainer:re,error:ie},ce=({closeModal:t})=>{const{isMobile:i}=D(),b=E(),c=M(H),[g,u]=d.useState(!1),[a,h]=d.useState(!1),[x,j]=d.useState(null);d.useEffect(()=>{if(c.length>0){const o=c.find(s=>s.type==="INCOME");j(o?o.id:null)}},[c]);const C=c.filter(o=>o.type===(a?"INCOME":"EXPENSE")).map(o=>({value:o.id,label:o.name})),y=o=>{u(!0)},S=o=>{u(!1)},k=(o,{setSubmitting:s})=>{const{amount:l,comment:r,startDate:v,selectedCategory:F}=o,N={transactionDate:v.toISOString(),type:a?"INCOME":"EXPENSE",categoryId:a?x:F.value,comment:r,amount:a?parseFloat(l):-parseFloat(l)};b(O(N)).unwrap().then(()=>t()).catch(w=>{X.error(w),s(!1)})},I=f().shape({amount:B().required("Amount is required").positive("Amount must be positive"),startDate:z().required("Date is required"),selectedCategory:f().nullable(),comment:R().required("Comment is required")});return e.jsxs("div",{children:[e.jsx(W,{}),e.jsxs(V,{closeModal:t,children:[!i&&e.jsx("div",{onClick:t,children:e.jsx(_,{id:"icon-close",width:16,height:16,className:n.iconClose})}),e.jsx("p",{className:n.title,children:"Add transaction"}),e.jsx(G,{onChange:h,defaultActive:!1}),e.jsx(T,{initialValues:{startDate:new Date,amount:"",comment:"",selectedCategory:null},validationSchema:I,onSubmit:k,children:({setFieldValue:o,isSubmitting:s,values:l})=>e.jsxs(q,{className:n.inputContainer,children:[!a&&e.jsxs("div",{className:n.select_wrapper,children:[e.jsx(P,{className:n.categorySelect,options:C,placeholder:"Select a category",onMenuOpen:()=>y(),onMenuClose:()=>S(),styles:J,onChange:r=>o("selectedCategory",r)}),e.jsx(_,{id:"icon-down-arrow",className:$(n.icon,{[n.is_active]:g}),width:"23px",height:"18px"})]}),e.jsxs("div",{className:n.inputs,children:[e.jsx(p,{type:"number",name:"amount",placeholder:"0.00",required:!0,className:n.inputField}),e.jsx("div",{children:e.jsx(A,{selected:l.startDate,onChange:r=>o("startDate",r),dateFormat:"dd.MM.yyyy",className:n.dateInput,maxDate:Date.now(),customInput:e.jsx(L,{})})})]}),e.jsx(m,{name:"amount",component:"div",className:n.error}),e.jsx(p,{type:"text",name:"comment",placeholder:"Comment",className:n.commentInput}),e.jsx(m,{name:"comment",component:"div",className:n.error}),e.jsx("button",{type:"submit",className:n.addButton,"aria-label":"add button",disabled:s,children:"ADD"})]})})]})]})},ye=ce;export{ye as default};
//# sourceMappingURL=AddTransactionForm-Cr0qW036.js.map
