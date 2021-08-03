<template>
  <q-page class="q-pa-xl">
        <h4>Registrar equipo</h4>

        <q-form class="row q-col-glutter-md" @submit.prevent="pressSave" @reset="pressReset" ref="form">

            <div class="col-12 col-sm-6">
                 <q-input lazy-rules :rules="[
                    val => !!val || 'Campo obligatorio',
                    val => val.length > 4 || 'Por favor ingresa al menos cuatro caracteres',
                    val => val.length < 20 || 'Solo se permiten veinte caracteres',
                    ]" rounded outlined v-model="nombre" label="Nombre" /><br><br>
            </div>
            <div class="col-12 col-sm-6">
                 <q-input lazy-rules :rules="[
                    val => !!val || 'Campo obligatorio',
                    val => val.length > 10 || 'Por favor ingresa al menos cuatro caracteres',
                    ]" rounded outlined v-model="asignacion" label="Usuario a asignar" /><br><br>
            </div>
            
            <div class="col-12 col-sm-6">
                <q-select lazy-rules :rules="[
                    val => !!val || 'Campo obligatorio',
                    ]" rounded outlined v-model="seleccionClasificacion" :options="clasificacion" label="Clasificacion" />
            </div>
            <div class="col-12 col-sm-6">
                 <q-input lazy-rules :rules="[
                    val => !!val || 'Campo obligatorio',
                    val => val.length >= 5 || 'Por favor ingresa al menos cinco digitos',
                    val => val.length < 9 || 'Solo se permiten referencias de nueve digitos',
                    ]" rounded outlined v-model="referencia" label="Referencia" /><br><br>
            </div>
            <div class="col-12 col-sm-6">
                <q-select lazy-rules :rules="[
                    val => !!val || 'Campo obligatorio',
                    ]" rounded outlined v-model="seleccionEstado" :options="estado" label="Estado" /><br><br>
            </div>

            <div class="col-12">
                <q-btn color="primary" type="submit" label="Registrar" />
                <q-btn color="primary" type="reset" outline class="q-ml-sm" label="Limpiar" />
            </div>
        </q-form>
    </q-page>
</template>

<script>
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { ref } from 'vue'
import { Notify, useQuasar } from 'quasar'
export default ({
    setup() {
        const nombre = ref(null)
        const asignacion = ref(null)
        const clasificacion = ['Torre', 'Monitor', 'Router', 'Scanner']
        const referencia = ref(null)
        const estado = ['Activo', 'Inactivo']
        const seleccionClasificacion=ref(null)
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
            seleccionClasificacion.value = null
            seleccionEstado.value = null
        }
        return{
            nombre,
            asignacion,
            clasificacion,
            referencia,
            seleccionClasificacion,
            seleccionEstado,
            estado,
            form,
            pressSave, 
            pressReset
        }
    },
})
</script>
