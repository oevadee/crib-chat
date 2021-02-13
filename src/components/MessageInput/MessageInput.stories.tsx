import React from "react";
import { Story, Meta } from "@storybook/react";
import MessageInput, { MessageInputProps } from "./MessageInput";

export default {
  title: "components/MessageInput",
  component: MessageInput,
  argTypes: {},
} as Meta;

const Template: Story<MessageInputProps> = (args) => <MessageInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
