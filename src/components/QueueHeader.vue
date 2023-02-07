<template>
  <q-item-section>
    <div class="column">
      <div class="row queue-top justify-between">
        <span class="col-auto queueTitle">{{ queueTitle }}</span>
        <div class="cursor-pointer q-mr-md" @click="$emit('expand')">
          <ChevronUpIcon class="col-auto q-mt-xs" v-if="expand" />

          <ChevronDownIcon class="col-auto q-mt-xs" v-else />
        </div>
      </div>
      <div class="queue-header-border"></div>
      <div class="queueHeader justify-between">
        <div class="col">
          <div class="row items-center no-wrap">
            <div class="col-auto">
              <div class="row items-center">
                <div class="data col q-mr-sm">
                  <AgentsIcon />
                </div>
                <div class="column">
                  <span class="count">{{ agents }}</span>
                  <span class="label">Agentes</span>
                </div>
                <div class="separator"></div>
              </div>
            </div>

            <div v-if="hasCalls" class="col-auto">
              <div class="row items-center">
                <div class="col">
                  <div class="q-ml-sm call">
                    <PhoneIcon />
                    <span>Voz</span>
                  </div>
                </div>
                <div class="separator"></div>
              </div>
            </div>

            <div v-if="completedCalls" class="col-auto">
              <div class="row items-center">
                <div class="col q-mx-sm">
                  <CompletedIcon />
                </div>
                <div class="column">
                  <span class="count">{{ completedCalls }}</span>
                  <span class="label">Completadas</span>
                </div>
                <div class="separator"></div>
              </div>
            </div>

            <div v-if="discardedCalls" class="col-auto">
              <div class="row items-center">
                <div class="col q-mx-sm">
                  <DescardedIcon />
                </div>
                <div class="column">
                  <span class="count">{{ discardedCalls }}</span>
                  <span class="label">Descartadas</span>
                </div>
                <div class="separator"></div>
              </div>
            </div>

            <div v-if="abandonedCalls" class="col-auto">
              <div class="row items-center">
                <div class="col q-mx-sm">
                  <AbandonedIcon />
                </div>
                <div class="column">
                  <span class="count">{{ abandonedCalls }}</span>
                  <span class="label">Abandonadas</span>
                </div>
                <div class="separator"></div>
              </div>
            </div>

            <div v-if="ongoingCalls" class="col-auto">
              <div class="row items-center">
                <div class="col q-mx-sm">
                  <OngoingIcon />
                </div>
                <div class="column">
                  <span class="count">{{ ongoingCalls }}</span>
                  <span class="label">Em Atendimento</span>
                </div>
                <div class="separator"></div>
              </div>
            </div>

            <div v-if="onHoldCalls" class="col-auto">
              <div class="row items-center">
                <div class="col q-mx-sm">
                  <OnHoldIcon />
                </div>
                <div class="column">
                  <span class="count">{{ onHoldCalls }}</span>
                  <span class="label">Em Espera</span>
                </div>
                <div class="separator"></div>
              </div>
            </div>

            <div v-if="hasChats" class="col-auto">
              <div class="row items-center">
                <div class="col">
                  <div class="q-ml-sm chat">
                    <ChatIcon />

                    <span>Chat</span>
                  </div>
                </div>
                <div class="separator"></div>
              </div>
            </div>

            <div v-if="completedChats" class="col-auto">
              <div class="row items-center">
                <div class="col q-mx-sm">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 14H14V16H0V14ZM4.6 11.3L0 6.7L2 4.8L4.6 7.4L12 0L14 2L4.6 11.3Z"
                      fill="#E8900C"
                    />
                  </svg>
                </div>
                <div class="column">
                  <span class="count">{{ completedChats }}</span>
                  <span class="label">Finalizadas</span>
                </div>
                <div class="separator"></div>
              </div>
            </div>

            <div v-if="ongoingChats" class="col-auto">
              <div class="row items-center">
                <div class="col q-mx-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#E8900C"
                      d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66L4 17l2.5-1.5c.89.31 1.87.5 2.91.5A5.22 5.22 0 0 1 9 14c0-3.31 3.13-6 7-6c.19 0 .38 0 .56.03C15.54 5.69 12.78 4 9.5 4m-3 2.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M16 9c-3.31 0-6 2.24-6 5s2.69 5 6 5c.67 0 1.31-.08 1.91-.25L20 20l-.62-1.87C20.95 17.22 22 15.71 22 14c0-2.76-2.69-5-6-5m-2 2.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                </div>
                <div class="column">
                  <span class="count">{{ ongoingChats }}</span>
                  <span class="label">Em Atendimento</span>
                </div>
                <div class="separator"></div>
              </div>
            </div>

            <div v-if="onHoldChats" class="col-auto">
              <div class="row items-center">
                <div class="col q-mx-sm">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 14C8.55 14 9 13.55 9 13V7C9 6.45 8.55 6 8 6C7.45 6 7 6.45 7 7V13C7 13.55 7.45 14 8 14ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM12 14C12.55 14 13 13.55 13 13V7C13 6.45 12.55 6 12 6C11.45 6 11 6.45 11 7V13C11 13.55 11.45 14 12 14Z"
                      fill="#E8900C"
                    />
                  </svg>
                </div>
                <div class="column">
                  <span class="count">{{ onHoldChats }}</span>
                  <span class="label">Em Espera</span>
                </div>
                <div class="separator"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-auto q-mr-md tabs">
          <div class="row justify-between">
            <button class="arrow" @click="changeView">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.70703 1.70703L3.41403 6.00003L7.70703 10.293L6.29303 11.707L0.586032 6.00003L6.29303 0.293031L7.70703 1.70703Z"
                  fill="#2E2E2E"
                />
              </svg>
            </button>
            <span v-if="viewByAgent">Por agente</span>
            <span v-else>Por atendimento</span>
            <button class="arrow" @click="changeView">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292969 1.70703L4.58597 6.00003L0.292969 10.293L1.70697 11.707L7.41397 6.00003L1.70697 0.293031L0.292969 1.70703Z"
                  fill="#2E2E2E"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="queue-header-border"></div>
    </div>
  </q-item-section>
