import styled from 'styled-components';
// import { colors } from '~/style';

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* padding-top: 60px; */
  justify-content: center;
  background-color: #44f;
  height: 100%;
  min-height: 100%;
`;

export const FormContent = styled.div`
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
  }
`;
