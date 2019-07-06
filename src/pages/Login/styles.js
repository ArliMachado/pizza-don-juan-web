import styled from 'styled-components';
import { colors, metrics, fonts } from '../../styles';
import PizzaDonJuan from '../../assets/fundo.jpg';
import pizzaLogo from '../../assets/logo@3x.png';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${PizzaDonJuan}) no-repeat center center;
  background-size: cover;
`;
export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 280px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  input {
    background: ${colors.white};
    border: 1px solid ${colors.light};
    border-radius: ${metrics.baseRadius * 2}px;
    height: 44px;
    padding: 0 15px;
    font-size: 14px;
    margin-top: ${metrics.baseMargin}px;
  }

  button {
    margin: ${metrics.baseMargin};
    background: ${colors.red};
    border-radius: ${metrics.baseRadius}px;
    height: 44px;
    border: 0;
    color: ${colors.white};
    font-weight: bold;
    cursor: pointer;
    font-size: ${fonts.medium};
    margin-top: ${metrics.baseMargin * 2}px;
  }
`;

export const MessageError = styled.span`
  color: ${colors.red};
  margin-top: ${metrics.baseMargin}px;
`;
export const Logo = styled.img.attrs({
  src: pizzaLogo,
})`
  width: 72px;
  height: 72px;
`;
