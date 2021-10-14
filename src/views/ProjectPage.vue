<template>
  <div class="back-button">
    <a class="back-button__button" href="/">Back to all projects</a>
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
    text-decoration: none;

    &:hover {
      font-weight: bold;
      box-shadow: 2px 2px rgba(0, 0, 0, 0.57);
    }
  }
}
</style>
