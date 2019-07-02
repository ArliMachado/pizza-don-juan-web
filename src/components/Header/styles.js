import styled from 'styled-components';
import { colors, metrics, fonts } from '../../styles';

export const Container = styled.div`
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.primary};

  h1: {
    font-size: ${fonts.big};
    font-weight: bold;
    color: ${colors.white};
  }
`;
