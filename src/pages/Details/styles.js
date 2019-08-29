import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`;

export const ControlBtn = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.edit ? '116px' : '138px')};
  height: 42px;
  border-radius: 4px;
  background: ${props => (props.edit ? '#4DBAF9' : '#D44059')};
  color: white;
  font-weight: bold;
  border: none;

  & + button {
    margin-left: 10px;
  }

  span {
    margin-left: 5px;
  }
`;

export const Main = styled.div`
  margin-top: 50px;

  .image-container {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  img {
    border-radius: 5px;
    width: 100%;
  }

  p {
    margin: 20px 0;
  }

  div {
    display: flex;
    height: 40px;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      opacity: 0.6;

      & + span {
        margin-left: 20px;
      }

      .icon {
        margin-right: 5px;
      }
    }
  }
`;
