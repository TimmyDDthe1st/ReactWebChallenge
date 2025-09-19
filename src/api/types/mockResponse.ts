export type responseData = {
  from: string;
  to: string;
  intensity: {
    forecast: number;
    actual: number;
    index: "veryLow" | "low" | "moderate" | "high" | "veryHigh";
  };
};

export default interface Response {
  data: responseData[];
}
