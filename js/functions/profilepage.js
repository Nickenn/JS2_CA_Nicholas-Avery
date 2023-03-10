import { singlePostProfile, profileParams, profilePostsURL } from "../components/api_endpoint_variables.js";
//import { createProfileHTML } 

const accessToken = localStorage.getItem("accessToken");

export async function fetchUserProfile() {
    try {
        const profileName = localStorage.getItem("profileName");
        const 
        const fetchProfile = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const response = await fetch();
        const json = await response.json();
        console.log(json);


    } catch(error) {
        console.log(error);
    }
}


