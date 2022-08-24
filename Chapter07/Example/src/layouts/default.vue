<template>
  <div class="default">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <main class="main">
      <slot />
    </main>
    <footer>
      <div>Vue Workshop Chapter 07</div>
    </footer>
  </div>
</template>
