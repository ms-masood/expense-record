import initialState from "./initialState";

const records = (state = initialState.records, action) => {
  switch (action.type) {
    case "ADD_RECORD_PASS":
      let items = Object.assign([], state.records);
      items = [...items, action.payload];
      // debugger
      return {
        ...state,
        records: items,
      };
    case "FETCH_RECORDS_PASS":
      let data = Object.assign([], state.records);
      data = [...data, ...action.payload];

      return {
        ...state,
        records: data,
      };
    default:
      return { ...state };
  }
};
export default records;
