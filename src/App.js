import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main, article, not404,write } from '../src/components/pages';

function App() {
  return (
    <div class="App">

      <Router>
        {/* <div>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/article">article</Link></li>          
        </div> */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/article" component={article} />
          <Route path="/write" component={write} />
          <Route path="/" component={not404} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;