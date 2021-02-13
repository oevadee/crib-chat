import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Message, { MessageProps } from "./Message";

export default {
  title: "components/Message",
  component: Message,
  argTypes: {},
} as Meta;

const Template: Story<MessageProps> = (args) => <Message {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
