import { DateTime } from "luxon";

export const formatTime = (input: string) => {
  return DateTime.fromISO(input, { zone: "utc" }).toFormat("HH:mm");
};
