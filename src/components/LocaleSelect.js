import styles from './LocaleSelect.module.css';

function LocaleSelect({ locale, onChange }) {
  return (
    <select className={styles.LocaleSelect} value={locale} onChange={onChange}>
      <option value="kr">KR</option>
      <option value="us">US</option>
    </select>
  );
}

export default LocaleSelect;