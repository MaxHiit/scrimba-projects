// Variables
const myForm = document.querySelector("#entry-form");
const entriesSection = document.querySelector("#entries");
const entryTextBox = document.querySelector(".entry-textbox");
const entriesNav = document.querySelector(".entries-nav");
let count = 1;

// Functions
function addEntryToForm(e) {
  // stop the automatic refresh of the page
  e.preventDefault();
  // create the div container with the value entered in the form
  const entryDiv = document.createElement("div");
  entryDiv.className = "single-entry";
  entryDiv.textContent = entryTextBox.value;
  entryDiv.style.display = "none";
  entriesSection.appendChild(entryDiv);
  // Resets the value of an input to 0
  entryTextBox.value = "";

  // creation of a button that displays the text provided each time the form is submitted
  const displayEntryBtn = document.createElement("button");
  displayEntryBtn.className = "display-entry-btn";
  displayEntryBtn.textContent = count;
  entriesNav.appendChild(displayEntryBtn);

  // displays the text of the entry corresponding to each value of the button when you click
  displayEntryBtn.addEventListener("click", () => {
    const allEntries = document.querySelectorAll(".single-entry");
    allEntries.forEach((entries) => {
      entries.style.display = "none";
    });
    entryDiv.style.display = "block";
  });
  count++;
}

// Event Listener
myForm.addEventListener("submit", addEntryToForm);
