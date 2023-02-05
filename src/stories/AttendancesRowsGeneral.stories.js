import MyAttendancesRowsGeneral from "../components/AttendancesRowsGeneral.vue";

export default {
  title: "Example/AttendancesRowsGeneral",
  component: MyAttendancesRowsGeneral,
};

const Template = (args) => ({
  components: { MyAttendancesRowsGeneral },
  setup() {
    return { args };
  },
  template: '<MyAttendancesRowsGeneral v-bind="args"/>',
});

export const AttendancesRowsGeneral = Template.bind({});

AttendancesRowsGeneral.args = {
  dataTable: [
    {
      agents: "Bruno Oliveira",
      attendances: {
        calls: 6,
        chats: 8,
      },
      generalAttendances: {
        calls: [
          {
            createdAt: 1675620240,
            id: "1675620240.10638",
            since: 1675621240,
            status: "ONGOING",
          },
          {
            createdAt: 1675620240,
            id: "1675620240.10639",
            since: 1675621241,
            status: "UNAVAILABLE",
          },
          {
            createdAt: 1675620240,
            id: "1675620240.10640",
            since: 1675621242,
            status: "UNAVAILABLE",
          },
        ],
        chats: [
          {
            createdAt: 1675620240,
            id: "1675620240.10641",
            since: 1675621243,
            status: "ONGOING",
          },
          {
            createdAt: 1675620240,
            id: "1675620240.10642",
            since: 1675621244,
            status: "ONLINE",
          },
          {
            createdAt: 1675620240,
            id: "1675620240.10637",
            since: 1675621245,
            status: "ONLINE",
          },
        ],
      },
      id: 1062,
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
      id: 1067,
      attendances: {
        calls: 25,
        chats: 10,
      },
      generalAttendances: {
        calls: [
          {
            createdAt: 1675620240,
            id: "1675620240.10638",
            since: 1675621240,
            status: "ONGOING",
          },
          {
            createdAt: 1675620240,
            id: "1675620240.10639",
            since: 1675621240,
            status: "UNAVAILABLE",
          },
        ],
        chats: [
          {
            createdAt: 1675620240,
            id: "10631",
            since: 1675621240,
            status: "ONGOING",
          },
          {
            createdAt: 1675620240,
            id: "10632",
            since: 1675621240,
            status: "ONLINE",
          },
        ],
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
