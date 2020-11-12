import axios from "axios";
import { SEARCH_PLAYER, SEARCH_PLAYER_ERROR } from "./searchActions";
import { WARZONE_API } from "../../constants";

/**
 * Dispatches an HTTP request to the IDAM backend for registrating
 * a user.
 *
 * @param {function} dispatch - the redux action dispatch function.
 * @param {object} payload - user credentials object to be dispatched.
 */
export default function searchPlayer(dispatch, payload, history) {
  console.log(payload);
  console.log(WARZONE_API);
  axios
    .get(`${WARZONE_API}/atvi/${payload.playerID}`)
    .then(
      // Success
      ({ data, status }) => {
        if (status === 200) {
          return dispatch({
            type: SEARCH_PLAYER,
            payload: { status: status, ...data },
          });
        }
      }
    )
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // error object has key: status
        // response object has keys: data , status , headers
        // history.push({
        //   pathname: "/login-fail",
        //   state: {
        //     error: error.response.data.message,
        //   },
        // });
        return dispatch({
          type: SEARCH_PLAYER_ERROR,
          payload: { status: error.response.status, ...error.response.data },
        });
      }
    });
}
