import './App.css'
import React from 'react'

import Navbar from './components/Navbar'
import { UserContext } from './UserContext/UserContext'
// import SavedTvShows from './components/SavedTvShows'

function App() {
    // const [selectedTvShow, setSelectedTvShow] = useState(null);
    // const [savedTvShows, setSavedTvShows] = useState([])


    return (
        <div>
            <UserContext.Provider value={ 'hej'}>
                <Navbar />
            </UserContext.Provider>
        </div>
    )
}

export default App
