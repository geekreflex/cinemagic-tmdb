import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io('http://localhost:8080');
    setSocket(socket);

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    // Listen for custom events from the server
    socket.on('message', (data: string) => {
      console.log('Received message:', data);
    });

    // Emit a custom event to the server
    socket.emit('join', 'room1');

    // Clean up the event listeners on component unmount
    return () => {
      socket.off('message');
    };
  }, [socket]);
  return (
    <>
      <h1>Hyve Playground - Web</h1>
    </>
  );
}

export default App;
