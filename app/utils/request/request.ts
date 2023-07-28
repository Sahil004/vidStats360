import { ApiResponse } from "../types";

// Generic async function to make a fetch request and parse the response as ApiResponse<T>
export async function _fetch<T>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) {
  // Perform the fetch request with the provided input and init options
  // 'fetch' is a built-in JavaScript function for making HTTP requests
  const res = await fetch(input, {
    ...init,
    next: {
      revalidate: 1,
    },
  });

  // Parse the response as JSON and cast it to ApiResponse<T>
  // 'res.json()' returns a Promise that resolves to the JSON data of the response
  return (await res.json()) as ApiResponse<T>;
}
