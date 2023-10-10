<template lang="pug">
.p-2
  Cascader.w-96(:data='data' v-model='value' clearable)
  p(v-for='v in value') {{ v }}
</template>

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

const value = ref(['Document', 'Company', '1', '1']);
</script>
