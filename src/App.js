import './App.css';
import { useEffect, useState } from 'react';
import { Movie } from './Movie';
import { Filter } from './Filter';

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    // api from https://developers.themoviedb.org/3/movies/get-popular-movies
    const API_KEY = process.env.REACT_APP_IMDB_KEY;
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const movies = await data.json();
    setPopular(movies.results);
  };

  return (
    <div className='App'>
      <Filter />
      <div className='popular-movie'>
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
