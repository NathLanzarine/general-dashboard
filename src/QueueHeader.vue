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
                  <svg
                    width="19"
                    height="22"
                    viewBox="0 0 19 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.317 0C4.27 0 0.231003 4 0.231003 9V16C0.231003 17.66 1.584 19 3.26 19H6.288V11H2.25V9C2.25 5.13 5.41 2 9.317 2C13.225 2 16.385 5.13 16.385 9V11H12.346V19H16.385V20H9.317V22H15.375C17.051 22 18.404 20.66 18.404 19V9C18.404 4 14.335 0 9.317 0Z"
                      fill="#165A9F"
                    />
                  </svg>
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
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.41333 5.19333C3.37333 7.08 4.92 8.62667 6.80667 9.58667L8.27333 8.12C8.46 7.93333 8.72 7.88 8.95333 7.95333C9.7 8.2 10.5 8.33333 11.3333 8.33333C11.7 8.33333 12 8.63333 12 9V11.3333C12 11.7 11.7 12 11.3333 12C5.07333 12 0 6.92667 0 0.666667C0 0.3 0.3 0 0.666667 0H3C3.36667 0 3.66667 0.3 3.66667 0.666667C3.66667 1.5 3.8 2.3 4.04667 3.04667C4.12 3.28 4.06667 3.54 3.88 3.72667L2.41333 5.19333Z"
                      />
                    </svg>
                    <span>Voz</span>
                  </div>
                </div>
                <div class="separator"></div>
              </div>
            </div>

            <div v-if="completedCalls" class="col-auto">
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
                      fill="#165A9F"
                    />
                  </svg>
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
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5H17M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5M7 10L11 14M11 10L7 14"
                      stroke="#165A9F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
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
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.9531 13.5125L14.5656 11.6281C14.2787 11.5051 13.9658 11.4552 13.6549 11.4831C13.344 11.5109 13.0449 11.6155 12.7844 11.7875L10.6188 13.2313C9.40795 12.5957 8.41772 11.6087 7.77813 10.4L9.22187 8.20627C9.39236 7.94674 9.49537 7.64876 9.52156 7.33935C9.54775 7.02994 9.4963 6.71889 9.37188 6.43439L7.4875 2.04689C7.32933 1.6726 7.05328 1.36018 6.70131 1.15712C6.34934 0.954062 5.9407 0.871468 5.5375 0.921894C4.18035 1.0952 2.93288 1.75719 2.02864 2.78396C1.1244 3.81072 0.625381 5.13185 0.625 6.50002C0.625 14.15 6.85 20.375 14.5 20.375C15.8682 20.3746 17.1893 19.8756 18.2161 18.9714C19.2428 18.0671 19.9048 16.8197 20.0781 15.4625C20.1286 15.0593 20.046 14.6507 19.8429 14.2987C19.6398 13.9467 19.3274 13.6707 18.9531 13.5125ZM14.5 18.125C11.4176 18.1225 8.4622 16.897 6.28263 14.7174C4.10305 12.5378 2.87748 9.5824 2.875 6.50002C2.87476 5.72849 3.13886 4.98017 3.62333 4.37971C4.10779 3.77924 4.78336 3.3629 5.5375 3.20002L7.225 7.13752L5.78125 9.35002C5.60114 9.62029 5.49509 9.9331 5.4737 10.2572C5.45232 10.5813 5.51634 10.9053 5.65937 11.1969C6.54882 13.0126 8.02089 14.4781 9.84063 15.3594C10.1337 15.4983 10.4577 15.5592 10.7813 15.5362C11.1048 15.5133 11.417 15.4071 11.6875 15.2281L13.8625 13.775L17.8 15.4625C17.6371 16.2167 17.2208 16.8922 16.6203 17.3767C16.0199 17.8612 15.2715 18.1253 14.5 18.125ZM12.2031 7.20314L13.6562 5.75002L12.2031 4.29689C11.9918 4.08555 11.873 3.79891 11.873 3.50002C11.873 3.35203 11.9022 3.20548 11.9588 3.06875C12.0155 2.93203 12.0985 2.80779 12.2031 2.70314C12.3078 2.5985 12.432 2.51549 12.5687 2.45885C12.7055 2.40222 12.852 2.37307 13 2.37307C13.2989 2.37307 13.5855 2.4918 13.7969 2.70314L15.25 4.15627L16.7031 2.70314C16.9145 2.4918 17.2011 2.37307 17.5 2.37307C17.7989 2.37307 18.0855 2.4918 18.2969 2.70314C18.5082 2.91449 18.627 3.20113 18.627 3.50002C18.627 3.79891 18.5082 4.08555 18.2969 4.29689L16.8438 5.75002L18.2969 7.20314C18.4018 7.30766 18.485 7.43185 18.5418 7.5686C18.5985 7.70534 18.6278 7.85195 18.6278 8.00002C18.6278 8.14808 18.5985 8.29469 18.5418 8.43144C18.485 8.56819 18.4018 8.69238 18.2969 8.79689C18.0846 9.00644 17.7983 9.12393 17.5 9.12393C17.2017 9.12393 16.9154 9.00644 16.7031 8.79689L15.25 7.34377L13.7969 8.79689C13.5846 9.00644 13.2983 9.12393 13 9.12393C12.7017 9.12393 12.4154 9.00644 12.2031 8.79689C12.0982 8.69238 12.015 8.56819 11.9582 8.43144C11.9015 8.29469 11.8722 8.14808 11.8722 8.00002C11.8722 7.85195 11.9015 7.70534 11.9582 7.5686C12.015 7.43185 12.0982 7.30766 12.2031 7.20314Z"
                      fill="#165A9F"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#165a9f"
                      d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66L4 17l2.5-1.5c.89.31 1.87.5 2.91.5A5.22 5.22 0 0 1 9 14c0-3.31 3.13-6 7-6c.19 0 .38 0 .56.03C15.54 5.69 12.78 4 9.5 4m-3 2.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M16 9c-3.31 0-6 2.24-6 5s2.69 5 6 5c.67 0 1.31-.08 1.91-.25L20 20l-.62-1.87C20.95 17.22 22 15.71 22 14c0-2.76-2.69-5-6-5m-2 2.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1Z"
                    />
                  </svg>
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
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 14C8.55 14 9 13.55 9 13V7C9 6.45 8.55 6 8 6C7.45 6 7 6.45 7 7V13C7 13.55 7.45 14 8 14ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM12 14C12.55 14 13 13.55 13 13V7C13 6.45 12.55 6 12 6C11.45 6 11 6.45 11 7V13C11 13.55 11.45 14 12 14Z"
                      fill="#165A9F"
                    />
                  </svg>
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
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.95916 0.187988C2.62249 0.187988 0 2.62349 0 5.62468C0 7.12392 0.953817 8.62316 1.98729 9.6546C1.90763 10.686 0.556224 11.1572 0 11.812C1.19143 11.812 2.62249 11.3442 3.41767 10.5929C4.05355 10.7812 5.32396 11.0614 6.04016 11.0614C9.37751 11.0614 12 8.62316 12 5.62468C12 2.62349 9.29853 0.187988 5.95916 0.187988Z"
                        fill="white"
                      />
                    </svg>

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
import ChevronUpIcon from "./assets/icons/ChevronUpIcon.vue";
import ChevronDownIcon from "./assets/icons/ChevronDownIcon.vue";

export default {
  name: "my-header",

  components: { ChevronUpIcon, ChevronDownIcon },

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
      console.log("changeView");
      console.log({ viewByAgent: this.viewByAgent });
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
