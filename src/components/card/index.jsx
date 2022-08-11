import '../card/App.css'
//To show the data in a card view

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

  // <div className="tableForm" id='customers'>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>First Name</th>
  //           <th>Last Name</th>
  //           <th>Email</th>
  //           <th>Mobile </th>
  //           <th>Status</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr>
  //           <td>{item.FirstName}</td>
  //           <td>{item.LastName}</td>
  //           <td>{item.email}</td>
  //           <td>{item.phone}</td>
  //           <td>{item.status}</td>
  //           <td>  <div className='btnWrapper'>
  //       <button onClick={() => handleUpdate(item)}>Edit</button>
  //       <button onClick={() => handleDelete(item.timestamp)}>Delete</button>
  //     </div></td>
  //         </tr>
  //       </tbody>

  //     </table>
  //     </div>
 
  )
}
