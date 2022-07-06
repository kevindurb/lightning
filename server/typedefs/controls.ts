import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type Control {
    id: Int
    type: String
    createdAt: Int
    updatedAt: Int
  }

  type Query {
    controls: [Control]
  }
`;
