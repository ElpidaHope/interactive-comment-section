import '../styles/UpVote.css'

const UpVote = ({score, vote, reply, comment}) => {
  const upVote = () => {
    if (reply) {
      vote("reply",reply.id, "increase")
    }
    else if(comment) {
      vote("comments", comment.id, "increase")
    }
  }

  const downVote = () => {
    if (reply) {
      vote("reply", reply.id, "decrease")
    }
    else if (comment) {
      vote("comments", comment.id, "decrease")
    }
  }

  return (
    <div className='upvote'>
      <img src="images/icon-plus.svg" alt="plus" onClick={upVote}/>
      <input type="text" defaultValue={score}/>
      <img src="images/icon-minus.svg" alt="minus" onClick={downVote}/>
    </div>
  )
}

export default UpVote;