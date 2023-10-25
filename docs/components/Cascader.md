# Cascader

::: warning
Still is not ready. Check later.
You could help us to fill this page by pull request on [vui repo](https://github.com/42-sol/vui)
:::

<script setup>
import '@42sol/vui/dist/vui.css';
import { h, ref } from 'vue';
import { VuiCascader } from '@42sol/vui';

function getDocCompaniesAsync() {
  return new Promise((res) => {
    setTimeout(() => {
      res([{ value: 'kfc', title: 'KFC', options: "Документы KFC" }]);
    }, 5000);
  });
}

const data1 = [
  {
    value: "Document",
    title: "Документы",
    options: [
      { value: "FamilyMember", title: "Члены семьи", options: [] },
      { 
        value: "Company", title: "Компании", getAsyncOptions: getDocCompaniesAsync,
        options: [
          {
            value: "1", title: "Макдональдс",
            options: [
              { value: "1", title: "Документы Мака", render: () => h('div', 'Доки мака') }
            ]
          }
        ]
      },
    ]
  },
  {
    value: "Tax",
    title: "Налоги",
    children: [
      {
        value: 'IndividualTax', title: 'Налоги физ лиц',
        children: [
          { value: "1", title: "Налог на роскошь" },
          { value: "2", title: "НДФЛ" },
        ]
      }
    ]
  },
];

const value1 = ref([]);
</script>

<vui-cascader :data='data1' v-model='value1' clearable></vui-cascader>

```html
<script setup>
import { h, ref } from 'vue';

function getDocCompaniesAsync() {
  return new Promise((res) => {
    setTimeout(() => {
      res([{ value: 'kfc', title: 'KFC', options: "Документы KFC" }]);
    }, 5000);
  });
}

const data1 = [
  {
    value: "Document",
    title: "Documents",
    options: [
      { value: "FamilyMember", title: "Члены семьи", options: [] },
      { 
        value: "Company", title: "Компании", getAsyncOptions: getDocCompaniesAsync,
        options: [
          {
            value: "1", title: "Макдональдас",
            options: [
              { value: "1", title: "Документы Мака", render: () => h('div', 'Доки мака') }
            ]
          }
        ]
      },
    ]
  },
  {
    value: "Tax",
    title: "Taxes",
    children: [
      {
        value: 'IndividualTax', title: 'Налоги физ лиц',
        children: [
          { value: "1", title: "Налог на роскошь" },
          { value: "2", title: "НДФЛ" },
        ]
      }
    ]
  },
];

const value1 = ref([]);
</script>

<template>
  <vui-cascader :data='data1' v-model='value1' clearable></vui-cascader>
</template>
```