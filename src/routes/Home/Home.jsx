import React from 'react';
import Home from '../../components/Home';
import { DATA as projects } from '../../components/Project/Project.reducer';
import {
  skills,
  testimonials,
} from '../../data';

const props = {
  projects,
  skills,
  testimonials,
};

const HomeRoute = () => <Home {...props} />;

export default HomeRoute;
