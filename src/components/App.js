import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'milligram';

import Users from './pages/Users';
import Albums from './pages/Albums';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
          </ul>
        </nav>

        <Route path="/users" component={Users} />
        <Route path="/albums" component={Albums} />
      </div>
    </Router>
  );
}

export default App;
