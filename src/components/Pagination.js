import styles from './Pagination.module.css';

function Pagination({ total, limit, page, setPage }) {
  const pageNum = Math.ceil(total / limit); //총 페이지 수

  return (
    <>
      {Array(pageNum).fill()
        .map((_, idx) => (
          <button
            className={page === idx + 1 ? styles.active : styles.button}
            key={idx + 1}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
    </>
  );
}

export default Pagination;