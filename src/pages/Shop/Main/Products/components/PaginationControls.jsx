import styles from "./PaginationControls.module.scss";
import usePagination from "./usePagination";

function PaginationControls() {
  const { currentPage, setPage, numberOfPages } = usePagination();

  const pages = [...Array(numberOfPages || 1)];

  function renderPage(page) {
    const isActive = currentPage === page;

    const classNames = `body-text-md-bold ${styles.page} ${
      isActive ? styles.active : ""
    }`;

    return (
      <span
        key={page}
        className={classNames}
        onClick={() => {
          !isActive && setPage(page);
        }}
      >
        {page}
      </span>
    );
  }

  return (
    <div className={styles.container}>
      {pages.map((_, index) => renderPage(index + 1))}
    </div>
  );
}

export default PaginationControls;
