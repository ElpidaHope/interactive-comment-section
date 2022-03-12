import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const NewAddedReply = ({currentUser, addAddedReply, comment, user}) => {
  const [reply, setReply] = useState('');
  const addReply = (text) => {
    const addingReply = {
      "id": nanoid(),
      "content": text,
      "createdAt": "Now",
      "score": 0,
      "replyingTo": user.username,
      "user": {
        "image": {
          "png": currentUser.image.png,
          "webp": currentUser.image.webp,
        },
        "username": currentUser.username
      }
    };
    addAddedReply(addingReply, comment.id)
  }
  return (
    <div className='new-reply'>
      <textarea type="text" value={reply} onChange={e => setReply(e.target.value)}/>
      <img src={currentUser.image.png} alt="" />
      <button onClick={() => addReply(reply)}>
      Reply
      </button>
    </div>
  )
}

export default NewAddedReply;