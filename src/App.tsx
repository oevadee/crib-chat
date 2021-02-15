import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./routes/Home/Home";
import ChatRoom from "./routes/ChatRoom/ChatRoom";
import Profile from "./routes/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { SidebarState } from "./reducers/sidebarReducer";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "./actions/sidebarAction";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  const sidebarOpen = useSelector<SidebarState>((state) => state.sidebarOpen);
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
              <Profile setUser={setUser} />
            </Route>
          </Switch>
        </Router>
      ) : (
        <Router>
          <Redirect to="/login"></Redirect>
          <Route path="/login">
            <Login setUser={setUser} />
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
