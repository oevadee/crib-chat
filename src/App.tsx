import { useEffect } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./routes/Home/Home";
import ChatRoom from "./routes/ChatRoom/ChatRoom";
import Profile from "./routes/Profile/Profile";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "./actions/appAction";
import { ICombinedReducers } from "./store";

function App() {
  const user = useSelector((state: ICombinedReducers) => state.user.user);
  const sidebarOpen = useSelector(
    (state: ICombinedReducers) => state.app.sidebarOpen
  );
  const sidebarDispatch = useDispatch();

  const onToggleSidebar = () => {
    sidebarDispatch(toggleSidebar());
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    console.log(sidebarOpen);
  }, [sidebarOpen]);

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
}

export default App;
