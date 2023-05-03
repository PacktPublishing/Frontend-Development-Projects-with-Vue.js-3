<template>
  <div class="default">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about?user=Alex">About</RouterLink>
      <!-- <RouterLink :to="{ name: 'user', n: { id: 1 }}">About</RouterLink> -->
    </nav>
    <main class="main">
      <slot />
    </main>
  </div>
</template>
