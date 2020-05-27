<template>
  <div class="home">
    <h1>
      Typing
    </h1>
    <router-link to="/typing" class="start-btn">Start</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped lang="scss">
.home{
  height: 300px;

  h1{
    line-height: 300px;
  }
}

.start-btn{
display: inline-block;
text-decoration: none;
padding: 0.4em 1em;
border: 2px solid #808000;
color: #808000;
font-size: 18px;
transition: 0.2s ease;
}

.start-btn:hover{
    background-color: #808000;
    color: #fff;
}

</style>
