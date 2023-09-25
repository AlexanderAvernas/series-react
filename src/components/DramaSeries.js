import React from "react";
import ApiArray from "./ApiArray";

const ComedySeries = (props) => {
  const {selectedTvShow, setSelectedTvShow} = props;

  return (
    <div>
      <ApiArray setSelectedTvShow={setSelectedTvShow} genre="Drama" serieListName="Drama Series" />
      {selectedTvShow && (
        <div>
        </div>
      )}
    </div>
  );
};

export default ComedySeries;
