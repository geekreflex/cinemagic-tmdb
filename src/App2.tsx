import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import PostList from './components/PostList';
import axios from 'axios';
import { IPost, IUser } from './types';
import { TOKEN } from './utils/token';
import UserList from './components/UserList';
import AuthUser from './components/AuthUser';

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [user, setUser] = useState<IUser>();

  const getPosts = async () => {
    const { data } = await axios.get(`http://localhost:8080/v1/posts`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    setPosts(data.payload.posts.data);
  };

  const getUsers = async () => {
    const { data } = await axios.get(`http://localhost:8080/v1/users`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    setUsers(data.payload.users.data);
  };

  const getUser = async () => {
    const { data } = await axios.get(`http://localhost:8080/v1/users/profile`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    setUser(data.payload.user);
  };

  useEffect(() => {
    getPosts();
    getUsers();
    getUser();
  }, [TOKEN]);

  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io('http://localhost:8080', {
      transports: ['websocket', 'polling', 'flashsocket'],
    });
    setSocket(socket);

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    // Listen for custom events from the server
    // {commentCountUpdated} - updated post
    socket.on(
      'commentCountUpdated',
      (data: { postId: String; updatedCount: number }) => {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === data.postId
              ? { ...post, commentCount: data.updatedCount }
              : post
          )
        );
      }
    );

    socket.on(
      'likeCountUpdated',
      (data: { postId: String; updatedCount: number }) => {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === data.postId
              ? { ...post, likeCount: data.updatedCount }
              : post
          )
        );
      }
    );

    // Clean up the event listeners on component unmount
    return () => {
      socket.off('commentCountUpdated');
    };
  }, [socket]);
  return (
    <>
      <h1>Hyve Playground - Web</h1>
      {user && <AuthUser user={user} />}
      <PostList posts={posts} />
      <UserList users={users} />
    </>
  );
}

export default App;
