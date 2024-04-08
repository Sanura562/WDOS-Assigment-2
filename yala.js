document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from JSON file
  fetch("yala.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      if (!localStorage.getItem("Yala")) {
        localStorage.setItem("Yala", JSON.stringify(content));
      }

      const data = JSON.parse(localStorage.getItem("Yala"));
      console.log(data);
      ///yala
      document.getElementById("yala_heading").innerHTML =
        data.header.heading.title;
      document.getElementById("about_heading").innerHTML = data.about.title;
      document.getElementById("about_para").innerHTML = data.about.intro;
      ///image
      const yala_image = data.about.yala_image1.src;
      document.getElementById("Yi").src = `./${yala_image}`;

      document.getElementById("terrain_title").innerHTML = data.heading.title;
      document.getElementById("terrain_paragraph").innerHTML = data.intro;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
