import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from "../actions/actionsRM";

const initialState = {
  rm_data: {
    name: "",
    img: "",
    location: "",
    species: "",
    status: "",
  },
  is_loading_data: false,
  error: "",
};

export const reducerRM = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        is_loading_data: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        is_loading_data: false,
        rm_data: action.payload,
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        is_loading_data: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
