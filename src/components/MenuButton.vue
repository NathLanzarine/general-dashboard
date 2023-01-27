<template>
  <q-btn
    flat
    :class="['botao', isActive ? 'active' : '', classes]"
    size="13px"
    no-caps
    text-color="white"
    @click="onClick"
  >
    <slot name="vonixLogo" />
    <component class="q-mr-sm" :is="icon" />
    {{ label }}
    <ArrowDown />

    <template v-if="$slots['menuConfig']">
      <slot name="menuConfig" />
    </template>
  </q-btn>
</template>

<script>
import { reactive, computed } from "vue";
import AgentsLogo from "../components/icons/AgentsLogo.vue";
import SettingsLogo from "../components/icons/SettingsLogo.vue";
import ArrowDown from "../components/icons/ArrowDown.vue";
import ChatsLogo from "../components/icons/ChatsLogo.vue";
import IconPhone from "../components/icons/IconPhone.vue";
import DashboardsLogo from "../components/icons/DashboardsLogo.vue";

export default {
  name: "menu-button",

  components: {
    ArrowDown,
    ChatsLogo,
    IconPhone,
    AgentsLogo,
    SettingsLogo,
    DashboardsLogo,
  },

  props: {
    icon: {},
    label: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
    },
    classes: {},
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};
</script>
