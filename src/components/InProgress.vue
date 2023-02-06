<template>
  <div class="q-pa-md">
    <div class="bottom">
      <p class="amount">{{ ongoing }}</p>
      <p class="letter">
        Em Andamento
        <span class="icon">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3434 2.83952C13.3909 3.22286 15.7771 5.60911 16.1605 8.65661C16.218 9.14536 16.63 9.49994 17.1092 9.49994C17.1475 9.49994 17.1859 9.49994 17.2242 9.49036C17.7513 9.42327 18.125 8.94411 18.058 8.41702C17.8224 6.51398 16.9582 4.74408 15.6022 3.38815C14.2463 2.03223 12.4764 1.16795 10.5734 0.932439C10.0463 0.874939 9.56712 1.24869 9.50962 1.77577C9.44254 2.30286 9.81629 2.78202 10.3434 2.83952V2.83952ZM10.7075 4.86161C10.1996 4.72744 9.67254 5.03411 9.53837 5.55161C9.40421 6.06911 9.71087 6.58661 10.2284 6.72077C10.7242 6.84949 11.1767 7.10837 11.5389 7.47061C11.9012 7.83286 12.1601 8.28533 12.2888 8.78119C12.3526 9.02755 12.5116 9.23854 12.7307 9.36789C12.9499 9.49724 13.2114 9.53439 13.458 9.47119C13.9659 9.33702 14.2725 8.80994 14.148 8.30202C13.9322 7.47444 13.4997 6.71935 12.895 6.11461C12.2902 5.50986 11.5351 5.07733 10.7075 4.86161V4.86161ZM16.4288 12.6241L13.9946 12.3462C13.7084 12.3126 13.4183 12.3443 13.1461 12.4389C12.8739 12.5335 12.6266 12.6886 12.423 12.8924L10.6596 14.6558C7.9391 13.2722 5.72783 11.0609 4.34421 8.34036L6.11712 6.56744C6.52921 6.15536 6.73046 5.58036 6.66337 4.99577L6.38546 2.58077C6.33112 2.11327 6.10677 1.68208 5.7551 1.36929C5.40343 1.0565 4.94902 0.883963 4.47837 0.884523H2.82046C1.73754 0.884523 0.836706 1.78536 0.903789 2.86827C1.41171 11.0524 7.95712 17.5883 16.1317 18.0962C17.2146 18.1633 18.1155 17.2624 18.1155 16.1795V14.5216C18.125 13.5537 17.3967 12.7391 16.4288 12.6241V12.6241Z"
              fill="#393939"
            />
          </svg>
        </span>
      </p>
    </div>

    <q-btn @click="testeStore">click</q-btn>
  </div>
</template>

<script>
export default {
  props: {
    ongoing: {
      // amount: 15,
    },
  },

  data() {
    return {
      // amount: 15,
    };
  },

  methods: {
    testeStore() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
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
  width: 208px;
  height: 46px;
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
  position: relative;
  padding-bottom: 5px;
}

.letter {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  display: flex;
  color: #2e2e2e;
  position: relative;
  top: 20px;
  right: 40px;
}

.icon {
  position: relative;
  bottom: 8px;
  left: 80px;
}
</style>
