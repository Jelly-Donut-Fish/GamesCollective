const getCatalogReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATALOG':
      return action.catalog || []
    default :
      return state
  }
};

export default getCatalogReducer;