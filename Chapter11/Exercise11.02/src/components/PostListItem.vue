<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String
  },
  description: {
  	type: String
  },
  tags: {
    type: Array, 
    default: () => []
  }
})

const truncated = computed(() => {
  return props.description && props.description.slice(0,8)
})

const ellipsis = computed(() => {
  return props.description && props.description.length > 50 ? 
          `${props.description.slice(0,50)}...` : props.description;
})

defineExpose({ truncated, ellipsis })

</script>

<template>
	<div>
	<h3>{{ title }}</h3>
	<p>{{ ellipsis }}</p>

	<ul>
    <li v-for="tag in tags" :key="tag">
      #{{ tag }}
    </li>
  </ul>

	</div>
</template>

