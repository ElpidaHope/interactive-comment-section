import { useState } from 'react';
import '../styles/NewComment.css';

const NewComment = ({currentUser, addNewComment}) => {
  const {image, username} = currentUser
  const [newComment, setNewComment] = useState('');
  const handleButtonClick = () => {
    addNewComment(newComment)
    setNewComment('')
  } 

  return (
   
    
    <div className='new-comment'>
      <textarea type="text" placeholder='Add a comment...' onChange={e => setNewComment(e.target.value)} value={newComment}/>
      <img src={image.png} alt={username} />
      <button onClick={handleButtonClick}>Send</button>
    </div>
  )
}

export default NewComment