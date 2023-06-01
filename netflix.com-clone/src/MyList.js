import React, { useRef } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function MyList() {
//     const goToMyList = useRef(null);
//     const scrollDown = () => {
//        window.scrollTo({
//     top: aboutSection.current.offsetTop,
//     behavior: 'smooth',
//   });
// };

  return (
      <div className='row'>
      <h1>My List</h1>

      <div className="row__posters">
          
            <ArrowBackIosNewIcon  className='backwardIcon'/>

            {/* {movies.map((movie, i) =>   (
            <img onClick={() => handleClick(movie)}
            key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name} />
          ))} */}
            <ArrowForwardIosIcon className='forwardIcon'/>


      </div>

      <div className="row__youtube">
				{/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
			</div>
      
    </div>
      
  )
}

export default MyList
