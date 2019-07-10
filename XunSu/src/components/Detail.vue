<template>
  <div>
    <mt-button @click="test">test</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:"This is a  test for detail page"
    }
  },
  methods:{
    test(){
      this.$messagebox(this.msg)
    }
  }
}
</script>
