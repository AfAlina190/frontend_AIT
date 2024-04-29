const factContainer = document.getElementById("fact");
const getFactBtn = document.getElementById("getFactBtn");

getFactBtn.addEventListener("click", () => {
  fetch("https://catfact.ninja/fact")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch cat fact");
      }
      return response.json();
    })
    .then((data) => {
      factContainer.textContent = data.fact;
    })
    .catch((error) => {
      factContainer.textContent = "Error: " + error.message;
      factContainer.classList.add("error");
    });
});