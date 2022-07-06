import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Button } from './components/Button/Button';

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
    <>
      <Button>hello</Button>
    </>
  );
};
