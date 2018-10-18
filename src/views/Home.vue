<template>
  <div class="home">
    <h1>Votaciones Electrónicas</h1>
    <login></login>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/home/Login.vue'

export default {
  name: 'home',
  components: {
    Login
  }
}
</script>
