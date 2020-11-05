<template>
  <section>
    <div class="form">
      <label>
        Name
        <input type="text" v-model="name" />
      </label>
      <label>
        Preferred javascript style
        <select name="language" v-model="language">
          <option value="Javascript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="CoffeeScript">CoffeeScript</option>
          <option value="Dart">Dart</option>
        </select>
      </label>
    </div>
    <ul class="overview">
      <li><strong>Overview</strong></li>
      <li>Name: {{ name }}</li>
      <li>Preference: {{ language }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      language: '',
    }
  },
}
</script>

<style lang="scss">
.form {
  display: flex;
  justify-content: space-evenly;
  max-width: 800px;
  padding: 40px 20px;
  border-radius: 10px;
  margin: 0 auto;
  background: #ececec;
}

.overview {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 300px;
  margin: 40px auto;
  padding: 40px 20px;
  border-radius: 10px;
  border: 1px solid #ececec;

  > li {
    list-style: none;
    + li {
      margin-top: 20px;
    }
  }
}
</style>
