import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Netflix from './components/netflix/Netflix';
import GenresList from './components/genres-list/GenresList';
import GenreMovies from './components/genre-movies/GenreMovies';
import Footer from "./components/footer/Footer";
import Movie from './components/movie/Movie';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
                <Route index element={<Netflix />} />
                <Route path="movies/:movieId" element={<Movie />} >
                  </Route>
        </Route>

        <Route path="/genres" element={<Outlet />}>
                <Route index element={<GenresList />} />
                <Route path=":genreId" element={<GenreMovies />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

