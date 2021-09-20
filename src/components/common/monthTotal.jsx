import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MonthTotal = (props) => {
  const records = useSelector((state) => state.records);
  const pageData = records?.records;
  let [monthTotal, setMonthTotal] = useState(0);

  const date = new Date();
  const currentMonth = date.toLocaleString('default', { month: 'short' });

  const sumTotal = (arr) => {
    let sum = 0;
    for (const input of arr) {
      if (!!input.amount) sum += Number(input.amount);
    }
    return sum;
  }

  useEffect(() => {
    if(!!pageData) {
      let temp = sumTotal(pageData);
      if(!!temp)
        setMonthTotal(temp);
    }
  }, [pageData]);

  return (
    <div className="form-row">
      <div className="form-fields">
        <label>{currentMonth}:</label>
      </div>
      <div className="form-fields">
        <span className="form-fieldss">${monthTotal}</span>
      </div>
    </div>
  );
};

export default MonthTotal;
