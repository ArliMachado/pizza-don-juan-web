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

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: bold;
    color: ${colors.white};
    margin-left: ${metrics.baseMargin * 1.4}px;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    font-size: ${fonts.medium};
    color: ${colors.regular};
    opacity: 0.6;
    text-decoration: none;
    background: ${colors.transparent};
    border: none;
  }
`;
export const NameText = styled.span`
  font-size: ${fonts.big};
  font-weight: bold;
  color: ${colors.white};
`;

export const OrdersButton = styled.button`
  background: ${colors.red};
  border: none;
  border-radius: 50%;
  font-size: ${fonts.bigger};
  color: ${colors.white};
  width: 40px;
  height: 40px;
`;
