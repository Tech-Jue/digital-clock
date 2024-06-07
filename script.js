document.addEventListener('DOMContentLoaded', () => {
    const hr = document.getElementById("hour");
    const min = document.getElementById("minute");
    const sec = document.getElementById("seconds");
    const dateDisplay = document.getElementById("date");

    function updateTime() {
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const day = now.toLocaleDateString('en-US', { weekday: 'short' });
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const date = String(now.getDate()).padStart(2, '0');

        hr.textContent = hours;
        min.textContent = minutes;
        sec.textContent = seconds;
        dateDisplay.textContent = `${day}/${year}/${month}/${date}`;
    }

    setInterval(updateTime, 1000);
    updateTime();
});
