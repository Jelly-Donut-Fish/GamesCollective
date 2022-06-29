const getUserReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER':
      return action.user || {};
    default:
      return state;
  }
};

export default getUserReducer;
