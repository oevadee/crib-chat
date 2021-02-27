import React from "react";
import { Story, Meta } from "@storybook/react";
import ChatSelector, { ChatSelectorProps } from "./ChatSelector";

export default {
  title: "components/ChatSelector",
  component: ChatSelector,
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          width: "250px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgb(15, 16, 17)",
          padding: "20px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ChatSelectorProps> = (args) => <ChatSelector {...args} />;

export const WeeklyReport = Template.bind({});
WeeklyReport.args = {};
