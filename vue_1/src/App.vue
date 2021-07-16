<template>
  <div id="app">
    <h1 class="main-title">Todo application</h1>
    <hr>

    <router-link class="routes"  to="/">Home</router-link>
    <router-link  class="routes" to="/todos">Todo</router-link>
    <router-link  class="routes" to="/gallery">Gallery</router-link>
    <div class="container">
      <router-view />
    </div>
  </div> 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1100px;
  margin: 0 auto;
}

.main-title{
  text-align: center;
}

.container{
  padding: 50px 30px;
}

.routes{
  margin-right: 10px;
  text-decoration: none;
  font-size: 25px;
  padding: 10px 30px;
  color:#2c3e50;
  transition: 0.3s;
  border-bottom: 2px solid transparent;
}

.routes:hover{

  color:#fff;
  background-color: #2c3e50;
}

.hhh{
  margin-bottom: 20px;
}

.router-link-exact-active{
  border-bottom-color:#2c3e50;

}



/*media*/

@media (max-width:600px) {
  .container{
    padding: 50px 0;
  }
  .routes{
    font-size: 18px;
  }
}
</style>
