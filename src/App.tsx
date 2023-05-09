import { styled } from 'styled-components';
import Post from './components/Post';
import PostList from './components/PostList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthUser from './components/AuthUser';
import CreatePost from './views/CreatePost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostList />,
  },
  {
    path: '/new',
    element: <CreatePost />,
  },
  {
    path: '/posts/:slug',
    element: <Post />,
  },
]);

function App() {
  return (
    <div>
      <Container>
        <AuthUser />
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

// @ts-ignore
function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 20px;
`;

export default App;
