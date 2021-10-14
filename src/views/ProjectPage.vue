<template>
  <div class="information">
    <ProjectInformation />
    <PunctuationCard />
  </div>
</template>

<script>
import PunctuationCard from "../components/PunctuationCard";
import ProjectInformation from "../components/ProjectInformation";
export default {
  name: "ProjectPage",
  components: { ProjectInformation, PunctuationCard },
};
</script>

<style scoped lang="scss">
.information {
  display: flex;
  justify-content: space-around;
}
</style>
