import styled from 'styled-components';
import { colors, metrics, fonts } from '../../styles';

export const Container = styled.div`
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.primary};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: bold;
    color: ${colors.white};
    margin-left: ${metrics.baseMargin * 1.4}px;
  }
`;
