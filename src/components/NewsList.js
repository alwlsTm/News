import axios from "axios";
import { useEffect, useState } from "react";

function NewsItem({ article }) {
  const { title, description } = article;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function NewsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=5c95bcf4e770493282e390b31b3fbb07');
      console.log(response.data.articles);
      setArticles(response.data.articles);
    }
    getArticles();
  }, []);

  return (
    <ul>
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

/*
▼0: 
  author: "강동일"
  content: "<ol><li></li><li></li><li></li><li></li><li></li></ol><ol><li></li><li></li><li></li><li></li><li></li></ol><ol><li></li><li></li><li></li><li></li><li></li></ol><ol><li></li><li></li><li></li><li></… [+203 chars]"
  description: "【 앵커멘트 】 오늘 광주와 담양에 올해 첫 폭염주의보가 내려졌습니다.  아직 6월 중순인데 본격적인 여름을 알리는 폭염이 찾아왔습니다.   이번 불"
  publishedAt: "2023-06-17T12:09:06Z"
  source: 
    id: null
    name: "Ikbc.co.kr"
  title: "광주와 담양 올해 첫 폭염주의보..불볕더위 기승 - KBC광주방송"
  url: "http://www.ikbc.co.kr/article/view/kbc202306170021"
  urlToImage: "http://www.ikbc.co.kr/data/kbc/image/2023/06/17/kbc202306170061.jpg"
*/