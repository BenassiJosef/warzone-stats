import axios from "axios";
import { SEARCH_PLAYER, SEARCH_PLAYER_ERROR } from "./searchActions";
import { WARZONE_API } from "../../constants";
import { objectValues } from "../../utils/utils";

/**
 * Dispatches an HTTP request to the IDAM backend for registrating
 * a user.
 *
 * @param {function} dispatch - the redux action dispatch function.
 * @param {object} payload - user credentials object to be dispatched.
 */
export default function searchPlayer(dispatch, payload, history) {
  let urls = payload["player"].map(
    (element) =>
      `${WARZONE_API + "/" + element.account_type + "/" + element.id}`
  );

  Promise.allSettled(urls.map((url) => axios.get(url)))
    .then((responses) => Promise.all(responses.map((res) => res)))
    .then((response) => {
      let values = [];
      response.forEach((val) => {
        if ((val.status = "fulfilled")) {
          values.push(val.value.data);
        }
      });
      return dispatch({
        type: SEARCH_PLAYER,
        payload: { ...values },
      });
    })
    .catch((error) => {
      if (error.response) {
        dispatch({
          type: SEARCH_PLAYER_ERROR,
          payload: { status: error.response.status, ...error.response.data },
        });
      }
    });
}
