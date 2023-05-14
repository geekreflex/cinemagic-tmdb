import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './views/User';
import Home from './views/Home';
import NewPost from './views/NewPost';
import ViewPost from './views/ViewPost';
import Header from './components/Header';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:slug" element={<ViewPost />} />
            <Route path="/:name" element={<User />} />
            <Route path="/new" element={<NewPost />} />
          </Routes>
        </ModalProvider>
      </Router>
    </div>
  );
}

// @ts-ignore
function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
