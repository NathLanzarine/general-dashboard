<template>
  <div class="progress">
    <div class="info">
      <span class="finish"> {{ value }} </span> / 20%
    </div>
    <progress class="progress-bar" value="20" :max="maxValue" />
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    maxValue: {},
  },
};
</script>
