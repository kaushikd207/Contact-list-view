
import toast from 'react-hot-toast'
import '../form/Form.css'
export default function Form({
  data,
  setData,
  fetchData,
  setAddForm,
  contactList,
  isUpdate,
  setIsUpdate,
}) {
  const { FirstName,LastName, email, phone, status } = data

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
//To store the data in a local storage and sort by time 
  const handleSubmit = (e) => {
    e.preventDefault()
    let newData
    if (isUpdate) {
      newData = [
        ...contactList.filter((item) => item.timestamp !== data.timestamp),
        { ...data, timestamp: Date.now() },
      ]
      toast.success(FirstName + ' Updated Successfully')
      setIsUpdate(false)
    } else {
      newData = [...contactList, { ...data, timestamp: Date.now() }]
      toast.success(FirstName + ' Added Successfully')
    }

    localStorage.setItem('data', JSON.stringify(newData))
    setAddForm(false)
    setData({
      FirstName: '',
      LastName: '',
      email: '',
      phone: '',
      status: 'active',
    })
    fetchData()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={FirstName}
        onChange={handleChange}
        name='FirstName'
        required
        placeholder='First Name'
      />
          <input
        type='text'
        value={LastName}
        onChange={handleChange}
        name='LastName'
        required
        placeholder='Last Name'
      />
      <input
        type='email'
        value={email}
        onChange={handleChange}
        name='email'
        required
        placeholder='Email'
      />
      <input
        type='text'
        value={phone}
        onChange={handleChange}
        maxLength={12}
        minLength={10}
        required
        name='phone'
        placeholder='Mobile Number'
      />
      <select value={status} onChange={handleChange} name='status'>
        <option value='Active'>Active</option>
        <option value='Inactive'>InActive</option>
      </select>
      <button type='submit'>{isUpdate ? 'Update' : 'Submit'}</button>
    </form>
  )
}
