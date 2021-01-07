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

export const postCourseId = async (id, course) => {
  const url = `http://127.0.0.1:5000/api/progress/${id}`;
  const data = { newLesson: course };
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log("Успех:", JSON.stringify(json));
  } catch (error) {
    console.error("Ошибка:", error);
  }
};
