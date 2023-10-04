<template lang="pug">
.p-2
  p(v-for='v in value') {{ v }}
  Cascader.w-96(:data='data' v-model='value')
  p Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur asperiores repellendus facilis quo sequi perferendis illum iure, rem est distinctio nobis veritatis, amet maxime laudantium quia non velit a!
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = [
  { value: "Account", title: "Account" },
  { value: "Card", title: "Card" },
  { value: "Contact", title: "Contact" },
  { value: "Contract", title: "Contract" },
  {
    value: "Document",
    title: "Document",
    options: [
      { value: "FamilyMember", title: "Члены семьи", options: [] },
      {
        value: "Company",
        title: "Компании",
        options: [
          {
            value: "1",
            title: "Макдональдас",
            options: [
              { value: "1", title: "Документы Мака" }
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

// const value = ref([data[4], data[4]!.options![0]]);
// const value = ref(['Document', '1']);
const value = ref(['Document', 'Company', '1', '1']);
</script>

<style scoped>

</style>
