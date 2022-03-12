import UpVote from "./UpVote";
import ReplyIcon from "./ReplyIcon";
import ReplyList from "./ReplyList";
import '../styles/Comment.css';
import NewReply from "./NewReply";

const Comment = ({comment, 
                  currentUser, 
                  addReply, 
                  addAddedReply, 
                  editReply, 
                  showModal,
                  deleteReply,
                  vote}) => {
  
  const { content, createdAt, score, user, replies, id } = comment
  const showCommentBox = (e) => {
    e.target.parentNode.parentNode.nextElementSibling.style.display = 'grid' 
  }
  return (
      <>
        <div className="comment">
          <ul className="details">
            <li className="user-image">
            <img src={user.image.png} alt={user.username} />
            </li>
            <li className="username">
              {user.username}
            </li>
            <li className="createdAt">
              {createdAt}
            </li>
          </ul>
          <div className="content">
            <p>{content}</p>
          </div>
          <UpVote score={score} comment={comment} vote={vote}/>
          <ReplyIcon Clicked={showCommentBox}/>
        </div>
        <NewReply 
          currentUser={currentUser} 
          replies={replies} 
          username1={user.username} 
          addReply={addReply} 
          id={id} 
          edtReply={editReply}
        />
        <ReplyList 
          replies={replies} 
          currentUser={currentUser} 
          addAddedReply={addAddedReply} 
          comment={comment} 
          editReply={editReply} 
          showModal={showModal} 
          deleteReply={deleteReply} 
          vote={vote}
        />
      </>
  )
}
  

export default Comment;