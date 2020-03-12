export const fetchMovies = (types) => {
    let requests = types.map(
        type => fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=84ecb8320b91dea5c8ff7bc8404b9b0c`)
    );

    return Promise.all(requests)
        .then(responses => Promise.all(responses.map(response => {
            try {
                const parseResponce = response.json();
                return parseResponce;
            } catch (error) {
                console.error(error);
            }
        })))
    };
