<template>
  <div ref="table">sdfsdfsdfsdf</div>
</template>

<script>
import { Tabulator, FormatModule, EditModule } from "tabulator-tables"; //import Tabulator library
Tabulator.registerModule([FormatModule, EditModule]);

export default {
  data() {
    return {
      tabulator: null, //variable to hold your table
      tabledata: [
        {
          id: 1,
          name: "Billy Bob",
          age: 12,
          gender: "male",
          height: 95,
          col: "red",
          dob: "14/05/2010",
        },
        {
          id: 2,
          name: "Jenny Jane",
          age: 42,
          gender: "female",
          height: 142,
          col: "blue",
          dob: "30/07/1954",
        },
        {
          id: 3,
          name: "Steve McAlistaire",
          age: 35,
          gender: "male",
          height: 176,
          col: "green",
          dob: "04/11/1982",
        },
      ], //data for table to display
    };
  },
  mounted() {
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.$refs.table, {
      data: this.tableData, //link data to table
      height: "311px",
      columns: [
        { title: "id", field: "id" },
        { title: "name", field: "name", sorter: "number" },
        { title: "age", field: "age" },
        { title: "gender", field: "gender" },
        { title: "height", field: "height" },
        { title: "col", field: "col", hozAlign: "center" },
      ],
    });
  },
};
</script>
