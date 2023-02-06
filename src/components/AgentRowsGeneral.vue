<template>
  <EasyDataTable
    :headers="headers"
    :items="dataTable"
    hide-footer
    table-min-height="0"
    alternating
    footer-hide
    table-class-name="customize-agent-table"
    header-text-direction="center"
    body-text-direction="center"
  >
    <template #header-agents="header">
      <AgentsSelect :agents="dataTable" v-model="itemsSelected" />
    </template>

    <template #item-agents="item">
      <div class="agent-name row items-center">
        <q-checkbox
          color="indigo-7"
          class="custom-check"
          size="xs"
          v-model="itemsSelected"
          :val="item.id"
        >
        </q-checkbox>
        <div class="col flex items-start">
          <div class="row items-center" v-if="item.doNotDisturb">
            <strong>{{ item.agents }}</strong> <DoNotDisturb />
          </div>
          <div v-else>
            <strong>{{ item.agents }}</strong>
          </div>
        </div>
      </div>
    </template>

    <template #item-attendances="item">
      <AttendanceColumn :attendances="item.attendances" :maxValue="maxValue" />
    </template>

    <template #item-finish="item">
      <div class="row full-width justify-center">
        <ProgressColumn :value="item.finish" :maxValue="maxValue" />
      </div>
    </template>

    <template #item-callerNumber="item">
      <PhoneColumn :phone="item.callerNumber" :direction="item.direction" />
    </template>

    <template #item-status="item">
      <div class="row full-width justify-center">
        <StatusColumn :agentStatus="item.status" />
      </div>
    </template>
  </EasyDataTable>
  <OnHoldQueue :callsOnHold="onHold" />
</template>

<script>
import ProgressColumn from "./ProgressColumn.vue";
import OnHoldQueue from "./OnHoldQueue.vue";
import AttendanceColumn from "./AttendanceColumn.vue";
import StatusColumn from "./StatusColumn.vue";
import DoNotDisturb from "./DoNotDisturb.vue";
import PhoneColumn from "./PhoneColumn.vue";
import AgentsSelect from "./AgentsSelect.vue";
export default {
  components: {
    ProgressColumn,
    AttendanceColumn,
    StatusColumn,
    DoNotDisturb,
    PhoneColumn,
    AgentsSelect,
    OnHoldQueue,
  },
  props: {
    maxValue: {},
    dataTable: {},
    onHold: {},
  },
  data() {
    return {
      itemsSelected: [1097],
      allSelected: false,
      headers: [
        { text: "Agente", value: "agents", sortable: true },
        { text: "Atendimentos", value: "attendances" },
        { text: "Finalizados", value: "finish" },
        { text: "Ramal", value: "exten" },
        { text: "Rejeições", value: "rejections" },
        { text: "Número", value: "callerNumber", width: 160 },
        { text: "Ociosidade", value: "idle", width: 100 },
        { text: "Duração", value: "duration", width: 80 },
        { text: "Status", value: "status", width: 150 },
      ],
    };
  },

  watch: {
    allSelected(allSelected) {
      console.log({ allSelected });
      if (!allSelected) return (this.itemsSelected = []);

      this.itemsSelected = this.dataTable.map(({ id }) => id);
    },
    itemsSelected(itemsSelected) {
      if (itemsSelected.length === this.dataTable.length)
        return (this.allSelected = true);

      this.allSelected = false;
    },
  },
};
</script>

<style scoped>
.q-checkbox__bg {
  width: 14px;
  height: 14px;
  border: 1px solid #c5c5c5;
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 3px;
}

.customize-agent-table {
  font-family: "Open Sans";

  --easy-table-header-font-size: 12px;
  --easy-table-header-font-weight: 700;
  --easy-table-header-font-color: #2e2e2e;

  --easy-table-body-row-height: 35px;
  --easy-table-body-row-font-size: 14px;
  --easy-table-body-row-font-color: #2e2e2e;

  --easy-table-body-row-background-color: #ebebeb;
  --easy-table-body-even-row-background-color: #fff;
  --easy-table-body-row-hover-background-color: #e3f2fd;
}

.agent-name {
  font-size: 12px;
}
</style>
