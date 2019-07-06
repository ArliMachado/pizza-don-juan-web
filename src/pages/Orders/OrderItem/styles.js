import styled from 'styled-components';
import { colors, metrics, fonts } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  padding: ${metrics.basePadding}px;
  background-color: ${colors.white};
  margin-top: ${metrics.baseMargin * 1.5}px;
  border-radius: ${metrics.baseRadius}px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
`;
export const OrderInfo = styled.div`
  margin-bottom: ${metrics.baseMargin}px;
`;

export const Title = styled.p`
  display: flex;
  font-size: ${fonts.big}px;
  margin-bottom: ${metrics.baseMargin / 2}px;
`;
export const IdTitle = styled(Title)`
  font-weight: bold;
  margin-left: ${metrics.baseMargin / 2}px;
  margin-right: ${metrics.baseMargin / 2}px;
`;

export const Time = styled.p`
  font-size: ${fonts.smaller}px;
  color: ${colors.regular};
  margin-bottom: ${metrics.baseMargin / 2}px;
`;

export const Price = styled.p`
  font-size: ${fonts.regular}px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: ${metrics.baseRadius * 2}px;
  margin: ${metrics.baseMargin * 1.5}px;
  margin-left: 0;
  padding: ${metrics.basePadding}px;
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
