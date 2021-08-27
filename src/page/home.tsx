import { FC, useState } from 'react';
import ArticlesField from '../components/articles-field/articles-field';
import Pagination from '../components/pagination/pagination';
import SearchBar from '../components/search-bar/search-bar';
import SortBy from '../components/sort-by/sort-by';
import { ArticlesModel } from '../models/articles';

const Home: FC = () => {
  const [pageSize, setPageSize] = useState<number>(20);
  const [page, setPage] = useState<number>(1);
  const [sort, setSortBy] = useState<string>('relevancy');
  const [articles, setArticles] = useState<ArticlesModel[]>([]);
  const [allPage, setAllPage] = useState<number>(1);

  return (
    <div>
      <SearchBar
        pageSize={pageSize}
        setArticles={setArticles}
        sort={sort}
        page={page}
        setAllPage={setAllPage}
      />
      <SortBy setSortBy={setSortBy} />
      <ArticlesField articles={articles} />
      <Pagination
        pageSize={pageSize}
        setPageSize={setPageSize}
        setPage={setPage}
        page={page}
        allPage={allPage}
      />
    </div>
  );
};

export default Home;
