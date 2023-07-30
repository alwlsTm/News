import axios from "axios";
import { useEffect, useState } from "react";
import styles from './NewsList.module.css';
import logo from '../img/logo.jpg';

function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;

  return (
    <div className={styles.NewsItem}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          className={styles.Image}
          referrerPolicy="no-referrer"
          src={urlToImage || logo}
          alt="사진">
        </img>
      </a>
      <div className={styles.content}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3 className={styles.title}>{title}</h3>
        </a>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

function NewsList({ category, keyword, locale }) {
  const [articles, setArticles] = useState([]);  //뉴스 기사 state
  const qLocale = `country=${locale}&`;  //ex) country=kr
  const qCategory = category === "all" ? "" : `category=${category}&`;  //ex) &category=healty
  const qKeyword = keyword === null ? "" : `q=${keyword}&`;  //ex) q=여름&

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?' +
        `${qLocale}` +
        `${qCategory}` +
        `${qKeyword}` +
        'pageSize=50&' +
        'apiKey=5c95bcf4e770493282e390b31b3fbb07'
      );
      setArticles(response.data.articles);
    }
    getArticles();
  }, [qLocale, qCategory, qKeyword]);  //국가, 카테고리, 키워드 변경 시 리렌더링

  return (
    <ul className={styles.NewsList}>
      {articles.map((article) => {
        return (
          <li key={article.title}>
            <NewsItem article={article} />
          </li>
        )
      })}
    </ul>
  );
}

export default NewsList;