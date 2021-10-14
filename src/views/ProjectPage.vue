<template>
  <div class="back-button">
    <button class="back-button__button">Back to all projects</button>
  </div>
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
.back-button {
  text-align: start;
  padding: 0 30px 30px 30px;

  .back-button__button {
    background: #e94662;
    border-radius: 28px;
    color: #ffffff;
    text-transform: uppercase;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 20px;
  }
}
</style>
