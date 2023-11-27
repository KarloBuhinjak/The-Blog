import { useHistory, useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import Comments from "../components/Comments";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:4000/api/posts/post/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:4000/api/posts/post/delete/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  const token = localStorage.getItem("token");
  const decodeToken = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(atob(base64));
  };

  const decodedUser = decodeToken(token);

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p>{new Date(blog.timestamp * 1000).toLocaleString()}</p>
          <div>{blog.text}</div>
          {decodedUser.isAdmin && <button onClick={handleClick}>delete</button>}
        </article>
      )}
      <Comments blogID={id} user={decodedUser} />
    </div>
  );
};

export default BlogDetails;
