const { createVercelHandlers } = require('netlify-cms-oauth-provider-node');

const { begin, complete } = createVercelHandlers({
  origin: 'https://rediserche-website.vercel.app',
  completeUrl: 'https://rediserche-website.vercel.app/api/callback',
  oauthClientID: process.env.OAUTH_CLIENT_ID,
  oauthClientSecret: process.env.OAUTH_CLIENT_SECRET,
  oauthProvider: 'github',
});

module.exports = begin;