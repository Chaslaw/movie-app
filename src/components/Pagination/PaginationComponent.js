import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const PaginationComponent = ({ setPagination, numOfPages }) => {

  const handlePage = (page) => {
    setPagination(page)
    window.scroll(0, 0)
  }

  return (
    <div className='pagination'>
      <ThemeProvider theme={darkTheme}>
        <Stack spacing={2}>
          <Pagination onChange={(e) => handlePage(e.target.textContent)}
            count={numOfPages}
            hideNextButton
            hidePrevButton
            />
        </Stack>
      </ThemeProvider>
    </div>
  )
}

export default PaginationComponent