export const fetchMovies = (url, func) => {  
    fetch(url)
        .then(response => {
            try {
                const parseResponce = response.json();
                return parseResponce;
            } catch (error) {
                console.error(error);
            }
        })
            .then(data => func(data))
            .catch(err => console.error(err, 'error'));
};
