import sendRequest from "./send-request";

const BASE_URL = "/api/students";

export function createStudent(formData) {
  return sendRequest(`${BASE_URL}/create`, "POST", formData);
}

export function getAllStudents() {
  return sendRequest(`${BASE_URL}/students`);
}
