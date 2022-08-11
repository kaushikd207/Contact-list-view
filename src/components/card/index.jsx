import '../card/App.css'
//To show the data in a card view
export default function Card({ item, handleDelete, handleUpdate }) {
  return (
    <div className='card'>
      <p className='name'><h4>First Name</h4>{item.FirstName}</p>
      <p className='name'><h4>Last Name</h4>{item.LastName}</p>
      <p className='name'><h4>Mail Id</h4>{item.email}</p>
      <p className='name'><h4>Mobile</h4>{item.phone}</p>
      <p className='name'><h4>Status</h4>{item.status}</p>
      <div className='btnWrapper'>
        <button onClick={() => handleUpdate(item)}>Edit</button>
        <button onClick={() => handleDelete(item.timestamp)}>Delete</button>
      </div>
  </div>

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
