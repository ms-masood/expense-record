import React from "react";
import { Link } from 'react-router-dom';

import './styles.css';

const AddRecordsForm = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form>
            <div className="form-row">
              <div className="form-fields">
                <label>Sept</label>
              </div>
              <div className="form-fields">
                <input type="text" className="form-fieldss" />
              </div>
            </div>
            <div className="form-row">
              <label>Date</label>
              <input type="text" className="form-fieldss" placeholder="Date" />
            </div>
            <div className="form-row">
              <label>Category</label>
              <input type="text" className="form-fieldss" placeholder="Category" />
            </div>
            <div className="form-row">
              <label>Description</label>
              <input
                type="text"
                className="form-fieldss"
                placeholder="Description"
              />
            </div>
            <div className="form-row">
              <label>Amount</label>
              <input type="text" className="form-fieldss" placeholder="Amount" />
            </div>
            <div className="form-btn">
              <Link to={`/`} className="btn btn-cancel" onClick={()=>{}} >
                {"Cancel"}
              </Link>
              <button className="btn btn-save">Save</button>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default AddRecordsForm;
