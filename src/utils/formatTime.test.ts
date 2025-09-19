import { describe, expect, it } from "vitest";
import { formatTime } from "./formatTime";

describe("formatTime", () => {
  it("should format to HH:mm", () => {
    const dateTimeString = "2025-09-19T14:00:00Z";
    const expected = "14:00";

    const actual = formatTime(dateTimeString);

    expect(actual).toBe(expected);
  });

  it("should return 'Invalid DateTime' for an invalid dateTimeString", () => {
    const invalidString = "not-a-date";

    const actual = formatTime(invalidString);

    expect(actual).toBe("Invalid DateTime");
  });
});
