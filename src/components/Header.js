import styles from './Header.module.css';
import logo from '../img/logo.jpg';

function Header() {
  return (
    <div className={styles.Header}>
      <img className={styles.logo} src={logo} alt="News"></img>
    </div>
  );
}

export default Header;