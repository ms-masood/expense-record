import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import MonthTotal from '../common/monthTotal';
import { addRecord } from '../../api/records';

import './styles.css';

const AddRecordsForm = (props) => {
  const [state, setState] = useState({
    formData: {
      date: new Date(),
      category: '',
      desc: '',
      amount: ''
    },
    dateValid: '',
    categoryValid: '',
    descValid: '',
    amountValid: '',
    isFormDataValid: false,
	});

  let history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0)
    validateForm();
  }, [state]);

  const handleChange = (field, value) => {
		let temp = state.formData;
    temp[field] = value;
		setState({
			...state,
			formData: temp
		});
		_validate(field);
	}

  const _validate = (field) => {
    let regex, valid;
    let value = state.formData[field];
    switch(field){
      case 'date': case 'category': case 'desc':  
        regex = /^.{2,}/;
        valid = !!value.length
        break;
      case 'amount':
        valid = value > 0;
    }
    state[field+"Valid"] = valid;
    setState({ ...state, [field+"Valid"]: valid });
  }

  const validateForm = () => {
    let formData = state;
    let form = !!formData.dateValid && !!formData.descValid && !!formData.amountValid && !!formData.categoryValid;
    if (state.isFormDataValid != form) {
      setState({
        ...state,
        isFormDataValid: form
      });
    }
  }

  const submitForm = async () => {
    let response = await addRecord(state.formData);
    history.push("/");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="form-cont">
            <MonthTotal />
            <div className="form-row">
              <label>Date</label>
              <input type="date" name="date" className="form-fieldss" placeholder="Date" value={state.formData.date} onChange={(e)=>{handleChange(e.target.name, e.target.value)}} />
            </div>
            <div className="form-row">
              <label>Category</label>
              <select className="form-fieldss" name="category" value={state.formData.category} onChange={(e)=>{handleChange(e.target.name, e.target.value)}}>
                <option value="" defaultValue>Select category...</option>
                <option value="T1">T1</option>
                <option value="T2">T2</option>
                <option value="T3">T3</option>
                <option value="T4">T4</option>
              </select>
            </div>
            <div className="form-row">
              <label>Description</label>
              <input
                type="text"
                name="desc"
                className="form-fieldss"
                placeholder="Description"
                value={state.formData.desc}
                onChange={(e)=>{handleChange(e.target.name, e.target.value)}}
              />
            </div>
            <div className="form-row">
              <label>Amount (in USD)</label>
              <input type="number" name="amount" step="1" className="form-fieldss" placeholder="Amount" value={state.formData.amount} onChange={(e)=>{handleChange(e.target.name, e.target.value)}} />
            </div>
            <div className="form-btn">
              <Link to={`/`} className="btn btn-cancel" onClick={()=>{}} >
                {"Cancel"}
              </Link>
              <button className="btn btn-save" disabled={!state.isFormDataValid} onClick={() => submitForm()} >Save</button>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default AddRecordsForm;
