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
          <div class="col">Em Espera ({{ callsOnHold.length }})</div>

          <div
            v-if="callsOnHold.length > 5"
            class="col-auto cursor-pointer chevron"
            @click="expanded = !expanded"
          >
            <ChevronUpIcon v-if="expanded" />

            <ChevronDownIcon v-else />
          </div>
        </div>
      </template>

      <q-card class="card q-pa-none">
        <q-card-section class="q-pa-none">
          <!-- <OnHoldQueueRow
            :callDirection="callDirection"
            :phoneNumber="phoneNumber"
          /> -->
          <!-- <OnHoldQueueRow /> -->
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <OnHoldQueueRow
      v-for="(call, index) in callsOnHold"
      :key="index"
      :callDirection="call.callDirection"
      :phoneNumber="call.phoneNumber"
      :timeOnHold="call.timeOnHold"
    />
  </div>
</template>

<script>
import ChevronUpIcon from "../assets/icons/ChevronUpIcon.vue";
import ChevronDownIcon from "../assets/icons/ChevronDownIcon.vue";
import OnHoldQueueRow from "./OnHoldQueueRow.vue";

export default {
  props: {
    callsOnHold: {
      type: Array,
    },
  },
  components: { ChevronUpIcon, ChevronDownIcon, OnHoldQueueRow },
  data() {
    return {
      expanded: true,
    };
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
.header-border {
  width: 1px;
  background: white;
}

.chevron {
  height: 24px;
  width: 24px;
  margin-left: 11px;
}

.hold-row {
  height: 34px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #ffcdd2;
  border-bottom: 2px solid #fff;
}

.icon {
  margin-left: 20px;
}

.q-item {
  padding: 0px !important;
}

/* .fundo {
  background-color: #ffcdd2;
}

.fundo-2 {
  background-color: #fae7e8;
}

.fundoespera {
  height: 45px;
  background: #ffcdd2;
  border-bottom: 2px solid #ffffff;
}

.espera {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: red;
}

.arrow {
  padding-left: 1035px;
  color: #fff;
}

.icon-seta {
  padding-right: 5px;
}

.icon {
  position: absolute;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;

  box-sizing: border-box;
  background: #e8440c;
  border: 0px solid #e8440c;
  border-radius: 6px;
} */
</style>
