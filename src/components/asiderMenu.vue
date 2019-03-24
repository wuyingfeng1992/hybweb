<script src="../../../../node/panel/src/pages/sourceManage/sourceManage.js"></script>
<template>
  <div class="asiderMenu" @click="handleClick">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item :index="item.id" v-for="item in getPageMenu">
        <!--<i class="el-icon-setting"></i>-->
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex';

  export default {
    name: "asider-menu",
    computed: {
      ...mapGetters([
        "getPageMenu",
      ]),
    },
    methods: {
      handleClick() {
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
