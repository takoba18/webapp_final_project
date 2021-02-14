
export const leagueInfo=
`<div id="leagueInfo">
<h1>League Details</h1>
<div class="details_content">
<div class="seasons"></div>
<div class="league_teams"></div>
<div class="lastEvents"></div>
</div>
<button class="previous_button"> Previous </button>
<button class="next_button"> Next </button>
</div>`;
var seasons;
var teams;
var lastEvents;
function getContent(teams,seasons,lastEvents){
    var resTeams = "";
    var resSeasons="";
    var resEvents="";
 
    
    if (teams !== null) {
      for (var i = 0; i < teams.length; i += 1) {
       
        resTeams += `
              <div id="${teams[i].idTeam}" class="details_list_card">
              <img id="${teams[i].idTeam}" class="details_list_img" width="100%" height="50%" src="${teams[i].strTeamBadge}">
                <div id="${teams[i].idTeam}" class="details_list_container">
                  <h4 id="${teams[i].idTeam}" ><b id="${teams[i].idTeam}">${teams[i].strTeam}</b></h4>
                  <p id="${teams[i].idTeam}"></p>
                </div>
              </div>
              `;
          
        }}
        if (seasons !== null) {
            for (var i = 0; i < seasons.length; i += 1) {
             
              resSeasons += `
                    <div id="${seasons[i].strSeason}" class="details_list_card">
                      <div id="${seasons[i].strSeason}" class="details_list_container">
                        <h4 id="${seasons[i].strSeason}" ><b id="${seasons[i].strSeason}">${seasons[i].strSeason}</b></h4>
                        <p id="${seasons[i].strSeason}"></p>
                      </div>
                    </div>
                    `;
                
              }}
              if (lastEvents !== null) {
                for (var i = 0; i < lastEvents.length; i += 1) {
                 
                  resEvents += `
                        <div id="${lastEvents[i].idEvent}" class="details_list_card">
                        <img id="${lastEvents[i].idEvent}" class="details_list_img" width="100%" height="50%" src="${lastEvents[i].strThumb}">
                          <div id="${lastEvents[i].idEvent}" class="details_list_container">
                            <h4 id="${lastEvents[i].idEvent}" ><b id="${lastEvents[i].idEvent}">${lastEvents[i].strEvent}</b></h4>
                            <p id="${lastEvents[i].idEvent}"></p>
                          </div>
                        </div>
                        `;
                  }
      }
      document.querySelector("div.seasons").innerHTML=resSeasons;
      document.querySelector("div.league_teams").innerHTML=resTeams;
      document.querySelector("div.lastEvents").innerHTML=resEvents;

}
export async function getDetails(id) {
    console.log("tamuna");
      const resp = await fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_seasons.php?id="+id);
      const res = await  resp.json();
      seasons=res.seasons;
      console.log(res.teams)
      const resp1 = await fetch("https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id="+id);
      const res1 = await  resp1.json();
      lastEvents=res1.events;
      const resp2 = await fetch("https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id="+id);
      const res2 = await  resp2.json();
      teams=res2.teams;
    //data = res.teams;
    console.log(teams)
    getContent(teams,seasons,lastEvents);
}
export function leagueDetails(id){
    getDetails(id);

}