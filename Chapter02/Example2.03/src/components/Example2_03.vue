<template>
  <div>
    <p>{{ fullName }}</p>
    <p>{{ totalEntries }}</p>
    <p>{{ featuredEntries }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: {
        fields: {
          author: {
            firstName: "John",
            lastName: "Doe",
          },
          entries: [
            {
              title: "Entry 1",
              content: "Entry 1's content",
              featured: true,
            },
            {
              title: "Entry 2",
              content: "Entry 2's content",
              featured: false,
            },
          ],
        },
      },
    };
  },
  computed: {
    fullName() {
      const { firstName, lastName } = this.post.fields.author;
      return `${firstName} ${lastName}`;
    },
    totalEntries() {
      return this.post.fields.entries.length;
    },
    featuredEntries() {
      const { entries } = this.post.fields;
      return entries.filter((entry) => !!entry.featured);
    },
  },
};
</script>
