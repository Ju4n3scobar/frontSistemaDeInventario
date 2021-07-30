<template>
  <div id="app">
    <q-page class="row items-center justify-evenly">
      <q-btn color="primary" icon="check" label="OK" @click="listOfUnassigment" />
    </q-page>
  </div>
</template>

<script lang="ts">
export default {
  el: 'app',
  mounted: {
    this.listOfUnassigment()
  },
  methods: {
    async listOfUnassigment (): Promise<void> {
      try {
        const data = await fetch(
          'http://localhost/sistemaDeInventario/public/api/showLogs'
        )
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const responseData = await data.json()
        console.log(responseData)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
