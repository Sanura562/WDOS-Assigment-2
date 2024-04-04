async function fetchData() {
  try {
    const response = await fetch("wildlifeintro.json"); // Replace 'data.json' with the path to your JSON file
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Function to store data in local storage
function storeDataLocally(data) {
  try {
    // Convert the data to a JSON string and store it in local storage
    const jsonData = JSON.stringify(data);
    localStorage.setItem("wildlifeintroData", jsonData); // 'websiteData' is the key to access the data in local storage
    console.log("Data stored locally:", data);
  } catch (error) {
    console.error("Error storing data in local storage:", error);
    throw error;
  }
}

// Fetch data and store it in local storage
fetchData()
  .then((data) => {
    storeDataLocally(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
-document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from JSON file
  fetch("wildlifeintro.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("sectionHeading").innerHTML =
        data.section2.locations.about_location.section_heading;
      document.getElementById("locationIntro").innerHTML =
        data.section2.locations.about_location.location_intro;

      document.getElementById("items_heading1").innerHTML =
        data.flex_container.flex_item1.items_heading;

      //   data.topParks.parks.forEach((parkName) => {
      //     const parkList = document.getElementById("park-lists");
      //     const listItem = document.createElement("li");

      //     listItem.textContent = parkName;
      //     parkList.appendChild(listItem);
      //   });

      //   data.topParks.parks.forEach((factName) => {
      //     const factList = document.getElementById("facts-lists");
      //     const listItem = document.createElement("li");

      //     listItem.textContent = factName;
      //     factList.appendChild(listItem);
      //   });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
