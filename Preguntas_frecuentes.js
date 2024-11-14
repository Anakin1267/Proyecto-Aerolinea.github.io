function toggleText(index) {
    var textContainer = document.getElementById('textContainer' + index);
    if (textContainer.style.display === "none" || textContainer.style.display === "") {
        textContainer.style.display = "block";
    } else {
        textContainer.style.display = "none";
    }
}