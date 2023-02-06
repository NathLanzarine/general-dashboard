<template>
  <EasyDataTable
    :headers="headers"
    :items="makeRows"
    hide-footer
    alternating
    :table-min-height="0"
    table-class-name="customize-table"
    header-text-direction="center"
    body-text-direction="center"
  >
    <template #header-agents="header">
      <div class="row full-width items-start q-pl-md">
        {{ header.text }}
      </div>
    </template>

    <template #item-agents="item">
      <div class="row items-center q-ml-md">
        <strong>{{ item.agents }}</strong>
        <span class="q-ml-sm">{{ item.id }}</span>
      </div>
    </template>

    <template #item-generalAttendances="item">
      <div class="row full-width justify-center">
        <div class="attendances">
          {{ allAttendances(item).length }}
        </div>
      </div>
    </template>

    <template #item-type="item">
      <div
        v-for="(call, index) in allAttendances(item)"
        :key="call.id"
        :class="[lastChild(item, index) ? 'borderless-cell' : 'border-cell']"
      >
        <div v-if="isCalls(call, item)">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.38245 8.29C5.82245 11.12 8.14245 13.44 10.9725 14.88L13.1725 12.68C13.4525 12.4 13.8425 12.32 14.1925 12.43C15.3125 12.8 16.5125 13 17.7625 13C18.3125 13 18.7625 13.45 18.7625 14V17.5C18.7625 18.05 18.3125 18.5 17.7625 18.5C8.37245 18.5 0.762451 10.89 0.762451 1.5C0.762451 0.95 1.21245 0.5 1.76245 0.5H5.26245C5.81245 0.5 6.26245 0.95 6.26245 1.5C6.26245 2.75 6.46245 3.95 6.83245 5.07C6.94245 5.42 6.86245 5.81 6.58245 6.09L4.38245 8.29Z"
              fill="#165A9F"
            />
          </svg>
          <span class="q-ml-md">Chamada</span>
        </div>
        <div v-else>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.04821 0.0438232C4.10522 0.0438232 0.220215 3.65182 0.220215 8.09782C0.220215 10.3188 1.63321 12.5398 3.16421 14.0678C3.04621 15.5958 1.04421 16.2938 0.220215 17.2638C1.98521 17.2638 4.10522 16.5708 5.28322 15.4578C6.22521 15.7368 8.10721 16.1518 9.16821 16.1518C14.1122 16.1518 17.9972 12.5398 17.9972 8.09782C17.9972 3.65182 13.9952 0.0438232 9.04821 0.0438232Z"
              fill="#165A9F"
            />
          </svg>

          <span class="q-ml-md">Conversa</span>
        </div>
      </div>
    </template>

    <template #item-createdAt="item">
      <div
        v-for="(attendance, index) in allAttendances(item)"
        :key="index"
        :class="[lastChild(item, index) ? 'borderless-cell' : 'border-cell']"
      >
        <span>{{ attendance.createdAt }}</span>
      </div>
    </template>

    <template #item-attendanceId="item">
      <div
        v-for="(attendance, index) in allAttendances(item)"
        :key="attendance.id"
        :class="[lastChild(item, index) ? 'borderless-cell' : 'border-cell']"
      >
        <span class="attendance-id">{{ attendance.id }}</span>
      </div>
    </template>

    <template #item-duration="item">
      <div
        v-for="(attendance, index) in allAttendances(item)"
        :key="index"
        :class="[lastChild(item, index) ? 'borderless-cell' : 'border-cell']"
      >
        <div>{{ attendance.since }}</div>
      </div>
    </template>

    <template #item-status="item">
      <div
        v-for="(attendance, index) in allAttendances(item)"
        :key="index"
        :class="[
          'full-width',
          lastChild(item, index) ? 'borderless-cell' : 'border-cell',
        ]"
      >
        <div class="row full-width justify-end q-pr-sm">
          <StatusColumn :agentStatus="attendance.status" />
        </div>
      </div>
    </template>
  </EasyDataTable>
</template>

<script>
import StatusColumn from "./StatusColumn.vue";
export default {
  components: {
    StatusColumn,
  },
  props: {
    maxValue: {},
    dataTable: {},
  },
  data() {
    return {
      itemsSelected: [],
      headers: [
        { text: "Agentes", value: "agents" },
        { text: "Atendimentos", value: "generalAttendances", width: 90 },
        { text: "Tipo", value: "type", width: 100 },
        { text: "Data / Hora", value: "createdAt", width: 150 },
        { text: "Atendimento", value: "attendanceId", width: 150 },
        { text: "Duração", value: "duration", width: 100 },
        { text: "Status", value: "status", width: 200 },
      ],
    };
  },

  computed: {
    makeRows() {
      return this.dataTable.filter(
        (agent) =>
          agent.generalAttendances?.chats?.length ||
          agent.generalAttendances?.calls?.length
      );
    },
  },

  methods: {
    lastChild(item, index) {
      return index === this.allAttendances(item).length - 1;
    },

    allAttendances(item) {
      return [
        ...item.generalAttendances.calls,
        ...item.generalAttendances.chats,
      ];
    },

    isCalls(call, item) {
      const callsIds = item.generalAttendances.calls.map(({ id }) => id);

      return callsIds.includes(call.id);
    },
  },

  watch: {
    itemsSelected: {
      deep: true,
      handler(itemsSelected) {
        console.log({ itemsSelected });
      },
    },
  },
};
</script>

<style scoped>
.attendances {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 5px;
  width: 18px;
  height: 18px;

  background: #535353;
  border-radius: 5px;
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;

  color: #ffffff;
}
.customize-table {
  font-family: "Open Sans";

  --easy-table-header-font-size: 12px;
  --easy-table-header-font-weight: 700;
  --easy-table-header-font-color: #2e2e2e;

  --easy-table-body-row-min-height: 35px;
  --easy-table-body-row-font-size: 12px;
  --easy-table-body-row-font-color: #2e2e2e;

  --easy-table-body-row-background-color: #f3f3f3;
  --easy-table-body-even-row-background-color: #fff;
  --easy-table-body-row-hover-background-color: #f3f3f3;

  --easy-table-body-item-padding: 0px;
}

.customize-table .vue3-easy-data-table__main {
  min-height: auto;
}

.border-cell {
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #c5c5c5;
}
.borderless-cell {
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.attendance-id {
  font-weight: 700;
  font-size: 12px;
  color: #3499ff;
}
</style>
