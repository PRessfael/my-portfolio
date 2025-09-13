function initDarkMode() {
  const darkToggle = document.getElementById("darkmode-toggle");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkToggle.checked = true;
  }

  darkToggle.addEventListener("change", () => {
    if (darkToggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
}

function initEditButton() {
    const editBtn = document.querySelector(".edit-btn");
    const editableText = document.getElementById("editable-text");

    editBtn.addEventListener("click", () => {
        if (editableText.isContentEditable) {
            editableText.contentEditable = "false";
            editBtn.textContent = "Edit";
        } else {
            editableText.contentEditable = "true";
            editBtn.textContent = "Save";
        }
    });

}


document.addEventListener("DOMContentLoaded", initDarkMode);
document.addEventListener("DOMContentLoaded", initEditButton);

