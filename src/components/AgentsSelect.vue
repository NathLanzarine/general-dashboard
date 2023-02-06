<template>
  <div class="agent-selection row full-width items-center">
    <q-btn-dropdown
      dropdown-icon="mdi-chevron-down"
      class="q-mx-sm"
      dense
      outline
      auto-close
      unelevated
      :ripple="false"
      size="sm"
      color="grey-8"
    >
      <q-list dense separator>
        <q-item
          v-if="selected.length"
          clickable
          v-close-popup
          @click="handlerSelectNone"
        >
          <q-item-section>
            <q-item-label>
              <span class="text-blue-grey-10"> Desmarcar Todos </span>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="handlerSelectAll">
          <q-item-section>
            <q-item-label>
              <span
                :class="
                  lastSelect === 'all' ? 'text-blue-10' : 'text-blue-grey-10'
                "
              >
                Todos
              </span>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="handlerSelectIdle">
          <q-item-section>
            <q-item-label>
              <span
                :class="
                  lastSelect === 'idle' ? 'text-blue-10' : 'text-blue-grey-10'
                "
              >
                Em Ociososidade
              </span>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="handlerSelectPaused">
          <q-item-section>
            <q-item-label>
              <span
                :class="
                  lastSelect === 'paused' ? 'text-blue-10' : 'text-blue-grey-10'
                "
              >
                Em Pausa
              </span>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="handlerSelectOnPhone">
          <q-item-section>
            <q-item-label>
              <span
                :class="
                  lastSelect === 'onPhone'
                    ? 'text-blue-10'
                    : 'text-blue-grey-10'
                "
              >
                Em Atendimento
              </span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    Agentes
  </div>
</template>

<script>
export default {
  props: {
    agents: {
      type: Array,
    },

    value: {
      type: Array,
    },
  },
  emits: ["input"],
  data() {
    return {
      selected: Array.isArray(this.value) ? this.value : [],
      lastSelect: null,
    };
  },

  methods: {
    handlerSelectAll() {
      this.lastSelect = "all";
      this.selected = this.agents.filter(({ status }) => status !== "OFFLINE");
      console.log({ selected: this.selected });
    },

    handlerSelectNone() {
      this.lastSelect = "none";
      this.selected = [];
    },

    handlerSelectIdle() {
      this.lastSelect = "idle";
      this.selected = this.agents.filter(({ status }) => status === "ONLINE");
    },

    handlerSelectPaused() {
      this.lastSelect = "paused";
      this.selected = this.agents.filter(({ status }) => status === "PAUSED");
    },

    handlerSelectOnPhone() {
      this.lastSelect = "onPhone";
      this.selected = this.agents.filter(
        ({ status }) => status === "ONTHEPHONE"
      );
    },
  },

  watch: {
    selected(selected) {
      if (isEqualArr(selected, this.value)) return;
      this.$emit("input", selected);
    },

    value: {
      deep: true,
      handler(value) {
        if (isEqualArr(this.selected, value)) return;
        this.selected = value;
      },
    },
  },
};

const toJsonArr = (v) =>
  JSON.stringify(Array.isArray(v) ? v.map(({ id }) => id).sort() : []);
const isEqualArr = (v1, v2) => toJsonArr(v1) === toJsonArr(v2);
</script>

<style lang="sass">
.agent-selection
  font-style: normal
  font-weight: normal
  font-size: 13px
  line-height: 13px

  button.q-btn-dropdown
    font-size: 8px
    max-width: 19px
    height: 19px

    span.q-btn__wrapper
      padding: 0
      min-height: 0

      span.q-btn__content
        i.q-btn-dropdown__arrow
          margin-left: 0

  teste
    &hover
      background-color:#F00
</style>
