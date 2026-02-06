const button = document.querySelector("#loadBtn");
const title = document.querySelector("#title");
const date = document.querySelector("#date");
const img = document.querySelector("#spaceImg");
const description = document.querySelector("#description");

const apiKey = "DEMO_KEY";
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

button.addEventListener("click", () => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      title.innerText = data.title;
      date.innerText = data.date;

      if (data.media_type === "image") {
        img.src = data.url;
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }

      description.innerText = data.explanation;
    });
});
