import { useDispatch, useSelector } from 'react-redux';
import { setLocale } from '../store/slices/localeSlice';
import styles from './LocaleSelect.module.css';

function LocaleSelect() {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.locale.value);  //locale state
  const onChange = (e) => dispatch(setLocale(e.target.value));

  return (
    <select className={styles.LocaleSelect} value={locale} onChange={onChange}>
      <option value="kr">KR</option>
      <option value="us">US</option>
    </select>
  );
}

export default LocaleSelect;