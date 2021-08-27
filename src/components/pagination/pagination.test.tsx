import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Pagination from './pagination';
import { initialState } from '../../redux/reducer';

const mockStore = configureStore();

test('loads and displays greeting', async () => {
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Pagination getNews={jest.fn()} page={5} pageSize={2} totalResults={100} />
    </Provider>,
  );

  expect(screen.getByTestId('page')).toHaveAttribute('value', '5');

  expect(screen.getByTestId('pageSize')).toHaveAttribute('value', '2');
  expect(screen.getByText('All pages: 50')).toBeInTheDocument();
});
