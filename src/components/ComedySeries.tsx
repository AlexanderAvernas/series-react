import React from "react";
import ApiArray from "./ApiArray";

interface ComedyProps  {
    genre: string,
    serieListName: string,
    selectedTvShow: object,
    setSelectedTvShow: object

 }

const ComedySeries = (props: ComedyProps) => {
  const {selectedTvShow, setSelectedTvShow} = props;

  return (
    <div>
      <ApiArray setSelectedTvShow={setSelectedTvShow} genre="Comedy" serieListName="Comedy Series" />
      {selectedTvShow && (
        <div>
        </div>
      )}
    </div>
  );
};

export default ComedySeries;
