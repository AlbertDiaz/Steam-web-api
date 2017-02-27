var apiKey = '096785E34E49A01C920ECB95634F1922';

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
  document.getElementById('steamSubmit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var payload = {steamId64:null};
    payload.steamId64 = document.getElementById('steamId64').value;
    req.open('GET', 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + apiKey + '&steamids=' + payload.steamId64, true);
    //req.setRequestHeader('Content-Type', 'application/json');
    req.send(null);
    req.addEventListener('load',function(){
    if(req.status >= 200 && req.status < 400){
      var response = JSON.parse(req.responseText);
      console.log(JSON.parse(req.responseText));
      document.getElementById('gamerTag').textContent = response.players[0].personaname;
      document.getElementById('steamId64').textContent = response.players[0].steamid;
      document.getElementById('country').textContent = response.players[0].loccountrycode;
      document.getElementById('profileUrl').textContent = response.players[0].profileurl;
    }else{
      console.log("Error in network request: " + req.statusText);
    }});
    event.preventDefault();
  })
}