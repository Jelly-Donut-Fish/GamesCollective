/* eslint-disable import/extensions */
import getCatalog from '../actions/getCatalog.js';
import store from '../store/store.js';
// import axios from 'axios';

const actions = [
  getCatalog,
];

function retrieve() {
  store.dispatch({ type: 'START' });
  const promisesAxios = [
    // place axios routes here
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
