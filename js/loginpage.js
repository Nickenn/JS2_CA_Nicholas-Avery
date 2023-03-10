import { setUserLogin } from "./functions/loginpage.js";

setUserLogin();

const accessToken = localStorage.getItem("accessToken");

if (accessToken) {
    window.location.href = "index.html";
}

