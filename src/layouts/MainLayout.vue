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
          Gestion de inventario
        </q-toolbar-title>
        <div>v1.0</div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="background-color: #0d153c"
    >
      <q-list>
        <img src="img/logoComodisimosMenu.png" style="width: 45px; margin: 10px; margin-left: 25px;">
        <q-item-label
          header
          class="text-white absolute-center"
          style="position: absolute; top: 0; margin-top: 20px; margin-left: -30px;"
        >
          Juan Andrés
          <q-icon name="fas fa-sign-out-alt" class="absolute-left" style="margin-top: 40px; margin-left: 35px;"/>
          <q-icon name="fas fa-info-circle" class="absolute-left" style="margin-top: 40px; margin-left: 15px;"/>
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
    style: "margin: 10px; border-radius: 20px; font-family: 'Heebo', sans-serif'; font-weight: 100;"
  },

  {
    title: 'Gestion de inventario',
    caption: 'Registrar equipos',
    icon: 'fas fa-laptop-house',
    style: "margin: 10px; padding: 15px; border-radius: 20px; font-family: 'Heebo', sans-serif'; font-weight: 100;"
  },
  {
    title: 'Manual de usuario',
    caption: 'Manual con las instrucciones del software',
    icon: "fas fa-book-reader",
    style: "margin: 10px; border-radius: 20px; font-family: 'Heebo', sans-serif'; font-weight: 100;"
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
