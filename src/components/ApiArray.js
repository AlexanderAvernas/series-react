import React, { useState, useEffect } from "react";
import axios from "axios";

const TVMaze = (props) => {
  const { setSelectedTvShow, genre, closeSetSelectedTvShow } = props;
  const [tvShows, setTvShows] = useState([]);




  useEffect(() => {
    axios
      .get(`http://api.tvmaze.com/shows`)
      .then((response) => {
        const filteredShows = genre ? response.data.filter(show => show.genres.includes(genre)) : response.data;
        setTvShows(filteredShows);
      });
  }, [genre]);



  if (!tvShows) return <div>Loading...</div>;

  return (
    <div className="serie-name-container">
      <h1 className="serie-name">{props.serieListName}</h1>
      <div className="serie-container">
        {tvShows.map((tvShow) => (
          <div
            className="card-container"
            key={tvShow.id}
            onClick={() => setSelectedTvShow(tvShow)}
            onClose={() => closeSetSelectedTvShow(tvShow === null)}
          >
            {tvShow.image ? (
              <img src={tvShow.image.medium} alt={tvShow.name} />
            ) : null}
            {/* <h3>{tvShow.name}</h3>
            <p>{tvShow.summary}</p>
            <h1>{tvShow.language}</h1>
            <h1>{tvShow.genres}</h1>
            <h1>[tvShow.rating]</h1> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVMaze;
