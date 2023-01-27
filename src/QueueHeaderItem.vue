<template>
  <div class="row items-center">
    <div class="col q-mx-sm q-pt-xs">
      <component class="chat-icon" :is="icon" />
    </div>
    <div class="column info">
      <span class="count">{{ value }}</span>
      <span class="label">{{ label }}</span>
    </div>
    <div class="separator"></div>
  </div>
</template>
<script>
import ActiveAgentsLogo from "./components/icons/ActiveAgentsLogo.vue";
import CompletedLogo from "./components/icons/CompletedLogo.vue";
import DiscardedLogo from "./components/icons/DiscardedLogo.vue";
import AbandonedLogo from "./components/icons/AbandonedLogo.vue";
import OngoingLogo from "./components/icons/OngoingLogo.vue";
export default {
  components: {
    ActiveAgentsLogo,
    CompletedLogo,
    DiscardedLogo,
    AbandonedLogo,
    OngoingLogo,
  },

  props: {
    label: {
      type: String,
    },
    value: {},
    icon: {},
    classes: {},
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.separator {
  width: 1px;
  height: 49px;
  margin-left: 8px;

  background: #c5c5c5;

  flex: none;
  order: 2;
  flex-grow: 0;
}

.info {
  padding: 5px;
}

.info .label {
  height: 12px;

  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;

  display: flex;
  align-items: flex-end;
  text-align: center;

  color: #2e2e2e;
}

.info .count {
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #2e2e2e;
}

.chat-icon svg path {
  fill: #e8900c !important;
}
</style>
