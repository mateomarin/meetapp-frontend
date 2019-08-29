import styled from 'styled-components';

export const Container = styled.div`
  background: #19171f;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    button {
      background: none;
      border: none;
      width: auto;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      margin-right: 20px;
      padding-right: 20px;
      height: 32px;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  align-items: center;

  div {
    text-align: right;
    margin-right: 20px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    background: #d44059;
    height: 42px;
    width: 71px;
    border-radius: 4px;
    border: none;
    color: white;
    font-weight: bold;
  }
`;
