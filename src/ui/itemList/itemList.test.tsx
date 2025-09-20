import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ItemList } from "./itemList";
import * as useGetMockDataModule from "@/hooks/useGetMockData";

describe("ItemList", () => {
  let useGetMockDataSpy: ReturnType<typeof vi.spyOn>;

  const mockData = [
    {
      from: "2024-01-01T09:00:00Z",
      to: "2024-01-01T10:00:00Z",
      intensity: {
        forecast: 150,
        actual: 120,
        index: "moderate" as const,
      },
    },
    {
      from: "2024-01-01T10:00:00Z",
      to: "2024-01-01T11:00:00Z",
      intensity: {
        forecast: 200,
        actual: 180,
        index: "high" as const,
      },
    },
  ];

  beforeEach(() => {
    useGetMockDataSpy = vi.spyOn(useGetMockDataModule, "useGetMockData");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders loading state when data is null", () => {
    useGetMockDataSpy.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(<ItemList />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders cards when data is available", () => {
    useGetMockDataSpy.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    render(<ItemList />);

    const cards = screen.getAllByTestId("CardContainer");
    expect(cards).toHaveLength(2);
  });
});
