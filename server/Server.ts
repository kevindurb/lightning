import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import TypeGraphQL from 'type-graphql';
import express from 'express';
import http from 'http';
import path from 'path';

import { CuelistResolver } from './resolvers/CuelistResolver';

export class Server {
  expressApp?: express.Express;
  httpServer?: http.Server;
  apolloServer?: ApolloServer;

  constructor() {}

  private async initializeExpressApp() {
    this.expressApp = express();

    this.expressApp.use(express.static(path.join(__dirname, '../assets/')));
    this.expressApp.use(
      express.static(path.join(__dirname, '../dist/client/')),
    );
  }

  private async buildGraphQLSchema() {
    return await TypeGraphQL.buildSchema({
      resolvers: [CuelistResolver],
    });
  }

  private async initializeHttpServer() {
    if (!this.expressApp) throw new Error('Express app is not initialized');

    this.httpServer = http.createServer(this.expressApp);
  }

  private async initializeApolloServer() {
    if (!this.httpServer) throw new Error('Http server is not initialized');
    if (!this.expressApp) throw new Error('Express app is not initialized');

    const schema = await this.buildGraphQLSchema();

    this.apolloServer = new ApolloServer({
      schema,
      csrfPrevention: true,
      cache: 'bounded',
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
      ],
    });

    await this.apolloServer.start();

    this.apolloServer.applyMiddleware({ app: this.expressApp });
  }

  private async startHttpServer() {
    return new Promise<void>((resolve) =>
      this.httpServer?.listen({ port: 3000 }, resolve),
    );
  }

  async initialize() {
    await this.initializeExpressApp();
    await this.initializeHttpServer();
    await this.initializeApolloServer();
    await this.startHttpServer();
  }
}
