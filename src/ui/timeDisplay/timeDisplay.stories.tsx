import type { Meta, StoryObj } from "@storybook/react";
import { TimeDisplay } from "./timeDisplay";

const meta = {
  title: "TimeDisplay",
  component: TimeDisplay,
  decorators: [
    (Story) => (
      <div style={{ padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TimeDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    from: "2024-01-01T09:00:00Z",
    to: "2024-01-01T10:00:00Z",
  },
};
