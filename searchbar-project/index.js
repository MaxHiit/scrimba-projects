// Variables
const userNameInput = document.getElementById("searchInput");

// Event listener for 'keyup' for our input field and access the event's target and value
userNameInput.addEventListener("keyup", function (event) {
  let searchQuery = event.target.value.toLowerCase();
  let allNamesDOMCollection = document.getElementsByClassName("name");

  // Loop over all our names
  for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
    // Store the current name
    const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();

    // Comparing the search query vs. the DOM names with the include() methods
    if (currentName.includes(searchQuery)) {
      allNamesDOMCollection[counter].style.display = "block";
    } else {
      allNamesDOMCollection[counter].style.display = "none";
    }
  }
});
