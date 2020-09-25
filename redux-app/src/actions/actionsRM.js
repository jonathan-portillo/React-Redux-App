// 'https://rickandmortyapi.com/api/character/'

import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const fetchData = (id) => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });

  axios
    //   .get(`https://rickandmortyapi.com/api/character/`{id}`)
    .get(`https://rickandmortyapi.com/api/character/1`)
    .then((res) => {
      console.log("actionsRM: API DATA", res);
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: {
          name: res.data.name,
          img: res.data.image,
          location: res.data.location.name,
          species: res.data.species,
          status: res.data.status,
        },
      });
    })
    .catch((err) =>
      console.log("cannont get information", err).dispatch({
        type: FETCH_DATA_FAIL,
        payload: "C-137 Rick is interfearing with our networks",
      })
    );
};
