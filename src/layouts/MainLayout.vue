<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-3 text-grey-9">
         <!-- style="background-color: #F5F5F5; color: #001250" -->
         <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <img src="img/logoComodisimos.png" style="width: 120px">
        </q-toolbar-title>

        <div>Gestion de inventario v1.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-3"

    >
      <q-list>
        <q-item-label
          header
          class="text-grey-9 text-bold"
        >
          Menu de acciones

        </q-item-label >

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [

  {
    title: 'Gestion de logs',
    caption: 'Asignar equipo, cambiar caracteristicas, etc.',
    icon: "far fa-save",
    link: 'https://quasar.dev',
    style: 'margin: 10px; padding: 10px; border-radius: 20px;'
  },

  {
    title: 'Gestion de inventario',
    caption: 'Registrar equipos',
    icon: 'fas fa-laptop-house',
    link: 'https://github.com/quasarframework',
    style: 'margin: 10px; padding: 15px; border-radius: 20px; '
  },
  {
    title: 'Manual de usuario',
    caption: 'Manual con las instrucciones del software',
    icon: "fas fa-book-reader",
    link: 'http://localhost:9090/#/registrar',
    style: 'margin: 10px; border-radius: 20px; '
  }
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
