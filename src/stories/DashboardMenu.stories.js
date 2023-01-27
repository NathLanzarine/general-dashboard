// import { within, userEvent } from "@storybook/testing-library";
import MyHeader from "../components/DashboardMenu.vue";

export default {
  title: "Example/DashboardMenu",
  component: MyHeader,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => ({
  components: { MyHeader },
  setup() {
    return { ...args };
  },
  template: `<div>
  <my-header />
  </div>
  `,
});

export const DashMenuOptions = Template.bind({});
