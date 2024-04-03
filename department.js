async function fetchData() {
  try {
    const response = await fetch("index.json"); // Replace 'data.json' with the path to your JSON file
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
    const jsonData = JSON.stringify(data);
    localStorage.setItem("departmentData", jsonData); // 'websiteData' is the key to access the data in local storage
    console.log("Data stored locally:", data);
  } catch (error) {
    console.error("Error storing data in local storage:", error);
    throw error;
  }
}
-----fetchData()
  .then((data) => {
    storeDataLocally(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

document.addEventListener("DOMContentLoaded", function () {-----
  // Fetch data from JSON file
  fetch("index.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("hero-title").innerHTML = data.hero.title;

      ///loop through the parks array and create a list item for each park
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
