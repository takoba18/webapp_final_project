
export const searchContent=
`<div class="search">
<h1>You searched for...</h1>
<div class="search_content"></div>
<button class="previous_button"> Previous </button>
<button class="next_button"> Next </button>
</div>`;
var searched=[]
function getSearched(searched){
  console.log(searched)
    var res="";
    console.log(searched[0])
    for(var i=0;i<searched.length;i++){
            if(i<10){
                if((searched[i].idTeam!==null && searched[i].idTeam!==undefined) && 
                (searched[i].idPlayer === null || searched[i].idPlayer === undefined)){
               res+= ` <div id="${searched[i].idTeam}" class="search_list_card">
                  <div id="${searched[i].idTeam}" class="search_list_container">
                    <h4 id="${searched[i].idTeam}" ><b id="${searched[i].idTeam}">${searched[i].strTeam}</b></h4>
                  </div>
                </div>
                `;
            } 
            if(searched[i].idPlayer!==null && searched[i].idPlayer!==undefined ){
              console.log(searched[i].idPlayer)
            res += `
          <div id="${searched[i].idPlayer}" class="search_list_card">
            <div id="${searched[i].idPlayer}" class="search_list_container">
              <h4 id="${searched[i].idPlayer}" ><b id="${searched[i].idPlayer}">${searched[i].strPlayer}</b></h4>
              </div>
          </div>
          `;

        }
        if(searched[i].idEvent!==null && searched[i].idEvent!==undefined){
            res+= `
            <div id="${searched[i].idEvent}" class="search_list_card">
              <div id="${searched[i].idEvent}" class="search_list_container">
                <h4 id="${searched[i].idEvent}" ><b id="${searched[i].idEvent}">${searched[i].strEvent}</b></h4>
              </div>
            </div>
            `;
        }
    }}  
    document.querySelector("div.search_content").innerHTML=res;
}
function pagination(){
  console.log(document.querySelector("button.next_button"))
  var top=0;
  document
  .querySelector("button.next_button")
  .addEventListener("click", function () {
    if (top + 10 < searched.length) {
      top += 10;
      getSearched(searched.slice(top));
    }
  });
document
  .querySelector("button.previous_button")
  .addEventListener("click", function () {
    if (top >= 10) {
      top -= 10;
      getSearched(searched.slice(top));
    }
  });
}
export async function getAllResults(typed){
    var searchedTeams=[];
    var searchedPlayers=[];
    var eventsSearched=[];
    const teamsResp=await fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t="+typed);
    const teamsRes=await teamsResp.json();
    searchedTeams=teamsRes.teams;
    console.log(searchedTeams)
    const playerResp=await fetch("https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p="+typed)
    const playersRes=await playerResp.json();
    searchedPlayers=playersRes.player;
    const eventsResp=await fetch("https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e="+typed)
    const eventsRes= await eventsResp.json();
    eventsSearched=eventsRes.event;
    var temp=[];
    
    if(eventsSearched === null && searchedPlayers === null && searchedTeams=== null){
    document.querySelector("search_content").innerHTML="No results found"
} else{
    temp=eventsSearched.concat(searchedTeams) 
    searched=temp.concat(searchedPlayers)
    getSearched(searched);}
}
export function search(typed){
    console.log("movedi")
    getAllResults(typed);
   pagination();
}