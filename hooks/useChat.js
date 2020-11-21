import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';
const SOCKET_SERVER_URL = 'http://localhost:4000';

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      console.log('chec', message);
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    // socketRef.current.on('image', (message) => {
    //   console.logg('chec', message);
    //   // const incomingMessage = {
    //   //   ...message,
    //   //   ownedByCurrentUser: message.senderId === socketRef.current.id,
    //   // };
    //   // setMessages((messages) => [...messages, incomingMessage]);
    // });
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  const sendFile = (file) => {
    console.log(file[0]);
    socketRef.current.emit('image', file[0]);
  };

  return { messages, sendMessage, sendFile };
};

export default useChat;
