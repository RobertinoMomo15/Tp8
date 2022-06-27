<template>

  <section class="src-components-formulario">

    <div class="jumbotron">

      <h1>Agregar usuarios</h1>
      <hr>

      <vue-form :state="formState" @submit.prevent="enviar()">
      
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre"
            class="form-control"
            autocomplete="off"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            v-model="$store.state.formData.nombre"
          >
          
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Este campo es requerido.
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
                El nombre debe tener {{nombreMinLength}} letras minimo.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
                El nombre debe tener {{nombreMaxLength}} letras maximo.
            </div>

          </field-messages>

        </validate>

        <br>

        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            name="edad"
            class="form-control"
            v-model.number="$store.state.formData.edad"
            autocomplete="off"
            required
            :min="edadMin"
            :max="edadMax"
          >

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es requerido.</div>
            <div slot="min" class="alert alert-danger mt-1">La edad minima es {{edadMin}} </div>
            <div slot="max" class="alert alert-danger mt-1">La edad maxima es {{edadMax}} </div>          
          </field-messages>
        </validate>

        <br>

        <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email"
            v-model="$store.state.formData.email"
            class="form-control"
            required
            autocomplete="off"
          >

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Este campo es requerido.</div>
            <div slot="email" class="alert alert-danger mt-1">Email no valido.</div>
          </field-messages>

          <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>

        </validate>
      

      
      </vue-form>

      <br>

      <router-link to="/usuarios">
        <button type="button" class="btn btn-info">
          Ver usuarios agregados
        </button>
      </router-link>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        nombreMinLength : 3,
        nombreMaxLength : 15,
        edadMin : 18,
        edadMax : 120
      }
    },
    methods: {
      enviar(){
        this.$store.dispatch('enviarForm')
        
        this.formData = this.getInicialData()
        this.formState._reset()
      },
      getInicialData(){
        return{
          nombre : '',
          edad : '',
          email : ''
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  
</style>
