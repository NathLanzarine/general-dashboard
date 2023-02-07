<template>
  <header>
    <div class="header">
      <div class="main-menu">
        <div v-if="user && user.name" class="row items-center q-m-none">
          <MenuButton
            label="Dashboards"
            icon="DashboardsLogo"
            :class="[
              'q-pl-none q-pt-none',
              isActive('dashboard') ? 'active' : '',
            ]"
          >
            <template #vonixLogo>
              <q-item to="/home" exact class="icon">
                <VonixLogo />
              </q-item>
            </template>

            <template #menuConfig>
              <DashboardMenu
                :items="dashOptions"
                :classes="'dash-menu-offset'"
              />
            </template>
          </MenuButton>

          <MenuButton
            label="Chamadas"
            icon="IconPhone"
            :class="[isActive('chamadas') ? 'active' : '']"
          >
            <template #menuConfig>
              <DashboardMenu :items="callsOptions" />
            </template>
          </MenuButton>

          <MenuButton
            label="Conversas"
            icon="ChatsLogo"
            :class="[isActive('conversas') ? 'active' : '']"
          >
            <template #menuConfig>
              <DashboardMenu :items="chatsOptions" />
            </template>
          </MenuButton>

          <MenuButton
            label="Agentes"
            icon="AgentsLogo"
            :class="[isActive('agents') ? 'active' : '']"
          >
            <template #menuConfig>
              <DashboardMenu :items="agentsOptions" />
            </template>
          </MenuButton>

          <MenuButton
            label="Configurações"
            icon="SettingsLogo"
            :class="[isActive('configs') ? 'active' : '']"
          />
        </div>
        <div v-else class="icon">
          <VonixLogo />
        </div>
      </div>

      <div class="row items-center">
        <q-btn
          flat
          :class="['button-menu', isActive('route_api_docs') ? 'active' : '']"
          @click="handleApiDocs"
        >
          <ApiLogo />
        </q-btn>

        <q-btn
          flat
          :class="['button-menu', isActive('changeLog') ? 'active' : '']"
          @click="handleChangeLog"
        >
          <change-log-icon />
        </q-btn>

        <q-btn
          v-if="user?.name"
          flat
          class="botao"
          size="13px"
          no-caps
          text-color="white"
        >
          <UserLogo />
          <span class="q-ml-xs"
            ><b>Olá, {{ user.name }}</b></span
          >
          <q-icon name="mdi-chevron-down" />
        </q-btn>
      </div>
    </div>
  </header>
</template>

<script>
import MenuButton from "./components/MenuButton.vue";
import ApiLogo from "./assets/icons/ApiLogo.vue";
import UserLogo from "./assets/icons/UserLogo.vue";
import VonixLogo from "./assets/icons/VonixLogo.vue";
import ChangeLogIcon from "./assets/icons/ChangeLogIcon.vue";
import DashboardMenu from "./components/DashboardMenu.vue";

export default {
  name: "my-header",

  components: {
    MenuButton,
    ApiLogo,
    UserLogo,
    VonixLogo,
    ChangeLogIcon,
    DashboardMenu,
  },

  props: {
    user: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      dashOptions,
      callsOptions,
      chatsOptions,
      agentsOptions,
    };
  },

  methods: {
    handleApiDocs() {
      this.$router.push({ name: "route_api_docs" });
    },
    handleChangeLog() {
      this.$router.push({ name: "changeLog" });
    },

    handleHome() {
      this.$router.push({ name: "home" });
    },

    isActive(menuName) {
      return this.$route?.name.includes(menuName);
    },
  },
};

const callsOptions = [
  {
    title: "Por Abandono",
    description:
      " Por Abandono Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Por Tipo",
    description:
      " Por Tipo Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Por Número",
    description:
      " Por Número Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Por Localidade",
    description:
      " Por Localidade Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Por Operadora",
    description:
      " Por Operadora Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Por Tronco",
    description:
      " Por Tronco Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Por Horário",
    description:
      " Por Horário Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Por Duração",
    description:
      " Por Duração Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Por Filas",
    description:
      " Por Filas Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Por Desempenho",
    description:
      " Por Desempenho Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
];
const dashOptions = [
  {
    title: "Agentes",
    description:
      " Agentes Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Filas",
    description:
      " Filas Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Atendimentos",
    description:
      " Atendimentos Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Campanhas",
    description:
      " Campanhas Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Geral",
    description:
      " Geral Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
];
const chatsOptions = [
  {
    title: "Atendimento de Chat",
    description:
      " Atendimento de Chat Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Atendimento de Email",
    description:
      " Atendimento de Email Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Mensagens do Email",
    description:
      " Mensagens do Email Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
];

const agentsOptions = [
  {
    title: "Visão Geral",
    description:
      " Visão Geral Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Ranking",
    description:
      " Ranking Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Frequência",
    description:
      " Frequência Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Frequência/Dia",
    description:
      " Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Sessões",
    description:
      " Sessões Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Detalhado",
    description:
      " Detalhado Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
  {
    title: "Ociosidade",
    description:
      " Ociosidade Mollis luctus proin dui varius volutpat. Fringilla accumsan molestie praesent in neque vel aliquam eget at.",
  },
];
</script>

<style scoped>
.button-menu {
  font-weight: 700;
  height: 60px;
  display: flex;

  width: 60px;
}

.header {
  height: 60px;
  font-family: "Work Sans";
  font-weight: 700;
  border-bottom: 1px solid #c5c5c5;
  background: #3d55ae;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.botao {
  height: 60px;
  font-size: 13px;
  font-weight: 700;
}

.active {
  background-color: #fd9802;
}

.main-menu {
  display: flex;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
}

.icon {
  width: 60px;
  height: 60px;
  left: 0px;
  top: 0px;
  background: white;
  border-radius: 0px 110px 110px 0px;
  display: flex;
  align-items: center;
  margin-right: 18px;
  justify-content: center;
}
</style>
