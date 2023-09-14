import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../store/slices/articleSlice";
import Pagination from "./Pagination";
import styles from './NewsList.module.css';
import logo from '../img/logo.jpg';
import NotFound from "./NotFound";

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

function NewsList() {
  const [page, setPage] = useState(1);  //페이지 state
  const limit = 20;                     //페이지당 기사 개수
  const offset = (page - 1) * limit;    //페이지당 보여질 기사

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.value);  //기사 state
  const locale = useSelector((state) => state.locale.value);     //locale state
  const category = useSelector((state) => state.category.value); //카테고리 state
  const keyword = useSelector((state) => state.keyword.value);   //키워드 state

  useEffect(() => {
    if (!keyword) {
      dispatch(getArticle({ locale, category }));
    }
    setPage(1); //페이지 초기화
  }, [dispatch, locale, category, keyword]);  //locale, 카테고리 변경 시 리렌더링

  return (
    <>
      {keyword && articles.length === 0 ? ( //검색 결과가 없다면
        <NotFound />
      ) : (
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
      )}
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