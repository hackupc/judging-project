<template>
  <div class="form">
    <img alt="hackupc-logo" src="../assets/logo.png" />
    <div class="card__input-group">
      <label for="room" class="card__input-group--label">Judging room</label>
      <input
        v-model="message"
        id="room"
        type="text"
        class="card__input-group--input"
      />
    </div>
    <div class="card__input-group">
      <label for="pw" class="card__input-group--label">Password</label>
      <input
        v-model="message"
        type="password"
        class="card__input-group--input"
        id="pw"
      />
    </div>
    <button type="submit" class="card__submit-button">Sign In</button>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style scoped lang="scss">
.form {
  padding: 30px 10px;
  border: 2px solid #e94662;
  border-radius: 20px;
  width: 50%;
  height: fit-content;
  font-family: Montserrat, sans-serif;
  margin: 0 auto;

  img {
    width: 30%;
    margin-bottom: 30px;
  }

  .card__input-group {
    display: flex;
    flex-direction: column;
    align-items: center;

    .card__input-group--label {
      margin-bottom: 5px;
      font-weight: 500;
    }

    .card__input-group--input {
      padding: 8px 10px;
      width: 60%;
      border-radius: 10px;
      border: 1px solid black;
      margin-bottom: 12px;
      font-size: 20px;
      text-align: center;
    }
  }

  .card__submit-button {
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
