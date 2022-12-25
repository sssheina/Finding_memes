let button = document.querySelector("button");
let search = document.querySelector(".userSearch");
let number = document.querySelector(".number");
let gifs = document.querySelector(".pic");

button.addEventListener("click", function () {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=AUR1oawy4r9z1QfA3jhCx7utLuYnNup9&q=${search.value}&limit=${number.value}&offset=0&rating=g&lang=en`
    // `https://oebhgeiptu.com`
  )
    .then((res) => {
      try {
        if (window.navigator.online == false)
          throw new Error("Check Internet Connection...");
      } catch (error) {
        alert("Web error: " + error.message);
      }
      try {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Check the validity of the entered request");
      } catch (error) {
        alert("Error: Invalid request " + error.message);
      }
    })

    .then((elem) => {
      console.log(elem);

      gifs.innerHTML = "";

      for (let i = 0; i < elem.data.length; i++) {
        gifs.innerHTML += `<div><img src="${elem.data[i].images.downsized.url}"></div>`;
      }
    })

    .catch((error) => {
      alert("Web error: " + error.message);
    });
  search.value = "";
  number.value = "";
});
