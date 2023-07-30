import { useCallback, useState } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import styles from './App.module.css';
import Nav from './components/Nav';

function getToday(locale) { // kr/us 날짜 함수
  const today = new Date();
  const localeDate = locale === "kr" ? "ko-KR" : "en-us";
  const date = today.toLocaleDateString(`${localeDate}`, {
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  });
  return date;
}

function App() {
  const [category, setCategory] = useState("all");  //카테고리 state
  const [keyword, setKeyword] = useState("");       //검색 키워드 state
  const [locale, setLocale] = useState("kr");       //locale state

  const onSelect = useCallback((category) => setCategory(category), []);

  const onChangeKeyword = (e) => setKeyword(e.target.value);
  const onClearClick = () => setKeyword("");
  const onSubmit = (e) => e.preventDefault();

  const onChangeLocale = (e) => setLocale(e.target.value);

  return (
    <div className={styles.App}>
      <Header
        keyword={keyword}
        locale={locale}
        onChangeKeyword={onChangeKeyword}
        onChangeLocale={onChangeLocale}
        onClick={onClearClick}
        onSubmit={onSubmit}>
      </Header>
      <Nav category={category} onSelect={onSelect} locale={locale} />
      <div className={styles.date}>
        <p className={styles.today}>{getToday(locale)}</p>
      </div>
      <NewsList category={category} keyword={keyword} locale={locale} />
    </div>
  );
}

export default App;
