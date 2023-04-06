
// import React from 'react'
// import ApiArray from './ApiArray'

// const ComedySeries = (props) => {
//     const { selectedTvShow, setSelectedTvShow, serieListName} = props;
//     console.log(serieListName);
//     return (
//       <div>
//         <div className='serielistname-container'>
//         <h1>{serieListName}</h1>
//         </div>
//         <ApiArray tvShow={selectedTvShow} setSelectedTvShow={setSelectedTvShow}/>
//       </div>
//     )
//   }
// export default ComedySeries

import React, { useState } from "react";
import ApiArray from "./ApiArray";

const ComedySeries = () => {
  const [selectedTvShow, setSelectedTvShow, serieListName] = useState(null);

  return (
    <div>
      <ApiArray setSelectedTvShow={setSelectedTvShow} genre="Comedy" serieListName="Comedy Series" />
      {selectedTvShow && (
        <div>
          <h1>{selectedTvShow.name}</h1>
          <p>{selectedTvShow.summary}</p>
        </div>
      )}
    </div>
  );
};

export default ComedySeries;
