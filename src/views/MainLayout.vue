<script setup>
import Header from "../HeaderMenu.vue";
import ToolbarLayout from "./ToolbarLayout.vue";
</script>

<template>
  <article>
    <Header :user="user" />
    <ToolbarLayout />
    <section>
      <div class="b-atd">
        <span>Filas de Atendimento</span>
      </div>
      <RouterView />
    </section>
  </article>
</template>
<script>
export default {
  data() {
    return {
      msg: "",

      viewByAgent: true,
      user: {
        name: "Rodrigo Santos",
      },
    };
  },

  methods: {
    onViewByAgent(args) {
      this.viewByAgent = args;
    },
  },
};
</script>

<style scoped>
.b-atd {
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
  display: flex;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
