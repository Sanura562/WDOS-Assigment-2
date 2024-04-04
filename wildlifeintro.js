// async function fetchData() {
//   try {
//     const response = await fetch("wildlifeintro.json"); // Replace 'data.json' with the path to your JSON file
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// }

// // Function to store data in local storage
// function storeDataLocally(data) {
//   try {
//     // Convert the data to a JSON string and store it in local storage
//     const jsonData = JSON.stringify(data);
//     localStorage.setItem("wildlifeintroData", jsonData); // 'websiteData' is the key to access the data in local storage
//     console.log("Data stored locally:", data);
//   } catch (error) {
//     console.error("Error storing data in local storage:", error);
//     throw error;
//   }
// }

// // Fetch data and store it in local storage
// fetchData()
//   .then((data) => {
//     storeDataLocally(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// -document.addEventListener("DOMContentLoaded", function () {
//   // Fetch data from JSON file
//   fetch("wildlifeintro.json")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       document.getElementById("sectionHeading").innerHTML =
//         data.section2.locations.about_location.section_heading;
//       document.getElementById("locationIntro").innerHTML =
//         data.section2.locations.about_location.location_intro;

//       document.getElementById("items_heading1").innerHTML =
//         data.flex_container.flex_item1.items_heading1;

//       //   data.topParks.parks.forEach((parkName) => {
//       //     const parkList = document.getElementById("park-lists");
//       //     const listItem = document.createElement("li");

//       //     listItem.textContent = parkName;
//       //     parkList.appendChild(listItem);
//       //   });

//       //   data.topParks.parks.forEach((factName) => {
//       //     const factList = document.getElementById("facts-lists");
//       //     const listItem = document.createElement("li");

//       //     listItem.textContent = factName;
//       //     factList.appendChild(listItem);
//       //   });
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from JSON file
  fetch("wildlifeintro.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      // Save data to local storage
      localStorage.setItem("Wildlifeintro", JSON.stringify(content));

      const data = JSON.parse(localStorage.getItem("Wildlifeintro"));

      document.getElementById("sectionHeading").innerHTML =
        data.section2.locations.about_location.section_heading;
      document.getElementById("locationIntro").innerHTML =
        data.section2.locations.about_location.location_intro;
      document.getElementById("items_heading").innerHTML =
        data.section2.locations.flex_container.flex_item1.items_heading;
      document.getElementById("intro_1").innerHTML =
        data.section2.locations.flex_container.flex_item1.intro;

      // Map Fetching
      function renderIframeFromJSON(data) {
        const iframeURL =
          data.section2.locations.flex_container.flex_item1.iframe.src;
        const iframeWidth =
          data.section2.locations.flex_container.flex_item1.iframe.width;
        const iframeHeight =
          data.section2.locations.flex_container.flex_item1.iframe.height;

        const iframe = document.createElement("iframe");

        iframe.src = iframeURL;
        iframe.width = iframeWidth;
        iframe.height = iframeHeight;
        iframe.style.padding = "0";

        document.getElementById("hortonLoc").appendChild(iframe);
      }
      renderIframeFromJSON(data);

      document.getElementById("items_heading2").innerHTML =
        data.section2.locations.flex_container.flex_item2.items_heading2;
      document.getElementById("intro_2").innerHTML =
        data.section2.locations.flex_container.flex_item2.intro;

      // Map Fetching
      function renderIframeFromJSON2(data) {
        const iframeURL =
          data.section2.locations.flex_container.flex_item2.iframe.src;
        const iframeWidth =
          data.section2.locations.flex_container.flex_item2.iframe.width;
        const iframeHeight =
          data.section2.locations.flex_container.flex_item2.iframe.height;

        const iframe = document.createElement("iframe");

        iframe.src = iframeURL;
        iframe.width = iframeWidth;
        iframe.height = iframeHeight;
        iframe.style.padding = "0";

        document.getElementById("Bundala_loc").appendChild(iframe);
      }
      renderIframeFromJSON2(data);

      document.getElementById("heading_3").innerHTML =
        data.section2.locations.flex_container.flex_item3.items_heading;
      document.getElementById("intro_3").innerHTML =
        data.section2.locations.flex_container.flex_item3.intro;

      // Map Fetching
      function renderIframeFromJSON3(data) {
        const iframeURL =
          data.section2.locations.flex_container.flex_item3.iframe.src;
        const iframeWidth =
          data.section2.locations.flex_container.flex_item3.iframe.width;
        const iframeHeight =
          data.section2.locations.flex_container.flex_item3.iframe.height;

        const iframe = document.createElement("iframe");

        iframe.src = iframeURL;
        iframe.width = iframeWidth;
        iframe.height = iframeHeight;
        iframe.style.padding = "0";

        document.getElementById("minneriya_loc").appendChild(iframe);
      }
      renderIframeFromJSON3(data);

      document.getElementById("heading_4").innerHTML =
        data.section2.locations.flex_container.flex_item4.items_heading;
      document.getElementById("intro_4").innerHTML =
        data.section2.locations.flex_container.flex_item4.intro;

      // Map Fetching
      function renderIframeFromJSON4(data) {
        const iframeURL =
          data.section2.locations.flex_container.flex_item4.iframe.src;
        const iframeWidth =
          data.section2.locations.flex_container.flex_item4.iframe.width;
        const iframeHeight =
          data.section2.locations.flex_container.flex_item4.iframe.height;

        const iframe = document.createElement("iframe");

        iframe.src = iframeURL;
        iframe.width = iframeWidth;
        iframe.height = iframeHeight;
        iframe.style.padding = "0";

        document.getElementById("kaudulla_loc").appendChild(iframe);
      }
      renderIframeFromJSON4(data);

      ///table
      const tableBody = document.querySelector(".details table tbody");
      data.section2.table.animals_table.body.forEach((fact) => {
        const row = `
          <tr>
            <td>${fact.name}</td>
            <td>${fact.fact}</td>
            <td>${fact.loc}</td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
