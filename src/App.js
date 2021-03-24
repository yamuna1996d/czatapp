import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TinderCards from './TinderCards';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/chat">
            <h2>Chat Page</h2>
          </Route>
          <Route path="/">
            <TinderCards/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
