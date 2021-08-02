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
          dark
          color="amber"
        />
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
      user: '',
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        { name: 'characteristics', align: 'center', label: 'Characteristics', field: row => this.comoQuiera(row), sortable: true },
        { name: 'reason', align: 'center', label: 'Razon', field: 'reason', sortable: true },
        { name: 'inventory_id', align: 'center', label: 'Equipo', field: 'inventory_id', sortable: true }
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
    comoQuiera (row) {
      console.log('aaa', row)
      
      return 'c'
    }
  }
}
</script>
