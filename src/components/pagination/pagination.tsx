import { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { PaginationProps } from '../../models/props';
import { getParamNews } from '../../redux/action';

import './pagination.css';

const Pagination: FC<PaginationProps> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const { page, pageSize, totalResults } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const regex = /\d+/;
    const matchedValue = value.match(regex);
    if (matchedValue) {
      const newValue = +matchedValue[0];
      dispatch(getParamNews(name, newValue));
    } else {
      dispatch(getParamNews(name, ''));
    }
  };

  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      dispatch(
        getParamNews(
          (event.target as HTMLInputElement).name,
          (event.target as HTMLInputElement).value,
        ),
      );
      props.getNews();
    }
  };

  return (
    <div className="container-pagination">
      <label className="label-pagination" htmlFor="pagination">
        Page:
        <input
          className="input-pagination"
          type="text"
          name="page"
          data-testid="page"
          value={page}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => keyPress(event)}
          onBlur={(e) => {
            dispatch(getParamNews(e.target.name, e.target.value));
            props.getNews();
          }}
        />
      </label>
      <label className="label-pagination" htmlFor="pagination">
        Page size:
        <input
          className="input-pagination"
          type="text"
          name="pageSize"
          data-testid="pageSize"
          value={pageSize}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => keyPress(event)}
          onBlur={(e) => {
            dispatch(getParamNews(e.target.name, e.target.value));
            props.getNews();
          }}
        />
      </label>
      <h2>All pages: {Math.ceil(totalResults / +pageSize)}</h2>
    </div>
  );
};

export default Pagination;
