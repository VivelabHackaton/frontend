<template>
  <div class="home">
    <h1>Votaciones Electrónicas</h1>
    <login></login>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/home/Login.vue'
import * as constants from '@/store/constants'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState({
      user: state => state.Session.user
    })
  },
  watch: {
    user (val) {
      this.$router.push('dashboard')
    }
  },
  components: {
    Login
  }
}
</script>
