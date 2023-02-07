<script setup>
import Header from "../HeaderMenu.vue";
import ToolbarLayout from "./ToolbarLayout.vue";
</script>

<template>
  <article>
    <Header :user="user" />
    <ToolbarLayout />
    <section>
      <RouterView />
    </section>
  </article>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: "Usuario dos Santos",
      },
    };
  },
};
</script>
