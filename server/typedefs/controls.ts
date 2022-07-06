import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type Control {
    id: Int
    name: String
    type: String
    createdAt: Int
    updatedAt: Int
  }

  type Query {
    controls: [Control]
  }

  type Mutation {
    addControl(name: String, type: String): Control
  }
`;
