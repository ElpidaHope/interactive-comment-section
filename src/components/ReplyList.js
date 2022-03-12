import Reply from "./Reply";
import { nanoid } from 'nanoid'

const ReplyList = ({replies, currentUser, comment, addAddedReply, editReply, showModal, deleteReply, vote}) => {
  
  return (
    replies && replies.map(reply => <Reply key={nanoid()} reply={reply} currentUser={currentUser} comment={comment} addAddedReply={addAddedReply} editReply={editReply} showModal={showModal} deleteReply={deleteReply} vote={vote}/>)
  )

}

export default ReplyList;