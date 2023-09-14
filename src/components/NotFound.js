import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.NotFound}>
      <p>검색어에 대한 결과가 없습니다.</p>
    </div>
  );
}

export default NotFound;