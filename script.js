function toggleArticle(button) {
    const fullArticle = button.nextElementSibling;
    if (fullArticle.style.display === "none" || fullArticle.style.display === "") {
        fullArticle.style.display = "block";
        button.innerHTML = "&#x25B2; See Less"; // Up arrow
    } else {
        fullArticle.style.display = "none";
        button.innerHTML = "&#x25BC; Read More"; // Down arrow
    }
}
function moveButtonToBottom(button) {
    const fullArticle = button.nextElementSibling;
    if (fullArticle.style.display === "block") {
        fullArticle.appendChild(button);
    } else {
        fullArticle.parentElement.insertBefore(button, fullArticle);
    }
}

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        toggleArticle(button);
        moveButtonToBottom(button);
    });
});