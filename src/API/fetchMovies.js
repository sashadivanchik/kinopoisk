export const fetchMovies = (url, func) => {  
    try {
        fetch(url)
        .then(response => response.json())
        .then(data => func(data))
    } catch (error) {
        console.log(error.name)
        console.log(error.message)
    }        
};
