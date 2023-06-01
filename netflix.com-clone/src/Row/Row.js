import React, { useEffect, useRef, useState } from 'react';
import './Row.css';
import axios from '../axios';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({title, fetchUrl, isLargeRow, arrow}) {
    const [ movies, setMovies ] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [isMoved, setIsMoved] = useState(false)
    // const rowRef = useRef(nul);

    useEffect(() => {
      async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [ fetchUrl ]);
    // console.log(movies);

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };
    const handleClick = (movie) => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        movieTrailer(movie?.original_name || movie?.title || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.log(error));
      }
    };

    // const handleMove = (direction) => {
    //   setIsMoved(true);
    //   if(rowRef.current){
    //     const {scrollLeft, clientWidth} = rowRef.current
    //   const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    //     rowRef.current.scrollTo;
    // }
    // }

	  // console.log(trailerUrl)
  return (
    <div className='row'>
      <h1>{title}</h1>

      <div className="row__posters">
            {/* <ArrowBackIosNewIcon onClick={() => handleMove('left')}  className={`backwardIcon ${arrow && "row_large"}`}/> */}

            {movies.map((movie, i) =>   (
              <img onClick={() => handleClick(movie)}
            key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name} />
          ))}
            {/* <ArrowForwardIosIcon className={`forwardIcon ${arrow && "row_large"}`}/> */}

      </div>

      <div className="row__youtube">
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
			</div>
      
    </div>
    
  )
}

export default Row;
