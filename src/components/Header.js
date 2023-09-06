import { useDispatch, useSelector } from 'react-redux';
import { setKeyword } from '../store/slices/keywordSlice';
import LocaleSelect from './LocaleSelect';
import styles from './Header.module.css';
import logo from '../img/logo.jpg';
import search from '../img/search.png';

function Header({ locale, onChangeLocale }) {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.keyword.value);
  const onSubmit = (e) => e.preventDefault();

  return (
    <div className={styles.Header}>
      <div className={styles.logo_select}>
        <img className={styles.logo} src={logo} alt="News"></img>
        <div className={styles.LocaleSelect}>
          <LocaleSelect locale={locale} onChange={onChangeLocale} />
        </div>
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          type="text"
          value={keyword}
          placeholder={locale === "kr" ? '뉴스 검색' : 'Search News'}
          onChange={(e) => dispatch(setKeyword(e.target.value))}>
        </input>
        <button
          onClick={() => dispatch(setKeyword(""))}
          disabled={!keyword}>X
        </button>
        <button type='submit'>
          <img src={search} alt='검색'></img>
        </button>
      </form>
    </div>
  );
}

export default Header;