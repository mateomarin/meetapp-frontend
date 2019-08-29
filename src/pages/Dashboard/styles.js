import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 172px;
    height: 42px;
    border-radius: 4px;
    background: #f94d6a;
    color: white;
    font-weight: bold;
    border: none;

    span {
      margin-left: 5px;
    }
  }
`;

export const List = styled.div`
  margin-top: 50px;
`;

export const NoMeetups = styled.div`
  background: rgba(0, 0, 0, 0.4);
  color: white;
  height: 200px;
  border-radius: 4px;
  text-align: center;
  line-height: 200px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Meetup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 35px;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  height: 62px;
  border-radius: 4px;
  margin-bottom: 10px;

  h5 {
    font-size: 14px;
    letter-spacing: 1px;
  }

  div {
    display: flex;
    align-items: center;
    font-size: 14px;

    span {
      opacity: 0.6;
    }

    button {
      height: 100%;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: none;
      width: 70px;
    }
  }
`;
