import { ROUTER, Router} from "../router.js";
import {getAllteams, teamPage, teamsContent} from "./Teams.js"
export const CountriesContent=
`<div class="countries">
<h1>Countries</h1>
<div class="countries_content"></div>
<button class="previous_button"> Previous </button>
<button class="next_button"> Next </button>
</div>`;
var countries;
function getCountry(countries) {
    var res = "";
  if (countries !== null) {
    for (var i = 0; i < countries.length; i += 1) {
       {
      //  console.log(res)
        if(i<10){
          res += `
            <div id="${countries[i].name_en}" class="countries_list_card">
              <div id="${countries[i].name_en}" class="countries_list_container">
                <h4 id="${countries[i].name_en}" ><b id="${countries[i].name_en}">${countries[i].name_en}</b></h4>
                <p id="${countries[i].name_en}"></p>
              </div>
            </div>
            `;
        }}
      }
    }
 //   console.log(document.querySelector("button.next_button").addEventListener)
  document.querySelector("div.countries_content").innerHTML = res;
}
function pagination(){
    console.log(document.querySelector("button.next_button"))
    var top=0;
    document
    .querySelector("button.next_button")
    .addEventListener("click", function () {
      if (top + 10 < countries.length) {
        top += 10;
        getCountry(countries.slice(top));
      }
    });
  document
    .querySelector("button.previous_button")
    .addEventListener("click", function () {
      if (top >= 10) {
        top -= 10;
        getCountry(countries.slice(top));
      }
    });
}
function clickCountry(){
   // if(document.querySelector("div.list_card")!==null){
    document
    .querySelector("div.countries_content")
    .addEventListener("click", function (evt) {
        var clicked=evt.target;
        var id=clicked.id;
        if(id!==null){
          var newObj=[]
        
         var obj=[
            {
              path:"#"+id,
              name:"team",
              content:teamsContent,
              function:teamPage,
              id: id
            }]
           newObj= newObj.concat(obj)
            newObj=newObj.concat( ROUTER.routes)
           /* for (let value of ROUTER.routes) {
              newObj.add(value)
              console.log(value)
            }*/
          // newObj.routes={...newObj,...obj}
           console.log(newObj)
             
           
           ROUTER.routes=newObj
           console.log(ROUTER)
     //   console.log( Object.entries(ROUTER))

          
        window.location.hash="#"+id; }
          /* console.log(id)
            teamPage(id)*/
          //  document.querySelector("div.countries").innerHTML=teamsContent}
    });}

export async function getAllCountries() {
    console.log("tamuna");
    const resp = await fetch("https://www.thesportsdb.com/api/v1/json/1/all_countries.php");
    const res = await  resp.json();
    countries = res.countries;

    getCountry(countries);
    console.log(countries)
}
export function countriesPage(){
    getAllCountries();
    pagination();
    clickCountry();
}
window.addEventListener("load", clickCountry);

