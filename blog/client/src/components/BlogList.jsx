import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  const sortedBlogs = blogs
    .slice()
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .reverse();

  return (
    <div className="blog-list">
      {sortedBlogs.map((blog) => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <p>{new Date(blog.timestamp * 1000).toLocaleString()}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
