import { RECIVE_CODES, LOADING_CODES, CODES_FAILED } from "../ActionTypes";
import axios from "axios";

export const reciveCodes = (codes) => ({
  type: RECIVE_CODES,
  payload: codes,
});

export const loadCodes = (isLoading) => ({
  type: LOADING_CODES,
  payload: isLoading,
});

export const fetchCodes =
  ({ tags }) =>
  (dispatch) => {
    console.log("fetching codes");
    axios
      .get(`http://drescode.com/api/v1/codes/search?tags=${tags}`)
      .then((res) => {
        dispatch(reciveCodes(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
    // setTimeout(() => {
    //   dispatch(reciveCodes());
    // }, 3000);
  };
