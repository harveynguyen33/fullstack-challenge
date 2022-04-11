import { IMovie } from '@fullstack-challenge/shared/data-model';

import './style.scss';
import TableTR from './tr';

type OwnProps<T> = {
  title: string;
  headers: string[];
  data: T[];
};

const Table: React.FC<OwnProps<IMovie>> = ({ title, headers, data }) => {
  const headerRender = headers?.length && (
    <tr>
      {headers.map((head: string) => (
        <th>{head}</th>
      ))}
    </tr>
  );
  const bodyRender = data?.length ? data.map((item) => <TableTR data={item} />) : [];
  return (
    <>
      <h1>{title}</h1>
      <table>
        {headerRender}
        {bodyRender}
      </table>
    </>
  );
};

export default Table;
