import axios from "axios";
import store from "../store/appStore";
import { toastr } from 'react-redux-toastr';

import { 
  fetchRecordsPass,
  addRecordPass
} from '../actions/records';

export const fetchRecords = (data) => {
  return axios.get('http://localhost:8000/posts',{
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    store.dispatch(fetchRecordsPass(res.data));
  })
  .catch((error) => {console.error(error)});
};

export const addRecord = (data) => {
  return axios({
    method: "post",
    url: "http://localhost:8000/posts",
    data: data,
    headers: {
      "X-CSRF-TOKEN": document
    },
  })
    .then((res) => {
      if(!!res.data) {
        store.dispatch(addRecordPass(res.data));
        toastr.success('Success', 'Expense has been recorded!');
      }
    })
    .catch((error) => {
      toastr.error('Failure', 'There is some problem!');
      console.error(error)
    });
};
