import MyAgentRowsGeneral from "../components/AgentRowsGeneral.vue";

export default {
  title: "Example/AgentRowsGeneral",
  component: MyAgentRowsGeneral,
};

const Template = (args) => ({
  components: { MyAgentRowsGeneral },
  setup() {
    return { args };
  },
  template: '<MyAgentRowsGeneral v-bind="args"/>',
});

export const TableByAgent = Template.bind({});

TableByAgent.args = {
  dataTable: [
    {
      agents: "Bruno Oliveira",
      attendances: {
        calls: 6,
        chats: 8,
      },
      finish: 16,
      exten: "0014",
      rejections: 8,
      callerNumber: "6733180700",
      idle: 600,
      duration: 300,
      status: "ONLINE",
      doNotDisturb: true,
    },
    {
      agents: "Bruno Oliveira",
      attendances: {
        calls: 25,
        chats: 10,
      },
      finish: 35,
      exten: "0014",
      rejections: 0,
      callerNumber: "6733180700",
      idle: 600,
      duration: 300,
      status: "PAUSED",
      doNotDisturb: false,
    },
  ],
  maxValue: 50,
};
