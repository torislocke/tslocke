var request = new XMLHttpRequest();

request.open("GET", "https://hplussport.com/api/products?order=name");

request.onload = function () {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);
  //   var description = parsedData[0].description;
  //   console.log(description);

  // display results on webpage

  for (item in parsedData) {
    var name = parsedData[item].name;
    var products = document.createElement("li");
    products.innerHTML = name;
    document.body.appendChild(products);

    var imageUrl = parsedData[item].image;
    var images = document.createElement("img");
    images.setAttribute("src", imageUrl);
    document.body.appendChild(images);
  }
};

request.send();
