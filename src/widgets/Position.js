import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  background-color: #051824;
  font-size: 12px;
`;

const Header = styled.div`
  border-bottom: 1px solid grey;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 16px;
`;

const Body = styled.div`
  padding: 10px;
  font
`;

const Table = styled.div`
  display: flex;
`;

const Col = styled.div`
  padding: 5px;
`;

const TableHeader = styled.div`
  color: #75778f;
`;
const Value = styled.div`
  &.red {
    color: red;
  }
  &.green {
    color: green;
  }
`;
const buildCoulmn = (columnLabel, positions, renderFn) => (
  <Col>
    <TableHeader>{columnLabel}</TableHeader>
    {positions.map((position, i) => (
      <div key={i}>{renderFn(position)}</div>
    ))}
  </Col>
);

const testPositions = [
  {
    pair: ['ETH', 'BTC'],
    amount: 200,
    basePrice: 0.0210669,
    marketPrice: 0.012332,
    profitLoss: -0.478,
    profitLossPerc: -0.1134,
  },
  {
    pair: ['ETH', 'BTC'],
    amount: 200,
    basePrice: 0.0230669,
    marketPrice: 0.014332,
    profitLoss: -0.538,
    profitLossPerc: -0.2134,
  },
];

const colorValue = (value, suffix) => (
  <Value className={value >= 0 ? 'green' : 'red'}>
    {value}
    {suffix}
  </Value>
);

export default ({ ethAddress, totalAmount, positions = testPositions }) => (
  <Container>
    <Header>
      <Title>
        <FontAwesomeIcon icon={faChevronDown} /> Positions{' '}
        {Boolean(positions.length) && `(${positions.length})`}
      </Title>
      <div>{totalAmount}</div>
    </Header>
    <Body>
      <div>Margin</div>
      <Table>
        {buildCoulmn('PAIR', positions, ({ pair }) => pair.join('/'))}
        {buildCoulmn('AMOUNT', positions, ({ amount, pair }) => `${amount} ${pair[0]}`)}
        {buildCoulmn('BASE PRICE', positions, ({ basePrice }) => basePrice)}
        {buildCoulmn('MARKET PRICE', positions, ({ marketPrice }) => marketPrice)}
        {buildCoulmn('P/L', positions, ({ profitLoss }) => colorValue(profitLoss))}
        {buildCoulmn('P/L %', positions, ({ profitLossPerc }) => colorValue(profitLossPerc, '%'))}
      </Table>
    </Body>
  </Container>
);
