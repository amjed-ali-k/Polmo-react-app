import axios from "axios";

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

axios.interceptors.response.use(null, error => {
    const notAuthenticated =
        error.response &&
        error.response.status === 401;

    if(notAuthenticated){
        console.log("Session Time out");
        window.location.href = "/logout"
    }
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedError){
        console.log("Logging the error", error);
        alert("An unexpected XHR error occured.");
    }
    return Promise.reject(error);
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}