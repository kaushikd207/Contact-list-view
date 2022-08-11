import '../card/App.css'
//To show the data in a table view

import { MdDelete, MdEdit } from 'react-icons/md'
export default function Card({ item, handleDelete, handleUpdate }) {
  return (
    <tr>
      <td>{item.FirstName}</td>
      <td>{item.LastName}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.status}</td>
      <td className='btnWrapper'>
        <button onClick={() => handleUpdate(item)}>
          <MdEdit />
        </button>
        <button onClick={() => handleDelete(item.timestamp)}>
          <MdDelete />
        </button>
      </td>
    </tr>


 
  )
}
