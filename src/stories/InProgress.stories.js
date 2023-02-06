// import { within, userEvent } from "@storybook/testing-library";
import MyInProgress from "../components/InProgress.vue";

export default {
  title: "Example/GeneralTable/InProgress",
  component: MyInProgress,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { MyInProgress },
  setup() {
    return { args };
  },
  template: `
  <my-in-progress  v-bind="args" />
  `,
});

export const InProgress = Template.bind({});
InProgress.args = {
  ongoing: 1.937,
};
