import Comment from "./Comment";
import { nanoid } from 'nanoid';

const CommentList = ({comments, currentUser, addReply, addAddedReply, editReply, showModal, deleteReply, vote}) => (
  comments.map(comment => (
        <div key={nanoid()}>
          <Comment comment={comment} currentUser={currentUser} addReply={addReply} addAddedReply={addAddedReply} editReply={editReply} showModal={showModal} deleteReply={deleteReply} vote={vote}/>
        </div>
    )
  )
)

export default CommentList;