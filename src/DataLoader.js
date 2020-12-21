const fetch = require("node-fetch");

export const getCourses = () => {
  console.log("gello");
  return fetch("http://127.0.0.1:5000/api/courses").then((response) =>
    response.json()
  );
};
