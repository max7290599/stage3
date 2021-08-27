import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';

// const ReduxProvider = ({ children, reduxStore }) => (
//   <Provider store={reduxStore}>{children}</Provider>
// );

test('loads and displays greeting', async () => {
  render(
    <Router>
      <Header />
    </Router>,
  );

  expect(screen.getAllByTestId('menu')).toHaveLength(1);
  const menuItem = screen.getAllByTestId('menu-item');
  expect(menuItem).toHaveLength(2);

  expect(screen.getAllByText('Home')).toHaveLength(1);
  expect(screen.getAllByText('About')).toHaveLength(1);
});
