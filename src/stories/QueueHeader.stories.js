// import { within, userEvent } from "@storybook/testing-library";
import QueueHeader from "../QueueHeader.vue";

export default {
  title: "Example/QueueHeader",
  component: QueueHeader,
  parameters: {},
  argTypes: {
    onClick: {},
  },
};

const Template = (args) => ({
  components: { QueueHeader },
  setup() {
    return { args };
  },

  template: `
  <queue-header 
    v-bind="args"
  />`,
});

export const QueueWithAgent = Template.bind({});
QueueWithAgent.args = {
  agents: 10,
  onHoldCalls: 0,
  onHoldChats: 0,
};

export const OnlyCalls = Template.bind({});
OnlyCalls.args = {
  ...QueueWithAgent.args,
  completedCalls: 1.389,
  ongoingCalls: 12,
  onHoldCalls: 12,
  discardedCalls: 13,
  abandonedCalls: 15,
};

export const OnlyChats = Template.bind({});
OnlyChats.args = {
  ...QueueWithAgent.args,
  completedChats: 12,
  ongoingChats: 12,
  onHoldChats: 12,
};

export const FullyInfos = Template.bind({});
FullyInfos.args = {
  ...OnlyCalls.args,
  ...OnlyChats.args,
  onHoldCalls: 10,
  onHoldChats: 10,
};
