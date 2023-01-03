import { ref, computed } from 'vue';

export const useSearch = (items, filters = ['title']) => {
  const searchTerm = ref('');
  const filteredItems = computed(() => {
    return items.value.filter(item => {
      return filters.some(filter => {
        return item[filter].toLowerCase().includes(searchTerm.value.toLowerCase());
      });
    });
  });

  return {
    searchTerm,
    filteredItems,
  }
}