<template>
  <div id="app">
  <p>123</p>
    <img src="https://www.emaisgoias.com.br/wp-content/uploads/2017/09/macacofezsilfie.jpg">
    <p></p>
    <router-link :to="{name:'MariaGabriela'}">DadosPessoais</router-link>
    <router-link :to="{name:'HelloWorld'}">Hello</router-link>
    <router-link :to="{name:'Contador'}">Contar</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
