import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { IntensityDisplay } from "./intensityDisplay";

describe("IntensityDisplay", () => {
  const mockIntensity = {
    forecast: 150,
    actual: 120,
    index: "moderate" as const,
  };

  it("renders intensity values", () => {
    render(<IntensityDisplay intensity={mockIntensity} />);

    expect(screen.getByText("150")).toBeVisible();
    expect(screen.getByText("120")).toBeVisible();
    expect(screen.getByText("moderate")).toBeVisible();
  });

  it("renders three list items", () => {
    const { container } = render(
      <IntensityDisplay intensity={mockIntensity} />
    );

    const listItems = container.querySelectorAll("li");
    expect(listItems).toHaveLength(3);
  });
});
