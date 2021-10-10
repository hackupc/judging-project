<template>
  <div class="form">
    <img alt="Vue logo" src="../assets/logo.png" style="width: 20%" />
    <div>
      <span>Sala de judging</span>
      <input v-model="message" >
    </div>
    <div>
      <span>Password</span>
      <input v-model="message" type="password" >
    </div>
    <button type="submit">Sign In</button>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style scoped></style>
