const getUser = (currentUser) => (
  {
    type: 'GET_USER',
    currentUser: currentUser
  }
);

export default getUser;
