import Button from './Button';

const DateFilter = ({
  label = 'Từ ngày :',
  fromDate,
  toDate,
  onFromChange,
  onToChange,
  onRefresh,
  extra,
}) => {
  return (
    <div className="date-filter">
      <span className="date-filter__label">{label}</span>
      <input
        type="date"
        className="field-input field-input--date"
        value={fromDate}
        onChange={(e) => onFromChange && onFromChange(e.target.value)}
      />
      <span className="date-filter__sep">~</span>
      <input
        type="date"
        className="field-input field-input--date"
        value={toDate}
        onChange={(e) => onToChange && onToChange(e.target.value)}
      />
      <Button className="cap-phat_btn-find" onClick={onRefresh} title="Làm mới">
        <i className="ri-reset-left-line"></i>
      </Button>
      {extra}
    </div>
  );
};

export default DateFilter;
