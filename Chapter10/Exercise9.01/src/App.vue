<template>
  <div id="app">
    <p>
    My name is {{ $store.state.name }} and 
    my favorite color is {{ $store.state.favoriteColor }}. 
    My job is a {{ $store.state.profession }}.
    </p>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
export default {
  name: 'app',
  components:{
    HelloWorld
  }
}
</script>
