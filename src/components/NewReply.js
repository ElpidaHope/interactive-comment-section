import { useState } from 'react';
import '../styles/NewReply.css';
import { nanoid } from 'nanoid';

const NewReply = ({currentUser, replies, username1, addReply, id}) => {
  const {image, username} = currentUser;
  const [newReply, setNewReply] = useState('');

  const handleAddReply = (text) => {
    const addingReply = {
      "id": nanoid(),
      "content": text,
      "createdAt": "Now",
      "score": 0,
      "replyingTo": username1,
      "user": {
        "image": {
          "png": currentUser.image.png,
          "webp": currentUser.image.webp,
        },
        "username": currentUser.username
      }
    };
    const newReplies = [...replies, addingReply]
    addReply(newReplies, id)
    setNewReply('')
  } 

  return (
    <div className='new-reply'>
      <textarea type="text" onChange={e => setNewReply(e.target.value)} value={newReply}/>
      <img src={image.png} alt={username} />
      <button 
        onClick={(e) => {
          handleAddReply(newReply);
          e.target.parentNode.style.display = 'none';
          }}>
      Reply
      </button>
    </div>
  )
}

export default NewReply