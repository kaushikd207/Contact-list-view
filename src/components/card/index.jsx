import '../card/App.css'
export default function Card({ item, handleDelete, handleUpdate }) {
  return (
    <div className='card'>
      <p className='name'><div>Name</div>{item.fullname}</p>
      <p className='name'><div>Mail Id</div>{item.email}</p>
      <p className='name'><div>Mobile</div>{item.phone}</p>
      <p className='name'><div>Status</div>{item.status}</p>
      <div className='btnWrapper'>
        <button onClick={() => handleUpdate(item)}>Edit</button>
        <button onClick={() => handleDelete(item.timestamp)}>delete</button>
      </div>
    </div>
  )
}