</template>

<script>
import ChevronUpIcon from "@/assets/icons/ChevronUpIcon.vue";
import ChevronDownIcon from "@/assets/icons/ChevronDownIcon.vue";
import AgentsIcon from "../assets/icons/QueueHeader/AgentsIcon.vue";
import PhoneIcon from "../assets/icons/QueueHeader/PhoneIcon.vue";
import CompletedIcon from "@/assets/icons/QueueHeader/CompletedIcon.vue";
import DescardedIcon from "@/assets/icons/QueueHeader/DescardedIcon.vue";
import AbandonedIcon from "@/assets/icons/QueueHeader/AbandonedIcon.vue";
import OngoingIcon from "@/assets/icons/QueueHeader/OngoingIcon.vue";
import OnHoldIcon from "@/assets/icons/QueueHeader/OnHoldIcon.vue";
import ChatIcon from "@/assets/icons/QueueHeader/ChatIcon.vue";

export default {
  name: "my-header",

  components: {
    ChevronUpIcon,
    ChevronDownIcon,
    AgentsIcon,
    PhoneIcon,
    CompletedIcon,
    DescardedIcon,
    AbandonedIcon,
    OngoingIcon,
    OnHoldIcon,
    ChatIcon,
  },

  props: {
    queueTitle: {},
    expand: {},
    agents: {
      type: Number,
    },
    completedCalls: {
      type: Number,
    },
    discardedCalls: {
      type: Number,
    },
    abandonedCalls: {
      type: Number,
    },
    ongoingCalls: {
      type: Number,
    },
    onHoldCalls: {
      type: Number,
    },
    completedChats: {
      type: Number,
    },
    ongoingChats: {
      type: Number,
    },
    onHoldChats: {
      type: Number,
    },
  },

  emits: ["changeView", "expand"],

  data() {
    return {
      viewByAgent: true,
    };
  },

  computed: {
    hasCalls() {
      return (
        this.completedCalls ||
        this.discardedCalls ||
        this.abandonedCalls ||
        this.ongoingCalls ||
        this.onHoldCalls
      );
    },
    hasChats() {
      return this.completedChats || this.ongoingChats || this.onHoldChats;
    },
  },

  methods: {
    changeView() {
      this.viewByAgent = !this.viewByAgent;
      this.$emit("changeView", this.viewByAgent);
    },
  },
};
</script>

<style scoped>
.queue-header-border {
  background: #c5c5c5;
  height: 1px;
}
.queueTitle {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;

  display: flex;
  align-items: center;

  color: #2e2e2e;
}
.arrow {
  width: 24px;
  height: 24px;

  border: 1px solid #c5c5c5;
  background: white;
  border-radius: 3px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.queue-top {
  margin: 30px 0px 14px 30px;
}
.queueHeader {
  font-family: "Open Sans";
  width: 100%;
  height: 50px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
}

.data {
  border-left: 25px solid white;
}

.separator {
  width: 1px;
  height: 50px;
  margin-left: 8px;

  background: #c5c5c5;

  flex: none;
  order: 2;
  flex-grow: 0;
}

.label {
  height: 12px;

  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;

  display: flex;
  align-items: flex-end;
  text-align: center;

  color: #2e2e2e;
}

.count {
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #2e2e2e;
}

.call {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 7px;
  gap: 5px;

  width: 53px;
  height: 26px;

  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  background: #165a9f;
  color: white;
  border-radius: 5px;

  flex: none;
  order: 3;
  flex-grow: 0;
}

.call svg {
  fill: white;
}

.chat {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 7px;
  gap: 5px;

  width: 60px;
  height: 26px;

  background: #e8900c;
  border-radius: 5px;

  flex: none;
  order: 20;
  flex-grow: 0;

  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
}

.tabs {
  width: 240px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;

  color: #2e2e2e;
}

.tabs span {
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
