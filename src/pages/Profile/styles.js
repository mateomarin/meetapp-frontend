import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: flex-end;

    input,
    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      width: 100%;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    input[type='file'] {
      opacity: 0;
    }

    textarea {
      height: 150px;
      padding: 15px;
      font-size: 14px;

      &::placeholder {
        font-size: 14px;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      font-size: 12px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      width: 132px;

      &:hover {
        background: ${darken(0.03, '#F94D6A')};
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const Divisor = styled.div`
  margin: 10px 0 20px;
  height: 1px;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
