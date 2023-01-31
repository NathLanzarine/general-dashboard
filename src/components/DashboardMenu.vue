<template>
  <q-menu fit :offset="classes ? [-60, 0] : [0, 0]">
    <div class="row no-wrap menu-card">
      <div class="column col-auto">
        <q-list dense class="options">
          <q-item
            v-for="item in items"
            :key="item.title"
            :active="link === item.title"
            active-class="active"
          >
            <q-item-section
              class="q-mr-sm"
              @click="selectItem(item)"
              @mouseover="showOption(item)"
            >
              {{ item.title }}
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <q-separator vertical inset />
      <div class="column items-start description">
        <div class="title">
          {{ title }}
        </div>
        <div>
          {{ description }}
        </div>
        <q-btn
          class="botao-opcao"
          no-caps
          push
          v-close-popup
          @click="goTo(item)"
        >
          Ir para {{ title }}
        </q-btn>
      </div>
    </div>
  </q-menu>
</template>
<script>
export default {
  name: "my-header",
  props: {
    items: {},
    classes: {},
  },
  data() {
    return {
      link: this.items[0].title,
      title: this.items[0].title,
      description: this.items[0].description,
    };
  },
  methods: {
    showOption(item) {
      this.title = item.title;
      this.description = item.description;
    },
    selectItem({ title }) {
      this.link = title;
    },

    goTo(item) {
      console.log({ item });
      this.$router.push({ name: "general_dashboard" });
    },
  },
};
</script>
<style lang="scss" scoped>
.menu-card {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  gap: 30px;
  width: 603px;
  left: 60px;
  top: 60px;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  background: #ffffff;
  border: 1px solid #c5c5c5;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 5px 5px;
}
.menu-card .q-list--dense > .q-item {
  padding: 2px 0px;
}
.options {
  color: #6f6f6f;
}
.options .active {
  font-weight: 700;
  color: white;
  background: #4b68d2;
}

.options .active .q-item__section {
  margin-left: 10px;
}

.options .q-item > :hover {
  cursor: pointer;
  font-weight: 700;
  color: #4b68d2;
}
.options > .active > :hover {
  color: white;
}
.description {
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  gap: 20px;
  color: #2e2e2e;
}
.description .title {
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
}
.botao-opcao {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 20px;
  gap: 5px;
  height: 40px;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
  background: #4b68d2;
  border-radius: 5px;
}
</style>
