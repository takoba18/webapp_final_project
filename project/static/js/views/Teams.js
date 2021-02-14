import {sports} from "./Home.js"
var teams=[];

export const teamsContent=
`<div id="teams">
<h1>Teams</h1>
<div class="teams_content"></div>
<button class="previous_button"> Previous </button>
<button class="next_button"> Next </button>
</div>`;
function getTeam(teams) {
    var res = "";
  if (teams !== null) {
    console.log(teams)
    for (var i = 0; i < teams.length; i += 1) {
      console.log("wow")

      if(i<10)
       {
      console.log(res)

          res += `
            <div id="${teams[i].idTeam}" class="teams_list_card">
            <img id="${teams[i].idTeam}" class="teams_list_img" width="100%" height="50%" src="${teams[i].strTeamBadge}">
              <div id="${teams[i].idTeam}" class="teams_list_container">
                <h4 id="${teams[i].idTeam}" ><b id="${teams[i].idTeam}">${teams[i].strTeam}</b></h4>
                <p id="${teams[i].idTeam}"></p>
              </div>
            </div>
            `;
            console.log(res)
        }
      }
    }
    console.log( document.querySelector("div.teams_content"))
   console.log(res)
 document.querySelector("div.teams_content").innerHTML = res;
}
function pagination(){
  console.log(document.querySelector("button.next_button"))
  var top=0;
  document
  .querySelector("button.next_button")
  .addEventListener("click", function () {
    if (top + 10 < teams.length) {
      top += 10;
      getTeam(teams.slice(top));
    }
  });
document
  .querySelector("button.previous_button")
  .addEventListener("click", function () {
    if (top >= 10) {
      top -= 10;
      getTeam(teams.slice(top));
    }
  });
}
 export async function getAllteams(id) {
    console.log("tamuna");
    console.log(sports)
    teams=[]
    for(var i=0; i<sports.length;i++){
      var link="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s="+sports[i].strSport+"&c="+id
      const resp = await fetch(link);
      const res = await  resp.json();

      console.log(res.teams)
      if(res.teams!==null){
      var temp=[];
      temp=teams.concat(res.teams)
      console.log(temp)
      teams=temp
      console.log(teams)
      }
    }
    //data = res.teams;
    console.log(teams)
    getTeam(teams);
}
export function teamPage(id){

  console.log(id)
  getAllteams(id);
  pagination();
}