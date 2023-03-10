import { fetchPostsWithToken } from "./functions/index.js";
import { logOutUser } from "./functions/logout.js";

fetchPostsWithToken();
logOutUser();

const accessToken = localStorage.getItem("accessToken");

if (!accessToken) {
    window.location.href = "loginpage.html";
}
