import axios from "axios";


// console.log(axios.create())
const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
});

// instance.get("https://api.themoviedb.org/3/movies/top_rated");

// https://api.themoviedb.org/3/movies/top_rated


export default instance;