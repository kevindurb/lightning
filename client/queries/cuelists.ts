import { useQuery, gql } from '@apollo/client';

const allCuelistsQuery = gql`
  query GetCuelists {
    cuelists {
      id
      name
    }
  }
`;

const cuelistByIdQuery = gql`
  query GetCuelistById($cuelistId: Int) {
    cuelistById(id: $cuelistId)
  }
`;

interface Cuelist {
  id: number;
  name: string;
}

export const useAllCuelists = () => useQuery<Cuelist[]>(allCuelistsQuery);

export const useCuelistById = (cuelistId: number) =>
  useQuery<Cuelist>(cuelistByIdQuery, { variables: { cuelistId } });
