import axios from "axios";
import store from "../store/appStore";

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
    url: "https://my-json-server.typicode.com/ms-masood/demo-server/",
    data: data,
    headers: {
      "X-CSRF-TOKEN": document
    },
  })
    .then((res) => {
      store.dispatch(addRecordPass(res));
    })
    .catch((error) => {console.error(error)});
};
