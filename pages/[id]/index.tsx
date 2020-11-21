import React from 'react';
import { useRouter } from 'next/router';
import Styled from 'styled-components';
import Flex from './../../components/Flex';
import useChat from '../../hooks/useChat';

const Container = Styled.div`
position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    margin: 16px;
    

     > div > div {
      
       > .message-item {
        width: 55%;
        margin: 8px;
        padding: 12px 8px;
        word-break: break-word;
        border-radius: 4px;
        color: white;
         
       }
       .my-message {
        background-color: rgb(0, 132, 255);
        margin-left: auto;
    }
    
    .received-message {
        background-color: #3f4042;
        margin-right: auto;
    }
    > .send-message-button {
      font-size: 28px;
      font-weight: 600;
      color: white;
      background: #31a24c;
      padding: 24px 12px;
      border: none;
  }
  
  .messages-container, .new-message-input-field, .send-message-button {
      border-color: #9a9a9a;
  }
     }
    
    `;

const TextArea = Styled.textarea`
padding: 9px;
font-family: 'proxima-nova', sans-serif;
-webkit-tap-highlight-color: transparent; 
border: 1px solid #9a9a9a;
`;
const Button = Styled.button`

  width: 100%;
  font-size: 16px;
  font-weight: 600;
  padding: 9px 12px;
  color: white;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;


:hover {
  background-position: 100% 0;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

:focus {
  outline: none;
}

background-image: linear-gradient(
    to right,
    #25aae1,
    #40e495,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);

`;

const ChatRoom: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { messages, sendMessage } = useChat(id);
  const [newMessage, setNewMessage] = React.useState('');

  const handleNewMessageChange = (event: any) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#060a25' }}>
      <Container>
        <h1 style={{ margin: '0px', color: '#ffffff' }}> Room: {id}</h1>
        <Flex
          flexWidth={1}
          minHeight={100}
          overflow="scroll"
          height="fit-content"
          alignItem="flex-end"
          borderRadius="5px"
        >
          <Flex
            flexDirection="column"
            height="calc(100vh - 194px)"
            width="100%"
            overflow="scroll"
          >
            {messages.map((message: any, i) => {
              return (
                <div
                  key={i}
                  className={`message-item ${
                    message.ownedByCurrentUser
                      ? 'my-message'
                      : 'received-message'
                  }`}
                >
                  {message.body}
                </div>
              );
            })}
          </Flex>
        </Flex>

        <TextArea
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Write message..."
        />

        <Flex margin="9px 0px">
          <Button className="btn-hover color-1" onClick={handleSendMessage}>
            Send
          </Button>
        </Flex>
      </Container>
    </div>
  );
};

export default ChatRoom;
