<template lang="pug">
Cascader(:data='data' v-model='value')
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Cascader from './components/Cascader.vue';

const value = ref([]);

const data = [
  { value: "Account", title: "Account" },
  { value: "Card", title: "Card" },
  { value: "Contact", title: "Contact" },
  { value: "Contract", title: "Contract" },
  {
    value: "Document",
    title: "Document",
    options: [
      { value: "1", title: "Документы ФЛ" },
    ]
  },
  {
    value: "Tax",
    title: "Tax",
    children: [
      {
        value: 'IndividualTax',
        title: 'Налоги физ лиц',
        children: [
          { value: "1", title: "Налог на роскошь" },
          { value: "2", title: "НДФЛ" },
        ]
      }
    ]
  },
];
</script>

<style scoped>

</style>