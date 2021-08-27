import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import { initialState } from '../../redux/reducer';
import SortBy from './sort-by';

const mockStore = configureStore();

test('loads and displays greeting', async () => {
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <SortBy getNews={jest.fn()} />
    </Provider>,
  );

  expect(screen.getByTestId('relevancy')).not.toBeChecked();
  expect(screen.getByTestId('popularity')).not.toBeChecked();
  expect(screen.getByTestId('publishedAt')).not.toBeChecked();

  act(() => {
    fireEvent.click(screen.getByTestId('relevancy'));
  });

  expect(screen.getByTestId('relevancy')).toBeChecked();
  expect(screen.getByTestId('popularity')).not.toBeChecked();
  expect(screen.getByTestId('publishedAt')).not.toBeChecked();

  act(() => {
    fireEvent.click(screen.getByTestId('publishedAt'));
  });

  expect(screen.getByTestId('publishedAt')).toBeChecked();
  expect(screen.getByTestId('popularity')).not.toBeChecked();
  expect(screen.getByTestId('relevancy')).not.toBeChecked();
});
