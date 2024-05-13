import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Nav from './components/Nav';
import styles from './App.module.css';

function getToday(locale) { // kr/us 날짜 함수
  const today = new Date();
  const localeDate = locale === "kr" ? "ko-KR" : "en-US";
  const date = today.toLocaleDateString(`${localeDate}`, {
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  });
  return date;
}

function App() {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.locale.value);     //locale state
  const category = useSelector((state) => state.category.value); //카테고리 state
  const keyword = useSelector((state) => state.keyword.value);   //키워드 state

  return (
    <div className={styles.App}>
      <Header dispatch={dispatch} locale={locale} category={category} keyword={keyword} />
      <Nav dispatch={dispatch} locale={locale} category={category} keyword={keyword} />
      <div className={styles.date}>
        <p className={styles.today}>{getToday(locale)}</p>
      </div>
      <NewsList dispatch={dispatch} locale={locale} category={category} />
    </div>
  );
}

export default App;
