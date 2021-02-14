import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  const sidebarOpen = useSelector<SidebarState>((state) => state.sidebarOpen);
  const sidebarDispatch = useDispatch();
  const user = null;

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
