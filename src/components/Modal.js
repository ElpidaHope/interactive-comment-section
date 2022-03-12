const Modal = ({removeModal, handleDeleteReply}) => {
  return (
    <div className='modal'>
      <div className="modal-content">
        <h3>Delete comment</h3>
        <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div className="buttons">
          <button className="btn-cancel" onClick={() => removeModal()}>NO, CANCEL</button>
          <button className="btn-del" onClick={() => handleDeleteReply()}>YES, DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default Modal