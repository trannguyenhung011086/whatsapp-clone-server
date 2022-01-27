import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';

const typeDefs = importSchema('./src/schema/typeDefs.graphql');

export default makeExecutableSchema({ resolvers, typeDefs });
