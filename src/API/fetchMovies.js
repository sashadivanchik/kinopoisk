export const fetchMovies = (url, func) => {
    fetch(url)
        .then(response => response.json())
        .then(data => func(data))
        .catch(err => console.log(err, 'error'));
};
