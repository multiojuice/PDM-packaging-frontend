import styled from 'styled-components';

export const Header = styled.h1`

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Instructions = styled.h3`

`;

export const OptionBox = styled.div`
  padding: 30px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 20px;
  border-radius: 10px;
  a {
    color: grey;
    font-size: 22px;
    text-decoration: none;
  }

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;