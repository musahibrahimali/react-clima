import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HomePage} from '../pages/pages';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
