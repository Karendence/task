<template>
    <table class="table table-striped content-table">
      <thead>
        <tr>
          <th v-for="(item, index) in columns" :key="index">
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index1) in data" :key="index1">
          <td v-for="(column, index2) in columns" :key="index2" v-html="getRecord(column, item)">
          </td>
        </tr>
      </tbody>
    </table>
</template>
<script>
export default {
  name: 'MyTable',
  data () {
    return {
    }
  },
  props: {
    columns: {
      type: Array,
      required: false,
      default: [],
    },
    data: {
      type: Array,
      required: true,
    }
  },
  methods: {
    getRecord(col, record) {
      if (col.render) {
        return col.render(record, record[col.key]);
      }
      return record[col.key];
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
thead {
    font-size: 16px;
    letter-spacing: 1.9px;
    color: #939393;
    border-top: 0px;
    font-weight: normal;
    font-size: 14px!important;
}
</style>
