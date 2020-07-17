<template>
  <div class="home main">
    {{title}}
  </div>
</template>
<script>
export default {
  name: '',
  data( ){
    return {
      title: 'this is home page'
    }
  },
  mounted() {
    this.format();
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(1);
        resolve(1);
      }, 1000);
    })
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.home{
  color: skyblue;
  font-size: 16px;
}
</style>