// import { within, userEvent } from "@storybook/testing-library";
import MyOnHoldQueueRow from "../components/OnHoldQueueRow.vue";

export default {
  title: "Example/GeneralTable/FilaDeEspera",
  component: MyOnHoldQueueRow,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { MyOnHoldQueueRow },
  setup() {
    return { args };
  },
  template: `
  <MyOnHoldQueueRow v-bind="args" />
  `,
});

export const HoldQueueRow = Template.bind({});
HoldQueueRow.args = {};
