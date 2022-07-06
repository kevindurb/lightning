import React from 'react';

type NavigationView = 'program' | 'live';

export const useNavigation = () => {
  const [currentView, setCurrentView] =
    React.useState<NavigationView>('program');

  return {
    currentView,
    goToProgram: React.useCallback(() => {
      setCurrentView('program');
    }, [setCurrentView]),
    goToLive: React.useCallback(() => {
      setCurrentView('live');
    }, [setCurrentView]),
  };
};
