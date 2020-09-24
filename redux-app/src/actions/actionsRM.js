// 'https://rickandmortyapi.com/api/character/'

import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });

  axios.get("https://rickandmortyapi.com/api/character/1").then((res) => {
    console.log("actionsRM: API DATA", res);
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: { name: res.data.name, img: res.data.image },
    });
  });
};
