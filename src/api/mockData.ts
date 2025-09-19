import Response from "./types/mockResponse";

export const getMockData = async () => {
  return response;
};

export const response: Response = {
  data: [
    {
      from: "2018-01-20T12:00Z",
      to: "2018-01-20T12:30Z",
      intensity: {
        forecast: 266,
        actual: 260,
        index: "veryLow",
      },
    },
    {
      from: "2018-01-20T12:00Z",
      to: "2018-01-20T12:30Z",
      intensity: {
        forecast: 267,
        actual: 261,
        index: "low",
      },
    },
    {
      from: "2018-01-20T12:00Z",
      to: "2018-01-20T12:30Z",
      intensity: {
        forecast: 266,
        actual: 263,
        index: "moderate",
      },
    },
    {
      from: "2018-01-20T12:30Z",
      to: "2018-01-20T13:00Z",
      intensity: {
        forecast: 267,
        actual: 265,
        index: "high",
      },
    },
    {
      from: "2018-01-20T12:30Z",
      to: "2018-01-20T13:00Z",
      intensity: {
        forecast: 267,
        actual: 265,
        index: "veryHigh",
      },
    },
  ],
};
