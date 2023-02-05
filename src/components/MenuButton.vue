<template>
  <q-btn
    flat
    :class="['botao', isActive ? 'active' : '']"
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
import AgentsLogo from "../assets/icons/AgentsLogo.vue";
import SettingsLogo from "../assets/icons/SettingsLogo.vue";
import ArrowDown from "../assets/icons/ArrowDown.vue";
import ChatsLogo from "../assets/icons/ChatsLogo.vue";
import IconPhone from "../assets/icons/IconPhone.vue";
import DashboardsLogo from "../assets/icons/DashboardsLogo.vue";

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
