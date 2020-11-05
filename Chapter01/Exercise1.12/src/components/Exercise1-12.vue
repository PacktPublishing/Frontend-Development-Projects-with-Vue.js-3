<template>
  <div>
    <h1>Vue Lifecycle hooks</h1>
    <ul>
      <li v-for="(item, n) in list" :key="n">
        {{ item }} <a @click="deleteItem(item)">Delete</a>
      </li>
    </ul>

    <strong
      >Add a new item in the list array and save while running localhost to
      preview the destroy hooks</strong
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        'Apex Legends',
        'A Plague Tale: Innocence',
        'ART SQOOL',
        'Baba Is You',
        'Devil May Cry 5',
        'The Division 2',
        'Hypnospace Outlaw',
        'Katana ZERO',
      ],
    }
  },
  methods: {
    deleteItem(value) {
      this.list = this.list.filter(item => item !== value)
    },
  },

  beforeCreate() {
    alert('beforeCreate: data is static, thats it')
  },
  created() {
    alert('created: data and events ready, but no DOM')
  },
  beforeMount() {
    alert('beforeMount: $el not ready')
  },
  mounted() {
    alert('mounted: DOM ready to use')
  },
  beforeUpdate() {
    alert(
      'beforeUpdate: we know an update is about to happen, and have the data'
    )
  },
  updated() {
    alert('updated: virtual DOM will update after you click OK')
  },
  beforeDestroy() {
    alert('beforeDestroy: about to blow up this component')
  },
  destroyed() {
    alert('destroyed: this component has been destroyed')
  },
}
</script>

<style lang="scss" scoped>
ul {
  padding-left: 0;
}
li {
  display: block;
  list-style: none;

  + li {
    margin-top: 10px;
  }
}

a {
  display: inline-block;
  background: rgb(235, 50, 50);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 10px;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
