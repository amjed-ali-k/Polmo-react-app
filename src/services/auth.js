import http from "./httpservice";
import {apiUrl} from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl;
const user = getUser();
export async function login(username, password) {
    var bodyFormData = new FormData();
    bodyFormData.append('username', username);
    bodyFormData.append('password', password);
    return await http.post(apiEndpoint + "/token", bodyFormData );
}

export async function register(payload){
    return await http.post(apiEndpoint + "/users/new", payload)
}

export function getUser(){
    try {
        console.log('Called!');
        const jwt = localStorage.getItem("token");
        return jwtDecode(jwt);
    } catch (er) {
        console.log("USER NOT LOGGED IN");
    }
}

export async function refreshtoken(password){
    const {data} = await login(user.username, password);
    localStorage.setItem('token', data.access_token);
    return getUser();
}

export function currentuser(){
    return user
}