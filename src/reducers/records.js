import initialState from "./initialState";

const records = (state = initialState.records, action) => {
  switch (action.type) {
    case "ADD_RECORD_PASS":
      var items = Object.assign({}, state.items);
      var comps = Object.assign([], state.comps);
      comps.push(action.payload);
      items[action.payload] = true;
      var hasMoreItems = true;
      if (action.payload === "feature") hasMoreItems = false;
      return {
        ...state,
        items: items,
        hasMoreItems: hasMoreItems,
        comps: comps,
      };
    case "FETCH_RECORDS_PASS":
      let data = state;
      data = [data, ...action.payload];

      return {
        ...state,
        records: data,
      };
    default:
      return { ...state };
  }
};
export default records;
