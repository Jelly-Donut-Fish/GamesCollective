const getUserReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER':
      return action.currentUser || {};
    default:
      return state;
  }
};

export default getUserReducer;
