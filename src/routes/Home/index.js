import { asyncComponent } from 'react-async-component';

const AsyncHome = asyncComponent({
  resolve: () => import('./Home'),
});

export default AsyncHome;
