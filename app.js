function getTime() {

    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    document.getElementById("clock").textContent =
        hour + ":" + minute + ":" + second

}

setInterval(getTime, 1000);

getTime();
function getTime2() {

    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    document.querySelector(".clock2").textContent =
        hour + ":" + minute + ":" + second

}

setInterval(getTime, 1000);

getTime2();



navigator.getBattery().then(function(battery) {

    function updateBattery() {
        let percent = Math.round(battery.level * 100);

        document.getElementById("battery").textContent = percent + "%";
        if(percent<50){
        document.getElementById("battery").textContent = "🪫" +percent + "%"  ;
        }else{
            document.getElementById("battery").textContent =  "🔋" + percent + "%" ;
        
        }
    }

    updateBattery();

    battery.addEventListener("levelchange", updateBattery);

});



function getDate() {
    let now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    document.getElementById("date").textContent =
        year + "/" + month + "/" + day;
}

getDate();
function getDate2() {
    let now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    document.querySelector(".date2").textContent =
        year + "/" + month + "/" + day;
}

getDate2();


let volume = document.getElementById("volume");
let volumeBox = document.getElementById("volume-box");
let volumeValue = document.getElementById("volume-value");

let vv = document.getElementById("i5");
let vw = document.getElementById("i3");

volume.addEventListener("input", function() {

    volumeValue.textContent = volume.value + "%";

    if (volume.value > 0) {
        vv.style.visibility = "visible";
        vw.style.visibility = "hidden";
    } else {
        vv.style.visibility = "hidden";
        vw.style.visibility = "visible";
    }

});



document.querySelector("#i1").addEventListener("click", function() {
    document.querySelector("#volume-box").style.visibility = "visible";
});



document.querySelector("#i1").addEventListener("dblclick", function() {
    document.querySelector("#volume-box").style.visibility = "hidden";
            vw.style.visibility = "hidden";
            vv.style.visibility = "hidden";

});



document.addEventListener("DOMContentLoaded", function() {

    Swal.fire({

        title: "Welcome To Amir OS",


        icon: "info",

        confirmButtonText:"Thanks",

        confirmButtonColor: "black",

        timer: 5000,


    });

});


document.querySelector("#search").addEventListener('focus', function serch1() {
document.querySelector("#g").style.visibility="visible"
document.querySelector("#c").style.visibility="hidden"
})
document.querySelector("#search").addEventListener('mouseleave', function serch() {
    document.querySelector("#g").style.visibility="hidden"
    document.querySelector("#c").style.visibility="visible"
})


document.querySelector("#wifi").addEventListener('click', function serch1() {
        Swal.fire({

        title: "Wifi On",


        icon: "success",

        confirmButtonText:"OK",

        confirmButtonColor: "green",

        timer: 5000,


    });

})



let startBtn = document.getElementById("logom");
let startMenu = document.getElementById("start-menu");

startBtn.addEventListener("click", function() {
    startMenu.classList.toggle("active");
});

document.addEventListener("click", function(event) {

    if (
        !startMenu.contains(event.target) &&
        !startBtn.contains(event.target)
    ) {
        startMenu.classList.remove("active");
    }

});

document.querySelector(".emoji2").addEventListener("click", function() {

    Swal.fire({
        title: "ShutDown System",
        text: "Are you sure you want to shut down?",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "green",
        showCancelButton: true,
        cancelButtonText: "Cancel"


    });
        window.close();
});



// بستن ساعت
document.getElementById("close-clock").addEventListener("click", function() {

    document.getElementById("clock-app").style.visibility = "hidden";

});

// باز کردن ساعت
document.querySelector("#app-icon2").addEventListener("click", function() {

    document.getElementById("clock-app").style.visibility = "visible";

});




let musicFile = document.getElementById("music-file");

let audio = new Audio();

let playBtn = document.getElementById("play-music");
let progress = document.getElementById("music-progress");

let currentTime = document.getElementById("current-time");
let duration = document.getElementById("duration");

let musicName = document.getElementById("music-name");

let musicList = [];
let musicIndex = 0;


// انتخاب آهنگ ها
musicFile.addEventListener("change", function() {

    musicList = Array.from(musicFile.files);

    musicIndex = 0;

    loadMusic();

});


// بارگذاری آهنگ
function loadMusic() {

    if (musicList.length === 0) return;

    audio.src = URL.createObjectURL(musicList[musicIndex]);

    musicName.textContent = musicList[musicIndex].name;

    audio.load();

    audio.play();

    playBtn.textContent = "⏸";

}


// پخش و توقف
playBtn.addEventListener("click", function() {

    if (!audio.src) return;

    if (audio.paused) {

        audio.play();

        playBtn.textContent = "⏸";

    } else {

        audio.pause();

        playBtn.textContent = "▶";

    }

});


// تغییر زمان آهنگ
audio.addEventListener("timeupdate", function() {

    if (!audio.duration) return;

    progress.value = (audio.currentTime / audio.duration) * 100;

    currentTime.textContent = formatTime(audio.currentTime);

});


// نمایش مدت آهنگ
audio.addEventListener("loadedmetadata", function() {

    duration.textContent = formatTime(audio.duration);

});


