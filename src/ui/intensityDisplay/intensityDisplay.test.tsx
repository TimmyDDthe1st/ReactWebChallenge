import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { IntensityDisplay } from "./intensityDisplay";

describe("IntensityDisplay", () => {
  const mockIntensity = {
    forecast: 150,
    actual: 120,
    index: "moderate" as const,
  };

  it("renders forecast value", () => {
    render(<IntensityDisplay intensity={mockIntensity} />);

    expect(screen.getByText("150")).toBeInTheDocument();
  });

  it("renders actual value", () => {
    render(<IntensityDisplay intensity={mockIntensity} />);

    expect(screen.getByText("120")).toBeInTheDocument();
  });

  it("renders index value", () => {
    render(<IntensityDisplay intensity={mockIntensity} />);

    expect(screen.getByText("moderate")).toBeInTheDocument();
  });

  it("renders three list items", () => {
    const { container } = render(
      <IntensityDisplay intensity={mockIntensity} />
    );

    const listItems = container.querySelectorAll("li");
    expect(listItems).toHaveLength(3);
  });
});
