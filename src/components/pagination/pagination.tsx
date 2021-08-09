import { ChangeEvent, FC, useEffect, useState } from 'react';
import { PageProps } from '../../models/props';

import './pagination.scss';

const Pagination: FC<PageProps> = (props): JSX.Element => {
  const [artPage, setArtPage] = useState<number | string>('');
  const [countNews, setCountNews] = useState<number | string>('');
  const { page, allPage, pageSize } = props;

  useEffect(() => {
    setArtPage(page);
    setCountNews(pageSize);
  }, [page, pageSize]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, setPropsPage: any, setInputPage: any) => {
    const { value } = e.target;
    const regex = /\d+/;
    const matchedValue = value.match(regex);
    if (matchedValue) {
      const newValue = +matchedValue[0];
      setPropsPage(newValue);
      setInputPage(newValue);
    } else {
      setInputPage('');
    }
  };

  return (
    <div className="pagination">
      <label htmlFor="pagination">
        Page:
        <input
          type="text"
          value={artPage}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(e, props.setPage, setArtPage)
          }
        />
      </label>
      <label htmlFor="pagination">
        Page size:
        <input
          type="text"
          value={countNews}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(e, props.setPageSize, setCountNews)
          }
        />
      </label>
      <h2>All pages: {Math.ceil(allPage / +countNews)}</h2>
    </div>
  );
};

export default Pagination;
