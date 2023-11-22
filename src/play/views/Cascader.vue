<script setup lang="ts">
import { ref } from 'vue';

// const data = [
//   { value: "Account", title: "Account" },
//   { value: "Card", title: "Card" },
//   { value: "Contact", title: "Contact" },
//   { value: "Contract", title: "Contract" },
//   {
//     value: "Document",
//     title: "Document asdasdasdasdasdasdasdas",
//     options: [
//       { value: "FamilyMember", title: "Члены семьи", options: [] },
//       {
//         value: "Company",
//         title: "Компании",
//         getAsyncOptions: () => {
//           return new Promise((res) => {
//             setTimeout(() => {
//               res([{ value: 'asyncCompany-1', title: 'Асинхронная компания' }]);
//             }, 5000);
//           });
//         },
//         options: [
//           {
//             value: "1",
//             title: "Макдональдас",
//             options: [
//               {
//                 value: "1",
//                 title: "Документы Мака",
//                 render: () => {
//                   return h('div', 'Доки мака');
//                 }
//               }
//             ]
//           }
//         ]
//       },
//     ]
//   },
//   {
//     value: "Tax",
//     title: "Tax",
//     children: [
//       {
//         value: 'IndividualTax',
//         title: 'IndividualTax',
//         children: [
//           { value: "1", title: "Налог на роскошь" },
//           { value: "2", title: "НДФЛ" },
//         ]
//       }
//     ]
//   },
// ];

const data1 = [
  {
    value: "location", title: "Location",
    options: [
      {
        value: "1", title: "USA",
        children: [
          { 
            value: '2', title: 'New-Mexico',
            children: [
              { value: "3", title: "Albuquerque" },
              { value: "4", title: "Santa-Fe" },
            ]
          }
        ]
      }
    ]
  }
];

const value1 = ref([]);
const value2 = ref(['location', '2']);
const value3 = ref([]);
const value4 = ref([]);
const value5 = ref<[string?, string?]>([]);
// const value = ref(['Document', 'Company', '1', '1']);

function onFilter(...args: unknown[]) {
  console.log('onFilter', ...args)
}
</script>

<template>
<div _flex='~ col' _space-y-4>
  <h2>VuiCascader</h2>

  <section>
    <h3>Simple Cascader</h3>
    <p>It's value: {{ value1 }}</p>
    <vui-cascader
    class='w-96'
    :data='data1'
    v-model='value1'
    ></vui-cascader>
  </section>

  <section>
    <h3>Cascader with default value (+clearable)</h3>
    <p>It's value: {{ value2 }}</p>
    <vui-cascader
    class='w-96'
    :data='data1'
    v-model='value2'
    clearable
    ></vui-cascader>
  </section>

  <section>
    <h3>Cascader with filterable</h3>
    <p>It's value: {{ value3 }}</p>
    <vui-cascader
    class='w-96'
    :data='data1'
    v-model='value3'
    clearable
    filterableCascades
    sortableCascades
    ></vui-cascader>
  </section>

  <section>
    <h3>Simple Cascader</h3>
    <p>It's value: {{ value4 }}</p>
    <vui-cascader
    class='w-96'
    :data='data1'
    v-model='value4'
    clearable
    sortableCascades
    filterable
    ></vui-cascader>
  </section>

  <section>
    <h3>Simple Cascader</h3>
    <p>It's value: {{ value5 }}</p>
    <vui-cascader
    class='w-96'
    :data='data1'
    v-model='value5'
    filterable
    sortableCascades
    @on-filter='onFilter'
    >
      <template #filteredOptions='{ cascade, selectedOptions, inputModelValue, onChoose }'>
        <p @click='() => { value5 = ["location", "3"]; onChoose() }'>{{ inputModelValue }}</p>
        <p>{{ cascade }}</p>
        <p>{{ selectedOptions }}</p>
      </template>
    </vui-cascader>
  </section>

  <!-- <section> -->
    <!-- <h3>Simple Cascader</h3> -->
    <!-- <p>It's value: {{ value5 }}</p> -->
    <!-- <vui-cascader -->
    <!-- class='w-96' -->
    <!-- :data='data1' -->
    <!-- v-model='value5' -->
    <!-- clearable -->
    <!-- filterableCascades -->
    <!-- sortableCascades -->
    <!-- ></vui-cascader> -->
  <!-- </section> -->
</div>
</template>

<style lang='scss' scoped>
h2 {
  @apply text-2xl;
}

section h3 {
  @apply text-xl;
}
</style>
