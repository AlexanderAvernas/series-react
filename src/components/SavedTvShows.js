import React from "react";

function SavedTvShows(props) {
  const { savedTvShows } = props;

  return (
    <div>
      <h1>Saved TV Shows</h1>
      {savedTvShows.length > 0 ? (
        <ul>
          {savedTvShows.map((tvShow) => (
            <li key={tvShow.id}>{tvShow.name} {tvShow.image ? (
                <img
                    src={tvShow.image.medium}
                    alt={tvShow.name}
                />
            ) : null}</li>
          ))}
        </ul>
      ) : (
        <p>No saved TV shows.</p>
      )}
    </div>
  );
}

export default SavedTvShows;
