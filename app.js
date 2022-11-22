console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


const searchBar = document.getElementById("searchWord");
const searchButton = document.getElementById("submitSearch");
const image = document.querySelector("img");
const feedbackP = document.createElement("p");
const apiKey = "r5a1GtgAFIKaQTUnV5tjtHElSeONZ41k";

searchButton.onclick = () => {
    fetch(
        `https://api.giphy.com/v1/gifs/translate?apiKey=${apiKey}&s=${searchBar.value}`,
        { mode: "cors" }
    )
    .then((response) => response.json())
    .then((res) => {
        feedbackP.textContent = "";
        image.src = res.data.images.original.url;
        searchBar.value = "";
    })
    .catch ((err) => {
        console.error(err);
        feedbackP.textContent = err.message;
    })
}

searchBar.addEventListener("keypress", (event) => {
    console.log("test")
    if (event.key === "Enter") {
        console.log("test2");
        event.preventDefault();
        searchButton.click();
    }
});


