import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import SignUpPage from "./components/SignUp";
import HomePage from "./components/Home";
import LoginPage from "./components/Login";
import SchedulePage from "./components/Schedular"

function App() {
  return (
    <div className="container">
      <Router>
        <header>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/schedular">
            <button>schedule</button>
          </Link>
        </header>
        
        <main>
          <Switch>
            <Route exact path = "/" component={HomePage}/>
            <Route exact path = "/signup" component={SignUpPage}/>
            <Route exact path = "/login" component={LoginPage}/>
            <Route exact path = "/schedular" component={SchedulePage}/>
          </Switch>
        </main>
      </Router>
    </div>
      
  );
}

export default App;
