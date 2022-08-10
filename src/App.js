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
  // const [searchString, setSearchString] = useState('')
  const [data, setData] = useState({
    fullname: '',
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
    alert('Are You sure?')
    const newData = contactList.filter((item) => item.timestamp !== timestamp)
    localStorage.setItem('data', JSON.stringify(newData))
    toast.success('Deleted Successfully')
    fetchData()
  }

  const handleUpdate = (olddata) => {
    alert('Are You Sure?')
    setIsUpdate(true)
    setAddForm(true)
    setData(olddata)
  }

  useEffect(() => {
    fetchData();
  }, [])

  // const handleSearch = () => {
  
  // }

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
        <><DeleteAll fetchData={fetchData}></DeleteAll>
          {/* <div>   <input
            name='cName'
            type='text'
            value={searchString}
            onChange={(e) => setSearchString(e.target.value.toLowerCase())}
            onFocus={handleSearch}
            placeholder='Enter Name'
          /></div> */}
          <h2>List of Contacts</h2>
          {contactList
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((item, i) => (
              <Card
                key={i}
                handleDelete={handleDelete}
                item={item}
                handleUpdate={handleUpdate}
              />
            ))}
        </>
      )
      }
    </div>
  )
}

export default App
