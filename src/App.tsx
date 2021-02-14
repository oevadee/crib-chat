import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import ChatRoom from "./routes/ChatRoom/ChatRoom";
import Profile from "./routes/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Sidebar />
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
