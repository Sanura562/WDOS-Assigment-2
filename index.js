document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from JSON file
  fetch("index.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      if (!localStorage.getItem("index")) {
        localStorage.setItem("index", JSON.stringify(content));
      }

      const data = JSON.parse(localStorage.getItem("index"));
      console.log(data);

      document.getElementById("hero-title").innerHTML = data.hero.title;
      document.getElementById("about-title").innerHTML = data.about.title;
      document.getElementById("about-intro").innerHTML = data.about.intro;
      document.getElementById("parks-title").innerHTML = data.topParks.title;
      document.getElementById("facts-title").innerHTML = data.facts.title;

      //loop through the parks array and create a list item for each park
      data.topParks.parks.forEach((parkName) => {
        const parkList = document.getElementById("park-lists");
        const listItem = document.createElement("li");

        listItem.textContent = parkName;
        parkList.appendChild(listItem);
      });

      data.topParks.parks.forEach((factName) => {
        const factList = document.getElementById("facts-lists");
        const listItem = document.createElement("li");

        listItem.textContent = factName;
        factList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
