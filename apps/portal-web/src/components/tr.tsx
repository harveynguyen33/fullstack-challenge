import { IMovie } from '@fullstack-challenge/shared/data-model';

type OwnProps<T> = {
  data: T;
};

const TableTR: React.FC<OwnProps<IMovie>> = ({ data }) => {
  const tdRender = Object.values(data).map((item) => <td>{item}</td>);
  return <tr>{tdRender}</tr>;
};

export default TableTR;
