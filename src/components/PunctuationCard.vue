<template>
  <div class="card">
    <h2 class="card__title">Project punctuaction</h2>
    <div class="card__input-group">
      <label for="technology" class="card__input-group--label">
        Technology
      </label>
      <input
        v-model="message"
        type="number"
        id="technology"
        max="5"
        min="0"
        class="card__input-group--input"
      />
    </div>
    <div class="card__input-group">
      <label for="learning" class="card__input-group--label"> Learning </label>
      <input
        v-model="message"
        type="number"
        id="learning"
        max="5"
        min="0"
        class="card__input-group--input"
      />
    </div>
    <div class="card__input-group">
      <label for="innovation" class="card__input-group--label">
        Idea & Innovation
      </label>
      <input
        v-model="message"
        type="number"
        id="innovation"
        max="5"
        min="0"
        class="card__input-group--input"
      />
    </div>
    <div class="card__checkbox-group">
      <input
        type="checkbox"
        id="visualDesign"
        v-model="checked"
        class="card__checkbox-group--checkbox"
      />
      <label for="visualDesign" class="card__checkbox-group--label">
        Visual design
      </label>
    </div>
    <div class="card__checkbox-group">
      <input
        type="checkbox"
        id="usability"
        v-model="checked"
        class="card__checkbox-group--checkbox"
      />
      <label for="usability" class="card__checkbox-group--label">
        Usability
      </label>
    </div>
    <div class="card__checkbox-group">
      <input
        type="checkbox"
        id="smoke"
        v-model="checked"
        class="card__checkbox-group--checkbox"
      />
      <label for="smoke" class="card__checkbox-group--label"> Smoke </label>
    </div>
    <div class="card__textarea-group">
      <label for="comments" class="card__textarea-group--label">
        Comments
      </label>
      <textarea
        id="comments"
        v-model="message"
        class="card__textarea-group--input"
      />
    </div>
    <h3 class="card__final-mark">Final mark: XX</h3>
    <button class="card__submit-button">Submit</button>
  </div>
</template>

<script>
export default {
  name: "PunctuationCard",
};
</script>

<style scoped lang="scss">
.card {
  padding: 30px 10px;
  border: 2px solid #e94662;
  border-radius: 20px;
  width: 30%;
  font-family: Montserrat, sans-serif;

  .card__title {
    margin: 0 0 0.83em;
    text-transform: uppercase;
    font-weight: bold;
    color: #e94662;
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

  .card__checkbox-group {
    display: flex;
    margin-left: 70px;

    .card__checkbox-group--label {
      margin-left: 5px;
      font-weight: 500;
    }
  }

  .card__textarea-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;

    .card__textarea-group--label {
      margin-bottom: 5px;
      font-weight: 500;
    }

    .card__textarea-group--input {
      padding: 8px 10px;
      width: 80%;
      border-radius: 10px;
      border: 1px solid black;
      margin-bottom: 12px;
      font-size: 15px;
      font-family: Montserrat, sans-serif;
    }
  }

  .card__final-mark {
    font-weight: bold;
    text-align: center;
  }

  .card__submit-button {
    background: #e94662;
    border-radius: 28px;
    color: #ffffff;
    text-transform: uppercase;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 20px;
  }

  .card__submit-button:hover {
    font-weight: bold;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.57);
  }
}
</style>
