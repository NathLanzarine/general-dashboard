<template>
  <div class="attendances">
    <div class="col">
      <div class="row">
        <div class="col items-center align-center justify-center">
          <IconPhone
            :class="[
              'phone-icon',
              hasCalls(attendances.calls) ? 'disable' : '',
            ]"
          />
        </div>
        <div
          :class="[
            'col items-center align-center justify-center',
            hasCalls(attendances.calls) ? 'disable' : '',
          ]"
        >
          {{ attendances.calls }}
        </div>
      </div>
    </div>

    <div class="col-1 divisor"></div>

    <div class="col">
      <div class="row">
        <div class="col items-center align-center justify-center">
          <ChatsLogo
            :class="['chat-icon', hasCalls(attendances.chats) ? 'disable' : '']"
          />
        </div>
        <div
          :class="[
            'col items-center align-center justify-center',
            hasCalls(attendances.chats) ? 'disable' : '',
          ]"
        >
          {{ attendances.chats }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconPhone from "../assets/icons/IconPhone.vue";
import ChatsLogo from "../assets/icons/ChatsLogo.vue";

export default {
  functional: true,
  components: { IconPhone, ChatsLogo },
  props: {
    attendances: {},
  },

  data() {
    return {};
  },

  methods: {
    hasCalls(calls) {
      return calls <= 0;
    },
  },
};
</script>

<style>
.attendances {
  gap: 13px;
  height: 34px;
  max-width: 135px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.attendances .info {
  display: flex;
  align-items: center;
  justify-content: end;
}

.attendances .disable {
  color: #767676;
}

.attendances .divisor {
  width: 1px;
  height: 100%;
  background: #c5c5c5;
}

.attendances .phone-icon,
.chat-icon {
  width: 11px;
  height: 11px;
}

.attendances .phone-icon > path {
  fill: #165a9f;
}

.attendances .chat-icon > path {
  fill: #e8900c;
}

.attendances .disable > path {
  fill: #ababab;
}
</style>
