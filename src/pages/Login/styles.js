import styled from 'styled-components';
import { colors, metrics, fonts } from '../../styles';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
