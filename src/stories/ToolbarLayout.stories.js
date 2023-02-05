// import { within, userEvent } from "@storybook/testing-library";
import MyToolbarLayout from "../views/ToolbarLayout.vue";

export default {
  title: "Example/ToolbarLayout",
  component: MyToolbarLayout,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { MyToolbarLayout },
  setup() {
    return { args };
  },
  template: `
  <my-toolbar-layout  v-bind="args" />
  `,
});

export const ToolbarLayout = Template.bind({});
