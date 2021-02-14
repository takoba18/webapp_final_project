import {LoginContent, loginPage} from "./views/Login.js"
import {getAllsports, HomeContent, homePage} from "./views/Home.js"
import {RegisterContent, registerPage} from "./views/Register.js"
import { CountriesContent, countriesPage } from "./views/countries.js";
import { getAllleagues, leaguePage, LeaguesContent } from "./views/leagues.js";
import { getAllplayers, playersContent, playersPage } from "./views/players.js";
import { forumContent, forumPage } from "./views/forum.js";
import { search, searchContent } from "./views/search.js";
export let Router = function (routes) {
    return {
      routes: routes,
    };
  };
  
  export let ROUTER = new Router([
    {
      path: "#login",
      name: "Log In",
      content:LoginContent,
      function:loginPage,
      id:null
    },
    {
      path: "",
      name: "Home",
      content: HomeContent,
     function:homePage,
     id:null
    },
    {
      path: "#register",
      name: "Sign Up",
      content: RegisterContent,
      function:registerPage,
      id:null
    },
    {
      path: "#countries",
      name: "Countries",
      content: CountriesContent,
      function: countriesPage,
      id:null
    },
    {
      path: "#leagues",
      name: "Leagues",
      content: LeaguesContent,
      function: leaguePage,
      id:null
    },
    
    {
      path: "#players",
      name: "Players",
      content: playersContent,
      function: playersPage,
      id:null
    },
    {
      path: "#forum",
      name: "Forum",
      content:forumContent,
      function:forumPage,
      id:null
    },
    
  ]);
  
  const changeRoute =  function () {
    let currentLocationHash = window.location.hash;
  
    ROUTER.routes.map((e) => {
      if (e.path === currentLocationHash) {
     console.log(e.function)
    
      document.getElementById(
         "app"
      ).innerHTML = e.content
      if(e.function!==null && e.id===null)
      e.function()
      if(e.function!==null && e.id!==null)
     e.function(e.id)
  // console.log(e.id)
      }
    });
  };
  
  window.addEventListener("DOMContentLoaded", changeRoute);
  window.addEventListener("hashchange", changeRoute);
  window.addEventListener("load", changeRoute);
