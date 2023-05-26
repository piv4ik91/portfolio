const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1.Проверка темной темы на уровне  системной настройки

if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)"). matches) {
    btnDarkMode.classList.add("dark-mode-btn--activ");
    document.body.classList.add("dark");
}



// 2.Проврка темной темы в local storage

if (localStorage.getItem("darkMode") ==="dark") {
    btnDarkMode.classList.add("dark-mode-btn--activ");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") ==="light"){
    btnDarkMode.classList.remove("dark-mode-btn--activ");
    document.body.classList.remove("dark");
}



//Если меняються системные настройки меняем тему 

window.matchMedia("(prefers-color-scheme:dark)")
    .addEventListener("change", () => {
    const newColorSheme = Event.matches ? "dark" : "light";

    if(newColorSheme === "dark") {
        btnDarkMode.classList.add("dark-mode-btn--activ");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--activ");
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "light");
    }
})

//Включение ночного режима по кнопке

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--activ");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
}
