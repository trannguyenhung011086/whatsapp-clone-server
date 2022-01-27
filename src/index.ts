import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';

const app = express();

app.use(cors());
app.use(express.json());

const server = new ApolloServer({ schema });

server.start().then(() => {
  server.applyMiddleware({
    app,
    path: '/graphql',
  });

  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
