const getUser = (user) => (
  {
    type: 'GET_USER',
    user: user
  }
);

export default getUser;
