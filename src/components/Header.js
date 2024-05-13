import { getArticle } from '../store/slices/articleSlice';
import { setKeyword } from '../store/slices/keywordSlice';
import LocaleSelect from './LocaleSelect';
import styles from './Header.module.css';
import logo from '../img/logo.jpg';
import search from '../img/search.png';

function Header({ dispatch, locale, category, keyword }) {

  const onSubmit = (e) => { //검색
    e.preventDefault();
    dispatch(getArticle({ locale, category, keyword }));
  };

  return (
    <div className={styles.Header}>
      <div className={styles.container}>
        <div className={styles.logo_locale}>
          <img src={logo} alt="News"></img>
          <LocaleSelect />
        </div>
        <form className={styles.form} onSubmit={onSubmit}>
          <input
            type="text"
            value={keyword}
            placeholder={locale === "kr" ? '뉴스 검색' : 'Search News'}
            onChange={(e) => dispatch(setKeyword(e.target.value))}>
          </input>
          <div className={styles.buttons}>
            <button
              type="button"
              onClick={() => dispatch(setKeyword(""))}
              disabled={!keyword}
            >&times;
            </button>
            <button type="submit">
              <img src={search} alt='검색'></img>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Header;