import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe ('App />', () => {
  it('runs the app properly', () => {
    render (<App />);

  });

  it('shows at-bat count', () => {
    const { getbyText } = render(<App />);
    getbyText(/balls/i);
    getbyText(/strikes/i)
  
  });

})