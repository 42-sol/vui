<script setup lang="ts">
import { h, ref } from 'vue';

const data = [
  { value: "Account", title: "Account" },
  { value: "Card", title: "Card" },
  { value: "Contact", title: "Contact" },
  { value: "Contract", title: "Contract" },
  {
    value: "Document",
    title: "Document asdasdasdasdasdasdasdas",
    options: [
      { value: "FamilyMember", title: "Члены семьи", options: [] },
      {
        value: "Company",
        title: "Компании",
        getAsyncOptions: () => {
          return new Promise((res) => {
            setTimeout(() => {
              res([{ value: 'asyncCompany-1', title: 'Асинхронная компания' }]);
            }, 5000);
          });
        },
        options: [
          {
            value: "1",
            title: "Макдональдас",
            options: [
              {
                value: "1",
                title: "Документы Мака",
                render: () => {
                  return h('div', 'Доки мака');
                }
              }
            ]
          }
        ]
      },
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

const value = ref([]);
// const value = ref(['Document', 'Company', '1', '1']);
</script>

<template>
<div class="p-2">
  <vui-cascader
  class='w-96'
  :data='data'
  v-model='value'
  clearable
  filterableCascades
  sortableCascades
  ></vui-cascader>
  <p>It's value: {{ value }}</p>
</div>
</template>

<style scoped>

</style>
