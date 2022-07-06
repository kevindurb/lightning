import React from 'react';
import { useQuery, gql } from '@apollo/client';

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

  return <div>{data?.ping}</div>;
};
