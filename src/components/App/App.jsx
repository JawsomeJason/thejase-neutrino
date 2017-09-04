import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { styles as s } from '.';
import { className as c } from '../../utils/style-utils';

import AsyncHome from '../../routes/Home';
import AsyncProject from '../../routes/Project';
import Nav from '../Nav';
import HireMe from '../HireMe';

const App = () => (
  <Router>
    <div {...c(s.container)} role="application">
      <header {...c(s.header)} role="banner">
        <p {...c(s.title)}>Jason Featheringham</p>
      </header>
      <nav {...c(s.navigation)}>
        <Nav />
      </nav>
      <main {...c(s.content)}>
        <Route exact path="/" component={AsyncHome} />
        <Route exact path="/project-:id" component={AsyncProject} />
      </main>
      <aside {...c(s.hire)}>
        <HireMe />
      </aside>
      <footer {...c(s.footer)} role="contentinfo">

        <small {...c(s.small)}>
          Proudly made by hand with React, CSS Grids, and a lot of elbow grease.
        </small>
      </footer>
    </div>
  </Router>
);

export default App;
