import { useCallback, useState } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import styles from './App.module.css';
import Nav from './components/Nav';

function App() {
  const [category, setCategory] = useState("all");  //카테고리 state
  const [keyword, setKeyword] = useState("");       //검색 키워드 state

  const onSelect = useCallback((category) => setCategory(category), []);
  // console.log(category);

  const onChange = (e) => setKeyword(e.target.value);

  const onSubmit = (e) => e.preventDefault();

  return (
    <div className={styles.App}>
      <Header keyword={keyword} onChange={onChange} onSubmit={onSubmit} />
      <Nav category={category} onSelect={onSelect} />
      <NewsList category={category} keyword={keyword} />
    </div>
  );
}

export default App;
