const PagesComponent = ({
  totalPages,
  onNextPage,
  onBackPage,
  onChangePage,
}) => {
  const pagesArray = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);
  return (
    <div>
      <button onClick={() => onBackPage()}>Back</button>

      {pagesArray.map((page) => (
        <button key={page} onClick={() => onChangePage(page)}>{page}</button>
      ))}

      <button onClick={() => onNextPage()}>Next</button>
    </div>
  );
};

export default PagesComponent;
