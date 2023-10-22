export const getData = (url, options = null) => {
    return fetch(url, options ? options : null);
}