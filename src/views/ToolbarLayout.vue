<template>
  <div class="toolbar">
    <div class="row full-width justify-between items-center">
      <div class="col-auto">
        <div class="name">{{ name }}</div>
        <q-breadcrumbs class="breadcrumb" gutter="xs">
          <template #separator>
            <q-icon size="1.2em" name="mdi-chevron-right" color="primary" />
          </template>

          <template v-for="(route, index) in breadcrumb" :key="index">
            <q-breadcrumbs-el :label="route.label" />
          </template>
        </q-breadcrumbs>
      </div>
      <div class="col-auto" v-if="showQueues">
        <div class="row items-center">
          <div class="col-auto dash-name">{{ description }}</div>
          <div class="col-auto">
            <div class="row items-center">
              <span>Filas</span>
              <QueueSelectTest :v-model="queues"></QueueSelectTest>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QueueSelectTest from "./QueueSelectTest.vue";

export default {
  components: { QueueSelectTest },
  data() {
    return {
      queues: [],
    };
  },
  computed: {
    breadcrumb() {
      return (
        this.$route?.meta?.breadcrumb ?? [
          { label: "Dashboards" },
          { label: "Geral" },
        ]
      );
    },

    name() {
      return this.$route?.meta?.name;
    },

    description() {
      return this.$route?.meta?.description;
    },

    showQueues() {
      return this.$route?.meta?.showQueues;
    },
  },
};
</script>

<style scoped>
.toolbar {
  height: 70px;
  width: 100%;
  display: flex;
  font-family: "Work Sans";
  font-style: normal;
  font-size: 13px;
  line-height: 18px;
  color: #2e2e2e;
}

.name {
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  margin-left: 30px;
  color: #444444;
}

.q-breadcrumbs {
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  margin-left: 30px;
  margin-top: 3px;
  color: #afafaf;
}

.q-breadcrumbs__el {
  color: #afafaf;
}

.dash-name {
  font-weight: 700;
  margin-right: 23px;
}
</style>
