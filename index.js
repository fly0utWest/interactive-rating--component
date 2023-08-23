let button = document.getElementById("5");
button.addEventListener("click", (event) => {
    event.preventDefault();
    button.style.backgroundColor = "var(--orange)";
    button.style.color = "#fff";
});