// import { within, userEvent } from "@storybook/testing-library";
import MyAtivos from "../components/Ativos.vue";

export default {
  title: "Example/GeneralTable/Ativos",
  component: MyAtivos,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { MyAtivos },
  setup() {
    return { args };
  },
  template: `
  <my-Ativos  v-bind="args" />
  `,
});

export const Ativos = Template.bind({});
Ativos.args = {
  active: 30,
};
