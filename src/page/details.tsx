import { AxiosResponse } from 'axios';
import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArticlesModel, Get200ArticlesModel } from '../models/articles';
import axios from '../server/api';

const API_KEY = 'd369957caf7c4e9385f79aa13c0ac7b4';

const Details: FC = (): JSX.Element => {
  const [article, setArticle] = useState<ArticlesModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();

  const getNewS = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<Get200ArticlesModel> = await axios.get(
        `v2/everything?qInTitle=${id}&apiKey=${API_KEY}`,
      );
      setArticle(response.data.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getNewS();
  }, [getNewS]);

  const content: JSX.Element = isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="article">
      <h2 className="title">{article[0].title}</h2>
      <img alt="" className="article-img" src={article[0].urlToImage} />
      <p className="description">{article[0].description}</p>
      <div className="container-author">
        <p>
          <span>Author: </span>
          {article[0].author}
        </p>
        <p>
          <span>Published: </span>
          {article[0].publishedAt}
        </p>
      </div>
    </div>
  );

  return content;
};

export default Details;
