import Navbar from "./components/Navbar";
import Signup from "./pages/Signup/index";
import Login from "./pages/Login/index";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./pages/Create";
import AddAuthor from "./pages/AddAuthor";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            {user && (
              <Route exact path="/">
                <Navbar />
                <div className="content">
                  <Home />
                </div>
              </Route>
            )}
            <Route exact path="/register">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/create">
              <Navbar />
              <div className="content">
                <Create />
              </div>
            </Route>
            <Route exact path="/addAuthor">
              <Navbar />
              <div className="content">
                <AddAuthor />
              </div>
            </Route>
            <Route exact path="/blogs/:id">
              <Navbar />
              <div className="content">
                <BlogDetails />
              </div>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
