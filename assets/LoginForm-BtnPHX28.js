import{u as l,j as a,f as d,h}from"./index-BBnfrm9i.js";import{F as p,a as u}from"./formik.esm-BcKGEoCv.js";import{c as x,d as e,I as g,_ as j}from"./index.esm-Co3wsXzJ.js";import{I as b}from"./index-Bx7MygH9.js";import{s,C as i}from"./CustomInput-BnJVr4eY.js";import f from"./Logo-T6ufpy8b.js";import"./hoist-non-react-statics.cjs-CR0WdkPu.js";import"./Icon-D93qrst1.js";const C=()=>{const r=l(),t=x().shape({email:e().email("Must be a valid email!"),password:e().min(8,"Minimum 8 characters!").max(20,"The maximum 20 characters!")}),o={email:"",password:""},n=(m,c)=>{r(h(m)).unwrap().then(()=>c.resetForm()).catch(()=>j.error("Email or password is not valid",{icon:a.jsx(b,{style:{width:"40px",height:"40px"}}),position:"top-right",style:{backgroundImage:"linear-gradient(133deg,#ffc727 0%,#bf6e93 61.46%,#a54ab2 90.54%)",color:"white"}}))};return a.jsxs("div",{className:s.mainContainer,children:[a.jsx(g,{position:"top-right",reverseOrder:!1}),a.jsx("div",{className:s.formContainer,children:a.jsxs("div",{className:s.container,children:[a.jsx("div",{children:a.jsx(f,{className:s.title,width:36,height:36})}),a.jsx(p,{initialValues:o,onSubmit:n,validationSchema:t,children:a.jsxs(u,{className:s.form,children:[a.jsx(i,{name:"email",type:"email",placeholder:"E-mail",iconID:"icon-email"}),a.jsx(i,{name:"password",placeholder:"Password",iconID:"icon-lock"}),a.jsxs("div",{className:s.buttonsWrapper,children:[a.jsx("button",{className:s.btnLogin,type:"submit","aria-label":"login button",children:"Log in"}),a.jsx(d,{className:s.btnRegister,to:"/register",children:"Register"})]})]})})]})})]})};export{C as default};
//# sourceMappingURL=LoginForm-BtnPHX28.js.map
