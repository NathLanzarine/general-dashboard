<script setup>
import GeneralTable from "./GeneralTable.vue";
</script>

<template>
  <GeneralTable msg="Tabela" :tableData="tableData"> </GeneralTable>
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

  data() {
    return {
      tableData: [
        {
          agents: "Bruno Oliveira",
          attendances: {
            calls: 0,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 8,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "Disponível",
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 6,
            chats: 8,
          },
          finish: 16,
          exten: "0014",
          rejections: 9,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "Disponível",
          doNotDisturb: true,
        },
        {
          agents: "Bruno Oliveira Santos",
          attendances: {
            calls: 6,
            chats: 0,
          },
          finish: 16,
          exten: "0014",
          rejections: 18,
          callerNumber: "6733180700",
          idle: 600,
          duration: 300,
          status: "Pausado",
        },
      ],
    };
  },
};
</script>
