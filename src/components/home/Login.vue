<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="dni">Identificador</label>
                        <input type="text" id="dni" class="form-control" v-model="form.dni" required>
                    </div>
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        form : {dni: null}
      }
    },
    methods: {
      login () {
        console.log(this.form)
      }
    }
  }
</script>

<style scoped>

</style>
