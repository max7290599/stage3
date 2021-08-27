import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
import { initialState } from '../redux/reducer';
import Home from './home';

const mockStore = configureStore();

test('loads and displays greeting', async () => {
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  expect(screen.getAllByTestId('search')).toHaveLength(1);
  expect(screen.getByTestId('search')).toHaveAttribute('placeholder', 'Искать здесь...');
  expect(screen.getAllByTestId('btn-search')).toHaveLength(1);

  expect(screen.getByTestId('page')).toHaveAttribute('value', '1');
  expect(screen.getByTestId('pageSize')).toHaveAttribute('value', '20');
  expect(screen.getByText('All pages: 1')).toBeInTheDocument();
});
