function clicked() {
    var click = document.getElementById("header");
    var button = document.getElementById("button");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
    if (button.innerHTML === "Hide Header") {
        button.innerHTML = "Show Header";
    } else {
        button.innerHTML = "Hide Header";
    }
};