<template>
  <div>
    <h1>Looping through array of objects</h1>
    <ul>
      <li v-for="(item, n) in interests" :key="n">
        {{ item.title }}

        <ol v-if="item.favorite.length > 0">
          <li v-for="(fav, m) in item.favorite" :key="m">{{ fav }}</li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interests: [
        {
          title: 'TV',
          favorite: ['Designated Survivor', 'Spongebob'],
        },
        {
          title: 'Games',
          favorite: ['CS:GO'],
        },
        {
          title: 'Sports',
          favorite: [],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 0px;

  + li {
    margin-top: 10px;
  }
}

ul {
  padding-left: 0;
  > li {
    max-width: 200px;
    background: #e9e9e9;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 10px 10px 0px;
    list-style: none;
  }
}

ol {
  margin-top: 4px;
  padding: 10px;
  padding-left: 20px;
}
</style>
