export function composePlayersArray(apiUrl) {
  let array = [];
  let url = apiUrl;
  return (playersArray) => {
    playersArray.forEach((player) => {
      array.push(
        fetch(`${url}/${player.account_type}/${player.id}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json; charset=utf-8",
          },
        })
      );
    });
    return array;
  };
}

export async function getAllPlayers(apiUrl, playersArray, callback) {
  let arrayOfFetches = callback(apiUrl)(playersArray);
  let response = await Promise.all(arrayOfFetches);
  return response;
}

export function returnFetches(url, playerArray) {
  let requests = playerArray.map((player) =>
    fetch(`${url + "/" + player.account_type + "/" + player.id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json; charset=utf-8",
      },
    })
  );
  return requests;
}
