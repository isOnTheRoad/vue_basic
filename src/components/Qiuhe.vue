<template>
  <div>
    <div>{{ $store.state.sum }}</div>
    <button @click="add">+1</button>
    <button @click="subtract">-1</button>
  </div>
</template>

<script>
export default {
  name: 'Qiuhe',
  data () {
    return {

    }
  },
  methods: {
    add () {
      this.$store.dispatch('add')
      console.log('执行了')
    },
    subtract () {
      this.$store.commit('SUBSTRACT')
    }
  }

}
</script>

<style>
</style>