<template>
  <q-page class="q-pa-xl">
        <h4>Detalles logs</h4>
        <a href="http://localhost:8080/?#/" class="absolute-top-right" style="margin-top: 100px; margin-right: 60px;">Regresar</a>
        <q-form class="row q-col-glutter-md" @submit.prevent="pressSave" @reset="pressReset" ref="form">
            <div class="col-12 col-sm-6">
                 <q-input rounded outlined v-model="user" label="Usuario" /><br><br>
            </div>
            <div class="col-12 col-sm-6">
                 <q-input rounded outlined v-model="type" label="Tipo" /><br><br>
            </div>
            <div class="col-12 col-sm-6">
                <q-input rounded outlined v-model="characteristics" label="Caracteristicas" />
            </div>
            <div class="col-12 col-sm-6">
                <q-input rounded outlined v-model="employee" label="Empleado asignado" /><br><br>        
            </div>
            <div class="col-12 col-sm-6">
                <q-input rounded outlined v-model="razon" label="Razon" /><br><br>        
            </div>
            <div class="col-12 col-sm-6">
                <q-input rounded outlined v-model="nombreEqui" label="Nombre del equipo" /><br><br>        
            </div>
            <div > 
              <q-btn style="margin-left: -200px; margin-top: 150px;" @click="saveLogUpdateCharacteristics()" label="Guardar" type="submit" color="primary" class="q-ma-xl absolute-center"/>
              <q-btn style="margin-left: 0px; margin-top: 150px;" outline label="Actualizar" type="reset" color="secondary" class="q-ma-xl absolute-center"/>
              <q-btn style="margin-left: 200px; margin-top: 150px; background: #E64532; color: white" label="Dar de baja" type="submit" class="q-ma-xl absolute-center"/>
            </div>
        </q-form>
    </q-page>
</template>
<script>
import { ref } from 'vue'
import { Notify, useQuasar } from 'quasar'
export default {
  name: 'tutorial',
  el: 'app',
    setup() {
        const nombre = ref(null)
        const asignacion = ref(null)
        const tipo = ['Registrar', 'Actualizar', 'Router', 'Scanner']
        const referencia = ref(null)
        const estado = ['Activo', 'Inactivo']
        const seleccionTipo=ref(null)
        const seleccionEstado=ref(null)
        const form = ref(null)
        const q = useQuasar()
        const pressSave = () => {
            
            console.log('Diste click al formulario')
            q.notify({
                type: 'positive',
                message: 'Equipo registrado correctamente'
            })
            form.value.resetValidation()
            pressReset()
            //Se envia al backend
        }
        const pressReset = () => {
            nombre.value = null
            asignacion.value = null
            referencia.value = null
            seleccionTipo.value = null
            seleccionEstado.value = null
        }
        return{
            nombre,
            asignacion,
            tipo,
            referencia,
            seleccionTipo,
            seleccionEstado,
            estado,
            form,
            pressSave, 
            pressReset
        }
    },
    data () {
    return {
      id: this.$route.params.id[3]-1,
      nombreEqui: [],
      razon : [],
      logs: [],
      user: [],
      characteristics: '',
      type: [],
      employee: [],
    }
  },
  created () {
    // this.listOfUnassigment()
    this.listOfUnassigment()
  },
  methods: {
    
    listOfUnassigment () {
      this.$axios
        .get('http://localhost/sistemaDeInventario/public/api/showLogs')
        .then((res) => {
          this.logs = res.data
          this.user = res.data[0][this.id]['user']
          this.type = res.data[0][this.id]['type']
          this.characteristics = JSON.stringify(res.data[0][this.id]['characteristics']).replace(/"/g,"")
        //   .replace(/{/g,"").replace(/}/g,"").replace(/]/g,"").replace('[',"")
        //   this.characteristics.replace('[','')
          this.employee = res.data[0][this.id]['employee']
          this.razon = res.data[0][this.id]['reason']
          this.$axios
            .get('http://localhost/sistemaDeInventario/public/api/showInventory')
            .then((respuesta) => {
              this.nombreEqui = respuesta.data[this.id+1]["name"]
            })
              .catch(e => {
                console.log(e)
            });
          
        })
        .catch(e => {
          console.log(e)
        })
    },
    saveLogUpdateCharacteristics () {
          this.$axios
            .post('http://localhost/sistemaDeInventario/public/api/changeCharacteristics', {
              params: { 
                id: 1,
                type: "Actualizar",
                user: "Juan",
                characteristics: "RAM=>10=>Procesador=>IntelCeleron",
                employee: "Gilberto",
                reason: "Sin pc",
                inventory_id: 1,

              },
              headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
              },
              })
              .then(res => {
                  console.log(res.data)
                })
              .catch(e => {
                console.log(e)
              })
    },
  }
}
</script>