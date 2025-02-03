var st = document.querySelector("#start");
var en = document.querySelector("#stop");
var pau = document.querySelector("#pause");
var head = document.querySelector("h3");
var interval;
var count = 0;

st.addEventListener("click", function () {
    if (!interval) {
        interval = setInterval(function () {
            head.textContent = count;
            count++;
        }, 1000);
    }
});

en.addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
    count = 0;
    head.textContent = count;
    pau.textContent = "Pause";
});

pau.addEventListener("click", function () {
    if (interval) {
        clearInterval(interval);
        interval = null;
        pau.textContent = "Resume";
    }
    else {
        interval = setInterval(function () {
            head.textContent = count;
            count++;
        }, 1000);
        pau.textContent = "Pause";
    }
});
