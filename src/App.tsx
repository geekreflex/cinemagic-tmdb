import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Dynamic from './views/Dynamic';
import NotFound from './views/404';
import Search from './views/Search';
import MovieInfo from './views/MovieInfo';
import Layout from './components/Layout';
import TvShows from './views/TvShows';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/movies/:movie" element={<Dynamic />} />
          <Route path="/movie/:movieId" element={<MovieInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
