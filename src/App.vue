<template>
  <div style="width:100%">
    <router-view></router-view>
  </div>
</template>
<script>
import home from './views/Home';
import login from './views/Login';
export default {
  name: '',
  components: {
    home,
    login
  }
}
</script>
<style lang="less" scoped>

</style>