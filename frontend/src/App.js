import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import SignUpPage from "./components/SignUp";
import HomePage from "./components/Home";
import LoginPage from "./components/Login";

function App() {
  return (
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
      </header>
      <main>
        <Switch>
          <Route exact path = "/" component={HomePage}/>
          <Route exact path = "/signup" component={SignUpPage}/>
          <Route exact path = "/login" component={LoginPage}/>
        </Switch>
      </main>
    </Router>
      
  );
}

export default App;
