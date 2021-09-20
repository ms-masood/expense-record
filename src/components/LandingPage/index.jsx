import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MonthTotal from '../common/monthTotal';
import "./styles.css";

const LandingPage = (props) => {
  const records = useSelector((state) => state.records);
  const pageData = records?.records;


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form>
            <MonthTotal />
            <div className="form-row">
              <Link to={`/add-record`} className="btn btn-add" onClick={()=>{}} >
                {"Add +"}
              </Link>
            </div>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Desc</th>
                    <th>Cat</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    pageData?.map((row, index) => {
                      return ( !!row.id &&
                        <tr key={index}>
                          <td>{row.date}</td>
                          <td>{row.desc}</td>
                          <td>{row.category}</td>
                          <td>${row.amount}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default LandingPage;
