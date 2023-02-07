<template>
  <div class="hold-row">
    <div class="col icon">
      <HoldAlertIcon />
    </div>

    <div class="col">
      <div class="row items-center justify-end">
        <div class="phone-col col-auto">
          <PhoneColumn
            :phone="phoneNumber"
            :direction="callDirection"
            :classes="'icon'"
          />
        </div>
        <div class="col-3">
          <div class="row justify-end q-mr-md">
            <ColumnTime :time="timeOnHold" />
          </div>
        </div>
        <div class="col-auto q-ml-md">
          <StatusColumn agentStatus="ONHOLD" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatusColumn from "../components/StatusColumn.vue";
import PhoneColumn from "../components/PhoneColumn.vue";
import ColumnTime from "./ColumnTime.vue";
import HoldAlertIcon from "../assets/icons/HoldAlertIcon.vue";

export default {
  props: {
    callDirection: {},
    phoneNumber: {},
    timeOnHold: {},
  },
  components: { StatusColumn, PhoneColumn, ColumnTime, HoldAlertIcon },
  data() {
    return {};
  },
};
</script>

<style scoped>
.hold-row {
  height: 34px;
  width: 100%;
  display: flex;
  padding: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Open Sans";
  font-size: 13px;
  font-weight: 700;
  background-color: #fae7e8;
  border-bottom: 2px solid #fff;
}

.icon {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-left: 10px;
}

.slaDanger {
  background-color: #ffcdd2;
}
.phone-col {
  color: #2e2e2e;
  min-width: 140px;
  margin-right: 30px;
}
</style>
