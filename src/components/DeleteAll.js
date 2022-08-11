import React from 'react'

function DeleteAll({ fetchData }) {
    const handleDelete = () => {
        if (window.confirm('Are you sure you wish to delete all this item?')) {
            localStorage.clear()
            fetchData()
        } else {
            return
        }
    }
    return (
        <> <button onClick={handleDelete}>Delete All</button></>
    )
}

export default DeleteAll