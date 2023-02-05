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
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.44444 0H2.22222C1.63285 0 1.06762 0.234126 0.650874 0.650874C0.234126 1.06762 0 1.63285 0 2.22222L0 11.1111H2.22222V6.66667H4.44444V11.1111H6.66667V2.22222C6.66667 1.63285 6.43254 1.06762 6.01579 0.650874C5.59905 0.234126 5.03381 0 4.44444 0M4.44444 4.44444H2.22222V2.22222H4.44444M12.2222 0H7.77778V11.1111H10V6.66667H12.2222C12.8116 6.66667 13.3768 6.43254 13.7936 6.01579C14.2103 5.59905 14.4444 5.03381 14.4444 4.44444V2.22222C14.4444 1.63285 14.2103 1.06762 13.7936 0.650874C13.3768 0.234126 12.8116 0 12.2222 0M12.2222 4.44444H10V2.22222H12.2222M18.8889 2.22222V8.88889H20V11.1111H15.5556V8.88889H16.6667V2.22222H15.5556V0H20V2.22222H18.8889Z"
              fill="white"
            />
          </svg>
        </q-btn>

        <q-btn
          flat
          :class="['button-menu', isActive('changeLog') ? 'active' : '']"
          @click="handleChangeLog"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 12.5C17.2652 12.5 17.5196 12.6054 17.7071 12.7929C17.8946 12.9804 18 13.2348 18 13.5V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C12.4913 18 8.1673 16.2089 4.97918 13.0208C1.79107 9.8327 0 5.50868 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H4.5C4.76522 0 5.01957 0.105357 5.20711 0.292893C5.39464 0.48043 5.5 0.734784 5.5 1C5.5 2.24 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.58L3.62 7.79C5.06 10.62 7.38 12.94 10.21 14.38L12.41 12.18C12.69 11.9 13.08 11.82 13.43 11.93C14.55 12.3 15.75 12.5 17 12.5ZM9 0H11V2H9M12 0H18V2H12M9 3H11V5H9M12 3H18V5H12M9 6H11V8H9M12 6H18V8H12"
              fill="white"
            />
          </svg>
        </q-btn>

        <q-btn
          v-if="user?.name"
          flat
          class="botao"
          size="13px"
          no-caps
          text-color="white"
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.25 4.41699C4.25 6.48449 5.9325 8.16699 8 8.16699C10.0675 8.16699 11.75 6.48449 11.75 4.41699C11.75 2.34949 10.0675 0.666992 8 0.666992C5.9325 0.666992 4.25 2.34949 4.25 4.41699ZM14.6667 16.5003H15.5V15.667C15.5 12.4512 12.8825 9.83366 9.66667 9.83366H6.33333C3.11667 9.83366 0.5 12.4512 0.5 15.667V16.5003H14.6667Z"
              fill="white"
            />
          </svg>
          <span class="q-ml-xs"
            ><b>Olá, {{ user.name }}</b></span
          >
          <svg
            class="q-ml-xs"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.293 0.292969L5.99997 4.58597L1.70697 0.292969L0.292969 1.70697L5.99997 7.41397L11.707 1.70697L10.293 0.292969Z"
              fill="white"
            />
          </svg>
        </q-btn>
      </div>
    </div>
  </header>
</template>

<script>
import MenuButton from "./components/MenuButton.vue";
import VonixLogo from "./assets/icons/VonixLogo.vue";
import DashboardMenu from "./components/DashboardMenu.vue";

export default {
  name: "my-header",

  components: { MenuButton, VonixLogo, DashboardMenu },

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
      console.log({ ROUTE: this.$route });
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
