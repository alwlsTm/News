import styles from './Header.module.css';
import logo from '../img/logo.jpg';
import search from '../img/search.png';

function Header({ keyword, onChange, onSubmit }) {
  return (
    <div className={styles.Header}>
      <img className={styles.logo} src={logo} alt="News"></img>
      <form className={styles.search} onSubmit={onSubmit}>
        <input
          className={styles.searchBar}
          type="text"
          value={keyword}
          placeholder='뉴스 검색'
          onChange={onChange}>
        </input>
        <button className={styles.submit} type='submit'>
          <img className={styles.submitImg} src={search} alt='검색'></img>
        </button>
      </form>
    </div>
  );
}

export default Header;