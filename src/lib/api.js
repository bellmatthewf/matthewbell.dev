const api = {};

const APP_API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

const headers = {
    "Content-type": "application/json"
};

const options = () => {
    return {
        headers
    };
};

const parseJSON = (response) => {
    console.log("Parsing response");
    console.log(response);
    try {
        return response
            .json()
            .then(json => {
                return Object.assign(json, {
                    ok: response.ok,
                    status: response.status,
                    statusText: response.statusText
                });
            })
            .catch(() => {
                return {
                    ok: response.ok,
                    status: response.status,
                    statusText: response.statusText
                };
            });
    } catch (e) {
        return response;
    }
};

// Why dont we use aync/await
// Why dont we catch errors here
api.get = url => {
    console.log(APP_API_BASE_URL);
    console.log(url);
    const fullURL = APP_API_BASE_URL + url;
    return fetch(fullURL, Object.assign(options(), { method: "GET" }))
        .then(parseJSON)
        .then(api.responseHandler);
};

api.post = (url, data) => {
    const fullURL = APP_API_BASE_URL + url;
    const opts = Object.assign(options(), {
        method: "POST",
        body: JSON.stringify(data)
    });
    return fetch(fullURL, opts)
        .then(parseJSON)
        .then(api.responseHandler);
};

api.responseHandler = (response) => {
    return Promise.resolve(response);
};

export default api;
