module.exports = {
  Admins: ["386929140730691595", "UserID"], //Admins of the bot
  DefaultPrefix: ".!", //Default prefix, Server Admins can change the prefix
  Port: 8080, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/csrp1", //Support Server Link
  Token: "NzIwOTA2Mzg0NzgyMjYyMjky.Gjli-C.m_V3W9jzxZNcHiFM5BBY2EVGp-P0YG8u8SfdLw" || process.env.Token, //Discord Bot Token
  ClientID: "720906384782262292", //Discord Client ID
  ClientSecret: "HqmQM2M_ToBJYGF-6fY1DPh9FGY7v68Z", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: "0.0.0.0", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink - Already there is a serer to connect :)
  Lavalink: {
    id: "Main",
    host: "lava-v3.ajieblogs.eu.org",
    port: 80,
    pass: "https://dsc.gg/ajidevserver"
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: "9a0ba02c656544a2b8d631485b59046f", //Spotify Client ID
    ClientSecret: "8b26c078080845818d5debc1363b9858", //Spotify Client Secret
  },
};
