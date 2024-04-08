document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from JSON file
  fetch("animals.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      if (!localStorage.getItem("Animals")) {
        localStorage.setItem("Animals", JSON.stringify(data));
      }

      const data = JSON.parse(localStorage.getItem("Animals"));
      console.log(data);

      document.getElementById("title").innerHTML = data.main.about.title;
      document.getElementById("intro1").innerHTML = data.main.about.intro;
      document.getElementById("animals_heading").innerHTML =
        data.main.animals[0].name;
      document.getElementById("animals_about").innerHTML =
        data.main.animals[0].description;
      document.getElementById("animals_about").innerHTML =
        data.main.animals[0].description;

      ///sloth bear
      document.getElementById("animals_heading2").innerHTML =
        data.main.animals[1].name;
      document.getElementById("about2").innerHTML =
        data.main.animals[1].description;

      ///monkey
      document.getElementById("heading3").innerHTML = data.main.animals[2].name;
      document.getElementById("about3").innerHTML =
        data.main.animals[2].description;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
