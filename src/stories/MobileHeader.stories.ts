import type { Meta, StoryObj } from "@storybook/react";

import { MobileHeader } from "../components/MobileHeader";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/MobileHeader",
  component: MobileHeader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof MobileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    items: [
      { text: "sample text 1", icon: "./assets/header-checkmark.svg" },
      { text: "sample text 2", icon: "./assets/header-checkmark.svg" },
      { text: "sample text 3", icon: "./assets/header-checkmark.svg" },
      { text: "sample text 4", icon: "./assets/header-checkmark.svg" },
      { text: "sample text 5", icon: "./assets/header-checkmark.svg" },
    ],
  },
};
