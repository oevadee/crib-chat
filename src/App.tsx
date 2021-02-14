import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import ChatRoom from "./routes/ChatRoom/ChatRoom";
import Profile from "./routes/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { SidebarState } from "./reducers/sidebarReducer";
import { useEffect } from "react";

function App() {
  const sidebarOpen = useSelector<SidebarState>((state) => state.sidebarOpen);

  useEffect(() => {
    console.log(sidebarOpen);
  }, [sidebarOpen]);

  return (
    <div className="app">
      <Router>
        <Navbar />
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
    </div>
  );
}

export default App;
