import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Navbar, { NavbarProps } from "./Navbar";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "components/Navbar",
  component: Navbar,
  argTypes: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ height: "100vh", width: "100vw" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
