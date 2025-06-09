import { useEffect, useState } from 'react'
import movies from './data/movies.js'
import './App.css'

function App() {

  const [movieList, setmovieList] = useState(movies)
  const [movieListFiltred, setmovieListFiltred] = useState(movieList)
  const [search, setsearch] = useState("")

  const handleInputChange = (event) => {
    setsearch(event.target.value)
  }

  useEffect(() => {
    const filterListMovie = movieList.filter((curMovie) =>
      curMovie.title.includes(search)
    )
    console.log(filterListMovie)
    setmovieListFiltred(filterListMovie)

  }, [search])



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
      </ul>
    </>
  )
}

export default App
