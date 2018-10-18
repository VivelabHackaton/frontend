<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Bienvenido al prototipo de votaciones electrónicas!</h1>
            </div>
        </div>
        &nbsp;
        <div class="row">
            <div class="col-6">
                <h2>Instrucciones:</h2>
            </div>
            <div class="col-6">
                <p>Selecciona a <strong>uno</strong> de los candidatos en la lista y a continuación confirma tu elección.</p>
                <p>Los resultados de la votación se mostrarán en esta pantalla una vez se haya completado el tiempo.</p>
            </div>
        </div>
        &nbsp;
        <div class="row">
            <div class="col-4">
                <div class="container-fluid">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="../assets/mocks/candidates/cand1.png" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">Candidato 1</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="container-fluid">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="../assets/mocks/candidates/cand2.png" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">Candidata 2</p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="../assets/mocks/candidates/withevote.png" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">Voto en blanco</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Dashboard"
  }
</script>

<style scoped>

</style>
