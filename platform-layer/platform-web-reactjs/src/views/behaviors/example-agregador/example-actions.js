export function actionRequest(data) {
  return {
    type: '@entity/ACTION_REQUEST',
    payload: { data },
  };
}
export function actionSuccess(data) {
  return {
    type: '@entity/ACTION_SUCCESS',
    payload: { data },
  };
}
