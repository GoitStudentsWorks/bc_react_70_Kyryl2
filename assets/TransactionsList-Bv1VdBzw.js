import{d as n,a as i,j as t}from"./index-BBnfrm9i.js";import c from"./TransactionsItem-CbJ2paYg.js";import{a as d}from"./selectors-DIK-Bg5I.js";import"./clsx-B-dksMZM.js";import"./Icon-D93qrst1.js";import"./EditTransactionForm-CfSwtIHc.js";import"./formik.esm-BcKGEoCv.js";import"./hoist-non-react-statics.cjs-CR0WdkPu.js";import"./react-datepicker-DgmR9Bdx.js";import"./floating-ui.dom-C4l1LKLb.js";import"./index.esm-Co3wsXzJ.js";import"./CustomInputCalendar-CGAJl4iS.js";import"./Modal-C9nGsjwZ.js";const m="_wrapper_yhm3a_1",l="_type_yhm3a_32",h="_sum_yhm3a_36",p="_card_yhm3a_65",_="_cardRow_yhm3a_73",x="_cardLabel_yhm3a_79",j="_cardValue_yhm3a_83",y="_cardActions_yhm3a_87",u="_filler_yhm3a_116",r={wrapper:m,type:l,sum:h,card:p,cardRow:_,cardLabel:x,cardValue:j,cardActions:y,filler:u},w=()=>{const e=n(d),{isMobile:o}=i();return e.length?t.jsx(t.Fragment,{children:o?t.jsx("ul",{children:e==null?void 0:e.toSorted((a,s)=>new Date(s.transactionDate)-new Date(a.transactionDate)).map(a=>t.jsx(c,{transaction:a},a.id))}):t.jsx("div",{className:r.wrapper,children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Date"}),t.jsx("th",{className:r.type,children:"Type"}),t.jsx("th",{children:"Category"}),t.jsx("th",{children:"Comment"}),t.jsx("th",{className:r.sum,children:"Sum"}),t.jsx("th",{})]})}),t.jsx("tbody",{children:e==null?void 0:e.toSorted((a,s)=>new Date(s.transactionDate)-new Date(a.transactionDate)).map(a=>t.jsx(c,{transaction:a},a.id))})]})})}):t.jsx("div",{className:r.filler,children:t.jsx("p",{children:"You don’t have any transactions now..."})})},M=w;export{M as default};
//# sourceMappingURL=TransactionsList-Bv1VdBzw.js.map
