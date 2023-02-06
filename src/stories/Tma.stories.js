// import { within, userEvent } from "@storybook/testing-library";
import MyTma from "../components/Tma.vue";

export default {
  title: "Example/GeneralTable/Tma",
  component: MyTma,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { MyTma },
  setup() {
    return { args };
  },
  template: `
  <my-tma  v-bind="args" />
  `,
});

export const tma = Template.bind({});
tma.args = {
  tma: 15,
};
