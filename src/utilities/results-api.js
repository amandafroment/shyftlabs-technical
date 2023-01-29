import sendRequest from "./send-request";

const BASE_URL = "/api/results";

export function createResult(formData) {
  return sendRequest(`${BASE_URL}/create`, "POST", formData);
}

export function getAllResults() {
  return sendRequest(`${BASE_URL}/results`);
}
