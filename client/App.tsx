import React from 'react';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';
import { Programmer } from './views/Programmer/Programmer';

import { useNavigation } from './state/navigation';
import './app.css';

export const App: React.FC = () => {
  const { goToProgram, goToLive, currentView } = useNavigation();

  return (
    <>
      <Header>
        <Button selected={currentView === 'program'} onClick={goToProgram}>
          Program
        </Button>
        <Button selected={currentView === 'live'} onClick={goToLive}>
          Live
        </Button>
      </Header>
      {currentView === 'program' ? <Programmer /> : null}
    </>
  );
};
