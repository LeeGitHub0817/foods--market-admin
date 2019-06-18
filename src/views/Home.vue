<template>
  <div class="home" style="height: 100%;">
    <el-container style="height: 100%;">
      <!--左侧导航部分-->
      <el-aside class="fd-home-aside">
        <!--菜单列表-->
        <el-menu class="fd-home-menu" default-active="1-4-1" background-color="#545c64" text-color="#fff" active-text-color="#1DCE7E"
          :collapse="isFlod"
        >
          <!--导航栏1-->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group title="分组一">
              <el-menu-item @click="jumpOne" index="1-1">选项一</el-menu-item>
              <el-menu-item @click="jumpTwo" index="1-2">选项二</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组二">
              <el-menu-item index="1-3">选项三</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项四</span>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <!--导航栏二-->
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <!--导航栏三-->
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <!--导航栏四-->
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!--右侧内容部分-->
      <el-container>
        <el-header class="fd-home-header">
          <i @click="handleFlod" :class="{'el-icon-s-fold': isFlod == false, 'el-icon-s-unfold': isFlod == true, 'head-left-fold': true}"></i>
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
      isFlod: false, //是否折叠侧边菜单栏
    }
  },
  methods: {
    //控制左边菜单折叠
    handleFlod(){
      this.isFlod = !this.isFlod;
    },
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
  .fd-home-menu{
    height: 100%;
  }
  .fd-home-aside{
    width: auto !important;
  }
  .fd-home-menu:not(.el-menu--collapse){
    width: 300px;
  }
  .fd-home-header{
    border-bottom: 1px solid #f6f6f6;
    display: flex;
    align-items: center;
  }
</style>

