import styled from 'styled-components';
import { colors, metrics, fonts } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 980px;
  padding: ${metrics.basePadding}px;
  background-color: ${colors.white};
  margin-top: ${metrics.baseMargin * 1.5}px;
  border-radius: ${metrics.baseRadius}px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
`;
export const OrderInfo = styled.div`
  /* margin-bottom: ${metrics.baseMargin * 2}px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

export const Title = styled.p`
  display: flex;
  font-size: ${fonts.big}px;
`;

export const Time = styled.p`
  font-size: ${fonts.small}px;
  color: ${colors.regular};
  margin: ${metrics.baseMargin};
`;

export const Price = styled.p`
  font-size: ${fonts.regular}px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: ${metrics.baseMargin * 2};
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: ${metrics.baseRadius}px;
  /* margin-top: ${metrics.baseMargin}px; */
  margin-bottom: ${metrics.baseMargin}px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin: ${metrics.baseMargin}px;
padding: ${metrics.basePadding}px;
margin-bottom: ${metrics.baseMargin * 1.5}px;
  /* margin-top: ${metrics.baseMargin}px; */
  /* margin-left: ${metrics.baseMargin}px; */
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: ${metrics.baseMargin}px;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${metrics.baseMargin * 2}px;
`;

export const ProductName = styled.p`
  font-size: ${fonts.small}px;
  color: ${colors.primary};
  margin-bottom: ${metrics.baseMargin / 2};
`;

export const ProductSize = styled.p`
  font-size: ${fonts.smaller}px;
  color: ${colors.regular};
`;
