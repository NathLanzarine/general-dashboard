var l=Object.defineProperty;var e=(t,n)=>l(t,"name",{value:n,configurable:!0});import{r as i,b as p,e as o,l as d,t as m,o as _,p as b,f as B}from"./vue.esm-bundler-89f6b84a.js";import{_ as f}from"./_plugin-vue_export-helper-a0691a9b.js";const r={name:"menu-button",props:{label:{type:String,required:!0}},emits:["click"],setup(t,{emit:n}){return t=i(t),{onClick(){n("click")}}}},M=e(t=>(b("data-v-980b8ff1"),t=t(),B(),t),"_withScopeId"),g=M(()=>o("svg",{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M10.293 0.292969L5.99997 4.58597L1.70697 0.292969L0.292969 1.70697L5.99997 7.41397L11.707 1.70697L10.293 0.292969Z",fill:"white"})],-1));function y(t,n,u,s,h,S){return _(),p("div",null,[o("button",{type:"button",class:"button-menu",onClick:n[0]||(n[0]=(...c)=>s.onClick&&s.onClick(...c))},[d(m(u.label)+" ",1),g])])}e(y,"_sfc_render");const a=f(r,[["render",y],["__scopeId","data-v-980b8ff1"]]);r.__docgenInfo={displayName:"menu-button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0}],events:[{name:"click"}]};const I={parameters:{storySource:{source:`import MenuButton from "../components/MenuButton.vue";

export default {
  title: "MenuButton",
  component: MenuButton,
};

const Template = (args) => ({
  components: { MenuButton },
  setup() {
    return { args };
  },
  template: '<MenuButton v-bind="args"/>',
});

export const MenuButtonStory = Template.bind({});

MenuButtonStory.args = {
  label: "Dashboards",
};
`,locationsMap:{"menu-button-story":{startLoc:{col:17,line:8},endLoc:{col:2,line:14},startBody:{col:17,line:8},endBody:{col:2,line:14}}}}},title:"MenuButton",component:a},v=e(t=>({components:{MenuButton:a},setup(){return{args:t}},template:'<MenuButton v-bind="args"/>'}),"Template"),x=v.bind({});x.args={label:"Dashboards"};const C=["MenuButtonStory"];export{x as MenuButtonStory,C as __namedExportsOrder,I as default};
//# sourceMappingURL=MenuButton.stories-f1c78567.js.map
