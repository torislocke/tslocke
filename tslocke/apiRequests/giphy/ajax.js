var request = new XMLHttpRequest();
apiKey = "REMsTBuWRk0QDZJ9XSmhw3ogMOufQDTz";
request.open(
  "GET",
  "https://api.giphy.com/v1/gifs/random?api_key=REMsTBuWRk0QDZJ9XSmhw3ogMOufQDTz&tag=dog&rating=g"
);

request.onload = function () {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);
  var originalUrl = parsedData.data.images.original.url;
  console.log(originalUrl);

  var gif = document.createElement("img");
  gif.setAttribute("src", originalUrl);
  document.body.appendChild(gif);
};
request.send();
