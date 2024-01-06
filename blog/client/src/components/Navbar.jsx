import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  const token = localStorage.getItem("token");
  const decodeToken = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(atob(base64));
  };

  const decodedUser = decodeToken(token);
  console.log(decodedUser);

  return (
    <nav className="navbar">
      <h1>The Blog</h1>
      <div className="links">
        <span style={{ color: "#f1356d" }}>
          {decodedUser.firstName} {decodedUser.lastName}
        </span>
        {decodedUser.firstName == "Admin" &&
          decodedUser.lastName == "Admin" && (
            <Link to="/addAuthor">Add Author</Link>
          )}
        {decodedUser.isAdmin && <Link to="/create">New Blog</Link>}
        <Link to="/">Home</Link>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
