document.addEventListener("DOMContentLoaded", function () {
    const jokeButton = document.getElementById("get-joke");
    const jokeContainer = document.getElementById("joke");

    jokeButton.addEventListener("click", function () {
        fetch("https://api.chucknorris.io/jokes/random")
            .then((response) => response.json())
            .then((data) => {
                jokeContainer.innerHTML = data.value;
            })
            .catch((error) => {
                console.error("Error al obtener el chiste:", error);
            });
    });
});