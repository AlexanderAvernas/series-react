// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const SearchApi = () => {
//     const [tvShow, setTvShow] = useState([])
//     const [query, setQuery] = useState('Arrow')

//     const handleSubmit = (evt) => {
//         evt.preventDefault()
//         setQuery(evt.target.value)
//     }

//     useEffect(() => {
//         axios
//             .get(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
//             .then((response) => setTvShow(response.data))
//     }, [query])
//     console.log(tvShow)

//     if (!tvShow) return <div>Loading...</div>

//     return (
//         <div>
//             <h1>Serach yoyr serie</h1>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="query"
//                     value={query}
//                     onChange={(evt) => setQuery(evt.target.value)}
//                 />
//                 <button>Search</button>
//             </form>
//             <div>
//                 <h1>{tvShow.name}</h1>
//                 {tvShow.image ? (
//                     <img src={tvShow.image.medium} alt={tvShow.name} />
//                 ) : null}
//                 <p>{tvShow.summary}</p>
//                 <h1>{tvShow.language}</h1>
//                 <h1>{tvShow.genres}</h1>
//                 <h1>[tvShow.rating]</h1>
//             </div>
//         </div>
//     )
// }

// export default SearchApi
