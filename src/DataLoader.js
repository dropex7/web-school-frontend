const fetch = require("node-fetch");

export const getCourses = () => {
  return fetch("http://127.0.0.1:5000/api/courses").then((response) =>
    response.json()
  );
};

export const getTasks = (id) => {
  const url = `http://127.0.0.1:5000/api/tasks/${id}`;
  return fetch(url).then((response) => response.json());
};

export const getProgress = (id) => {
  const url = `http://127.0.0.1:5000/api/progress/${id}`;
  return fetch(url).then((response) => response.json());
};
