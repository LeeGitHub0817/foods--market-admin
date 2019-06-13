<template>
  <div class="home">
    <div class="left-pad">
      <button @click="jumpOne">page one</button>
      <hr>
      <button @click="jumpTwo">page two</button>
    </div>
    <div class="right-pad">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function(){
    return {

    }
  },
  methods: {
    jumpOne(){
      this.$router.push('/one');
    },
    jumpTwo(){
      this.$router.push('/two');
    }
  }
}
</script>

<style scoped>
  .left-pad{
    width: 30%;
    height: 100%;
    background-color: #b35415;
  }
  .right-pad{
    width: 70%;
    height: 100%;
  }
</style>

