import {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {
    const[title, setTitle] = useState('')
    const[text, setText] = useState('')
    const[isPending, setIsPending] = useState(false)
    const history = useHistory();

    const token = localStorage.getItem('token');
    const decodeToken = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(atob(base64));
    };
      
    const decodedUser = decodeToken(token);
    const author = decodedUser.firstName + " " + decodedUser.lastName;

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, text, author};
        
        setIsPending(true);

        fetch('http://localhost:4000/api/posts/post/new', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
        
    }

    return (
        <div className="create">
          <h2>Add a New Blog</h2>
          <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input 
              type="text" 
              required 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            {!isPending &&<button>Add Blog</button>}
            {isPending &&<button>Adding Blog...</button>}
          </form>
        </div>
      );
}
 
export default Create;