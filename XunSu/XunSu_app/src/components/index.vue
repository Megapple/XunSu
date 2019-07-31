<template>
  <div>
		<Tabbar :selected="selected"></Tabbar>
	</div>
</template>
<script>
import Tabbar from "./tabbar";
export default {
  name:"index",
  data(){
    return {
      selected:"index"
    }
  },
  components:{
    Tabbar
  }
}
</script>
<style scoped>
  
</style>
