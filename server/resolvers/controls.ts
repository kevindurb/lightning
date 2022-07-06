import * as controlModel from '../models/control';

interface AddControlArguments {
  name: string;
  type: 'button' | 'slider';
}

export const resolvers = {
  Query: {
    async controls() {
      return await controlModel.getList();
    },
  },
  Mutation: {
    async addControl(context: any, { name, type }: AddControlArguments) {
      const controlId = await controlModel.create(name, type);
      return controlModel.getById(controlId);
    },
  },
};
