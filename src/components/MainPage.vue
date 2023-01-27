<script setup>
import GeneralTable from "./GeneralTable.vue";
</script>

<template>
  <h6>{{ msg }}</h6>
  <GeneralTable msg="Tabela"> </GeneralTable>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
    isTable: {
      type: Boolean,
    },
  },
};
</script>
