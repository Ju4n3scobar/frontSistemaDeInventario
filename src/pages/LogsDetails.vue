<template>
  <q-page class="q-pa-xl">
        <h4>Detalles logs</h4>
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
      logs: [],
      inventory: [],
      count: 0,
      user: [],
      characteristics: '',
      type: [],
      employee: [],
      inventory_id: [],
      json: {},
      size_inventory_response: ''
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
          this.user = res.data[0][0]['user']
          this.type = res.data[0][0]['type']
          this.characteristics = JSON.stringify(res.data[1][0]).replace(/"/g,"").replace(/{/g,"").replace(/}/g,"").replace(/]/g,"").replace("[","").replace("[","")
          this.characteristics.replace('[','')
          this.employee = res.data[0][0]['employee']
        })
        .catch(e => {
          console.log(e)
        })
    },
    listOfCharacteristics () {
      this.$axios
        .get('http://localhost/sistemaDeInventario/public/api/returnCharacteristics')
        .then((res) => {
          this.logs = res.data
          this.user = res.data[0][0]['user']
          this.type = res.data[0][0]['type']
          this.employee = res.data[0][0]['employee']
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
