
//  BASE API URL

export const API_BASE_URL = "https://api.noroff.dev/api/v1/social/";

//  HOME PAGE

/**
 * API endpoint for retrieving posts
 * @param {string} url 
 * ```js
 * postsUrl
 * ```
 */

export const postsUrl = `${API_BASE_URL}posts?_author=true`;


//  USER REGISTRATION PAGE

/**
 * API endpoint for user registration
 * @param {string} registerUrl
 * ```js
 * registerUrl
 * ```
 */

export const registerUrl = `${API_BASE_URL}auth/register`;

//  SINGLE POST PROFILE URL

export const ProfileURL = `${API_BASE_URL}profiles/`;

//  LOGIN PAGE

/**
 * API endpoint for user login
 * @param {string} loginUrl
 * ```js
 * loginUrl
 * ```
 */

export const loginUrl = `${API_BASE_URL}auth/login`;

//  URL PARAMS

export const params = new URLSearchParams(window.location.search);

//export const postsIdUrl = `${API_BASE_URL}posts/${postID}?_author=true`;
export const postsId = params.get("postsId");
export const paramsFilter = params.get("filter");
export const profileParams = params.get("user");
export const profilePostsURL = `${singlePostProfile}${profileParams}/posts?_author=true`;



