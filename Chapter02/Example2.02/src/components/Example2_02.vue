<template>
  <div>{{ formalName }}</div>
</template>
<script>
export default {
  data() {
    return {
      title: "Mr.",
      surname: "Smith",
    };
  },
  computed: {
    formalName() {
      return `${this.title} ${this.surname}`;
    },
  },
};
</script>
