export const playersContent=
`<div class="players">
    <h1>Players</h1>
<div class="players_content">
</div>
<button class="previous_button"> Previous </button>
<button class="next_button"> Next </button>

</div>`;
var players
async function getPlayer(players) {
    var res = "";
  if (players !== null) {
    for (var i = 0; i < players.length; i += 1) {
      if(i<10)
       {
      //  console.log(res)
          //<p id="${players[i].idPlayer}">${players[i].strDescriptionEN}</p>

          res += `
            <div id="${players[i].idPlayer}" class="players_list_card">
            <img id="${players[i].idPlayer}" class="players_list_img" width="100%" height="50%" src="${players[i].strThumb}">
              <div id="${players[i].idPlayer}" class="players_list_container">
                <h4 id="${players[i].idPlayer}" ><b id="${players[i].idPlayer}">${players[i].strPlayer}</b></h4>
            
              </div>
            </div>
            `;
        }
      }
    }
    console.log( document.querySelector("div.players_content"))
  document.querySelector("div.players_content").innerHTML = res;
}
function pagination(){
  console.log(document.querySelector("button.next_button"))
  var top=0;
  document
  .querySelector("button.next_button")
  .addEventListener("click", function () {
    if (top + 10 < players.length) {
      top += 10;
      getPlayer(players.slice(top));
    }
  });
document
  .querySelector("button.previous_button")
  .addEventListener("click", function () {
    if (top >= 10) {
      top -= 10;
      getPlayer(players.slice(top));
    }
  });
}
 export async function getAllplayers() {
    console.log("tamuna");
    const resp = await fetch("https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=");
    const res = await  resp.json();
players=res.player
    getPlayer(res.player);
}
export function playersPage(){
  getAllplayers();
  pagination();
}