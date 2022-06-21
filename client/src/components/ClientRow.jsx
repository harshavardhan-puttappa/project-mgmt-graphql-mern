import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // 1st method to refresh the clients list after deleting a client
    // refetchQueries: [{ query: GET_CLIENTS }],
    // 2nd method to refresh the clients list after deleting a client
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.filter((c) => c.id !== deleteClient.id) },
      });
    },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.phone}</td>
      <td>{client.email}</td>
      <td>
        <button className="btn btn-danger" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
