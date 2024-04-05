// async function fetchData() {
//   try {
//     const response = await fetch("department.json"); // Replace 'data.json' with the path to your JSON file
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
//     const jsonData = JSON.stringify(data);
//     localStorage.setItem("departmentData", jsonData); // 'websiteData' is the key to access the data in local storage
//     console.log("Data stored locally:", data);
//   } catch (error) {
//     console.error("Error storing data in local storage:", error);
//     throw error;
//   }
// }
// fetchData()
//   .then((data) => {
//     storeDataLocally(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// document.addEventListener("DOMContentLoaded", function () {
//   // Fetch data from JSON file
//   fetch("index.json")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then(() => {
//       function renderIframeFromJSON(data) {
//         const iframeURL = data.main.location.src;
//         const iframeWidth = data.main.location.width;
//         const iframeHeight = data.main.location.height;

//         const iframe = document.createElement("iframe");

//         iframe.src = iframeURL;
//         iframe.width = iframeWidth;
//         iframe.height = iframeHeight;

//         document.getElementById("iframeContainer").appendChild(iframe);
//       }
//       fetchData("./department.json").then((data) => {
//         renderIframeFromJSON(data);
//       });
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from JSON file
  fetch("department.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      localStorage.setItem("department", JSON.stringify(content));

      const data = JSON.parse(localStorage.getItem("department"));
      console.log(data);

      document.getElementById("section_heading").innerHTML =
        data.main.entry_content.section_heading;
      document.getElementById("intro_para").innerHTML =
        data.main.entry_content.intro;
     
        // Map Fetching
      function renderIframeFromJSON(data) {
        const iframeURL =
          data.main.location.src;
        const iframeWidth =
          data.main.location.width;
        const iframeHeight =
          data.main.location.height;

        const iframe = document.createElement("iframe");

        iframe.src = iframeURL;
        iframe.width = iframeWidth;
        iframe.height = iframeHeight;
        iframe.style.padding = "0";

        document.getElementById("iframeContainer").appendChild(iframe);
      }
      renderIframeFromJSON(data);
    })

    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
-