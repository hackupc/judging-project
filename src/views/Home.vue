<template>
  <div class="home">
    <ProjectsTable />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";
import ProjectsTable from "@/components/ProjectsTable.vue"; // @ is an alias to /src

@Options({
  components: {
    ProjectsTable,
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
