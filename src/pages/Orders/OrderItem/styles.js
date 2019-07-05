import styled from 'styled-components';
import { colors, metrics, fonts } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

export const Title = styled.span`
  display: flex;
  font-size: ${fonts.medium};
`;

export const Time = styled.span`
  font-size: ${fonts.small};
  color: ${colors.regular};
`;

export const Price = styled.span`
  font-size: ${fonts.regular};
  font-weight: bold;
  color: ${colors.primary};
`;
