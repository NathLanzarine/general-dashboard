<template>
  <div class="q-pa-md">
    <div class="bottom">
      <p class="amount">{{ active }}</p>
      <p class="letter">Ativos</p>
    </div>
  </div>
</template>

<script>
export default {
  // component: "Amount",
  props: {
    active: {
      // default: 15,
    },
  },

  data() {
    return {
      // amount: 15,
    };
  },
};
</script>

<style scoped>
.bottom {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 104px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.amount {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  color: #2e2e2e;
  position: fixed;
  padding-top: 20px;
}

.letter {
  width: 23px;
  height: 0px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 0px;
  text-align: center;
  color: #2e2e2e;
  flex: none;
  position: fixed;
  padding-top: 20px;
  left: 47px;
}
</style>
