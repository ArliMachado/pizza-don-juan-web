import styled from 'styled-components';
import { colors, metrics, fonts } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
  padding: ${metrics.basePadding}px;
`;

export const TitleContent = styled.div`
  position: relative;
  width: 50%;
`;
export const TitleList = styled.p`
  font-size: ${fonts.big}px;
  color: ${colors.primary};
  font-weight: bold;
`;
