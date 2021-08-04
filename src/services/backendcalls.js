import http from "./httpservice";
import { config } from "../config"

const apiEndpoint = config.apiEndpoint;

export async function getUserHistory() {
    return await http.get(apiEndpoint + "/me/history")
}

export async function getSensorLastData() {
    return await http.get(apiEndpoint + '/sensor/node/ss/last/all')
}

export async function getSensorList() {
    return await http.get(apiEndpoint + '/sensor/details/polmo/1.0')
}