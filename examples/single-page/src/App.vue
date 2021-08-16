<template>
  <h2>Hello</h2>
  <p>World</p>

  <h3>Initial State:</h3>
  <pre>{{ store.user }}</pre>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useStore } from 'vuex';
import { key } from './store';

useHead({
  title: 'Hello World',
})

const store = useStore(key);
</script>

<style>
#app {
  padding: 4em 8em;
  font-family: sans-serif;
}
</style>
