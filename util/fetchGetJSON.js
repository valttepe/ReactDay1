export default (url, customHeaders = {}) => {
    const defaultHeaders = {
        Method: 'GET',
        Accept: 'application/json',
        'Content-type': 'application/json'
    };
    const headers = {
        ...defaultHeaders,
        ...customHeaders,
    };
    return fetch(url, headers)
        .then((response) => {
            if (response.status >= 400) {
                Promise.reject(null, response.status);
            }
            return response.json();
        })
        .catch((error, statusCode) => {
            // Error handling comes here
        });
};