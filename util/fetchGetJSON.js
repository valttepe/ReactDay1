export default (url, customHeaders = {}) => {
    console.log(url);
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
                console.log('Error' + response.status);
                Promise.reject(null, response.status);
            }
            console.log(response);
            return response.json();
        })
        .catch((error, statusCode) => {
            // Error handling comes here
        });
};