const express = require('express');
const session = require('express-session');
const FirebaseStore = require('connect-session-firebase')(session);
const firebase = require('firebase-admin');

const ref = firebase.initializeApp({
  credential: firebase.credential.cert('steam.json'),
  databaseURL: '**your firebase database name**.firebaseio.com',
});
const app = express();

app.use(session({
  store: new FirebaseStore({
    database: ref.database(),
  }),
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
}));

const OpenIDStrategy = require('passport-openid').Strategy;

const SteamStrategy = new OpenIDStrategy(
  {
  // OpenID provider configuration
    providerURL: 'http://steamcommunity.com/openid',
    stateless: true,
    // How the OpenID provider should return the client to us
    returnURL: 'http://localhost:3000/auth/openid/return',
    realm: 'http://localhost:3000/',
  },
  ((identifier, done) => {
    process.nextTick(() => {
      const user = {
        identifier,
        steamId: identifier.match(/\d+$/)[0],
      };
      return done(null, user);
    });
  }),
);

const passport = require('passport');

passport.use(SteamStrategy);

passport.serializeUser((user, done) => {
  done(null, user.identifier);
});

passport.deserializeUser((identifier, done) => {
  done(null, {
    identifier,
    steamId: identifier.match(/\d+$/)[0],
  });
});

app.use(passport.initialize());
app.use(passport.session());

app.post('/auth/openid', passport.authenticate('openid'));

app.get(
  '/auth/openid/return',
  passport.authenticate('openid'),
  (request, response) => {
    if (request.user) {
      response.redirect(`/?steamid=${request.user.steamId}`);
    } else {
      response.redirect('/?failed');
    }
  },
);

app.post('/auth/logout', (request, response) => {
  request.logout();
  response.redirect(request.get('Referer') || '/');
});

app.get('/', (request, response) => {
  response.write('<!DOCTYPE html>');
  if (request.user) {
    response.write(request.session.passport
        && JSON.stringify(request.user) || 'None');
    response.write('<form action="/auth/logout" method="post">');
    response.write('<input type="submit" value="Log Out"/></form>');
  } else {
    if (request.query.steamid) {
      response.write('Not logged in.');
    }
    response.write('<form action="/auth/openid" method="post">');
    response.write(
      '<input name="submit" type="image" src="http://steamcommunity-a.'
        + 'akamaihd.net/public/images/signinthroughsteam/sits_small.png" '
        + 'alt="Sign in through Steam"/></form>',
    );
  }
  response.send();
});

const port = 4000;
const server = app.listen(port);
console.log(`Listening on port ${port}`);
