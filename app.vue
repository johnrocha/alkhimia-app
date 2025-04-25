<template>
  <NuxtLayout>
    <NuxtPage />
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 text-white rounded-full shadow-lg p-3 items-center justify-center hover:text-[#002fa7] transition-colors duration-300 hidden md:block"
      aria-label="Voltar ao topo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const showScrollTop = ref(false);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleScroll() {
  showScrollTop.value = window.scrollY > 100;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap");

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
