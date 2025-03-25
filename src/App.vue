<template>
    <div id = "app">  
<nav id = "nav" class="navbar navbar-expand-lg navbar-light ">
     <a class="navbar-brand" href="#">
       <img src="@/assets/logo1.jpg" alt="Bootstrap" width="30" height="24">
    
     </a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
 
     <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
          <router-link to="/HomeView" class="nav-link">Home</router-link>
         </li>
         <li class="nav-item">
           <router-link to="/Registracija" class="nav-link">Registracija</router-link> 
         </li>
         <li class="nav-item">
          <router-link to="/Login" class="nav-link">Login</router-link> 
         </li>
       </ul>
       <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
       
     </div>
   </nav>
 

     </div>
   
   <router-view/>
 </template>
 
 <style lang="scss">
 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
 }
 
 nav {
   padding: 30px;
   background-color: white !important;
 
   a {
     font-weight: bold;
     color: #2c3e50;
 
     &.router-link-exact-active {
       color: #42b983;
     }
   }
 }
 </style>
 