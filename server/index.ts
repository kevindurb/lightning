import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import path from 'path';

import resolvers from './resolvers';
import typeDefs from './typedefs';

async function startServer(typeDefs: any, resolvers: any) {
  const app = express();

  app.use(express.static(path.join(__dirname, '../../assets/')));
  app.use(express.static(path.join(__dirname, '../client/')));

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 3000 }, resolve),
  );

  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
}

startServer(typeDefs, resolvers);
