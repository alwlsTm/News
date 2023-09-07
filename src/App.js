import { useSelector } from 'react-redux';
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
  const locale = useSelector((state) => state.locale.value);

  return (
    <div className={styles.App}>
      <Header />
      <Nav />
      <div className={styles.date}>
        <p className={styles.today}>{getToday(locale)}</p>
      </div>
      <NewsList />
    </div>
  );
}

export default App;
