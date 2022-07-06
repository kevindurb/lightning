import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';
import { useNavigation } from './state/navigation';
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
  const { goToProgram, goToLive, currentView } = useNavigation();
  const { data } = useQuery<PingQuery>(query);

  return (
    <Header>
      <Button selected={currentView === 'program'} onClick={goToProgram}>
        Program
      </Button>
      <Button selected={currentView === 'live'} onClick={goToLive}>
        Live
      </Button>
    </Header>
  );
};
