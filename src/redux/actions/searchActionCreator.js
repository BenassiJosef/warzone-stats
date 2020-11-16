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

      //   if (result.status === 200) {
      //     dispatch({
      //       type: SEARCH_PLAYER,
      //       payload: { status: result.status, ...result.data },
      //     });
      //   }
    })
    .catch((error) => {
      if (error.response) {
        dispatch({
          type: SEARCH_PLAYER_ERROR,
          payload: { status: error.response.status, ...error.response.data },
        });
      }
    }); //   utils
  //     .getAllPlayers(WARZONE_API, payload, utils.composePlayersArray)
  //     .then((response) => {
  //       console.log(response);
  //     });
  //   axios
  //     .get(`${WARZONE_API}/xbl/playbyclover`, {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Content-Type": "application/json; charset=utf-8",
  //       },
  //     })
  //     .then(
  //       // Success
  //       ({ data, status }) => {
  //         if (status === 200) {
  //           //   return dispatch({
  //           //     type: SEARCH_PLAYER,
  //           //     payload: { status: status, ...data },
  //           //   });
  //           dispatch({
  //             type: SEARCH_PLAYER,
  //             payload: { status: status, ...data },
  //           });
  //         }
  //       }
  //     )
  //     .catch((error) => {
  //       if (error.response) {
  //         return dispatch({
  //           type: SEARCH_PLAYER_ERROR,
  //           payload: { status: error.response.status, ...error.response.data },
  //         });
  //       }
  //     });
}
