import React from 'react';
import Styled from 'styled-components';
import Flex from './../components/Flex';
import Input from './../components/InputComponent';
import Link from 'next/link';

const Button = Styled.button`
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  padding: 24px 12px;
  color: white;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
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

const Container = Styled.div`
  position: fixed;
  left: 10%;
  right: 10%;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;`;

const Home = () => {
  const [roomName, setRoomName] = React.useState('');

  const handleRoomNameChange = (event: any) => {
    setRoomName(event.target.value);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#060a25' }}>
      <Container>
        <Input
          onChange={(e: any) => {
            handleRoomNameChange(e);
          }}
          id="eChallanInput"
          onKeyUp={(e) => {
            if (e.keyCode === 13 && roomName.length) {
              handleRoomNameChange(e);
            }
          }}
          fontSize="h6"
          value={roomName}
          fontWeight="regular"
          maxLength={21}
          padding="8px 12px"
          border="1px solid #B5B5B5"
          borderRadius="6px"
          width="100%"
          placeholder="Room ID"
          bgColor={(props) => props.theme.color.light2}
        />
        <Flex justifyContent="center" margin="19px 0px">
          <Link href={`/${roomName}`}>
            <Button className="btn-hover color-1">Join the Chat Room</Button>
          </Link>
        </Flex>
      </Container>
    </div>
  );
};

export default Home;
