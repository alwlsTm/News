import styles from './Status.module.css';

function Status({ loading }) {
  return (
    <div className={styles.Status}>
      {loading ?
        <p>로딩 중...</p>
        :
        <p>검색어에 대한 결과가 없습니다.</p>
      }
    </div>
  );
}

export default Status;