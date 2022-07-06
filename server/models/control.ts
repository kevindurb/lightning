import { database } from '../database';
import { first } from '../utils/array';
import { getInsertId } from '../utils/database';
import { Control } from '../types/control';

export { Control };

export const getList = () => database<Control>('controls').select('*');

export const getById = (id: number) =>
  database<Control>('controls').where({ id }).then(first);

export const create = (
  name: string,
  type: 'button' | 'slider',
): Promise<number> =>
  database<Control>('controls')
    .insert({ name, type }, 'id')
    .then(first)
    .then(getInsertId);
