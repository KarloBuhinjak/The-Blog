import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Comments = ({blogID, user}) => {

    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
  
    const handleCommentChange = (event) => {
      setCommentText(event.target.value);
    };
  
    const handleCommentPost = async () => {
      try {
        const response = await axios.post('http://localhost:4000/api/comments/new', {
          firstName: user.firstName, 
          lastName: user.lastName,
          isAdmin: user.isAdmin,
          text: commentText,
          postId: blogID,
        });
        
        setComments([...comments, response.data]);
        setCommentText('');
      } catch (error) {
        console.error('Greška prilikom slanja komentara:', error);
      }
    };
    

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:4000/api/comments/all/${blogID}`); // Zamijenite 'your_post_id' s ID-om koji želite pretražiti
            setComments(response.data);
          } catch (error) {
            console.error('Greška prilikom dohvata podataka:', error);
          }
        };
    
        fetchData();
      }, []);
    

    const sortedComments = comments
    .slice()
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .reverse();
  
    return (
      <div className="comments-section">
        <h2>Comments</h2>
        <div className="comment-input">
          <input
            type="text"
            placeholder="Write a comment..."
            id="commentText"
            value={commentText}
            onChange={handleCommentChange}
          />
          <button onClick={handleCommentPost}>Post</button>
        </div>
        <ul id="commentList">
          {sortedComments.map((comment) => (
            <li key={comment._id}>
              <span id="comment-user" >
                <span style={{color: comment.isAdmin ? '#f1356d' : 'black'}}>
                  {comment.firstName} {comment.lastName}:
                </span>
                {comment.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  
      
}
 
export default Comments;