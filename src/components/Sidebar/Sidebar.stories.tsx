import React from "react";
import { Story, Meta } from "@storybook/react";
import Sidebar, { SidebarProps } from "./Sidebar";

export default {
  title: "components/Sidebar",
  component: Sidebar,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", width: "100vw" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const WeeklyReport = Template.bind({});
WeeklyReport.args = {
  label: "Weekly Report",
};
