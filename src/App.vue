<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>   
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* background-color: aquamarine; */
  background-image: url('../static/bcg3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 0;
  height:999px;
  width:100%;
}
</style>
