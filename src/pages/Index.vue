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
      <!-- <pre>{{ inventory }}</pre> -->
      <div class="q-pa-md">
        <q-table
          title="Lista de equipos sin asignar"
          :rows="logs[0]"
          :columns="columns"
          no-data-label="No se encontraron datos"
        >
        <template v-slot:body="props">
          <q-tr :props="props" class = "cursor-pointer" @click="onRowClick($event, props.row)">
          <q-td key="id" :props="props">
            {{ props.row.id }}
          </q-td>
          <q-td key="type" :props="props">
            <q-badge color="white" style="color: black;">
              {{ props.row.type }}
            </q-badge>
          </q-td>
          <q-td key="user" :props="props">
            <q-badge color="white" style="color: black;">
              {{ props.row.user }}
            </q-badge>
          </q-td>
          <q-td key="employee" :props="props">
            <q-badge color="white" style="color: black;">
              {{ props.row.employee }}
            </q-badge>
          </q-td>
          <q-td key="equipo" :props="props">
            <q-badge color="white" style="color: black;">
              {{ inventory[props.row.inventory_id] }}
            </q-badge>
          </q-td>
          <q-td key="inventory_id" :props="props">
            <q-badge color="white" style="color: black;">
              {{ props.row.inventory_id }}
            </q-badge>
          </q-td>
        </q-tr>
        </template>
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
import { QBtn, QBtnGroup } from 'quasar'
export default {
  
  name: 'tutorial',
  el: 'app',
  data () {
      return {
        logs: [],
        logNoCharacteristics:[],
        inventory: [],
        inventory1: [],
        count: 1,
        id: [],
        params: [],
        json: {},
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
          { name: 'equipo', align: 'center', label: 'Equipo', field: 'equipo', sortable: true },
          { name: 'inventory_id', align: 'center', label: 'CodEquipo', field: 'inventory_id', sortable: true },
          // { name: 'inventory_id', align: 'center', label: 'Equipo', field: row => this.inventory.next , sortable: true },
          // { name: 'Acciones', align: 'center', label: 'Acciones', field: row => QBtn , sortable: true }
        ],
      }
    },
  created() {
    // this.listOfUnassigment()
    this.listOfUnassigment()
  },
  methods: {
    // gotosite(){
    //   window.location.href = 'http://localhost:8080/?#/logsDetails?'
    // }
    onRowClick(evt, props) {
      window.location.href = "http://localhost:8080/#/logsDetails/id="+props.inventory_id
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
           this.logNoCharacteristics = this.logs[0]            
          //  this.logNoCharacteristics.forEach(element => {
            // this.count = this.count+1
            // console.log(this.count)
            // this.id = element['inventory_id']
            // let params = JSON.stringify({
            //   id: this.logs[0][this.count]['inventory_id'],
            // })
            this.$axios
            .get('http://localhost/sistemaDeInventario/public/api/showInventory')
            .then((res) => {
              this.inventory = res.data
            })
              .catch(e => {
                console.log(e)
            });
            
          })
            .catch(e => {
              console.log(e)
          })
    },
       consultInventory () {
    //   this.logNoCharacteristics = this.logs[0]
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
