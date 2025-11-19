/* ==============================
      FLIP CLOCK
============================== */
const flipClock = document.getElementById("flipClock");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("clockDate");

function pad(n) {
    return n.toString().padStart(2, "0");
}

function updateClock() {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    const timeStr = `${pad(h)}:${pad(m)}:${pad(s)}`;

    // Fill flip digits
    flipClock.innerHTML = "";
    timeStr.split("").forEach(ch => {
        const d = document.createElement("div");
        d.className = "flip-digit";
        d.textContent = ch;
        flipClock.append(d);
    });

    ampmEl.textContent = ampm;

    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    dateEl.textContent =
        `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()} ${now.getFullYear()}`;
}

setInterval(updateClock, 1000);
updateClock();

/* ==============================
     VOICE ANNOUNCEMENT
============================== */
document.getElementById("speakTime").onclick = () => {
    let text = `The time is ${dateEl.textContent} 
    ${flipClock.textContent}`;
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    window.speechSynthesis.speak(speech);
};

/* ==============================
            ALARM
============================== */
const alarmInput = document.getElementById("alarmTime");
const alarmStatus = document.getElementById("alarmStatus");
const alarmSound = document.getElementById("alarmSound");
let alarmTime = null;

document.getElementById("setAlarm").onclick = () => {
    alarmTime = alarmInput.value;
    alarmStatus.textContent = "Alarm set for " + alarmTime;
};

setInterval(() => {
    const now = new Date();
    const current = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

    if (alarmTime === current) {
        alarmSound.play();
        alarmStatus.textContent = "⏰ Alarm Ringing!";
    }
}, 1000);

/* ==============================
          STOPWATCH
============================== */
let swInterval, swSeconds = 0;
const swDisplay = document.getElementById("swDisplay");

function updateStopwatch() {
    let hrs = Math.floor(swSeconds / 3600);
    let mins = Math.floor((swSeconds % 3600) / 60);
    let secs = swSeconds % 60;

    swDisplay.textContent =
        `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

document.getElementById("swStart").onclick = () => {
    if (!swInterval) {
        swInterval = setInterval(() => {
            swSeconds++;
            updateStopwatch();
        }, 1000);
    }
};
document.getElementById("swStop").onclick = () => {
    clearInterval(swInterval);
    swInterval = null;
};
document.getElementById("swReset").onclick = () => {
    swSeconds = 0;
    updateStopwatch();
};

/* ==============================
              TIMER
============================== */
let timerInterval;
document.getElementById("timerStart").onclick = () => {
    let t = Number(document.getElementById("timerInput").value);
    const disp = document.getElementById("timerDisplay");

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (t <= 0) {
            clearInterval(timerInterval);
            disp.textContent = "Finished!";
            return;
        }
        let min = Math.floor(t / 60);
        let sec = t % 60;
        disp.textContent = `${pad(min)}:${pad(sec)}`;
        t--;
    }, 1000);
};

document.getElementById("timerStop").onclick = () => {
    clearInterval(timerInterval);
};

/* ==============================
           WORLD CLOCK
============================== */
function updateWorldClock() {
    const city = document.getElementById("citySelect").value;
    const world = new Date().toLocaleString("en-US", { timeZone: city });
    document.getElementById("worldTime").textContent =
        new Date(world).toLocaleTimeString();
}
setInterval(updateWorldClock, 1000);
updateWorldClock();

/* ==============================
         TAB SWITCHING
============================== */
const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.onclick = () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        tabContent.forEach(c =>
            c.classList.remove("active")
        );
        document.getElementById(tab.dataset.tab).classList.add("active");
    };
});

/* ==============================
         THEME SWITCH
============================== */
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark");
    document.getElementById("themeToggle").textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
};

/* Background themes */
document.getElementById("themeSelect").onchange = (e) => {
    document.body.className = e.target.value;
};

/* ==============================
         FULLSCREEN MODE
============================== */
document.getElementById("fullscreenBtn").onclick = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
};
