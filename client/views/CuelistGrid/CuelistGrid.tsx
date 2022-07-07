import React from 'react';
import { CuelistGridBlock } from './CuelistGridBlock';
import { useAllCuelists } from '../../queries/cuelists';

interface CuelistGridProps {}

export const CuelistGrid: React.FC<CuelistGridProps> = () => {
  const { data: cuelists } = useAllCuelists();
  return (
    <>
      {(cuelists ?? []).map((cuelist) => (
        <CuelistGridBlock id={cuelist.id} />
      ))}
    </>
  );
};
