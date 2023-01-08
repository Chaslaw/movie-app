import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useState, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { width } from '@mui/system';
import axios from 'axios';
import PaginationComponent from '../../Pagination/PaginationComponent'
import Card from '../../Card/Card'



const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#fff",
    },
  },
});



const Search = () => {

const [type, setType] = useState(0)
const [page, setPage] = useState(1)
const [searchText, setSearchText] = useState('')
const [content, setContent] = useState();
const [numOfPages, setNumOfPages] = useState()

const fetchSearch = async () => {

  const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
    process.env.REACT_APP_API_KEY
  }&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
  
setContent(data.results)
setNumOfPages(data.total_pages)

}

useEffect(() => {
  window.scroll(0, 0);
  fetchSearch()
  
  
 
}, [type, page])


  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{marginTop: '50px', display: 'flex'}}>
        <TextField 
        style={{flex: 1}}
        className='searchBox'
        id="filled-basic" 
        label="Search" 
        variant="filled" 
        onChange={(e) => {
          setSearchText(e.target.value)
         }}
        />
        <Button variant="contained" onClick={fetchSearch}>
          <SearchIcon />
          </Button>

        </div>

        <Tabs value={type} 
              indicatorColor='primary' 
              textColor='primary' 
              onChange={(event, newValue) => {
                setType(newValue)
                
                setPage(1)

        }}>
          <Tab style={{width: '50%'}} label='Search Movies' />
          <Tab style={{width: '50%'}} label='Search Tv Series' />
        </Tabs>
      
    </ThemeProvider>
    <div className="trending">
        {content &&
          content.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <PaginationComponent setPage={setPage} numOfPages={numOfPages} />
      )}
        
    </div>
  )
}

export default Search