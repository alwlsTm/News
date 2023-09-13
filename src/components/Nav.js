import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../store/slices/categorySlice';
import styles from './Nav.module.css';

const categories = [
  {
    name: "general",
    text: "전체",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

function Nav() {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.locale.value);  //locale state
  const category = useSelector((state) => state.category.value);    //카테고리 state

  return (
    <div className={styles.Nav}>
      {categories.map((item) => {
        const text = locale === "kr" ? item.text : item.name;

        return (
          <div
            key={item.name}
            className={category === item.name ? styles.active : styles.category}
            onClick={() => dispatch(setCategory(item.name))}
          >
            {text}
          </div>
        )
      })}
    </div>
  );
}


export default Nav;