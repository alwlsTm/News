import { useCallback, useState } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import styles from './App.module.css';
import Nav from './components/Nav';

function getToday() {
  const today = new Date();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  return `${today.getMonth() + 1} / ${today.getDate()} (${week[today.getDay()]})`;
}

function App() {
  const [category, setCategory] = useState("all");  //카테고리 state
  const [keyword, setKeyword] = useState("");       //검색 키워드 state
  const [locale, setLocale] = useState("kr");       //locale state

  const onSelect = useCallback((category) => setCategory(category), []);
  // console.log(category);

  const onChangeKeyword = (e) => setKeyword(e.target.value);
  const onSubmit = (e) => e.preventDefault();

  const onChangeLocale = (e) => setLocale(e.target.value);
  // console.log(locale);

  return (
    <div className={styles.App}>
      <Header
        keyword={keyword}
        locale={locale}
        onChangeKeyword={onChangeKeyword}
        onChangeLocale={onChangeLocale}
        onSubmit={onSubmit}>
      </Header>
      <Nav category={category} onSelect={onSelect} />
      <div className={styles.date}>
        <p className={styles.today}>{getToday()}</p>
      </div>
      <NewsList category={category} keyword={keyword} locale={locale} />
    </div>
  );
}

export default App;
