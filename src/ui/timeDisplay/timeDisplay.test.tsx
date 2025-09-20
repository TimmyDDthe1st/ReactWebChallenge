import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TimeDisplay } from "./timeDisplay";
import styles from "./timeDisplay.module.css";

describe("TimeDisplay", () => {
  it("renders formatted time range", () => {
    render(
      <TimeDisplay from="2024-01-01T09:00:00Z" to="2024-01-01T10:00:00Z" />
    );

    expect(screen.getByText("09:00 - 10:00")).toBeInTheDocument();
  });

  it("renders formatted time range", () => {
    render(<TimeDisplay from="not-date-time" to="not-date-time" />);

    expect(screen.getByText("Invalid DateTimes provided")).toBeInTheDocument();
  });
});
