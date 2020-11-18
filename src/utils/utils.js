export function* objectValues(datas) {
  let response = datas;
  let array = [];
  for (var key in response) {
    array.push(response[key]);
  }
  yield array;
}
