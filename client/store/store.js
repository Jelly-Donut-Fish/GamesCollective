/* eslint-disable import/extensions */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';

const initialState = {
  catalog: {
    page: 1,
    count: 5,
    results: [
      {
        id: 1,
        steam_appid: 1,
        name: "Super Time Force",
        developers: "Capybara Games/Creative Assembly", // '/' delimiter
        publishers: "Atomic Torch Studio", // '/' delimiter
        detailed_description: "<strong>Super Time Force Ultra</strong> is an action-packed platformer with a time-travelling twist!  You’re in control of time itself, bending and stretching it to your advantage on the battlefield. Rewind time and choose when to jump back into the action, teaming-up with your past selves in a unique single-player co-op experience! Take control of up to 19 unique characters, and battle across 6 different time periods, from the long-ago past to the far-away future.",
        short_description: "Super Time Force Ultra is an insane platformer filled with robots and dinosaurs and fun and time travel... sometimes all at the same time!",
        header_image: "https://cdn.akamai.steamstatic.com/steam/apps/250700/header.jpg?t=1654537465",
        release_date: {"coming_soon":false,"date":"Aug 25, 2014"},
        website: "http://www.supertimeforce.com",
        required_age: 0,
        rating: 3.8,
        genres: ["fantasy", "horror"],
        categories: ["muliplayer"],
        platforms: ["mac", "windows"],
      },
      {
        id: 2,
        steam_appid: 2,
        name: "Zelda Zelda",
        developers: "Test game company", // '/' delimiter
        publishers: "test publisher", // '/' delimiter
        detailed_description: "<strong>AQWESOME WEWE</strong> .",
        short_description: "This is test data and is really cool and awesome and yeah and we are getting test data and yeah and awesome and yeah and im still tpying lololololoololoolol",
        header_image: "https://cdn.akamai.steamstatic.com/steam/apps/250700/header.jpg?t=1654537465",
        release_date: {"coming_soon":false,"date":"Jul 27, 2021"},
        website: "http://www.google.com",
        required_age: 0,
        rating: 4.0,
        genres: ["fantasy", "adventure"],
        categories: ["singleplayer"],
        platforms: ["Wii", "N64"],
      },
    ]
  },
  user: {},
  myCollection: [],

};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
);

export default store;
