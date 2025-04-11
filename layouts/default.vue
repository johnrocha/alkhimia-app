<template>
  <div class="min-h-screen bg-black text-white relative">
    <!-- Cabeçalho -->
    <header class="py-6 mb-4">
      <!-- Navbar -->
      <nav
        class="flex items-center justify-center space-x-8 text-xl antiga mb-4"
      >
        <NuxtLink
          to="/"
          class="hover:text-yellow-400 transition-colors duration-300"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="hover:text-yellow-400 transition-colors duration-300"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/articles"
          class="hover:text-yellow-400 transition-colors duration-300"
        >
          Articles
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="hover:text-yellow-400 transition-colors duration-300"
        >
          Contact
        </NuxtLink>
      </nav>

      <!-- Título Principal -->
      <div class="text-center">
        <h1 class="text-5xl antiga-bold mb-2">Mystical Alchemy</h1>
        <!-- <p class="text-lg">
          Descubra os segredos da alquimia e da magia antiga
        </p> -->
      </div>
    </header>
    <slot></slot>
    <!-- rodapé -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
