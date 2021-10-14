<template>
  <div id="app">
    <link
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
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
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
          },
        ],
      };
    },
  },

  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    handleAction(actionName, data) {
      console.log(actionName, data);
      window.alert("check out the console to see the logs");
    },
  },
};
</script>
