import '../styles/ReplyIcon.css'

const ReplyIcon = ({Clicked}) => {
  return (
    <div className='reply-icon' onClick={Clicked}>
      <img src="images/icon-reply.svg" alt="" />
      <p>Reply</p>
    </div>
  )
}

export default ReplyIcon;