import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PaginationComponent from '../../Pagination/PaginationComponent'
import Card from '../../Card/Card'
import Genres from '../../Genres/Genres'
import useGenre from '../../../hooks/useGenre'

const Movies = () => {

  const [pagination, setPagination] = useState(1)
  const [content, setContent] = useState([])
  const [numOfPages, setNumOfPages] = useState()
  const [selectGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([])
  const serialNumber = useGenre(selectGenres)


  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pagination}&with_genres=${serialNumber}`)
    
    setContent(data.results)
    setNumOfPages(data.total_pages)
    
   // &with_watch_monetization_types=flatrate
  }

  useEffect(() => {
    fetchMovies()
    // eslint-disable-next-line

  }, [pagination, serialNumber ])
  
  return (
    <div>
      <span className='pageTitle' > Movies</span>
      <Genres type="movie"  selectGenres={selectGenres} 
                            genres={genres} 
                            setGenres={setGenres} 
                            setSelectedGenres={setSelectedGenres}
                            setPagination={setPagination} />
     
      <div className="trending">
        {content && content.map((el) => (
          <Card key={el.id}
                id={el.id}
                poster={el.poster_path}
                title={el.title || el.name}
                date={el.first_air_date || el.release_date}
                media_type='Movie'
                vote={el.vote_average}
                
                />
        ))}
      </div>
      <PaginationComponent setPagination={setPagination} numOfPages={numOfPages}/>
    </div>
      
  )
}

export default Movies