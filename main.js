function updateTime() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    const utcTime = `${hours}:${minutes}:${seconds} GMT`;
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
    const day = String(now.getUTCDate()).padStart(2, '0');
    const month = now.toLocaleString('en-US', { month: 'short' });
    const year = now.getUTCFullYear();

    const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`;

    document.getElementById('time').textContent = utcTime;
    document.getElementById('day').textContent = formattedDate;
    document.getElementById('year').textContent = year;
}

updateTime();
setInterval(updateTime, 1000);


function showTab(index) {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((button, idx) => {
        button.classList.remove('active');
        if (idx === index) {
            button.classList.add('active');
        }
    });

    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((content, idx) => {
        content.classList.remove('active');
        if (idx === index) {
            content.classList.add('active');
        }
    });
}

updateTime();
setInterval(updateTime, 1000); // Update every second

// Show the first tab by default
showTab(0);


document.getElementById("year").innerHTML = new Date().getFullYear();