<template>
  <div class="pageIndex">
    <pageHeader></pageHeader>
    <asiderMenu></asiderMenu>
    pageIndex
  </div>
</template>

<script>
  import pageHeader from '../components/pageHeader';
  import asiderMenu from '../components/asiderMenu';

  export default {
    data(){
      return{

      }
    },
    name: "index",
    components: {
      pageHeader,
      asiderMenu,
    }
  }
</script>

<style lang="scss">

</style>
