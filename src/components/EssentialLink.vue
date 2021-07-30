<template class="q-pa-lg">
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
    class="bg-grey-10"
  >
    <q-item-section
      v-if="icon"
      avatar
      color="white"

    >
      <q-icon class="text-grey-6" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-white" >{{ title }}</q-item-label>
      <q-item-label class="text-grey-6" caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
