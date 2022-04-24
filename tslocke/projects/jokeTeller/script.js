// Retrieve html user interaction
const button = document.getElementById("button");
const audioElement = document.getElementById("audio");
const jokeContainer = document.getElementById("joke-container");
const jokeText = document.getElementById("joke");
const loader = document.getElementById("loader");

jokeContainer.classList.add("hide");

// Disable/Enable Button using disable attribute available on buttons
function toggleButton() {
  button.disabled = !button.disabled;
}

// VoiceRSS Speech Function
function tellMe(joke) {
  const jokeString = joke.trim().replace(/ /g, "%20");
  // VoiceRSS Speech Parameters
  VoiceRSS.speech({
    key: "46e8bb2025da46dca5fba850c838b4a3",
    src: jokeString,
    hl: "en-us",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// Get jokes from Joke API https://sv443.net/jokeapi/v2/ no API key needed and free
async function getJokes() {
  let joke = "";
  const apiUrl =
    "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Set up to retrieve One or Two Part Joke
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    // Pass the Joke to VoiceRSS API
    tellMe(joke);
    // Disable Button
    toggleButton();
  } catch (error) {
    // Catch Error Here
  }
  // display joke on screen for accessability
  jokeContainer.classList.remove("hide");
  jokeText.textContent = joke;
}

// Event Listeners
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton);
