import { useState } from "react";
import "../css/pagination.css"

const Pagination = ({ page, setPage, maximun }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPage(parseInt(page) + 1);
  };
  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setPage(parseInt(page) - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      setPage(parseInt(e.target.value));
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(maximun) ||
        isNaN(parseInt(e.target.value))
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container">
      <button
        className="previousPage"
        disabled={page === 1 || page < 1}
        onClick={previousPage}
      >
        <i className='bx bx-chevron-left'></i>
      </button>
      <div className="input__content">
        <input
          type="text"
          className="input__pagination"
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
          name="page"
          autoComplete="off"
          value={input}
        />
        &nbsp;
        <p className="poke__of">de  &nbsp;
          <span className="poke__of-span"> {Math.ceil(maximun)}</span>
        </p>
      </div>
      <button
        className="nextPage"
        disabled={page === Math.ceil(maximun) || page > Math.ceil(maximun)}
        onClick={nextPage}
      >
        <i className='bx bx-chevron-right'></i>
      </button>
    </div>
  );
};

export default Pagination;
