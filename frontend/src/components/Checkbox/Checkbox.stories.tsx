import React from "react";
import { Story, Meta } from "@storybook/react";
import Checkbox, { CheckboxProps } from ".";

export default {
  title: "components/Checkbox",
  component: Checkbox,
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

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const WeeklyReport = Template.bind({});
WeeklyReport.args = {
  label: "Weekly Report",
};
