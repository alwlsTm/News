import styles from './Header.module.css';
import logo from '../img/logo.jpg';
import search from '../img/search.png';
import LocaleSelect from './LocaleSelect';

function Header({ keyword, locale, onChangeKeyword, onChangeLocale, onSubmit }) {
  return (
    <div className={styles.Header}>
      <div className={styles.logoSelect}>
        <img className={styles.logo} src={logo} alt="News"></img>
        <div className={styles.LocaleSelect}>
          <LocaleSelect locale={locale} onChange={onChangeLocale} />
        </div>
      </div>
      <form className={styles.search} onSubmit={onSubmit}>
        <input
          className={styles.searchBar}
          type="text"
          value={keyword}
          placeholder={locale === "kr" ? '뉴스 검색' : 'Search News'}
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