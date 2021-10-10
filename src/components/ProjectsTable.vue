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
        actionMode: "single",
        actions: ["view"],
        columns: [
          {
            key: "projectName",
            title: "Project Name",
          },
          { key: "punctuation" },
          { key: "invalid" },
          {
            key: "comments",
            title: "Jury comments",
            sortable: false,
          },
          {
            key: "link",
            sortable: false,
          }
        ]
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
