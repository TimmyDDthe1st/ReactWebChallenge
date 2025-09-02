import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "./card";

describe("Card", () => {
  it("renders children content", () => {
    render(
      <Card>
        <div>Child content</div>
      </Card>
    );

    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("renders the container with test id", () => {
    render(<Card>Content</Card>);

    const container = screen.getByTestId("CardContainer");
    expect(container).toBeInTheDocument();
  });
});

