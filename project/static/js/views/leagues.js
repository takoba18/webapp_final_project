import {leagueDetails,leagueInfo} from "./leagueDetails.js"
export const LeaguesContent=
`<div class="leagues">
    <h1>Leagues</h1>
<div class="leagues_content">
</div>
<button class="previous_button"> Previous </button>
<button class="next_button"> Next </button>
</div>`;
var leagues;
async function getLeague(leagues) {
    var res = "";
  if (leagues !== null) {
    for (var i = 0; i < leagues.length; i += 1) {
      if(i<10) 
      {
        
      //  console.log(res)
          res += `
            <div id="${leagues[i].idLeague}" class="league_list_card">
              <div id="${leagues[i].idLeague}" class="league_list_container">
                <h4 id="${leagues[i].idLeague}" ><b id="${leagues[i].idLeague}">${leagues[i].strLeague}</b></h4>
                <p id="${leagues[i].idLeague}"></p>
              </div>
            </div>
            `;
        }
      }
    }
    console.log( document.querySelector("div.leagues_content"))
  document.querySelector("div.leagues_content").innerHTML = res;
}
function clickLeague(){
   document
   .querySelector("div.leagues_content")
   .addEventListener("click", function (evt) {
       var clicked=evt.target;
       var id=clicked.id;
       if(id!==null){
       window.location.hash="leagues/"+id; 
          console.log(id)
           leagueDetails(id)
           document.querySelector("div.leagues").innerHTML=leagueInfo}
   });}
function pagination(){
  console.log(document.querySelector("button.next_button"))
  var top=0;
  document
  .querySelector("button.next_button")
  .addEventListener("click", function () {
    if (top + 10 < leagues.length) {
      top += 10;
      getLeague(leagues.slice(top));
    }
  });
document
  .querySelector("button.previous_button")
  .addEventListener("click", function () {
    if (top >= 10) {
      top -= 10;
      getLeague(leagues.slice(top));
    }
  });
}
 export async function getAllleagues() {
    console.log("tamuna");
    const resp = await fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php");
    const res = await  resp.json();
    leagues=res.leagues
    getLeague(leagues);
}
export function leaguePage(){
  getAllleagues();
  pagination();
  clickLeague();
}