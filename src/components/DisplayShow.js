import React from 'react';
import ApiArray from './ApiArray'

const SelectedTvShow = (props) => {
  const { selectedTvShow } = props;
  return (
    <div>
      {/* <ApiArray tvShow={selectedTvShow} /> */}
      <h1>{selectedTvShow.name}</h1>
      <p>{selectedTvShow.summary}</p>
      {selectedTvShow.image ?  <img src={selectedTvShow.image.medium} alt={selectedTvShow.name} /> : null}
      {/* <h1>{selectedTvShow.language}</h1>
      <h1>{selectedTvShow.genres}</h1>
      <h1>[selectedTvShow.rating]</h1> */}
    </div>
  )
}

export default SelectedTvShow;
