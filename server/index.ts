import 'reflect-metadata';

import { datasource } from './datasource';
import { Server } from './Server';

export default async function main() {
  await datasource.initialize();
  const server = new Server();
  await server.initialize();
  console.log(`🚀 Server ready at http://localhost:3000/`);
}
