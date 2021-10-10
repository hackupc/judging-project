<template>
  <div id="app">
    <h1>VUE DATA TABLE</h1>
    <main>
      <h2>TABLE 1</h2>
      <data-table v-bind="parametersTable1" @actionTriggered="handleAction" />
    </main>
  </div>
</template>

<script>
import users from "../dummydata/users";

export default {
  name: "ProjectsTable",

  computed: {
    parametersTable1() {
      return {
        data: users,
        actionMode: "multiple",
        columnKeys: [
          "name",
          "email",
          "gender",
          "country",
          "job",
          "city",
          "created_at",
        ],
      };
    },
  },

  methods: {
    handleAction(actionName, data) {
      console.log(actionName, data);
      window.alert("check out the console to see the logs");
    },
  },
};
</script>
