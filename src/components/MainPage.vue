<script setup>
// import GeneralTable from "./GeneralTable.vue";
import AgentRowsGeneral from "./AgentRowsGeneral.vue";
import AttendancesRowsGeneral from "./AttendancesRowsGeneral.vue";
</script>

<template>
  <q-expansion-item
    v-for="index in 20"
    :key="index"
    v-model="expand"
    expand-icon-toggle
    expand-icon-class="hidden"
    class="q-pa-none"
  >
    <template #header>
      <QueueHeader
        v-model:expand="expand"
        @expand="expand = !expand"
        @change-view="viewByAgent = !viewByAgent"
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
          v-if="viewByAgent"
          :maxValue="maxValue"
          :dataTable="dataTable"
          :on-hold="onHoldCalls"
        />

        <AttendancesRowsGeneral v-else :dataTable="dataTable" />
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script>
import QueueHeader from "../QueueHeader.vue";
import { mapStores } from "pinia";
import { useDashboard } from "@/store/dashboardStore";
export default {
  props: {
    isTable: {
      type: Boolean,
    },
  },
  data() {
    return {
      expand: true,
      viewByAgent: true,
    };
  },
  mounted() {
    this.changeInfo();
  },

  computed: {
    ...mapStores(useDashboard),
    dataTable() {
      return this.dashboardStore.tableData;
    },
    onHoldCalls() {
      return this.dashboardStore.onHoldCalls;
    },
    maxValue() {
      return this.dashboardStore.maxValue;
    },
  },
  methods: {
    changeInfo() {
      setInterval(() => this.dashboardStore.increment(), 1000);
    },
  },

  components: { QueueHeader },
};
</script>
