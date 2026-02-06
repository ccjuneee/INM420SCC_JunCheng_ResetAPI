const button = document.querySelector("#loadBtn");
const title = document.querySelector("#title");
const date = document.querySelector("#date");
const img = document.querySelector("#spaceImg");
const description = document.querySelector("#description");

const apiKey = "V1f7OXPAItwSZpJH6fpqLlrLfbcIjSj59Ua3yYcn";
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

button.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      title.innerText = data.title;
      date.innerText = data.date;
      description.textContent = data.explanation;

      // ✅ 核心修复点
      img.src = data.url;
      img.style.display = "block"; // 强制显示
      img.alt = data.title || "NASA Image";
    })
    .catch((err) => {
      console.error(err);
    });
});
