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
      localStorage.setItem("depart", JSON.stringify(content));

      const data = JSON.parse(localStorage.getItem("depart"));
      console.log(data);

      document.getElementById("section_heading1").innerHTML =
        data.entry_content.section_heading;
      document.getElementById("intro_para").innerHTML =
        data.entry_content.intro;
      document.getElementById("location_heading").innerHTML =
        data.location.heading;
      document.getElementById("location_heading").innerHTML =
        data.location.heading;
      ///fetching the map
      function renderIframeFromJSON(data) {
        const iframeURL = data.location.iframe.src;
        const iframeWidth = data.location.iframe.width;
        const iframeHeight = data.location.iframe.height;

        const iframe = document.createElement("iframe");

        iframe.src = iframeURL;
        iframe.width = iframeWidth;
        iframe.height = iframeHeight;
        iframe.style.padding = "0";

        document.getElementById("location_dep").appendChild(iframe);
      }
      renderIframeFromJSON(data);
      ///images
      function table_generator(json_path) {
        //function to create the body of the table
        let code = ``;
        for (let i = 0; i < json_path.length; i++) {
          code += `
      <img src="${json_path[i].src}" alt="${json_path[i].alt}" loading="lazy" />`;
        }
        return code;
      }
      //
      const imageGallery = data.container1;
      document.getElementById("gallery").innerHTML =
        table_generator(imageGallery);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
