window.onload = function(){

var steamProfile = {
  "response": {
    "players": [{
      "steamid": "76561197991209043",
      "communityvisibilitystate": 3,
      "profilestate": 1,
      "personaname": "Arubāto",
      "lastlogoff": 1488259851,
      "profileurl": "http://steamcommunity.com/id/arubato-san/",
      "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b0/b06db26b73c9c9a540c025a1289e3190b4118fba.jpg",
      "avatarmedium": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b0/b06db26b73c9c9a540c025a1289e3190b4118fba_medium.jpg",
      "avatarfull": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b0/b06db26b73c9c9a540c025a1289e3190b4118fba_full.jpg",
      "personastate": 0,
      "primaryclanid": "103582791431177624",
      "timecreated": 1184589320,
      "personastateflags": 0,
      "loccountrycode": "US"
    }]
  }
}

var gamerTag = steamProfile.response.players[0].personaname; // assigns JSON property, personaname, to personaName
console.log(gamerTag); // displays "Arubāto" to console
document.getElementById('gamerTag').innerHTML = gamerTag; //sends gamerTag to html

var avatar = steamProfile.response.players[0].avatarmedium; // assigns JSON property, avatarmedium, to avatar
console.log(avatar); // displays the image source to console
document.getElementById('avatar').src = avatar;

var profileUrl = steamProfile.response.players[0].profileurl; // assigns JSON property, profileurl, to personaName
console.log(profileUrl); // displays "http://steamcommunity.com/id/arubato-san/" to console
document.getElementById('profileUrl').innerHTML = profileUrl;//sends profileUrl to html

var country = steamProfile.response.players[0].loccountrycode; // assigns JSON property, loccountrycode, to personaName
console.log(country); // displays "US" to console
document.getElementById('location').innerHTML = country; //sends country to html
}