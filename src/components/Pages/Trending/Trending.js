import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../Card/Card'
import './Trending.css'
import PaginationComponent from '../../Pagination/PaginationComponent'


const Trending = () => {

  const [pagination, setPagination] = useState(1)
  const [content, setContent] = useState([])
  const [numOfPages, setNumOfPages] = useState()

  const fetchTrending = async () => {
    const { data }  = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pagination}`)
    setContent(data.results)
    setNumOfPages( 10)
}

  useEffect(() => {
    fetchTrending()
  // eslint-disable-next-line

  }, [pagination] )

  return (
    <div>
      <span className='pageTitle'>Trending</span>
      <div className="trending">
        {content && content.map((el) => (
          <Card key={el.id}
                id={el.id}
                poster={el.poster_path}
                title={el.title || el.name}
                date={el.first_air_date || el.release_date}
                media_type={el.media_type}
                vote={el.vote_average}
                />
        ))}
      </div>
      <PaginationComponent setPagination={setPagination} numOfPages={numOfPages}/>
    </div>
  )
}

export default Trending