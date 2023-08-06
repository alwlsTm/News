function Pagination({ total, limit, page, setPage }) {
  const pageNum = Math.ceil(total / limit); //총 페이지 수

  return (
    <div>
      {Array(pageNum).fill()
        .map((_, idx) => (
          <button key={idx + 1} onClick={() => setPage(idx + 1)}>
            {idx + 1}
          </button>
        ))}
    </div>
  );
}

export default Pagination;