require('dotenv').config();
const axios = require('axios').default;
const movieId = "tt0080684";

module.exports = async function() {

    try {
        const movie =
            await axios.get("https://omdbapi.com/?i=" + movieId + "&apiKey=" + process.env.MOVIE_API_KEY);
        return movie.data;

    } catch (error) {
        console.error(error);

    }

};
