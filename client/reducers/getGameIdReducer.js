// eslint-disable-next-line default-param-last
const getGameIdReducer = (state = '', action) => {
  switch (action.type) {
    case 'GET_GAMEID':
      return action.gameId || '';
    default:
      return state;
  }
};

export default getGameIdReducer;
