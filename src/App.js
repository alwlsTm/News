import { useCallback, useState } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import styles from './App.module.css';
import Nav from './components/Nav';

function App() {
  const [category, setCategory] = useState("all");  //카테고리 state
  const onSelect = useCallback((category) => setCategory(category), []);
  console.log(category);

  return (
    <div className={styles.App}>
      <Header />
      <Nav onSelect={onSelect} />
      <NewsList />
    </div>
  );
}

export default App;
