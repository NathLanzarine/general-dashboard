<template>
  <q-list bordered separator class="swagger-list">
    <q-item class="q-py-lg" v-ripple clickable>
      <q-item-section avatar>
        <ApiBlueIcon />
      </q-item-section>

      <q-item-section>
        <q-item-label>Alimentação de Contatos/Discador</q-item-label>
        <q-item-label caption>
          API do Discador e resultados de discagens.
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item class="q-py-lg" clickable v-ripple>
      <q-item-section avatar>
        <ApiBlueIcon />
      </q-item-section>

      <q-item-section>
        <q-item-label>Atendimentos, Perfilamentos e Sumários</q-item-label>
        <q-item-label caption>
          API para obter lista de atendimentos via Voz, Chat ou Email. Com
          Agentes, Perfilamento e também os Sumários.
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-item class="q-py-lg" v-ripple clickable>
      <q-item-section avatar>
        <ApiBlueIcon />
      </q-item-section>

      <q-item-section>
        <q-item-label>Controle do agente</q-item-label>
        <q-item-label caption>
          API do agente para login, pausas, discagem e configurações.
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>

  <InProgress />
</template>

<script>
import ApiBlueIcon from "@/assets/icons/ApiBlue.vue";
import InProgress from "../components/InProgress.vue";

export default {
  components: { ApiBlueIcon, InProgress },
};
</script>
