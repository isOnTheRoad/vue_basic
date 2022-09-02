<template>
  <div>
    <Qiuhe></Qiuhe>
    <div class="home">
      <ul>
        <li>
          <router-link to="/home" class="textcolor">home</router-link>
        </li>
        <li>
          <router-link to="about" class="textcolor">about</router-link>
        </li>
      </ul>
    </div>

    <div class="about">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Qiuhe from './components/Qiuhe'

export default {
  name: 'App',
  components: {
    Qiuhe

  }
}
</script>

<style>
.home {
  background-color: yellow;
  width: 200px;
  height: 200px;
}
.about {
  background-color: gray;
  width: 200px;
  height: 200px;
}
</style>
