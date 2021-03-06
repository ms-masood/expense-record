import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecords } from '../../api/records';

import "./styles.css";

const AppHeader = (props) => {
  const records = useSelector((state) => state.records);
  const pageData = records?.records;

  useEffect(() => {
    if(!pageData?.length) {
      fetchRecords();
    }
  });

  const menuItems = [
    {name: 'Home', route: '/', img: ''},
    {name: 'Music', route: '/', img: ''},
    {name: 'Donation', route: '/', img: ''},
    {name: 'Videos', route: '/', img: ''},
    {name: 'Gallery', route: '/', img: ''},
  ];
  return (
    <header className="main-header">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="header-logo">
              <Link to={"/"}><h2 style={{color: "#fff"}}>Logo</h2></Link>
            </div>
          </div>
          <div className="col-md-9">
            <ul className="main-manu">
              {
                menuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.route} >
                        {item.name}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
