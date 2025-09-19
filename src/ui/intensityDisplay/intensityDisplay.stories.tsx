import type { Meta, StoryObj } from "@storybook/react";
import { IntensityDisplay } from "./intensityDisplay";

const meta = {
  title: "IntensityDisplay",
  component: IntensityDisplay,
  decorators: [
    (Story) => (
      <div style={{ padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IntensityDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VeryLow: Story = {
  args: {
    intensity: {
      forecast: 50,
      actual: 45,
      index: "veryLow",
    },
  },
};

export const Low: Story = {
  args: {
    intensity: {
      forecast: 100,
      actual: 95,
      index: "low",
    },
  },
};

export const Moderate: Story = {
  args: {
    intensity: {
      forecast: 150,
      actual: 140,
      index: "moderate",
    },
  },
};

export const High: Story = {
  args: {
    intensity: {
      forecast: 200,
      actual: 210,
      index: "high",
    },
  },
};

export const VeryHigh: Story = {
  args: {
    intensity: {
      forecast: 300,
      actual: 320,
      index: "veryHigh",
    },
  },
};