<template>
  <div class="general">
    <q-expansion-item
      v-model="expanded"
      expand-icon-toggle
      expand-icon-class="hidden"
      class="q-pa-none"
    >
      <template #header>
        <div class="general-bar">
          <div class="col">
            <span class="row justify-end">Filas de Atendimento</span>
          </div>
          <div class="col cursor-pointer chevron" @click="expanded = !expanded">
            <ChevronUpIcon class="col-auto" v-if="expanded" />

            <ChevronDownIcon class="col-auto" v-else />
          </div>

          <div
            class="col-auto flex settings-general cursor-pointer"
            @click="dialog = true"
          >
            <SettingsLogo />
          </div>
        </div>
      </template>
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius
          reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum
          officiis modi facere maiores architecto suscipit iste eveniet
          doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-dialog v-model="dialog" persistent class="q-pa-none">
      <q-card class="settings-general-dialog q-pa-none">
        <q-card-section class="q-pa-none row items-center justify-between">
          <div class="col dialog-title">Configuração da dashboard</div>

          <div>
            <CloseIcon class="col q-mr-md cursor-pointer" v-close-popup />
          </div>
        </q-card-section>
        <q-separator />

        <q-card-section class="row items-center q-pl-xs">
          <div class="col-auto">
            <q-checkbox v-model="hideView" />
          </div>
          <div class="col">
            Sempre recolher o quadro de
            <strong>Visão Geral dos Atendimentos</strong>
          </div>
        </q-card-section>
        <q-separator />

        <q-card-actions align="center">
          <q-btn class="save-button q-mt-md" label="Salvar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import ChevronUpIcon from "@/assets/icons/ChevronUpIcon.vue";
import ChevronDownIcon from "@/assets/icons/ChevronDownIcon.vue";
import SettingsLogo from "@/assets/icons/SettingsLogo.vue";
import CloseIcon from "@/assets/icons/CloseIcon.vue";

export default {
  components: { ChevronUpIcon, ChevronDownIcon, SettingsLogo, CloseIcon },

  data() {
    return {
      expanded: true,
      hideView: false,
      dialog: false,
    };
  },
};
</script>

<style scoped>
.general-bar {
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
  display: flex;
  font-family: "Open Sans";
  font-style: normal;
  color: #2e2e2e;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chevron {
  height: 24px;
  width: 24px;
  margin-left: 11px;
}
.general .q-item {
  padding: 0px;
}

.settings-general {
  width: 24px;
  height: 24px;
  border: 1px solid #c5c5c5;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 21px;
}

.settings-general svg {
  margin: 0;
  width: 12px;
  height: 12px;
}

.settings-general svg path {
  fill: #2e2e2e;
}

.settings-general-dialog {
  position: absolute;
  width: 500px;
  height: 220px;
  top: 50px;

  background: #ffffff;
  border-radius: 5px;
  font-family: "Open Sans";
  font-size: 13px;
}

.dialog-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  padding: 13px 0px 14px 13px;

  color: #2e2e2e;
}

.save-button {
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 13px;
  color: white;

  padding: 10px;
  gap: 5px;

  width: 160px;
  height: 38px;

  background: #165a9f;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
}
</style>
