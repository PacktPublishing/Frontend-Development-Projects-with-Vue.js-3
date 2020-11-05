<template>
  <div>
    <h1 v-if="false" v-once v-text="text">Loading...</h1>

    <h2 v-else-if="false" v-html="html" />

    <a
      v-else
      :href="link.url"
      :target="link.target"
      :tabindex="link.tabindex"
      v-text="link.title"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-text
      text: 'Directive text',
      // v-html
      html: 'Stylise</br>HTML in<br/><b>your data</b>',
      // v-bind
      link: {
        url: 'https://google.com',
        target: '_blank',
        tabindex: '0',
        title: 'Go to Google',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 40px 0 0;
  font-weight: normal;
}
a {
  display: block;
  margin-top: 40px;
}
</style>
