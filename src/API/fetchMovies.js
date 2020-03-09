export const fetchMovies = (url) => (
    fetch(url)
        .then(response => {
            try {
                const parseResponce = response.json();
                return parseResponce;
            } catch (error) {
                console.error(error);
            }
        })
        .catch(err => console.error(err, 'error'))
);
