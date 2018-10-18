<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form @submit.prevent="login" autocomplete="off">
                    <div class="form-group">
                        <label for="dni"><h3>Identificador</h3></label>
                        <input type="text" id="dni" class="form-control" v-model="form.id" required>
                    </div>
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import * as constants from '@/store/constants'
  export default {
    data () {
      return {
        form : {id: null}
      }
    },
    methods: {
      ...mapActions({
        loginUser: constants.SESSION_SIGN_IN
      }),
      login () {
        this.loginUser(this.form)
      }
    }
  }
</script>

<style scoped>

</style>
