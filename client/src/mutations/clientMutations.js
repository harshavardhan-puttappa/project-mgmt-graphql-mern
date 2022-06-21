import { gql } from '@apollo/client';

// Add Client Mutation
const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      name
      id
      email
      phone
    }
  }
`;

// Delete Client Mutation
const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      name
      id
      email
      phone
    }
  }
`;

export { ADD_CLIENT, DELETE_CLIENT };
