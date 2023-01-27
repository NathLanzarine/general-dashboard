import GeneralTable from "../components/GeneralTable.vue";

export default {
  title: "Example/GeneralTable",
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
