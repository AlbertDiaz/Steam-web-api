var apiKey = '12345678910ABCDEFGHIJK';

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
  document.getElementById('steamSubmit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var payload = {steamId:null};
    payload.steamId = document.getElementById('steamId').value;
    req.open('GET', 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + apiKey + '&steamids=' + payload.steamId, true);
    //req.setRequestHeader('Content-Type', 'application/json');
    req.send(null);
    req.addEventListener('load',function(){
    if(req.status >= 200 && req.status < 400){
      var response = JSON.parse(req.responseText);
      console.log(JSON.parse(req.responseText));
      document.getElementById('gamerTag1').textContent = response.players[0].personaname;
      document.getElementById('status1').textContent = response.players[0].personastate;
      document.getElementById('country').textContent = response.players[0].loccountrycode;
    }else{
      console.log("Error in network request: " + req.statusText);
    }});
    event.preventDefault();
  })
}     