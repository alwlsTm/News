function LocaleSelect({ locale, onChange }) {
  return (
    <select value={locale} onChange={onChange}>
      <option value="kr">KR</option>
      <option value="us">US</option>
    </select>
  );
}

export default LocaleSelect;