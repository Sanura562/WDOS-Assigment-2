const get_data_button = document.getElementById("selectPage");
if (get_data_button) {
  get_data_button.addEventListener("click", function (e) {
    const selectPage = document.querySelector(".selectPage").value;
    let textarea = document.querySelector(".jsonTextarea");

    if (selectPage == "index") {
      textarea.value = localStorage.getItem("index");
    } else if (selectPage == "Wildlifeintro") {
      textarea.value = localStorage.getItem("Wildlifeintro");
    } else if (selectPage == "depart") {
      textarea.value = localStorage.getItem("depart");
    } else if (selectPage == "leopard") {
      textarea.value = localStorage.getItem("leopard");
    } else if (selectPage == "Animals") {
      textarea.value = localStorage.getItem("Animals");
    } else if (selectPage == "Wilpattu") {
      textarea.value = localStorage.getItem("Wilpattu");
    } else if (selectPage == "Yala") {
      textarea.value = localStorage.getItem("Yala");
    }
  });
}

const editPageButton = document.getElementById("saveChanges");
if (editPageButton) {
  editPageButton.addEventListener("click", function (e) {
    const selectPage = document.querySelector(".selectPage").value;
    const textareaValue = document.querySelector(".jsonTextarea").value;

    if (selectPage && textareaValue) {
      if (selectPage == "index") {
        localStorage.setItem("index", textareaValue);
      } else if (selectPage == "Wildlifeintro") {
        localStorage.setItem("Wildlifeintro", textareaValue);
      } else if (selectPage == "depart") {
        localStorage.setItem("depart", textareaValue);
      } else if (selectPage == "leopard") {
        localStorage.setItem("leopard", textareaValue);
      } else if (selectPage == "Animals") {
        localStorage.setItem("Animals", textareaValue);
      } else if (selectPage == "Wilpattu") {
        localStorage.setItem("Wilpattu", textareaValue);
      } else if (selectPage == "Yala") {
        localStorage.setItem("Yala", textareaValue);
      } else {
        console.log("hello world");
      }
    }
  });
}
