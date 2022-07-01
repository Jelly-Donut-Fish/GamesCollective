/* eslint-disable import/extensions */
import axios from 'axios';
import getCatalog from '../actions/getCatalog.js';
import store from '../store/store.js';

const actions = [
  getCatalog,
];

function retrieve() {
  store.dispatch({ type: 'START' });
  const promisesAxios = [
    // place axios routes here
    axios({
      method: 'get',
      url: '/games',
      baseURL: 'http://localhost:3000',
      params: { page: 1, count: 10, q: '' },
    }),
  ];

  Promise.all(promisesAxios).then((promises) => {
    promises.forEach((data, i) => {
      store.dispatch(actions[i](data.data));

      if (i === promises.length - 1) {
        store.dispatch({ type: 'STOP' });
      }
    });
  })
    .catch((err) => console.log('retrieve data err: ', err));
}

export default retrieve;
