import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';
import './app.css';

const query = gql`
  query Ping {
    ping
  }
`;

interface PingQuery {
  ping: string;
}

export const App: React.FC = () => {
  const { data } = useQuery<PingQuery>(query);

  return (
    <Header>
      <Button>hello</Button>
    </Header>
  );
};
