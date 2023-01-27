import MenuButton from "../components/MenuButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/MenuButton",
  component: MenuButton,
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

const Template = (args) => ({
  components: { MenuButton },
  setup() {
    return { args };
  },
  template: '<menu-button v-bind="args" />',
});

export const FirstMenuButton = Template.bind({});
FirstMenuButton.args = {
  label: "Button",
  icon: "AgentsLogo",
};
