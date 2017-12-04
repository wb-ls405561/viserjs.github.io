export const template =
`<template>
<div>
  <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
    <v-tooltip />
    <v-axis />
    <v-line :position="'year*value'" size="2"/>
    <v-area :position="'year*value'" />
  </v-chart>
</div>
</template>

<script>
const data = [
  { year: '1991', value: 15468 },
  { year: '1992', value: 16100 },
  { year: '1993', value: 15900 },
  { year: '1994', value: 17409 },
  { year: '1995', value: 17000 },
  { year: '1996', value: 31056 },
  { year: '1997', value: 31982 },
  { year: '1998', value: 32040 },
  { year: '1999', value: 33233 }
];

const scale = [{
  dataKey: 'value',
  min: 10000,
}, {
  dataKey: 'year',
  min: 0,
  max: 1,
}];

export default {
  data() {
    return {
      data,
      scale,
      height: 400,
    };
  }
};
</script>

`;
