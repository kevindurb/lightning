import React from 'react';
import { useCuelistById } from '../../queries/cuelists';

interface CuelistGridBlockProps {
  id: number;
}

export const CuelistGridBlock: React.FC<CuelistGridBlockProps> = ({ id }) => {
  const { data: cuelist } = useCuelistById(id);
  return <>{cuelist?.name}</>;
};
