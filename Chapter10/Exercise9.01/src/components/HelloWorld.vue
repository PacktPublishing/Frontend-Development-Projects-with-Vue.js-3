<template>
  <div>
    <p>
      Hi, I'm a component, and I also have access to state! 
      My name is {{ $store.state.name }}.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>