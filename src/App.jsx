import { useEffect, useState } from 'react'
import movies from './data/movies.js'
import './App.css'

function App() {

  const [movieList, setmovieList] = useState(movies)
  const [search, setsearch] = useState("")

  const handleInputChange = (event) => {
    setsearch(event.target.value)
  }
  useEffect(() => {
    const filterListMovie = movies.filter((curMovie) =>
      curMovie.title.includes(search)
    )
    console.log(filterListMovie)
    setmovieList(filterListMovie)

  }, [search])



  return (
    <>
      <input
        value={search}
        onChange={handleInputChange}
        type="text" />
      <ul>
        {movieList.map((currMovie, index) =>
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
