import React from "react";
import ApiArray from "./ApiArray";

const ComedySeries = (props) => {
  const {selectedTvShow, setSelectedTvShow} = props;

  return (
    <div>
      <ApiArray setSelectedTvShow={setSelectedTvShow} genre="Action" serieListName="Action Series" />
      {selectedTvShow && (
        <div>
        </div>
      )}
    </div>
  );
};

export default ComedySeries;
