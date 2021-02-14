import React from "react";
import { Story, Meta } from "@storybook/react";
import MessageInput from "./MessageInput";

export default {
  title: "components/MessageInput",
  component: MessageInput,
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          height: "100vh",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: 1 }}></div>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <MessageInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
