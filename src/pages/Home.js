import React, { useState } from 'react'
import ApiArray from '../components/ApiArray'
import HeroSlide from '../components/HeroSlide'
import DisplayShow from '../components/DisplayShow'
import ComedySeries from '../components/ComedySeries.tsx'
import DramaSeries from '../components/DramaSeries'
import FamilySeries from '../components/FamilySeries'
import ActionSeries from '../components/ActionSeries'
import SavedTvShows from '../components/SavedTvShows'
// import SearchApi from '../components/SearchApi'

function Home() {
    const [selectedTvShow, setSelectedTvShow] = useState(null)
    const [savedTvShows, setSavedTvShows] = useState([])

    const handleSaveTvShow = (tvShow) => {
        setSavedTvShows((prevSavedTvShows) => [...prevSavedTvShows, tvShow])
    }

    return (
        <div>
            <HeroSlide />
            <ApiArray
                setSelectedTvShow={setSelectedTvShow}
                serieListName="All"
            />
            <ComedySeries
                selectedTvShow={selectedTvShow}
                setSelectedTvShow={setSelectedTvShow}
                serieListName="Comedy Series"
            />
            <DramaSeries
                selectedTvShow={selectedTvShow}
                setSelectedTvShow={setSelectedTvShow}
                serieListName="Drama Series"
            />
            <FamilySeries
                selectedTvShow={selectedTvShow}
                setSelectedTvShow={setSelectedTvShow}
                serieListName="Family Series"
            />
            <ActionSeries
                selectedTvShow={selectedTvShow}
                setSelectedTvShow={setSelectedTvShow}
                serieListName="Action Series"
            />
            {selectedTvShow ? (
                <DisplayShow
                    selectedTvShow={selectedTvShow}
                    closeSetSelectedTvShow={() => setSelectedTvShow(null)}
                    onSaveButtonClick={handleSaveTvShow}
                />
            ) : null}
            <SavedTvShows
                className="SavedTvShow-container"
                savedTvShows={savedTvShows}
                setSavedTvShows={setSavedTvShows}
            />
            {/* <SearchApi
                selectedTvShow={selectedTvShow}
                onSaveButtonClick={handleSaveTvShow}
                setSelectedTvShow={setSelectedTvShow}
            /> */}
        </div>
    )
}

export default Home
