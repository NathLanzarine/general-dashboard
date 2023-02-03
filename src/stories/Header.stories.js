import { within, userEvent } from "@storybook/testing-library";
import MyHeader from "../HeaderMenu.vue";

export default {
  title: "Example/HeaderMenu",
  component: MyHeader,
  parameters: {
    layout: "fullscreen",
  },

  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => ({
  components: { MyHeader },
  setup() {
    return { ...args };
  },
  template: `<my-header :user="user" 
  :isDashboardsActive="isDashboardsActive"
  :isCallsActive="isCallsActive"
  :isAgentsActive="isAgentsActive"
  :isChatsActive="isChatsActive"
  :isConfigActive="isConfigActive" />`,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Rodrigo Santos",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: {},
};

export const ActiveDash = Template.bind({});
ActiveDash.args = {
  user: {
    name: "Rodrigo Santos",
  },
  isDashboardsActive: true,
};

export const CallsActive = Template.bind({});
CallsActive.args = {
  user: {
    name: "Rodrigo Santos",
  },
  isCallsActive: true,
};

export const ChatsActive = Template.bind({});
ChatsActive.args = {
  user: {
    name: "Rodrigo Santos",
  },
  isChatsActive: true,
};

export const AgentsActive = Template.bind({});
AgentsActive.args = {
  user: {
    name: "Rodrigo Santos",
  },
  isAgentsActive: true,
};

export const ConfigsActive = Template.bind({});
ConfigsActive.args = {
  user: {
    name: "Rodrigo Santos",
  },
  isConfigActive: true,
};

export const ApiActive = Template.bind({});
ApiActive.args = {
  user: {
    name: "Rodrigo Santos",
  },
  isApiActive: true,
};

export const ChangeLogActive = Template.bind({});
ChangeLogActive.args = {
  user: {
    name: "Rodrigo Santos",
  },
  isChangeLogActive: true,
};

export const DashboardMenu = Template.bind({});
DashboardMenu.args = {
  user: {
    name: "Teste",
  },
  isDashboardsActive: true,
  isCallsActive: false,
  isChatsActive: false,
  isAgentsActive: false,
  isConfigActive: false,
};
DashboardMenu.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const choseDashboardOption = await canvas.findByText("Dashboards");
  await userEvent.click(choseDashboardOption);
};

export const CallsMenu = Template.bind({});
CallsMenu.args = {
  user: {
    name: "Teste",
  },
  isDashboardsActive: false,
  isCallsActive: true,
  isChatsActive: false,
  isAgentsActive: false,
  isConfigActive: false,
};

CallsMenu.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const choseCallsOption = await canvas.findByText("Chamadas");
  await userEvent.click(choseCallsOption);
};

export const ChatsMenu = Template.bind({});
ChatsMenu.args = {
  user: {
    name: "Teste",
  },
  isDashboardsActive: false,
  isCallsActive: false,
  isChatsActive: true,
  isAgentsActive: false,
  isConfigActive: false,
};
ChatsMenu.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const choseChatsOption = await canvas.findByText("Conversas");
  await userEvent.click(choseChatsOption);
};

export const AgentsMenu = Template.bind({});
AgentsMenu.args = {
  user: {
    name: "Teste",
  },
  isDashboardsActive: false,
  isCallsActive: false,
  isChatsActive: false,
  isAgentsActive: true,
  isConfigActive: false,
};
AgentsMenu.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const choseAgentsOption = await canvas.findByText("Agentes");
  await userEvent.click(choseAgentsOption);
};
