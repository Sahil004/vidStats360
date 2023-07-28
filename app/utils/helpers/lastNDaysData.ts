import { TimeseriesData } from "../types";

// Function to get the data for the last N days
export function getLastNDaysData(
  data: TimeseriesData[],
  days: number,
): TimeseriesData[] {
  // Get the current time (in seconds) from the last element of the data array
  const currentTimeInSeconds = data[data?.length - 1].timestamp;

  // Calculate the timestamp for N days ago
  const nDaysAgoInSeconds = currentTimeInSeconds - days * 24 * 60 * 60;

  let left = 0;
  let right = data.length - 1;

  // Perform binary search to find the first data point within the time range
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (data[mid].timestamp >= nDaysAgoInSeconds) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // Return the subset of data starting from the left index
  return data.slice(left);
}

// Function to convert seconds to hours and minutes string format
export function convertSecondsToHrsMinsStr(seconds: number) {
  const hours = Math.floor(seconds / 3600); // 1 hour has 3600 seconds (60 seconds * 60 minutes)
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);

  // Format the hours and minutes with leading zeros if needed
  return `${hours < 10 ? "0" : ""}${hours} Hr ${
    minutes < 10 ? "0" : ""
  }${minutes} Min`;
}
