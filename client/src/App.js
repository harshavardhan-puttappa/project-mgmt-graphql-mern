import { Header } from './components/Header';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Clients from './components/Clients';
import AddClientModal from './components/AddClientModal';

// To overcome the warning message in console after deleting a record from the list

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  // cache: new InMemoryCache(),
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientModal />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
