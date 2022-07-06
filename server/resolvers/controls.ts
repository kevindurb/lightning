import * as controlModel from '../models/control';

export const resolvers = {
  Query: {
    async controls() {
      return await controlModel.getList();
    },
  },
};
