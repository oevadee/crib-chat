import React from "react";
import { Story, Meta } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "components/Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
  },
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

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Search = Template.bind({});
Search.args = {
  uiType: "search",
  placeholder: "Long text in my Input",
};

export const Data = Template.bind({});
Data.args = {
  uiType: "data",
  placeholder: "Short Text",
};
