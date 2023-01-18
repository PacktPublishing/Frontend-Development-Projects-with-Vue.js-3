import { ref, onBeforeMount } from 'vue';

export const useMovies = () => {
  const movies = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const getMovies = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      movies.value = data.results;
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  onBeforeMount(getMovies);

  return {
    movies,
    isLoading,
    error,
  };
};
