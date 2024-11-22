let app = document.querySelector(".app");
let button = document.querySelector(".btn");

// Function to save container content to localStorage
function saveContent() {
  const content = app.innerHTML; // Save the entire content of the app container
  localStorage.setItem("containerContent", content);
}

// Add new note (textarea) on button click
button.addEventListener("click", (event) => {
  event.preventDefault();
  let textarea = document.createElement("textarea");
  textarea.classList.add("note");
  textarea.placeholder = "Empty Note";
  button.insertAdjacentElement("beforebegin", textarea);

  // Save the updated content to localStorage
  saveContent();
});

// Restore the container content on page load
window.addEventListener("load", function () {
  const data = localStorage.getItem("containerContent");
  console.log(data);
});

// Save content before the user leaves the page
window.addEventListener("beforeunload", function () {
  saveContent();
});
