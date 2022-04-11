type OwnProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};

const Pagination: React.FC<OwnProps> = ({ page, setPage, totalPages }) => {
  const pageRender = () => {
    const pageRender = [];
    for (let i = 1; i <= totalPages; i++) {
      const classes = page === i ? 'paginate-item active' : 'paginate-item';
      pageRender.push(
        <span className={classes} onClick={() => setPage(i)}>
          {i}{' '}
        </span>,
      );
    }
    return pageRender;
  };

  return (
    <div className="pagination">
      <span className="paginate-item" onClick={() => page !== 1 && setPage(page - 1)}>
        &laquo;
      </span>
      {pageRender()}
      <span className="paginate-item" onClick={() => page !== totalPages && setPage(page + 1)}>
        &raquo;
      </span>
    </div>
  );
};

export default Pagination;
