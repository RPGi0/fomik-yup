import React from 'react';
import ReactDOM from 'react-dom';
import FormikApp from './SimpleForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormikDemo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
