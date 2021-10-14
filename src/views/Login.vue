<template>
  <div class="login">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
export default {
  name: "Login",
  components: { LoginForm },
};
</script>

<style scoped lang="scss">
.login {
  margin-top: 100px;
}
</style>
