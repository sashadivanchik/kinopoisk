export const fetchMovies = (url, type, func) => {  
    fetch(url)
        .then(response => {
            try {
                const parseResponce = response.json();
                return parseResponce;
            } catch (error) {
                console.error(error);
            }
        })
            .then(data => func(type, data))
            .catch(err => console.error(err, 'error'));
};
