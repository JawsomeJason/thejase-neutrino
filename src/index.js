import React from 'react';
import App from './components/App';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const renderApp = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root'),
  );
};

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./components/App', () => renderApp());
}

renderApp();
