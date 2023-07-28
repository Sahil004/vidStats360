// Function to get the value of a specific query parameter from a given path
export function getQueryParamFromPath(path: string, queryParam: string) {
  // Split the path at '?' to get the query parameters part
  // For example, if path = '/example?param1=value1&param2=value2'
  // then, urlParams1 will contain 'param1=value1&param2=value2'
  let urlParams1 = new URLSearchParams(path.split("?")[1]);

  // Get the value of the specific query parameter using its name
  // If the query parameter is not found, urlParams1.get(queryParam) will return null
  return urlParams1.get(queryParam);
}
