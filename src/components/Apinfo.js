import React, { useState, useEffect } from "react";
import axios from "axios";

const TVMaze = () => {
  const [tvShow, setTvShow] = useState(null);

  useEffect(() => {
    axios
      .get(`http://api.tvmaze.com/shows/1`)
      .then((response) => setTvShow(response.data));
  }, []);
  console.log(tvShow);

  if (!tvShow) return <div>Loading...</div>;

  return (
    <div>
      <h1>{tvShow.name}</h1>
      <img src={tvShow.image.medium} alt={tvShow.name} />
      <p>{tvShow.summary}</p>
      <h1>{tvShow.language}</h1>
      <h1>{tvShow.genres}</h1>
      <h1>[tvShow.rating]</h1>
    </div>
  );
};

export default TVMaze;
