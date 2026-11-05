let number = 0;

let timer = setInterval(function () {

    number++;

    document.getElementById("line").style.width = number + "%";
    document.getElementById("percent").textContent = number + "%";

    if (number >= 100) {
        clearInterval(timer);

        window.location.href = "index.html";
    }

}, 50);

