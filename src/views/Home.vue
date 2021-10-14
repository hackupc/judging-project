<template>
  <div class="home">
    <ProjectsTable />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProjectsTable from "@/components/ProjectsTable.vue"; // @ is an alias to /src

@Options({
  components: {
    ProjectsTable,
  },
})
export default class Home extends Vue {}
</script>
