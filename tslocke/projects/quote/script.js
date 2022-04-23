// Retrieve quotes from https://quotes-react.netlify.app/ api

let apiQuotes = []; // set empty array to later pass in json

async function getQuotes() {
  const apiURL = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json(); // retrieve json object into variable
    console.log(apiQuotes[11]);
  } catch (error) {
    // Error handeling
    alert(error);
  }
}

// on load run the getQuotes function
getQuotes();
