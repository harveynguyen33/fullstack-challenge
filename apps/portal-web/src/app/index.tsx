import React, { useEffect, useState } from 'react';

import { IMovie, IPaginationResponse } from '@fullstack-challenge/shared/data-model';

import Pagination from '../components/pagination';
import Table from '../components/table';
import { ENDPOINTS, get } from '../interceptor';

const Headers = [
  'Film',
  'Genre',
  'Lead Studio',
  'Audience score %',
  'Profitability',
  'Rotten Tomatoes %',
  'Worldwide Gross',
  'Year',
];

const App: React.FC = () => {
  const [data, setData] = useState<IMovie[]>();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const queries = {
      page,
      size: 10,
    };
    get(ENDPOINTS.getMovieList, queries)
      .then((response) => {
        setData((response as IPaginationResponse<IMovie>).data);
        setTotalPages((response as IPaginationResponse<IMovie>).totalPages);
      })
      .catch(() => {
        throw new Error(`Can't get list`);
      });
  }, [page]);

  const renderData = data ? data : [];
  return (
    <>
      <Table title="Movie List" headers={Headers} data={renderData} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
};

export default App;
