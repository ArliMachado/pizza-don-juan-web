import React from 'react';
import moment from 'moment';

import {
  Container,
  Title,
  IdTitle,
  Time,
  Price,
  OrderInfo,
  ProductList,
  ProductInfo,
  ProductImage,
  ProductDescription,
  ProductName,
  ProductSize,
  OrderObservation,
} from './styles';

export default function OrderItem({ data }) {
  const dataPedido = moment(data.created_at).fromNow();
  return (
    <Container>
      <OrderInfo>
        <Title>
          Pedido <IdTitle>#{data.id}</IdTitle> - {data.user.username}
        </Title>
        <Time>{dataPedido}</Time>
        <Price>R$ {data.total_value}</Price>
      </OrderInfo>
      <ProductList>
        {data.products.map(product => (
          <ProductInfo key={product.id}>
            <ProductImage src={product.image} />
            <ProductDescription>
              <ProductName>{product.title}</ProductName>
              <ProductSize>Tamanho: {product.size}</ProductSize>
            </ProductDescription>
          </ProductInfo>
        ))}
      </ProductList>
      <OrderObservation>
        <strong>Observações: {data.observation}</strong>
      </OrderObservation>
    </Container>
  );
}
