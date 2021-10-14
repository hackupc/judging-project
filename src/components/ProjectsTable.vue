<template>
  <div id="app">
    <link
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
    <div class="button-section">
      <button class="add-data">Add data</button>
    </div>
    <h1>HACKUPC PROJECTS</h1>
    <main>
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

<style scoped lang="scss">
.button-section {
  text-align: start;
  padding-left: 30px;

  .add-data {
    background: #e94662;
    margin-top: 20px;
    border-radius: 28px;
    color: #ffffff;
    text-transform: uppercase;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 20px;
    &:hover {
      font-weight: bold;
      box-shadow: 2px 2px rgba(0, 0, 0, 0.57);
    }
  }
}

</style>
