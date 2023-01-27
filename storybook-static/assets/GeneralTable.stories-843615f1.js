var a=Object.defineProperty;var t=(e,n)=>a(e,"name",{value:n,configurable:!0});import{b as l,e as s,t as c,o as p,p as i,f as d}from"./vue.esm-bundler-89f6b84a.js";import{_ as m}from"./_plugin-vue_export-helper-a0691a9b.js";const _=t(e=>(i("data-v-74e34d35"),e=e(),d(),e),"_withScopeId"),u={class:"greetings"},g={class:"green"},b=_(()=>s("h3",null,"You’ve successfully created a project with",-1)),r={__name:"GeneralTable",props:{msg:{type:String,required:!0}},setup(e){return(n,G)=>(p(),l("div",u,[s("h1",g,c(e.msg),1),b]))}},o=m(r,[["__scopeId","data-v-74e34d35"]]);r.__docgenInfo={exportName:"default",displayName:"GeneralTable",description:"",tags:{},props:[{name:"msg",type:{name:"string"},required:!0}]};const v={parameters:{storySource:{source:`import GeneralTable from "../components/GeneralTable.vue";

export default {
  title: "GeneralTable",
  component: GeneralTable,
};

const Template = (args) => ({
  components: { GeneralTable },
  setup() {
    return { args };
  },
  template: '<GeneralTable v-bind="args"/>',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  msg: "Esse é o primeiro storie",
};
`,locationsMap:{"first-story":{startLoc:{col:17,line:8},endLoc:{col:2,line:14},startBody:{col:17,line:8},endBody:{col:2,line:14}}}}},title:"GeneralTable",component:o},T=t(e=>({components:{GeneralTable:o},setup(){return{args:e}},template:'<GeneralTable v-bind="args"/>'}),"Template"),y=T.bind({});y.args={msg:"Esse é o primeiro storie"};const x=["FirstStory"];export{y as FirstStory,x as __namedExportsOrder,v as default};
//# sourceMappingURL=GeneralTable.stories-843615f1.js.map
