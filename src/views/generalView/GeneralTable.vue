<template>
  <div class="column">
    <q-expansion-item
      v-model="expand"
      expand-icon-toggle
      expand-icon-class="hidden"
      class="q-pa-none"
      header-class="my-custom-header-class"
    >
      <template #header>
        <QueueHeader
          v-model:expand="expand"
          @expand="expand = !expand"
          @change-view="viewByAgent = !viewByAgent"
          :queue-title="'Nome da Fila'"
          :agents="queueInfo.agents.length"
          :completedCalls="queueInfo.completedCalls"
          :discardedCalls="queueInfo.discardedCalls"
          :abandonedCalls="queueInfo.abandonedCalls"
          :ongoingCalls="queueInfo.ongoingCalls"
          :onHoldCalls="queueInfo.onHold.total"
          :completedChats="queueInfo.completedChats"
          :ongoingChats="queueInfo.ongoingChats"
          :onHoldChats="queueInfo.onHoldChats"
        />
      </template>
      <q-card>
        <q-card-section v-if="expand">
          <AgentRowsGeneral
            v-if="viewByAgent"
            :maxValue="queueInfo.totalFinished"
            :dataTable="queueInfo.agents"
            :on-hold="queueInfo.onHold"
          />

          <AttendancesRowsGeneral v-else :dataTable="queueInfo.agents" />
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <div class="my-table-border"></div>
  </div>
</template>

<script>
import QueueHeader from "@/components/QueueHeader.vue";
import AgentRowsGeneral from "./AgentRowsGeneral.vue";
import AttendancesRowsGeneral from "./AttendancesRowsGeneral.vue";

export default {
  functional: true,
  components: { QueueHeader, AgentRowsGeneral, AttendancesRowsGeneral },

  props: {
    queueInfo: {},
  },
  data() {
    return {
      expand: true,
      viewByAgent: true,
    };
  },
};
</script>

<style>
.my-custom-header-class {
  padding: 0px;
}

.my-table-border {
  height: 1px;
  width: 100%;
  background: #c5c5c5;
}
</style>
