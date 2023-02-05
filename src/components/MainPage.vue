<script setup>
// import GeneralTable from "./GeneralTable.vue";
import AgentRowsGeneral from "./AgentRowsGeneral.vue";
</script>

<template>
  <!-- <GeneralTable :maxValue="maxValue" :tableData="tableData"> </GeneralTable> -->
  <q-expansion-item
    v-model="expand"
    expand-icon-toggle
    expand-icon-class="hidden"
    class="q-pa-none"
  >
    <template #header>
      <QueueHeader
        v-model:expand="expand"
        @expand="expand = !expand"
        :queue-title="'Nome da Fila'"
        :agents="10"
        :completedCalls="10"
        :discardedCalls="10"
        :abandonedCalls="10"
        :ongoingCalls="10"
        :onHoldCalls="10"
        :completedChats="10"
        :ongoingChats="10"
        :onHoldChats="10"
      />
    </template>
    <q-card>
      <q-card-section v-if="expand">
        <AgentRowsGeneral
          v-for="table in 1"
          :key="table"
          :maxValue="maxValue"
          :dataTable="tableData"
        />
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script>
import QueueHeader from "../QueueHeader.vue";
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
    isTable: {
      type: Boolean,
    },
  },
  data() {
    return {
      expand: true,
      maxValue: 0,
      tableData: [
        {
          agents: "Bruno Oliveira",
          attendances: {
            calls: 0,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 8,
          callerNumber: "67992001010",
          direction: "IN",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 60,
            chats: 80,
          },
          finish: 16,
          exten: "0014",
          rejections: 9,
          callerNumber: "6733180700",
          direction: "IN",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          doNotDisturb: true,
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 660,
            chats: 0,
          },
          finish: 16,
          exten: "0014",
          rejections: 18,
          callerNumber: "6733180700",
          direction: "OUT",
          idle: 600,
          duration: 300,
          status: "PAUSED",
          selected: false,
        },
        {
          agents: "Bruno Oliveira",
          attendances: {
            calls: 0,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 8,
          callerNumber: "6733180700",
          direction: "IN",
          idle: 600,
          duration: 300,
          status: "ONTHEPHONE",
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 60,
            chats: 80,
          },
          finish: 16,
          exten: "0014",
          rejections: 9,
          callerNumber: "67992001010",
          direction: "AUTO",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
          doNotDisturb: true,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 660,
            chats: 0,
          },
          finish: 16,
          exten: "0014",
          rejections: 18,
          callerNumber: "6733180700",
          direction: "OUT",
          idle: 600,
          duration: 300,
          status: "PAUSED",
          selected: false,
        },
        {
          agents: "Bruno Oliveira",
          attendances: {
            calls: 0,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 8,
          callerNumber: "6733180700",
          direction: "IN",
          idle: 600,
          duration: 300,
          status: "UNAVAILABLE",
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 60,
            chats: 80,
          },
          finish: 16,
          exten: "0014",
          rejections: 9,
          callerNumber: "67992001010",
          direction: "AUTO",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
          doNotDisturb: true,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 660,
            chats: 0,
          },
          finish: 16,
          exten: "0014",
          rejections: 18,
          callerNumber: "6733180700",
          direction: "IN",
          idle: 600,
          duration: 300,
          status: "PAUSED",
          selected: false,
        },
        {
          agents: "Bruno Oliveira",
          attendances: {
            calls: 0,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 8,
          callerNumber: "6733180700",
          direction: "OUT",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 60,
            chats: 80,
          },
          finish: 16,
          exten: "0014",
          rejections: 9,
          callerNumber: "6733180700",
          direction: "OUT",
          idle: 600,
          duration: 300,
          status: "RINGING",
          selected: false,
          doNotDisturb: true,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 660,
            chats: 0,
          },
          finish: 16,
          exten: "0014",
          rejections: 18,
          callerNumber: "6733180700",
          direction: "IN",
          idle: 600,
          duration: 300,
          status: "PAUSED",
          selected: false,
        },
        {
          agents: "Bruno Oliveira",
          attendances: {
            calls: 0,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 8,
          callerNumber: "6733180700",
          direction: "AUTO",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 60,
            chats: 80,
          },
          finish: 16,
          exten: "0014",
          rejections: 9,
          callerNumber: "6733180700",
          direction: "AUTO",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
          doNotDisturb: true,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 660,
            chats: 0,
          },
          finish: 16,
          exten: "0014",
          rejections: 18,
          callerNumber: "6733180700",
          direction: "IN",
          idle: 600,
          duration: 300,
          status: "PAUSED",
          selected: false,
        },
        {
          agents: "Bruno Oliveira",
          attendances: {
            calls: 0,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 8,
          callerNumber: "6733180700",
          direction: "IN",
          idle: 600,
          duration: 300,
          status: "ONLINE",
          selected: false,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 60,
            chats: 80,
          },
          finish: 16,
          exten: "0014",
          rejections: 9,
          callerNumber: "6733180700",
          direction: "IN",
          idle: 600,
          duration: 300,
          status: "ONTHEPHONE",
          selected: false,
          doNotDisturb: true,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 660,
            chats: 0,
          },
          finish: 16,
          exten: "0014",
          rejections: 18,
          callerNumber: "6733180700",
          direction: "IN",
          idle: 600,
          duration: 300,
          status: "PAUSED",
          selected: false,
        },
      ],
    };
  },
  mounted() {
    this.changeInfo();
  },
  methods: {
    changeInfo() {
      const vm = this;
      setInterval(() => {
        this.tableData = this.tableData.map((data) => ({
          ...data,
          finish: data.finish + 2,
          idle: data.idle * 2,
          duration: data.duration++,
          rejections: data.rejections + 20,
          attendances: {
            calls: data.attendances.calls + 2,
            chats: data.attendances.chats + 3,
          },
        }));
        vm.maxValue += 50;
      }, 1000);
    },
  },

  components: { QueueHeader },
};
</script>
