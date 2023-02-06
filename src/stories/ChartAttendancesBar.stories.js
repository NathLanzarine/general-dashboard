import MyAttendances from "../components/generalView/ChartAttendancesBar.vue";

export default {
  title: "Example/Charts",
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
