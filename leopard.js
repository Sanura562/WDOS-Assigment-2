document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from JSON file
  fetch("sl_leopard.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((content) => {
      localStorage.setItem("leopard", JSON.stringify(content));

      const data = JSON.parse(localStorage.getItem("leopard"));
      console.log(data);
      ///section one
      document.getElementById("Leopard_heading").innerHTML =
        data.Leopard_heading;
      document.getElementById("park_head1").innerHTML =
        data.flexbox1[0].park_head;
      document.getElementById("kumana_about").innerHTML =
        data.flexbox1[0].about;

      ///section two
      document.getElementById("Leopard_heading").innerHTML =
        data.Leopard_heading;
      document.getElementById("park_head2").innerHTML =
        data.flexbox1[1].park_head;
      document.getElementById("hortonplaceabout").innerHTML =
        data.flexbox1[1].about;

      ///section three
      document.getElementById("Leopard_heading").innerHTML =
        data.Leopard_heading;
      document.getElementById("park_head3").innerHTML =
        data.flexbox1[2].park_head;
      document.getElementById("willpattu_intro").innerHTML =
        data.flexbox1[2].about;

      ///threat section one
      document.getElementById("threat_heading1").innerHTML =
        data.threat1.heading;
      document.getElementById("threat_about").innerHTML = data.threat1.about;
      document.getElementById("heading2").innerHTML = data.threat1.about;
      document.getElementById("about_threat1").innerHTML = data.threat1.about;

      ///threat section two
      document.getElementById("threat_heading2").innerHTML =
        data.threat2.heading;
      document.getElementById("threat2_about").innerHTML = data.threat2.about;
      document.getElementById("heading2").innerHTML = data.threat2.subheading;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
