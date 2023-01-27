var b=Object.defineProperty;var n=(e,t)=>b(e,"name",{value:t,configurable:!0});import{b as o,e as a,g as d,t as _,i as h,j as C,k as r,o as l}from"./vue.esm-bundler-89f6b84a.js";import{_ as v}from"./_plugin-vue_export-helper-a0691a9b.js";const c={name:"my-header",props:{user:{type:String,default:"Usuário"}},emits:["dashboards","calls","chats","agents","configs"],data(){return{emitir:["emitir"]}}},y={class:"header"},f={class:"main-menu"},x=C('<div class="icon" data-v-db5a8c3b><svg width="25" height="31" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-db5a8c3b><g clip-path="url(#clip0_390_27)" data-v-db5a8c3b><mask id="mask0_390_27" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="31" data-v-db5a8c3b><path d="M25 0H0V30.8594H25V0Z" fill="white" data-v-db5a8c3b></path></mask><g mask="url(#mask0_390_27)" data-v-db5a8c3b><path d="M20.9023 0.106023C20.4254 0.236538 19.8732 0.517146 15.8447 2.65759C6.75232 7.49315 1.8767 10.1166 1.49392 10.3841C0.803688 10.867 0.314238 11.6044 0.0946149 12.4985C-0.0371587 13.0336 -0.0246089 14.0386 0.11344 14.4627C0.376987 15.2458 1.0484 16.1072 1.701 16.4922C2.33477 16.8707 20.3438 24.8712 20.7706 24.9691C21.3918 25.1062 21.9314 25.0866 22.5652 24.8909C23.2304 24.6951 23.5817 24.4732 24.046 23.9642C24.6171 23.3378 24.8368 22.8353 24.9748 21.8107C25.0437 21.2821 24.9748 20.773 24.7237 20.0683C24.5293 19.5202 23.9456 18.9329 23.1864 18.5282C22.879 18.3585 20.0677 17.086 16.9428 15.6961C13.8179 14.3061 11.239 13.1445 11.2138 13.1184C11.1824 13.0923 12.1425 12.5376 13.3473 11.8916C15.5435 10.7104 21.0843 7.74767 22.7722 6.84714C24.4602 5.9531 24.912 5.24833 24.912 3.49289C24.912 2.52055 24.6861 1.85493 24.1025 1.13056C23.519 0.393157 22.7032 0.00161112 21.787 0.0081369C21.4859 0.0081369 21.0843 0.0538172 20.9023 0.106023Z" fill="#3D55AE" data-v-db5a8c3b></path><path d="M0.935544 18.8219C0.421 19.1091 0.0696033 19.6703 0.0194038 20.2967C-0.0307956 20.8188 0.0821535 21.0929 0.496299 21.5236C0.879073 21.9282 0.502574 21.7454 5.1774 23.8402C5.97432 24.1926 6.62691 24.4928 6.63946 24.5058C6.65201 24.5124 5.78607 24.9887 4.72561 25.5499C0.609248 27.736 0.471199 27.8275 0.163728 28.4669C-0.12492 29.0673 -0.0245207 29.5307 0.533948 30.1963C1.02967 30.7836 1.63206 30.9598 2.25955 30.6988C2.7239 30.503 10.737 26.1764 11.0947 25.9219C11.4774 25.6609 11.81 25.2628 11.9543 24.9105C12.0673 24.6299 12.0735 23.9903 11.9668 23.7488C11.7535 23.2659 11.2202 22.8483 10.2224 22.3785C9.06787 21.8367 3.3514 19.2591 2.66743 18.9719C1.85168 18.6326 1.35596 18.5869 0.935544 18.8219Z" fill="#FD9802" data-v-db5a8c3b></path></g></g><defs data-v-db5a8c3b><clipPath id="clip0_390_27" data-v-db5a8c3b><rect width="25" height="30.8594" fill="white" data-v-db5a8c3b></rect></clipPath></defs></svg></div>',1),k={key:0,class:"welcome"};function L(e,t,s,B,M,O){const p=r("q-btn"),u=r("my-button");return l(),o("header",null,[a("div",y,[a("div",f,[x,d(p,{size:"13px","no-caps":"","text-color":"white",label:"Dashboards",onClick:t[0]||(t[0]=g=>e.$emit("dashboards"))})]),a("div",null,[s.user?(l(),o("span",k,[a("b",null,"Olá, "+_(s.user),1)])):h("",!0),d(u,{size:"small",onClick:t[1]||(t[1]=g=>e.$emit("logout")),label:"Log out"})])])])}n(L,"_sfc_render");const i=v(c,[["render",L],["__scopeId","data-v-db5a8c3b"]]);c.__docgenInfo={displayName:"my-header",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"string"},defaultValue:{func:!1,value:'"Usuário"'}}],events:[{name:"dashboards"},{name:"logout"},{name:"calls"},{name:"chats"},{name:"agents"},{name:"configs"}]};const N={title:"Example/Header",component:i,parameters:{storySource:{source:`import MyHeader from "../Header.vue";

export default {
  title: "Example/Header",
  component: MyHeader,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { MyHeader },
  setup() {
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-header :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: "Rodrigo Santos",
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:11},endLoc:{col:2,line:18},startBody:{col:17,line:11},endBody:{col:2,line:18}},"logged-out":{startLoc:{col:17,line:11},endLoc:{col:2,line:18},startBody:{col:17,line:11},endBody:{col:2,line:18}}}},layout:"fullscreen"}},m=n(e=>({components:{MyHeader:i},setup(){return{...e}},template:'<my-header :user="user" />'}),"Template"),w=m.bind({});w.args={user:"Rodrigo Santos"};const H=m.bind({});H.args={user:null};const $=["LoggedIn","LoggedOut"];export{w as LoggedIn,H as LoggedOut,$ as __namedExportsOrder,N as default};
//# sourceMappingURL=Header.stories-ab3e5237.js.map
