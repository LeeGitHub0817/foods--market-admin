<template>
  <div class="home">
    <el-container>
      <el-aside width="300px" height="100%">
        <!--菜单列表-->

      </el-aside>
      <el-container>
        <el-header>
          <i class="el-icon-s-fold head-left-fold"></i>
        </el-header>
        <el-main>
          <div class="right-pad">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
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
      this.$router.push('/home/one');
    },
    jumpTwo(){
      this.$router.push('/home/two');
    }
  }
}
</script>

<style scoped>
  .head-left-fold{
    width: 45px;
    height: 45px;
    color: #409EFF;
    font-size: 45px;
  }
</style>

