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
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${metrics.baseMargin * 2}px;
  padding-right: ${metrics.baseMargin * 2}px;
  border-right: 1px solid rgba(255, 255, 255, 0.6);
`;

export const ExitButton = styled.button`
  font-size: ${fonts.regular}px;
  color: ${colors.regular};
  opacity: 0.6;
  text-decoration: none;
  background: ${colors.transparent};
  border: none;
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
