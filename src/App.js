import { useState } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Nav from './components/Nav';
import styles from './App.module.css';

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
  const [locale, setLocale] = useState("kr"); //locale state

  const onChangeLocale = (e) => setLocale(e.target.value);

  return (
    <div className={styles.App}>
      <Header
        locale={locale}
        onChangeLocale={onChangeLocale}>
      </Header>
      <Nav locale={locale} />
      <div className={styles.date}>
        <p className={styles.today}>{getToday(locale)}</p>
      </div>
      <NewsList locale={locale} />
    </div>
  );
}

export default App;
