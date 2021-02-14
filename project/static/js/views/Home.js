import { search, searchContent } from "./search.js";

export var sports;
export	
 	const HomeContent =
     `
        <div class="home">
        <h1> Welcome to my site </h1>
        <p>If you are a sports fan this website is for you</p>
        <div id="searchWrapper">
        <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search"
        />
        </div>
        <div class="home_content"></div>
        </div>
        `;

       function getSport(sports) {
            var res = "";
          if (sports !== null) {
            for (var i = 0; i < sports.length; i += 1) {
               {
                    res += `
                    <div id="${sports[i].idSport}" class="home_list_card">
                    <img id="${sports[i].idSport}" class="home_list_img" width="100%" height="50%" src="${sports[i].strSportThumb}">  
                    <div id="${sports[i].idSport}" class="home_list_container">
                        <h4 id="${sports[i].idSport}" ><b id="${sports[i].idSport}">${sports[i].strSport}</b></h4>
                        <p id="${sports[i].idSport}"></p>
                      </div>
                    </div>
                    `;
                }
              }
            }
          document.querySelector("div.home_content").innerHTML = res;
        }
        function searchListener(){
          document.getElementById('searchBar').addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
            const typed = e.target.value.toLowerCase();
            console.log(typed)
            document.querySelector("div.home").innerHTML=searchContent;
            search(typed);
            window.location.hash="#search"; 

            }
        })}
         export async function getAllsports() {
            console.log("tamuna");
            const resp = await fetch("https://www.thesportsdb.com/api/v1/json/1/all_sports.php");
            const res = await  resp.json();
            sports = res.sports;
            getSport(res.sports);
        }
    export function homePage(){
      getAllsports();
      searchListener();
    }
