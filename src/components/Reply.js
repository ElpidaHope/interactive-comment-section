import React, { useState } from 'react'
import UpVote from './UpVote';
import ReplyIcon from './ReplyIcon';
import DeleteEdit from './DeleteEdit';
import '../styles/Reply.css';
import Modal from './Modal';
import NewAddedReply from './NewAddedReply';

const Reply = ({reply, currentUser, addAddedReply, comment, editReply, deleteReply, vote}) => {
  const { content, createdAt, score, replyingTo, user } = reply;
  const showCommentBox = (e) => {
    e.target.parentNode.parentNode.nextElementSibling.style.display = 'grid'
  }
  const [editing, setEditing] = useState(false)
  const [replyContent, setReplyContent] = useState(content);
  const [deleting, setDeleting] = useState(false);

  const handleUpdate = () => {
    editReply(replyContent, comment.id)
    setEditing(false)
  }
  
  const startEditing = () => {
    setEditing(true)
  }

  const handleDelete = () => {
    showModal()
  }

  const showModal = () => {
    setDeleting(true)
  }

  const removeModal = () => {
    setDeleting(false)
  }

  const handleDeleteReply = () => {
    deleteReply(reply.id)
  }

  return (
    <>
      <div className='reply-container'>
        <div className='reply'>
          <ul className='details'>
            <li className='user-image'>
            <img src={user.image.png} alt={user.username} />
            </li>
            <li className='username'>
              {user.username}
            </li>
            <li className='createdAt'>
              {createdAt}
            </li>
          </ul>
          {!editing ? (
          <p className='content'>
            <span>@{replyingTo}</span> {content}
          </p>
          ) : (
            <>
              <p className='content'>
                <textarea type="text" value={replyContent}
                  onChange={e => setReplyContent(e.target.value)}
                  />
              </p>
              <button className='update' onClick={() => handleUpdate()}>Update</button>
            </>
          )}
          <UpVote score={score} vote={vote} reply={reply}/>
          
          {currentUser.username !== user.username ? <ReplyIcon Clicked={showCommentBox} /> : <DeleteEdit handleEdit={startEditing} handleDelete={handleDelete}/>}
          
        </div>
        <NewAddedReply currentUser={currentUser} addAddedReply={addAddedReply} comment={comment} user={user}/>
        <div className={deleting ? 'show-modal' : null}>
            <Modal removeModal={removeModal} handleDeleteReply={handleDeleteReply}/>
        </div>
      </div>
    </>
  )
}

export default Reply