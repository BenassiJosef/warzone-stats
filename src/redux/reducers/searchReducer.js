import * as actions from "../actions/searchActions";

const initialState = {
  searchResponse: {},
};

const searchReducer = (
  state = initialState,
  action = { type: "", payload: {} }
) => {
  if (action.type === actions.SEARCH_PLAYER) {
    return {
      ...state,
      searchResponse: { ...action.payload },
    };
  }
  if (action.type === actions.SEARCH_PLAYER_ERROR) {
    return {
      ...state,
      searchResponse: { ...action.payload },
    };
  }
  return state;
};

export default searchReducer;
