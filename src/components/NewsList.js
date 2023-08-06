import axios from "axios";
import { useEffect, useState } from "react";
import styles from './NewsList.module.css';
import logo from '../img/logo.jpg';
import Pagination from "./Pagination";

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
  const [page, setPage] = useState(1);  //페이지 state
  const limit = 20;                     //페이지당 기사 개수
  const offset = (page - 1) * limit;    //페이지당 보여질 기사

  const qLocale = `country=${locale}&`;  //ex) country=kr
  const qCategory = category === "all" ? "" : `category=${category}&`;  //ex) &category=healty
  const qKeyword = keyword === null ? "" : `q=${keyword}&`;  //ex) q=여름&

  useEffect(() => { //뉴스 기사 로드
    const getArticles = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?' +
        `${qLocale}` +
        `${qCategory}` +
        `${qKeyword}` +
        'pageSize=100&' +
        'apiKey=5c95bcf4e770493282e390b31b3fbb07'
      );
      setArticles(response.data.articles);
      console.log(response.data.articles);
    }
    getArticles();
  }, [qLocale, qCategory, qKeyword]);  //국가, 카테고리, 키워드 변경 시 리렌더링

  return (
    <div>
      <ul className={styles.NewsList}>
        {articles.slice(offset, offset + limit)
          .map((article) => {
            return (
              <li key={article.title}>
                <NewsItem article={article} />
              </li>
            )
          })}
      </ul>
      <Pagination
        total={articles.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default NewsList;