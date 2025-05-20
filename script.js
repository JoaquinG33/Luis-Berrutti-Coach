
//DARK/LIGHT MODE
const modeSwitch = document.getElementById("modeSwitch");

let lightMode = localStorage.getItem("lightMode") === "enabled";

const enableLightmode = () => {
    document.body.classList.add("lightMode");
    localStorage.setItem("lightMode", "enabled");
}

const disableLightmode = () => {
    document.body.classList.remove("lightMode");
    localStorage.setItem("lightMode", "disabled");
}


if (lightMode) enableLightmode();

modeSwitch.addEventListener("click", () => {
    lightMode = !lightMode;
    lightMode ? enableLightmode() : disableLightmode();
});
