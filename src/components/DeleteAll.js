import React from 'react'

function DeleteAll({fetchData}) {
    const handleDelete = () => {
        alert('Are You sure?')
        localStorage.clear()
        fetchData()
    }
    return (
       <> <button onClick={handleDelete}>Delete All</button></>
    )
}

export default DeleteAll