<template>
  <div id="app">
    <p>
    My name is {{ firstName }} {{ lastName}}, or just {{ name }}.
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState([ "firstName", "lastName" ]),
    ...mapGetters([
      "name"
    ])
  }
}
</script>

