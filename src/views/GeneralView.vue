<template>
  <div class="queues-bar">
    <span>Filas de Atendimento</span>
  </div>

  <div v-if="queues.length">
    <GeneralTable
      v-for="(queue, index) in queues"
      :key="index"
      :queueInfo="queue"
    />
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useDashboard } from "@/store/dashboardStore";
import GeneralTable from "@/views/generalView/GeneralTable.vue";

export default {
  components: { GeneralTable },
  mounted() {
    this.changeInfo();
  },

  computed: {
    ...mapStores(useDashboard),
    queues() {
      return this.dashboardStore.queues;
    },
  },
  methods: {
    changeInfo() {
      // setInterval(() => this.dashboardStore.increment(), 1000);
    },
  },
};
</script>
<style scoped>
.queues-bar {
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
  display: flex;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
