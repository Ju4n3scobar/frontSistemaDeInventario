<template>
  <q-page>
    <div id='app'>
      <!-- <table>
        <tr>
          <td v-for='log in logs[0]' :key='log.id'>
            {{ log.user }}
          </td>
        </tr>
      </table> -->
      <div class="q-pa-md">
        <q-table
          title="Acciones"
          :rows="logs[0]"
          @row-click= gotosite()
          :columns="columns"
          row-key="name"
          color="amber" 
        >
        </q-table>
  </div>
    </div>
  </q-page>
</template>

<script>
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Vue from 'vue'
import VueRouter from 'vue-router'
export default {
  name: 'tutorial',
  el: 'app',
  
  data () {
    return {
      logs: [],
      inventory: [],
      count: 0,
      json: {},
      i=0,
      id = '',
      columns: [
        {
          name: 'id',
          label: 'Id Log',
          align: 'center',
          field: 'id',
          sortable: true
        },
        { name: 'type', align: 'center', label: 'Tipo', field: 'type', sortable: true },
        { name: 'user', align: 'center', label: 'Usuario responsable', field: 'user', sortable: true },
        { name: 'employee', align: 'center', label: 'Empleado asignado', field: 'employee', sortable: true},
        { name: 'reason', align: 'center', label: 'Razon', field: 'reason', sortable: true},
        { name: 'inventory_id', align: 'center', label: 'Equipo', field: row => this.inventory , sortable: true }
      ]
    }
  },
  created () {
    // this.listOfUnassigment()
    this.listOfUnassigment()
    this.consultInventory()
  },
  methods: {
    gotosite(){
      window.location.href = 'http://localhost:8080/?#/logsDetails'
    },
    // async listOfUnassigment(): Promise<void> {
    //   console.log('hola que haces');
    //   try {
    //     const data = await fetch(
    //       'http://localhost/sistemaDeInventario/public/api/showLogs'
    //     );
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    //     const responseData = await data.json();
    //     console.log(responseData);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    listOfUnassigment () {
      this.$axios
        .get('http://localhost/sistemaDeInventario/public/api/showLogs')
        .then((res) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          this.logs = res.data
          this.count = this.logs[0]
        })
        .catch(e => {
          console.log(e)
        })
    },
    consultInventory (row) {
      for ( i = 1; i < this.count; i++) {
        this.id = logs[0][i]['inventory_id'] 
        this.$axios
          .get('http://localhost/sistemaDeInventario/public/api/consultInventory',{
            params: {
              id: this.id
              }
          })
          .then(res => {
            this.inventory = res.data[0]['name']
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    // comoQuiera (){
    //Este metodo se puede llamar en algun campo de la tabla, como se muestra en columns 
    // }
    sendConsultInventory () {
      this.count++
      size_inventory_response= clothing.length;
      this.count
      json={"id":this.count}
    }
  }
}
</script>
