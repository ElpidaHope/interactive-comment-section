import CommentList from './components/CommentList';
import NewComment from './components/NewComment';
import { nanoid } from 'nanoid';

import './App.css';
import { useEffect, useState } from 'react';


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => { setData(data); setLoading(true)})
  }

  // Add New Comment
  const addNewComment = (text) => {
    const comment = {
      "id": nanoid(),
      "content": text,
      "createdAt": "Now",
      "score": 0,
      "user": {
        "image": {
          "png": data.currentUser.image.png,
          "webp": data.currentUser.image.webp         
        },
        "username": data.currentUser.username
      },
      "replies": []
    }

    const newComments = [...data.comments, comment]
    const newData = {...data,
    "comments": newComments}
    setData(newData)
  }

  // Add new Reply
  const addReply = (replies, id) => {
    const updatedComments = [...data.comments]
    updatedComments.forEach(comment => {
      if (comment.id === id) {
        comment.replies = [...replies]
      }
    })

    const newData = {...data, 
      "comments": updatedComments
    }
    setData(newData)
  };

  const addAddedReply = (reply, id) => {
    const updatedComments = [...data.comments]
    updatedComments.forEach(comment => {
      if (comment.id === id){
        comment.replies.push(reply)  
      }
      
    })
    const newData = {...data,
      "comments": updatedComments
    }

    setData(newData)
  }

  // Edit
  const editReply = (content , id) => {
    const updatedComments = [...data.comments]
    updatedComments.forEach(data => {
      data.replies.forEach(reply => {
        if (data.id === id) {
          reply.content = content
        }
      })
    })
  }

  

  // Delete Reply
  const deleteReply = (id) => {
    const updatedComments = [...data.comments]
    let updatedReplies = []
    data.comments.forEach(comment => {
      comment.replies.forEach(reply => {
        if (reply.id === id) {
          updatedReplies = comment.replies.filter(reply => reply.id !== id)
          comment.replies = updatedReplies
        }
      })
    })
   
    const newData = {...data, 
        "comments": updatedComments  
    }
    setData(newData)
  }

  // Update Score
  const vote = (type, id, mathExp) => {
    const updatedComments = [...data.comments];
    if (type === "comments") {
      data.comments.map(comment => {
        if (comment.id === id) {
          if (mathExp === "increase") {
            comment.score += 1
          }
          else if (mathExp === "decrease"){
            comment.score -= 1
          }
        }
      })
    }
    else if (type === "reply") {
      data.comments.forEach(comment => {
        comment.replies.map(reply => {
          if (reply.id === id) {
            if (mathExp === "increase") {
              reply.score += 1
            }
            else if (mathExp === "decrease") {
              reply.score -= 1
            }
          }
        })
      })
    }
    const newData = {...data,
      "comments": updatedComments
    }
    setData(newData)
  }

  
    
  // useEffect(() => {
  //   localStorage.getItem("comments") !== null
  //     ? setComments(JSON.parse(localStorage.getItem("comments")))
  //     : fetchData()
  // },[])

    // useEffect(() => {
    //   localStorage.setItem("comments", JSON.stringify(comments));
    // }, [comments])


 
  
  
    return (
      <div className="container">
        { loading && 
          <>
              <CommentList
                key={nanoid()} 
                comments={data.comments} 
                currentUser={data.currentUser} 
                addReply={addReply}
                addAddedReply={addAddedReply}
                editReply={editReply}
                deleteReply={deleteReply}
                vote={vote}
                /> 
              <NewComment currentUser={data.currentUser} addNewComment={addNewComment}/>
          </>
        }     
      </div>
    )
}

export default App;