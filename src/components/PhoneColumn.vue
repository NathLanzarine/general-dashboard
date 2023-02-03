<template>
  <div class="row items-center justify-between">
    <ArrowInIcon v-if="isIn(direction)" />
    <ArrowAutoIcon v-if="isAuto(direction)" />
    <ArrowOutIcon v-if="isOut(direction)" />
    <span class="col-auto">
      {{ formatPhone(phone) }}
    </span>
  </div>
</template>

<script>
import ArrowAutoIcon from "../assets/icons/ArrowAutoIcon.vue";
import ArrowInIcon from "../assets/icons/ArrowInIcon.vue";
import ArrowOutIcon from "../assets/icons/ArrowOutIcon.vue";

export default {
  props: {
    phone: {},
    direction: {},
  },
  methods: {
    formatPhone(phone) {
      return formatPhoneNumber(phone);
    },
    isIn(direction) {
      return direction === "IN";
    },
    isAuto(direction) {
      return direction === "AUTO";
    },
    isOut(direction) {
      return direction === "OUT";
    },
  },
  components: { ArrowInIcon, ArrowAutoIcon, ArrowOutIcon },
};

const ddds = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35,
  37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64,
  65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88,
  89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
];

const formatPhoneNumber = (phone) => {
  const number = String(phone || "").replace(/[^\d]+/g, "");
  if (!number) return "";

  const digits = number.split("");

  if (digits.length === 8) {
    digits.splice(4, 0, "-");
    return digits.join("");
  }

  if (digits.length === 10) {
    digits.splice(0, 0, "(");
    digits.splice(3, 0, ")");
    digits.splice(4, 0, " ");
    digits.splice(9, 0, "-");
    return digits.join("");
  }

  const cellNumber =
    digits.length === 11 && ddds.includes(Number(`${digits[0]}${digits[1]}`));

  if (cellNumber) {
    digits.splice(0, 0, "(");
    digits.splice(3, 0, ")");
    digits.splice(4, 0, " ");
    digits.splice(10, 0, "-");
    return digits.join("");
  }

  if (digits.length === 11) {
    digits.splice(4, 0, "-");
    digits.splice(8, 0, "-");
    return digits.join("");
  }

  return number;
};
</script>
