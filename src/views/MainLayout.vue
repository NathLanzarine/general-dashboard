<script setup>
import MainPage from "../components/MainPage.vue";
import Header from "../HeaderMenu.vue";
import QueueHeader from "../QueueHeader.vue";
</script>

<template>
  <article>
    <Header
      @dashboards="onDashboards"
      @calls="onCalls"
      @chats="onChats"
      @agents="onAgents"
      @configs="onConfigs"
      @onApi="onApi"
      @onChangeLog="onChangeLog"
      :isDashboardsActive="isDashboardsActive"
      :isCallsActive="isCallsActive"
      :isAgentsActive="isAgentsActive"
      :isChatsActive="isChatsActive"
      :isConfigActive="isConfigActive"
      :isApiActive="isApiActive"
      :isChangeLogActive="isChangeLogActive"
      :user="user"
    />
    <section>
      <div class="b-atd">
        <span>Filas de Atendimento</span>
      </div>
      <!-- <div>
        <QueueHeader @changeView="onViewByAgent" />
      </div>
      <div>
        <h2 v-if="viewByAgent">Por agente</h2>
        <h2 v-else>Por atendimento</h2>
      </div>
      <MainPage msg="Mensagem" /> -->

      <RouterView />
    </section>
  </article>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      isDashboardsActive: false,
      isCallsActive: false,
      isAgentsActive: false,
      isChatsActive: false,
      isConfigActive: false,
      isTable: false,
      isApiActive: false,
      isChangeLogActive: false,
      viewByAgent: true,
      user: {
        name: "Rodrigo Santos",
      },
    };
  },

  methods: {
    onViewByAgent(args) {
      this.viewByAgent = args;
    },
    onDashboards() {
      this.isDashboardsActive = true;
      this.isCallsActive = false;
      this.isAgentsActive = false;
      this.isChatsActive = false;
      this.isConfigActive = false;
      this.isApiActive = false;
      this.isChangeLogActive = false;
      this.msg = `Foi para onDashboards!!`;
      this.isTable = true;
    },
    onCalls() {
      this.isCallsActive = true;
      this.isDashboardsActive = false;
      this.isAgentsActive = false;
      this.isChatsActive = false;
      this.isConfigActive = false;
      this.isTable = false;
      this.isApiActive = false;
      this.isChangeLogActive = false;
      this.msg = `Foi para Calls!!`;
    },
    onChats() {
      this.isCallsActive = false;
      this.isDashboardsActive = false;
      this.isAgentsActive = false;
      this.isChatsActive = true;
      this.isConfigActive = false;
      this.isTable = false;
      this.isApiActive = false;
      this.isChangeLogActive = false;
      this.msg = `Foi para Chats!!`;
    },
    onAgents() {
      this.isCallsActive = false;
      this.isDashboardsActive = false;
      this.isAgentsActive = true;
      this.isChatsActive = false;
      this.isTable = false;
      this.isConfigActive = false;
      this.isApiActive = false;
      this.isChangeLogActive = false;
      this.msg = `Foi para Agents!!`;
    },
    onConfigs() {
      this.isCallsActive = false;
      this.isDashboardsActive = false;
      this.isAgentsActive = false;
      this.isChatsActive = false;
      this.isTable = false;
      this.isConfigActive = true;
      this.isApiActive = false;
      this.isChangeLogActive = false;
      this.msg = `Foi para Configs!!`;
    },
    onTeste() {
      this.msg = "Esse é um teste";
    },
    onApi() {
      this.isTable = false;
      this.isApiActive = true;
      this.isChangeLogActive = false;
      this.msg = "Pagina onApi";
    },
    onChangeLog() {
      this.isTable = false;
      this.isApiActive = false;
      this.isChangeLogActive = true;
      this.msg = "Pagina onChangeLog";
    },
  },
};
</script>

<style scoped>
.b-atd {
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
  display: flex;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
