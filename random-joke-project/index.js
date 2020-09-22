// Create 4 variables and assign them to their respective elements: setupDiv, punchlinDiv, punchlineBtn, newJokeBtn
const setupDiv = document.getElementById("setup");
const punchlinDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");
let punchline;

// Add an event listener for the punchline button. When clicked it should call a function called getPunchline
punchlineBtn.addEventListener("click", getPunchline);
// Add an event listener for the new joke button. When clicked it should call the getJoke function
newJokeBtn.addEventListener("click", getJoke);

// Create the getPunchline function.
function getPunchline() {
  // Insert the punchline into the punchlineDiv
  punchlinDiv.innerHTML = punchline;
  // Add the class "bubble" to the punchlineDiv
  punchlinDiv.classList.add("punchlineBubble");
  // Toggle the "hidden" class on both buttons.
  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}

// Setup an async function called getJoke
async function getJoke() {
  // Create a variable called jokePromise that fetches a joke from https://official-joke-api.appspot.com/jokes/programming/random
  const jokePromise = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
  // create a variable called joke that consumes the json data
  const joke = await jokePromise.json();
  // Get the setup from the joke and insert it into the setupDiv element
  setupDiv.innerHTML = joke[0].setup;
  // Create a global variable called punchline which will store the current punchline and will be updated with each new joke
  // Assign the current jokes punchline to the punchline variable.
  punchline = joke[0].punchline;
  // Clear the punchline div and remove the "bubble" class from the punchline div
  punchlinDiv.innerHTML = "";
  punchlinDiv.classList.remove("punchlineBubble");
  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}

getJoke();
