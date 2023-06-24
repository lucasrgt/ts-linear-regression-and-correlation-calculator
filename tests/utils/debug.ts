export function logResult<T>(
  expectedResult: T,
  receivedResult: T,
  tolerance?: number
) {
  console.log("Expected result: " + expectedResult);
  console.log("Received result: " + receivedResult);
}
