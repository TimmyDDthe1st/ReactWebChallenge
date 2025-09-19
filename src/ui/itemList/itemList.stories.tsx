import type { Meta, StoryObj } from "@storybook/react";
import { ItemList } from "./itemList";

const meta = {
  title: "ItemList",
  component: ItemList,
  decorators: [
    (Story) => (
      <div style={{ padding: 16 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    // Mock the API call for Storybook
    mockData: [
      {
        url: '/api/mock-data',
        method: 'GET',
        status: 200,
        response: {
          data: [
            {
              from: "2024-01-01T09:00:00Z",
              to: "2024-01-01T10:00:00Z",
              intensity: {
                forecast: 150,
                actual: 120,
                index: "moderate",
              },
            },
            {
              from: "2024-01-01T10:00:00Z",
              to: "2024-01-01T11:00:00Z",
              intensity: {
                forecast: 200,
                actual: 180,
                index: "high",
              },
            },
            {
              from: "2024-01-01T11:00:00Z",
              to: "2024-01-01T12:00:00Z",
              intensity: {
                forecast: 80,
                actual: 75,
                index: "low",
              },
            },
          ],
        },
      },
    ],
  },
} satisfies Meta<typeof ItemList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};