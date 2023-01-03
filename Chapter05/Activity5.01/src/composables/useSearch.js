import { ref, computed, reactive } from 'vue';

export const useSearch = (items) => {
  const searchTerm = ref('');
  const filters = ref(['title'])
  const filteredItems = computed(() => {
    return items.value.filter(item => {
      return filters.value.some(filter => {
        return item[filter].toLowerCase().includes(searchTerm.value.toLowerCase());
      });
    });
  });

  return {
    searchTerm,
    filteredItems,
    filters,
  }
}