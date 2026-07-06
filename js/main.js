function updateClock() {
    const now = new Date();

    const date = now.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric"
    });

    const weekday = now.toLocaleDateString("en-US", {
        weekday: "long"
    });

    const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    document.querySelector(".clock").textContent =
        `${date}, ${weekday} +++ ${time}`;
}

updateClock();
setInterval(updateClock, 1000);