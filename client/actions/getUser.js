const getUser = (user) => (
  {
    type: 'GET_USER',
    user,
  }
);

export default getUser;
