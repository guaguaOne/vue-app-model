<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Button type="primary" @click="fun(123)">Primary</Button>
    <img src="@/assets/test.jpg" alt="" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import './home.scss';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    fun(info){
      // this.$router.push({ path: "/about" });
      this.axios.post("/server/systemConfig/getIndexnfo").then(res=>{
        debugger;
      })
    }
  }
}
</script>

