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
    .get(`${WARZONE_API}/atvi/${payload.playerID}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json; charset=utf-8",
      },
    })
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
        return dispatch({
          type: SEARCH_PLAYER_ERROR,
          payload: { status: error.response.status, ...error.response.data },
        });
      }
    });
}
