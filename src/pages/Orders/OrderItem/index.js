import React from 'react';

import {
  Container, Title, Time, Price,
} from './styles';

export default function OrderItem({ data }) {
  console.log(JSON.stringify(data));
  return (
    <Container>
      <Title>
        Pedido #{data.id} - ${data.user.username}
      </Title>
      <Time>{data.created_at}</Time>
      <Price>{data.total_value}</Price>
    </Container>
  );
}
