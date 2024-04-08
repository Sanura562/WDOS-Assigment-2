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
      if (!localStorage.getItem("Wilpattu")) {
        localStorage.setItem("Wilpattu", JSON.stringify(data));
      }

      const data = JSON.parse(localStorage.getItem("Wilpattu"));
      console.log(data);
      document.getElementById("wilpattu_heading").innerHTML =
        data.body.heading.wilpattu_heading;
      document.getElementById("about_heading").innerHTML =
        data.body.about.about_us;
      document.getElementById("wilpattu_intro").innerHTML =
        data.body.about.wilpattu_intro;
      ///wilpattu images
      const wl = data.body.wilpattu_images.Wl.src;
      document.getElementById("wl").src = `./${wl}`;
      ///wilpattu images
      const he = data.body.wilpattu_images.HE.src;
      document.getElementById("he").src = `./${he}`;
      ///location
      //
      function renderIframeFromJSON(data) {
        const iframeURL = data.body.location.iframe.src;
        const iframeWidth = data.body.location.iframe.width;
        const iframeHeight = data.body.location.iframe.height;

        const iframe = document.createElement("iframe");

        iframe.src = iframeURL;
        iframe.width = iframeWidth;
        iframe.height = iframeHeight;
        iframe.style.padding = "0";

        document.getElementById("wilpattu_loc").appendChild(iframe);
      }
      renderIframeFromJSON(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
