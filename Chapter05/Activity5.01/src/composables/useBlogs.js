import { createClient } from "contentful";
import { useListActions } from "./useListActions";
import { ref, onBeforeMount } from "vue";

const client = createClient({
  space: "hpr0uushokd4",
  accessToken: "jwEHepvQx-kMtO7_2ldjhE4WMAsiDp3t1xxBT8aDp7U",
});

export const useBlogs = () => {
  const blogs = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const { addItem, deleteItem } = useListActions(blogs);

  const getBlogs = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await client.getEntries({
        content_type: "blogPost",
        order: "-fields.publishDate",
      });

      blogs.value = response.items.map((item) => ({
        ...item.fields,
        id: item.fields.slug,
      }));
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  onBeforeMount(getBlogs);

  return {
    blogs,
    isLoading,
    error,
    addItem,
    deleteItem,
  };
}
