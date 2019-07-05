import styled from 'styled-components';
import { colors, metrics, fonts } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: flex-start; */
  padding-top: 60px;
`;

export const TitleList = styled.h1`
  display: flex;
  align-items: center;
  margin-left: 365px;
  font-size: ${fonts.medium};
  color: ${colors.primary};
  font-weight: bold;
`;

// export const
