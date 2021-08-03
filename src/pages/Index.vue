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
export default {
  name: 'tutorial',
  el: 'app',
  data () {
    return {
      logs: [],
      inventory: [],
      count: 0,
      json: {},
      size_inventory_response: '',
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
        { name: 'inventory_id', align: 'center', label: 'Equipo', field: row => this.consultInventory(row), sortable: true }
      ]
    }
  },
  created () {
    // this.listOfUnassigment()
    this.listOfUnassigment()
  },
  methods: {
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
        })
        .catch(e => {
          console.log(e)
        })
    },
    // comoQuiera (){
    //Este metodo se puede llamar en algun campo de la tabla, como se muestra en columns 
    // }
        consultInventory (row){
        this.$axios
        .get('http://localhost/sistemaDeInventario/public/api/consultInventory', {
            params: {
              id: 1
            }
         })
         .then(res => {
          response = (this.inventory = res.data)
          return response
        })
        .catch(e => {
          console.log(e)
        })
      },
    sendConsultInventory (){
      this.count++
      size_inventory_response= clothing.length;
      this.count
      json={"id":this.count}
    }
  }
}
</script>
