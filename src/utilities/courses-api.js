import sendRequest from "./send-request";

const BASE_URL = "/api/courses";

export function createCourse(formData) {
  return sendRequest(`${BASE_URL}/create`, "POST", formData);
}

export function getAllCourses() {
  return sendRequest(`${BASE_URL}/courses`);
}
