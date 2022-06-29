const getUser = (currentUser) => (
  {
    type: 'GET_USER',
    currentUser,
  }
);

export default getUser;
