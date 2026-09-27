const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");


// =========================
// ハンバーガーメニュー
// =========================

menuButton.addEventListener("click", function () {
    menu.classList.toggle("open");
});


// =========================
// NキーでHOMEへ
// =========================

document.addEventListener("keydown", function (event) {

    if (event.key.toLowerCase() === "n") {
        window.location.href = "Webサイト.html";
    }

});


// =========================
// HISTORY スクロール表示
// =========================

const timelineItems = document.querySelectorAll(".timeline-item");


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


timelineItems.forEach(function (item) {

    observer.observe(item);

});
/* =========================
   HOME HERO SCROLL
   ========================= */

const hero = document.querySelector(".hero");

if (hero) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {
            hero.classList.add("scrolled");
        } else {
            hero.classList.remove("scrolled");
        }

    });

}
/* =========================
   PERFORMANCE LYRICS
   ========================= */

const songItems = document.querySelectorAll(".song-item");

songItems.forEach(function (song) {
    song.addEventListener("click", function () {

        const lyricsBoard = song.nextElementSibling;

        if (lyricsBoard.classList.contains("open")) {

            // 閉じる
            lyricsBoard.style.maxHeight = null;
            lyricsBoard.classList.remove("open");
            song.classList.remove("active");

        } else {

            // 開く
            lyricsBoard.classList.add("open");
            lyricsBoard.style.maxHeight =
                lyricsBoard.scrollHeight + "px";

            song.classList.add("active");
        }
    });
});