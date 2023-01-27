var m=Object.defineProperty;var r=(t,n)=>m(t,"name",{value:n,configurable:!0});import{r as u,a,b as d,t as p,n as y,d as g,o as b}from"./vue.esm-bundler-89f6b84a.js";import{_ as B}from"./_plugin-vue_export-helper-a0691a9b.js";const l={name:"my-button",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(t){return["small","medium","large"].indexOf(t)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(t,{emit:n}){return t=u(t),{classes:a(()=>({"storybook-button":!0,"storybook-button--primary":t.primary,"storybook-button--secondary":!t.primary,[`storybook-button--${t.size||"medium"}`]:!0})),style:a(()=>({backgroundColor:t.backgroundColor})),onClick(){n("click")}}}};function k(t,n,i,o,h,v){return b(),d("button",{type:"button",class:y(o.classes),onClick:n[0]||(n[0]=(...c)=>o.onClick&&o.onClick(...c)),style:g(o.style)},p(i.label),7)}r(k,"_sfc_render");const s=B(l,[["render",k]]);l.__docgenInfo={displayName:"my-button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}]};const T={parameters:{storySource:{source:`import MyButton from "./Button.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyButton },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return { args };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
`,locationsMap:{primary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},secondary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},large:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},small:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}}}}},title:"Example/Button",component:s,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}}},e=r(t=>({components:{MyButton:s},setup(){return{args:t}},template:'<my-button v-bind="args" />'}),"Template"),f=e.bind({});f.args={primary:!0,label:"Button"};const x=e.bind({});x.args={label:"Button"};const C=e.bind({});C.args={size:"large",label:"Button"};const S=e.bind({});S.args={size:"small",label:"Button"};const M=["Primary","Secondary","Large","Small"];export{C as Large,f as Primary,x as Secondary,S as Small,M as __namedExportsOrder,T as default};
//# sourceMappingURL=Button.stories-8c655888.js.map
