<template>
  <div id="test">
    <h2>{{msg}}</h2>
  </div>
</template>
 
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Test Due by vue.js module.vue'
    }
  }
}
</script>
 
<style>
#test {
  font-family: Verdana;
  color: navy;
}
</style>
