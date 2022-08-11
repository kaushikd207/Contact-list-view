import { useState, useEffect } from 'react'
import Form from './components/form'
import Nav from './components/nav'
import toast from 'react-hot-toast'
import Card from './components/card'
import DeleteAll from './components/DeleteAll'

import './App.css'
function App() {
  const [addForm, setAddForm] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [contactList, setContactList] = useState([])
  const [input, setInput] = useState('')
  const [data, setData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    phone: '',
    status: 'active',
  })



  const fetchData = () => {
    const contactData = JSON.parse(localStorage.getItem('data'))
    if (contactData?.length) {
      setContactList(contactData)
    }
    else {
      setContactList([])
    }
  }

  const handleDelete = (timestamp) => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      const newData = contactList.filter((item) => item.timestamp !== timestamp)
      localStorage.setItem('data', JSON.stringify(newData))
      toast.success('Deleted Successfully')
      fetchData()
    }
    else {
      return;

    }


  }

  const handleUpdate = (olddata) => {
    if (window.confirm('Are you sure you wish to edit this item?')) {
      setIsUpdate(true)
      setAddForm(true)
      setData(olddata)
    } else {
      return
    }

  }

  useEffect(() => {
    fetchData();
  }, [])


  //search by name 

  const search = (data) => {
    return data.filter((item) => item.FirstName.toLowerCase().includes(input))
  }



  return (
    <div>

      <Nav />
      <button className="btn" onClick={() => setAddForm((prev) => !prev)}>
        {addForm ? 'hide' : 'Add Contact'}
      </button>
      {addForm && (

        <Form className="addForm"
          contactList={contactList}
          fetchData={fetchData}
          setAddForm={setAddForm}
          data={data}
          setData={setData}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
        />
      )}

      {contactList && (
        <> {!addForm && (<DeleteAll fetchData={fetchData}></DeleteAll>)}

          <h2>List of Contacts</h2>
          <div className="searchBox">   <input
            name='cName'
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Search By First Name'
          /></div>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
       

         <tbody>
          {search(contactList)
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((item, i) => (
              <Card
                key={i}
                handleDelete={handleDelete}
                item={item}
                handleUpdate={handleUpdate}
              />

            ))}
            </tbody>
          </table>
        </>
      )
      }
    </div>
  )
}

export default App
