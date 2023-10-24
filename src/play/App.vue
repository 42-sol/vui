<script setup lang='ts'>
import { useRouter } from 'vue-router';

const views = useRouter().getRoutes().filter(_ => _.path !== '/');
</script>

<template>
<div class='w-screen h-screen overflow-hidden flex'>
  <div class="border-r w-60 h-full overflow-hidden overflow-y-auto flex flex-col space-y-1 p-2">
    <h1>
      <router-link :to='{ name: "HomePage" }'>@42sol/vui</router-link>
    </h1>

    <router-link
      v-for='view in views'
      :key='view.name'
      :to='{ name: view.name }'
    >
      <span class='text-blue-500'>{{ view.name }}</span>
    </router-link>
  </div>

  <router-view class='w-full h-full overflow-hidden overflow-y-auto p-2' />
</div>
</template>

<style scoped>

</style>