// تغییر موقعیت آهنگ
progress.addEventListener("input", function() {

    if (!audio.duration) return;

    audio.currentTime = (progress.value / 100) * audio.duration;

});


// تبدیل ثانیه به دقیقه
function formatTime(seconds) {

    if (!Number.isFinite(seconds)) return "00:00";

    let min = Math.floor(seconds / 60);

    let sec = Math.floor(seconds % 60);

    return String(min).padStart(2, "0") + ":" +
           String(sec).padStart(2, "0");

}


// پخش خودکار آهنگ بعدی
audio.addEventListener("ended", function() {

    document.getElementById("next-music").click();

});


// بستن برنامه
document.getElementById("close-music").addEventListener("click", function() {

    document.getElementById("music-app").style.visibility = "hidden";

});


// باز کردن برنامه از آیکون دسکتاپ
document.querySelector("#app-icon-music").addEventListener("click", function() {

    document.getElementById("music-app").style.visibility = "visible";

});

    
let noteText = document.getElementById("note-text");

let wordCount = document.getElementById("word-count");
let charCount = document.getElementById("char-count");


// شمارش کلمات و کاراکترها
noteText.addEventListener("input", function() {

    let text = noteText.value;

    let words = text.trim().length === 0
        ? 0
        : text.trim().split(/\s+/).length;

    wordCount.textContent = words + " کلمه";

    charCount.textContent = text.length + " کاراکتر";

});


// ایجاد یادداشت جدید
document.getElementById("new-note").addEventListener("click", function() {

    Swal.fire({
        title: "یادداشت جدید",
        text: "متن فعلی پاک شود؟",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "بله",
        cancelButtonText: "لغو"
    }).then(function(result) {

        if (result.isConfirmed) {

            noteText.value = "";

            noteText.dispatchEvent(new Event("input"));

        }

    });

});


// ذخیره فایل
document.getElementById("save-note").addEventListener("click", function() {

    let blob = new Blob(
        [noteText.value],
        { type: "text/plain;charset=utf-8" }
    );

    let url = URL.createObjectURL(blob);

    let link = document.createElement("a");

    link.href = url;
    link.download = "My-Note.txt";

    link.click();

    URL.revokeObjectURL(url);

});


// باز کردن فایل
document.getElementById("open-note").addEventListener("click", function() {

    document.getElementById("note-file").click();

});


document.getElementById("note-file").addEventListener("change", function() {

    let file = this.files[0];

    if (!file) return;

    let reader = new FileReader();

    reader.onload = function() {

        noteText.value = reader.result;

        noteText.dispatchEvent(new Event("input"));

    };

    reader.readAsText(file);

});


// بستن برنامه
document.getElementById("close-notepad").addEventListener("click", function() {

    document.getElementById("notepad-app").style.visibility = "hidden";

});


// باز کردن از دسکتاپ
document.querySelector("#app-icon-notepad").addEventListener("click", function() {

    document.getElementById("notepad-app").style.visibility = "visible";

});


let browserFrame = document.getElementById("browser-frame");
let browserURL = document.getElementById("browser-url");
let browserHome = document.getElementById("browser-homepage");

let browserHistory = [];
let historyIndex = -1;


// رفتن به سایت
function openWebsite() {

    let address = browserURL.value.trim();

    if (address === "") return;

    // اگر آدرس سایت نبود، جستجو کن
    if (!address.includes(".") || address.includes(" ")) {
        address = "https://www.google.com/search?q=" +
                  encodeURIComponent(address);
    }

    // اضافه کردن https
    else if (!address.startsWith("http://") &&
             !address.startsWith("https://")) {

        address = "https://" + address;
    }

    browserHistory = browserHistory.slice(0, historyIndex + 1);

    browserHistory.push(address);

    historyIndex++;

    loadWebsite(address);
}


// نمایش سایت
function loadWebsite(address) {

    browserURL.value = address;

    browserHome.style.display = "none";

    browserFrame.style.display = "block";

    browserFrame.src = address;
}


// دکمه رفتن
document.getElementById("browser-go").addEventListener("click", function() {
    openWebsite();
});


// جستجو با Enter
browserURL.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        openWebsite();
    }

});


// برگشت
document.getElementById("browser-back").addEventListener("click", function() {

    if (historyIndex > 0) {

        historyIndex--;

        loadWebsite(browserHistory[historyIndex]);

    }

});


// جلو رفتن
document.getElementById("browser-forward").addEventListener("click", function() {

    if (historyIndex < browserHistory.length - 1) {

        historyIndex++;

        loadWebsite(browserHistory[historyIndex]);

    }

});


// رفرش
document.getElementById("browser-refresh").addEventListener("click", function() {

    browserFrame.contentWindow.location.reload();

});


// صفحه خانه
document.getElementById("browser-home").addEventListener("click", function() {

    browserURL.value = "";

    browserFrame.src = "about:blank";

    browserFrame.style.display = "none";

    browserHome.style.display = "flex";

});


// بستن مرورگر
document.getElementById("close-browser").addEventListener("click", function() {

    document.getElementById("browser-app").style.visibility = "hidden";

});


// باز کردن مرورگر از دسکتاپ
document.querySelector("#app-icon-browser").addEventListener("click", function() {

    document.getElementById("browser-app").style.visibility = "visible";

});

