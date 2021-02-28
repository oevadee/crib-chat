import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Message, { MessageProps } from ".";

export default {
  title: "components/Message",
  component: Message,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ padding: "0 40px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<MessageProps> = (args) => <Message {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
