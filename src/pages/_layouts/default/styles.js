import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

export const Wrapper = styled(PerfectScrollbar)`
  height: 100%;
  background: linear-gradient(-90deg, #22202c, #402945);
  color: white;
  overflow: scroll;
`;
