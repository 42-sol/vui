<template lang="pug">
.p-2
  p(v-for='v in value') {{ v }}
  button.border(@click='onAddNew') add new account
  Cascader.w-96(:data='data' v-model='value')
  Cascader.w-96(:data='data2')
  p Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur asperiores repellendus facilis quo sequi perferendis illum iure, rem est distinctio nobis veritatis, amet maxime laudantium quia non velit a!
</template>

<script setup lang="ts">
import { h, ref } from 'vue';
import type { Ref } from 'vue';
import type { CascadeOptionObj } from './types.d';

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

const data2: Ref<CascadeOptionObj[]> = ref([]);
const value = ref(['Document', 'Company', '1', '1']);

const idx = ref(1)
function onAddNew() {
  data2.value = [{ value: `Account-${idx.value}`, title: `Account-${idx.value}` }];
  idx.value++;
}
</script>
