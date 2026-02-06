document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "V1f7OXPAItwSZpJH6fpqLlrLfbcIjSj59Ua3yYcn";

  const button = document.getElementById("loadBtn");
  const dateInput = document.getElementById("dateInput");

  if (!button || !dateInput) {
    console.error("Button or date input not found in DOM");
    return;
  }

  button.addEventListener("click", () => {
    const selectedDate = dateInput.value;

    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("title").textContent = data.title;
        document.getElementById("date").textContent = data.date;
        document.getElementById("description").textContent = data.explanation;

        const img = document.getElementById("spaceImg");
        img.src = data.url;
        img.style.display = "block";
      })
      .catch((error) => {
        console.error("Error fetching NASA data:", error);
      });
  });
});
