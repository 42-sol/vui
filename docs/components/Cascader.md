# Cascader

::: warning
Still is not ready. Check later.
You could help us to fill this page by pull request on [vui repo](https://github.com/42-sol/vui)
:::

<script setup>
import '@42sol/vui/dist/vui.css';
import { h, ref } from 'vue';
import { VuiCascader } from '@42sol/vui';

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
</script>

<vui-cascader class='w-96' :data='data' v-model='value' clearable></vui-cascader>