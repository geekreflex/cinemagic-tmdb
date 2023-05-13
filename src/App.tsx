import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './views/User';
import Home from './views/Home';
import NewPost from './views/NewPost';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<User />} />
          <Route path="/:name/:post" element={<User />} />
          <Route path="/new" element={<NewPost />} />
        </Routes>
      </Router>
    </div>
  );
}

// @ts-ignore
function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
