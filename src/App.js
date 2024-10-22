
import { Container } from "@mui/system";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./components/Pages/Trending/Trending";
import Movies from "./components/Pages/Movies/Movies";
import Series from "./components/Pages/Series/Series";
import Search from './components/Pages/Search/Search'
import './App.css'


function App() {
  return (
    <Router >
      <Header />
      <div className="app">
        <Container >
        <Routes>
          <Route exact path="/" element={< Trending />}></Route>
          <Route exact path="/movies" element={< Trending />}></Route>
          <Route exact path="/series" element={< Series />}></Route>
          <Route exact path="/search" element={< Search/>}></Route>
        </Routes>
        </Container>
        <SimpleBottomNavigation />

      </div>

    </Router>
  );
}

export default App;
