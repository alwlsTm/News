import styles from './Header.module.css';
import logo from '../img/logo.jpg';

function Header({ keyword, onChange, onSubmit }) {
  return (
    <div className={styles.Header}>
      <img className={styles.logo} src={logo} alt="News"></img>
      <form onSubmit={onSubmit}>
        <input type="text" value={keyword} onChange={onChange}></input>
        <button type='submit'>검색</button>
      </form>
    </div>
  );
}

export default Header;