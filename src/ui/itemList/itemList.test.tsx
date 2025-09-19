import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ItemList } from "./itemList";
import * as useGetMockDataModule from "@/hooks/useGetMockData";

describe("ItemList", () => {
  let useGetMockDataSpy: any;

  const mockData = [
    {
      from: "2024-01-01T09:00:00Z",
      to: "2024-01-01T10:00:00Z",
      intensity: {
        forecast: 150,
        actual: 120,
        index: "moderate" as const
      }
    },
    {
      from: "2024-01-01T10:00:00Z",
      to: "2024-01-01T11:00:00Z",
      intensity: {
        forecast: 200,
        actual: 180,
        index: "high" as const
      }
    }
  ];

  beforeEach(() => {
    useGetMockDataSpy = vi.spyOn(useGetMockDataModule, 'useGetMockData');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders loading state when data is null", () => {
    useGetMockDataSpy.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });

    render(<ItemList />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders cards when data is available", () => {
    useGetMockDataSpy.mockReturnValue({
      data: mockData,
      loading: false,
      error: null
    });

    render(<ItemList />);

    const cards = screen.getAllByTestId("CardContainer");
    expect(cards).toHaveLength(2);
  });

  it("renders time displays for each item", () => {
    useGetMockDataSpy.mockReturnValue({
      data: mockData,
      loading: false,
      error: null
    });

    render(<ItemList />);

    expect(screen.getByText("09:00 - 10:00")).toBeInTheDocument();
    expect(screen.getByText("10:00 - 11:00")).toBeInTheDocument();
  });

  it("renders intensity displays for each item", () => {
    useGetMockDataSpy.mockReturnValue({
      data: mockData,
      loading: false,
      error: null
    });

    render(<ItemList />);

    expect(screen.getByText("150")).toBeInTheDocument();
    expect(screen.getByText("120")).toBeInTheDocument();
    expect(screen.getByText("moderate")).toBeInTheDocument();
    expect(screen.getByText("200")).toBeInTheDocument();
    expect(screen.getByText("180")).toBeInTheDocument();
    expect(screen.getByText("high")).toBeInTheDocument();
  });
});