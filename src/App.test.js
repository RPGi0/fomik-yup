import React from 'react';
import ReactDOM from 'react-dom';
import FormikApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormikApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
