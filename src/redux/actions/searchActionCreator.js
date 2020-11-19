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

// Function to fetch Github info of a user.
// const fetchGithubInfo = async (url) => {
//   console.log(`Fetching ${url}`);
//   const githubInfo = await axios(url); // API call to get user info from Github.
//   return {
//     name: githubInfo.data.name,
//     bio: githubInfo.data.bio,
//     repos: githubInfo.data.public_repos,
//   };
// };

// // Iterates all users and returns their Github info.
// const fetchUserInfo = async (names) => {
//   const requests = names.map((name) => {
//     const url = `https://api.github.com/users/${name}`;
//     return fetchGithubInfo(url) // Async function that fetches the user info.
//       .then((a) => {
//         return a; // Returns the user info.
//       });
//   });
//   return Promise.all(requests); // Waiting for all the requests to get resolved.
// };

// fetchUserInfo(["sindresorhus", "yyx990803", "gaearon"]).then((a) =>
//   console.log(JSON.stringify(a))
// );

/*
Output:
[{
  "name": "Sindre Sorhus",
  "bio": "Full-Time Open-Sourcerer ·· Maker ·· Into Swift and Node.js ",
  "repos": 996
}, {
  "name": "Evan You",
  "bio": "Creator of @vuejs, previously @meteor & @google",
  "repos": 151
}, {
  "name": "Dan Abramov",
  "bio": "Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.",
  "repos": 232
}]
*/
