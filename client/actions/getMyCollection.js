const getMyCollection = (myCollection) => (
  {
    type: 'GET_MYCOLLECTION',
    myCollection,
  }
);

export default getMyCollection;
