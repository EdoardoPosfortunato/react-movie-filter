import { useEffect, useState } from 'react'
import movies from './data/movies.js'
import './App.css'

function App() {

  const [movieList, setmovieList] = useState(movies)
  const [movieListFiltred, setmovieListFiltred] = useState(movieList)
  const [search, setsearch] = useState("")
  const [selectedType, setselectedtype] = useState("")

  const handleInputChange = (event) => {
    setsearch(event.target.value)
  }

  useEffect(() => {
    const filterListMovie = movieList.filter((curMovie) =>
      curMovie.title.includes(search)
    )
    setmovieListFiltred(filterListMovie)

  }, [search])


    useEffect(() => {
    const filterGenere= movieList.filter((curMovie) =>
      selectedType === "tutti" ||
      selectedType === curMovie.genre
    )
    setmovieListFiltred(filterGenere)

  }, [selectedType])


  const generiTot = movies.map((curMovie) => 
    curMovie.genre)

  const setUnicodiGenere = ["tutti", ...new Set (generiTot)]


  return (
    <>
      <input
        value={search}
        onChange={handleInputChange}
        type="text" />
      <ul>
        {movieListFiltred.map((currMovie, index) =>
          <li
            key={index}
          >{currMovie.title}</li>
        )
        }
        <select 
        value={selectedType}
        onChange={(event) => setselectedtype(event.target.value)}>
          {setUnicodiGenere.map((curGenere, index) => (
            <option 
           key={index} 
           value={curGenere}>
            {curGenere}
           </option>
          ))}


        </select>
      </ul>
    </>
  )
}

export default App
