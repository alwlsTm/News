import styles from './Nav.module.css';

const categories = [
  {
    name: "all",
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

function Nav({ onSelect }) {
  return (
    <div className={styles.Nav}>
      {categories.map((item) => {
        return (
          <div
            key={item.name}
            className={styles.category}
            onClick={() => onSelect(item.name)}>
            {item.text}
          </div>
        )
      })}
    </div>
  );
}


export default Nav;