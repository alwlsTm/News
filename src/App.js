import Header from './components/Header';
import NewsList from './components/NewsList';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <NewsList />
    </div>
  );
}

export default App;
