<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/typing">Typing</router-link>
      <router-link to="/result">Result</router-link>
    </div>
    <div class=content-wrapper>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss">
*, *:before, *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

body{
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.content-wrapper{
  height: 600px;
}
</style>
