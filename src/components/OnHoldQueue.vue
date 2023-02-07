<template>
  <div class="my-card">
    <q-expansion-item
      v-model="expanded"
      expand-icon-toggle
      expand-icon-class="hidden"
      class="q-pa-none"
    >
      <template #header>
        <div class="row full-width items-center justify-between">
          <div class="col">Em Espera ({{ total }})</div>

          <div
            v-if="total > 5"
            class="col-auto cursor-pointer chevron"
            @click="expanded = !expanded"
          >
            <ChevronUpIcon v-if="expanded" />

            <ChevronDownIcon v-else />
          </div>
        </div>
      </template>
    </q-expansion-item>

    <OnHoldQueueRow
      v-for="(call, index) in showCalls"
      :key="index"
      :callDirection="call.callDirection"
      :phoneNumber="call.phoneNumber"
      :timeOnHold="call.timeOnHold"
      :class="[isActive(call.timeOnHold) ? 'slaDanger' : '']"
    />

    <q-card v-if="expanded" class="card q-pa-none">
      <q-card-section class="q-pa-none">
        <OnHoldQueueRow
          v-for="(call, index) in hideCalls"
          :key="index"
          :callDirection="call.callDirection"
          :phoneNumber="call.phoneNumber"
          :timeOnHold="call.timeOnHold"
          :class="[isActive(call.timeOnHold) ? 'slaDanger' : '']"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import ChevronUpIcon from "@/assets/icons/ChevronUpIcon.vue";
import ChevronDownIcon from "@/assets/icons/ChevronDownIcon.vue";
import OnHoldQueueRow from "./OnHoldQueueRow.vue";

export default {
  props: {
    showCalls: {},
    hideCalls: {},
    total: {},
  },
  components: { ChevronUpIcon, ChevronDownIcon, OnHoldQueueRow },
  data() {
    return {
      expanded: true,
    };
  },
  methods: {
    isActive(timeOnHold) {
      return timeOnHold > 2;
    },
  },
};
</script>

<style scoped>
.my-card {
  border-radius: 0px;
  background-color: #ffcdd2;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #2e2e2e;
}

.card {
  border-top: 2px solid #fff;
}

.q-expansion-item {
  border-bottom: 1px solid #fff;
}

.chevron {
  height: 24px;
  width: 24px;
  margin-left: 11px;
}
</style>
