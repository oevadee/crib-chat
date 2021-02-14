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
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
