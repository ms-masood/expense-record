import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const MonthTotal = (props) => {
  const records = useSelector((state) => state.records);
  const pageData = records?.data;

  const date = new Date();
  const currentMonth = date.toLocaleString('default', { month: 'short' });

  useEffect(() => {

  });

  return (
    <div className="form-row">
      <div className="form-fields">
        <label>{currentMonth}:</label>
      </div>
      <div className="form-fields">
        <span className="form-fieldss">${"123"}</span>
      </div>
    </div>
  );
};

export default MonthTotal;
