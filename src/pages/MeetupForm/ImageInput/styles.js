import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  width: 100%;
  height: 100%;

  label {
    cursor: pointer;
    width: 100%;
    position: relative;
    overflow: hidden;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
      position: absolute;
      border-radius: 4px;
      background: transparent;
    }

    input {
      display: none;
    }
  }
`;
