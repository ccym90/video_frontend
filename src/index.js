import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';

import './index.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import RecordPage from './pages/recordpage';
import Librarypage from './pages/librarypage';
import uploadPage from './pages/uploadPage';
import { Provider } from 'react-redux';
import {Link } from 'react-router-dom';

import {initStore} from './redux/store';
const store = initStore(requireAuth);

const NoMatch = ({ location }) => (
  <div>
  <h3>No match for <code>{location.pathname}</code> <br/> Go back to <Link to='/'>Homepage</Link> </h3>
  </div>
)

const requireAuth = () => (
  <div>
  <h3> you need to login </h3>
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Librarypage} />
        <Route exact path="/Record" component={RecordPage} onEnter={requireAuth}/>
        <Route exact path="/Upload" component={uploadPage} />
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  </Provider>
   ,document.getElementById('root')
);
