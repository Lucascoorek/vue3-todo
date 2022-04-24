<template>
  <form class="form" @submit.prevent="onSubmit">
    <!-- Description -->
    <div>
      <label for="description">Description</label><br />
      <textarea
        name="description"
        id="description"
        cols="50"
        rows="5"
        v-model="form.description"
        placeholder="Describe the task..."
      ></textarea>
    </div>
    <!-- Important -->
    <div>
      <label for="important">Important?</label>
      <select name="important" id="important" v-model="form.important">
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div>
    <!-- Done -->
    <div>
      <label for="done">Done?</label>
      <select name="done" id="done" v-model="form.done">
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div>
    <!-- Date -->
    <div>
      <label for="birthdate">Do until</label><br />
      <input type="date" name="birthdate" id="birthdate" v-model="form.date" />
    </div>
    <!-- Input submit -->
    <div class="buttons-container">
      <input class="btn" type="submit" value="Submit" />
      <button class="btn" type="reset">Reset</button>
    </div>
  </form>
</template>

<script setup lang="ts">
const form = {
  description: undefined,
  important: undefined,
  done: undefined,
  date: undefined,
};
const onSubmit = () => {
  console.log(form);
};
</script>

<style scoped>
.form {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form div {
  width: 100%;
}
textarea,
input,
select {
  display: block;
  width: 100%;
}
input,
select {
  min-height: 50px;
}
.btn {
  background: #4c6ca0;
  color: #fff;
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  max-width: 100px;
  margin: 5px;
}

.btn:hover {
  color: #f4f4f4;
  background: #446190;
}

.buttons-container {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
