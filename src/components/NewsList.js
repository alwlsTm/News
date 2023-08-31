import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import styles from './NewsList.module.css';
import logo from '../img/logo.jpg';
import { getArticle } from "../store/slices/articleSlice";

function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;

  return (
    <div className={styles.NewsItem}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          referrerPolicy="no-referrer"
          src={urlToImage || logo}
          alt="사진">
        </img>
      </a>
      <div className={styles.content}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h4 className={styles.title}>{title}</h4>
        </a>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

function NewsList({ keyword, locale }) {
  const [page, setPage] = useState(1);  //페이지 state
  const limit = 20;                     //페이지당 기사 개수
  const offset = (page - 1) * limit;    //페이지당 보여질 기사

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.value);  //기사 state
  const category = useSelector((state) => state.category);       //카테고리 state

  const qLocale = `country=${locale}&`;  //ex) country=kr
  const qCategory = category.value === "all" ? "" : `category=${category.value}&`;  //ex) &category=healty
  const qKeyword = keyword === null ? "" : `q=${keyword}&`;  //ex) q=여름&

  useEffect(() => {
    dispatch(getArticle(qCategory));
  }, [dispatch, qCategory]);

  return (
    <>
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
      {articles.length > 20 ? (
        <div className={styles.Pagination}>
          <Pagination
            total={articles.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </div>
      ) : (
        <div className={styles.Pagination}>
        </div>
      )}
    </>
  );
}

export default NewsList;