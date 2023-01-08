import React, { useEffect } from 'react'
import axios from 'axios'
import { Chip } from '@material-ui/core'

const Genres = ({ selectGenres, type, genres, setGenres, setSelectedGenres, setPagination }) => {

    const handleAddGenre = (genre) => {

        setSelectedGenres([...selectGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPagination(1);
    }

    const handleDeleteGenre = (genre) => {
        setSelectedGenres(selectGenres.filter((slc) => slc.id !== genre.id));

        setGenres([...genres, genre]);
        setPagination(1);
    }

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        setGenres(data.genres)
    }

    useEffect(() => {
        fetchGenres()

        return () => {
            setGenres([])
        }
    }, [])

    return (

        <div style={{padding: '5px'}}>
            {selectGenres && selectGenres.map((genre) => (
                 <Chip label={genre.name}
                 style={{margin: '2px'}}
                 clickable
                 size='small'
                 key={genre.id}
                 color='primary'
                 id={genre.id}
                 onDelete={() => handleDeleteGenre(genre)}
                 />
            ))}
          
            {genres && genres.map((genre) => (
                 <Chip label={genre.name}
                 style={{margin: '2px'}}
                 clickable
                 size='small'
                 key={genre.id}
                 id={genre.id}
                 onClick={() => handleAddGenre(genre)}
                 />
                 
            ))}
          
        </div>
    )
}

export default Genres