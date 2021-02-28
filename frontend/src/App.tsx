import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./routes/Home";
import ChatRoom from "./routes/ChatRoom";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "./actions/appAction";
import { ICombinedReducers } from "./store";

const App = () => {
  const user = useSelector((state: ICombinedReducers) => state.user.user);
  const sidebarOpen = useSelector(
    (state: ICombinedReducers) => state.app.sidebarOpen
  );
  const sidebarDispatch = useDispatch();

  const onToggleSidebar = () => {
    sidebarDispatch(toggleSidebar());
  };

  return (
    <div className="app">
      {user ? (
        <Router>
          <Navbar onToggleSidebar={onToggleSidebar} />
          {sidebarOpen && <Sidebar />}
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/chatroom">
              <ChatRoom />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
      ) : (
        <Router>
          <Redirect to="/login"></Redirect>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Router>
      )}
    </div>
  );
};

export default App;
