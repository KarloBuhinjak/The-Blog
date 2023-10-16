import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddAuthor = () => {
    const [data, setData] = useState({
        firstName: "",
		lastName: "",
		email: "",
		password: "", 
    })
    const history = useHistory();

    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/api/users/addAuthor";
			const { data: res } = await axios.post(url, data);
			history.push("/"); 
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

    return ( 
        <div className="create">
          <h2>Add New Author</h2>
          <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input 
              type="text" 
              required
              name="firstName"
			  onChange={handleChange}		
            />
            <label>Last Name:</label>
            <input 
              type="text" 
              required
              name="lastName"
              onChange={handleChange}
            />
            <label>Email:</label>
            <input 
              type="email" 
              required
              name="email"
			  onChange={handleChange}
            />
            <label>Password:</label>
            <input 
              type="password" 
              required
              name="password"
			  onChange={handleChange}
            />
            
            <button >Add New Author</button>
          </form>
        </div>
      
     )
}
export default AddAuthor;
