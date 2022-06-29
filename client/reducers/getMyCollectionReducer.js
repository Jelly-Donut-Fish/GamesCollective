const getMyCollectionReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MYCOLLECTION':
      return action.myCollection || [];
    default:
      return state;
  }
};

export default getMyCollectionReducer;
