import styles from './Header.module.css';
import logo from '../img/logo.jpg';
import search from '../img/search.png';
import LocaleSelect from './LocaleSelect';

function Header({ keyword, locale, onChangeKeyword, onChangeLocale, onSubmit }) {
  return (
    <div className={styles.Header}>
      <img className={styles.logo} src={logo} alt="News"></img>
      <LocaleSelect locale={locale} onChange={onChangeLocale} />
      <form className={styles.search} onSubmit={onSubmit}>
        <input
          className={styles.searchBar}
          type="text"
          value={keyword}
          placeholder='뉴스 검색'
          onChange={onChangeKeyword}>
        </input>
        <button className={styles.submit} type='submit'>
          <img className={styles.submitImg} src={search} alt='검색'></img>
        </button>
      </form>
    </div>
  );
}

export default Header;