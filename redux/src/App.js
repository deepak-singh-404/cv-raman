import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path='/dashboard' exact component={Dashboard} />

        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
