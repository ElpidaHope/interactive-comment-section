import '../styles/DeleteEdit.css';

const DeleteEdit = ({handleEdit, handleDelete}) => {
  return (
    <div className='deleteEdit'>
      <div className='icon-delete' onClick={() => handleDelete()}>
        <img src="images/icon-delete.svg" alt="" />
        <p id='delete'>Delete</p>
      </div>
      <div className='icon-edit' onClick={() => handleEdit()}>
        <img src="images/icon-edit.svg" alt="" />
        <p id='edit'>Edit</p>
      </div>
    </div>
  )
}

export default DeleteEdit