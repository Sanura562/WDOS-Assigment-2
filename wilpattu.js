document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from JSON file
  fetch("wilpattu.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      localStorage.setItem("Wilpattu", JSON.stringify(content));

      const data = JSON.parse(localStorage.getItem("Wilpattu"));
      console.log(data);
      document.getElementById("wilpattu_heading").innerHTML =
        data.body.heading.wilpattu_heading;
      document.getElementById("wilpattu_heading").innerHTML =
        data.body.heading.wilpattu_heading;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
