<template>
  <span>
    {{ displaySecs }}
  </span>
</template>

<script>
import formatElapsedSeconds from "@/utils/formatElapsedSeconds";

export default {
  props: {
    time: {},
  },

  data() {
    return { seconds: null };
  },

  beforeUnmount() {
    this.firstTick && clearTimeout(this.firstTick);
    this.intervalTick && clearInterval(this.intervalTick);
  },

  mounted() {
    const vm = this;
    vm.tickSecs();
    const waitFirstTick = Date.now() - Math.floor(Date.now() / 1000) * 1000;

    vm.firstTick = setTimeout(() => {
      vm.tickSecs();
      vm.intervalTick = setInterval(() => vm.tickSecs(), 1000);
    }, waitFirstTick);
  },

  computed: {
    displaySecs() {
      return this.seconds ? formatElapsedSeconds(this.seconds) : "";
    },
  },

  methods: {
    tickSecs() {
      const vm = this;
      const timestamp =
        !vm.time || isNaN(vm.time) || !Number(vm.time) ? 0 : Number(vm.time);
      vm.seconds = timestamp ? Math.floor(Date.now() / 1000) - timestamp : null;
    },
  },
};
</script>
