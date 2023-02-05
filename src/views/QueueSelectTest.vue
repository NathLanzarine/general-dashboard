<template>
  <div class="dash-chart-queues">
    <q-select
      multiple
      borderless
      emit-value
      options-dense
      v-model="queues"
      :options="options"
      map-options
      :class="['myDenseSelectQueues col']"
      virtual-scroll-sticky-size-start="31"
    >
      <template #selected>
        <span class="value-label q-px-sm text-blue-grey-10">
          <span>{{ label }}</span>
        </span>
      </template>

      <template v-slot:option="{ opt, selected, toggleOption }">
        <div class="col">
          <div class="row items-center">
            <q-checkbox
              dense
              size="xs"
              keep-color
              :class="['col-auto q-pa-sm', selected ? '' : 'borderUnSelected']"
              :model-value="selected"
              @update:model-value="toggleOption(opt)"
            />

            <div
              class="col cursor-pointer font-item"
              @click="toggleOption(opt)"
            >
              {{ opt.label }}
            </div>
          </div>
          <q-separator />
        </div>
      </template>
    </q-select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
    },
    onlyActives: {
      type: Boolean,
      default: false,
    },

    labelAll: {
      type: String,
      default: "Todas as Filas",
    },

    labelEmpty: {
      type: String,
      default: "Nenhuma selecionada",
    },

    labelSelected: {
      type: String,
      default: "filas selecionadas",
    },
  },

  data() {
    return {
      isOpen: false,
      options: [
        {
          value: "fila1",
          label: "Fila Um",
        },
        {
          value: "fila2",
          label: "Fila Dois",
        },
        {
          value: "fila3",
          label: "Fila Tres",
        },
        {
          value: "fila4",
          label: "Fila Quatro",
        },
        {
          value: "fila5",
          label: "Fila Cinco",
        },
      ],
      selected: [],
      queues: [],
      userQueues: [
        {
          value: "fila1",
          label: "Fila Um",
        },
        {
          value: "fila2",
          label: "Fila Dois",
        },
        {
          value: "fila3",
          label: "Fila Tres",
        },
        {
          value: "fila4",
          label: "Fila Quatro",
        },
        {
          value: "fila5",
          label: "Fila Cinco",
        },
      ],
    };
  },

  computed: {
    label() {
      const selected = this.queues;
      if (!selected.length) return this.labelEmpty;
      if (selected.length === this.userQueues.length) return this.labelAll;
      if (selected.length === 1)
        return (
          this.userQueues.find(({ id }) => id === selected[0])?.name ??
          selected[0]
        );
      return `${selected.length} ${this.labelSelected}`;
    },
  },
};
</script>

<style lang="sass">
.dash-chart-queues
  border: 1px solid #C5C5C5
  margin: 0px 20px 0px 26px


  .myDenseSelectQueues
    height: 40px
    width: 138px
    background: #FFFFFF


  .value-label
    padding: 8px 10px 8px 15px
    font-family: 'Open Sans'
    font-weight: 600
    font-size: 13px
    display: flex
    color: #8F8F8F !important

  .q-field__control
    display: flex
    max-height: 40px
    min-height: auto
    overflow: hidden
    align-items: center

  .q-field__append
    padding-left: 0
</style>
