import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    childdren: "Texto padrão",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};
export const Small: StoryObj<HeadingProps> = { args: { size: "sm" } };
export const Large: StoryObj<HeadingProps> = { args: { size: "lg" } };
export const Custom: StoryObj<HeadingProps> = {
  args: { asChild: true, childdren: <h1>Custom Heading</h1> },
  argTypes: {
    childdren: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
