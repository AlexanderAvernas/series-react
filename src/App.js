// import './App.css';
// import ApiArray from './components/ApiArray'
// import Apinfo from './components/Apinfo'
// import SearchApi from './components/SearchApi'
// import Navbar from './components/Navbar'
// import HeroSlide from './components/HeroSlide'
// import DisplayShow from './components/DisplayShow'

// function App() {
//   return (
//     <div>
//         <HeroSlide/>
//         <ApiArray/>
//         <Navbar/>
//         <SearchApi/>
//         <Apinfo/>
//         <DisplayShow/>

//     </div>
//   );
// }

// export default App;

import './App.css';
import React, { useState } from 'react';
import ApiArray from './components/ApiArray'
// import Apinfo from './components/Apinfo'
// import SearchApi from './components/SearchApi'
import Navbar from './components/Navbar'
import HeroSlide from './components/HeroSlide'
import DisplayShow from './components/DisplayShow'
import ComedySeries from './components/ComedySeries'

function App() {
    const [selectedTvShow, setSelectedTvShow] = useState(null);

    return (
      <div>
          <HeroSlide/>
          <ApiArray setSelectedTvShow={setSelectedTvShow} serieListName='All'/>
          {/* <Navbar/> */}
          {/* <SearchApi/>
          <Apinfo/> */}
          {selectedTvShow ? <DisplayShow selectedTvShow={selectedTvShow}/> : null}
          <ComedySeries selectedTvShow={selectedTvShow} setSelectedTvShow={setSelectedTvShow} serieListName='Comedy Series'/>

      </div>
    );
  }

  export default App;
