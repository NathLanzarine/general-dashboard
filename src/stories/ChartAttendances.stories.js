import MyAttendances from "../components/generalView/ChartAttendances.vue";

export default {
  title: "Example/Attendances",
  component: MyAttendances,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { MyAttendances },
  setup() {
    return { args };
  },
  template: `
  <my-attendances  v-bind="args" />
  `,
});

export const Attendances = Template.bind({});
