let battery = 100;
let alarms = [];

setInterval(() => {
    if (battery > 0) {
        battery--; // FR1
        document.getElementById('bat-level').innerText = battery;
        
        const now = new Date();
        const timeStr = now.getFullYear() + "-" + (now.getMonth()+1) + "-" + now.getDate() + " " +
                        now.toLocaleTimeString('en-GB');
        document.getElementById('time-display').innerText = timeStr;
    } else {
        // FR2
        document.getElementById('clock-screen').style.backgroundColor = "black";
        document.getElementById('time-display').style.visibility = "hidden";
    }
}, 1000);

// FR3 & FR4
function addAlarm() {
    if (alarms.length >= 3) {
        alert("알람은 최대 3개까지만 가능합니다.");
        return;
    }
    
    const h = document.getElementById('h').value.padStart(2, '0');
    const m = document.getElementById('m').value.padStart(2, '0');
    const s = document.getElementById('s').value.padStart(2, '0');
    const newAlarm = `${h}:${m}:${s}`;

    if (h && m && s) { 
        alarms.push(newAlarm);
        renderAlarms(); 
    }
}

// FR5(알람삭제)
function deleteAlarm(index) {
    alarms.splice(index, 1);
    renderAlarms(); 
}

function renderAlarms() {
    const listDiv = document.getElementById('alarm-list');
    listDiv.innerHTML = ""; 

    alarms.forEach((alarm, index) => {
        const item = document.createElement('div');
        item.innerHTML = `⏰ ${alarm} <button onclick="deleteAlarm(${index})" style="margin-left:5px; font-size:10px;">삭제</button>`;
        listDiv.appendChild(item);
    });
}