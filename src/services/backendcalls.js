import http from "./httpservice";
import {apiEndpoint} from "../config";

const node = 'NodeMCU-1.0';

export async function getUserHistory() {
    return await http.get(apiEndpoint + "/me/history")
}

export async function getSensorLastData() {
    return await http.get(apiEndpoint + '/sensor/node/'+ node +'/last/all')
}

export async function getSensorList() {
    return await http.get(apiEndpoint + '/sensor/details/polmo/1.0')
}