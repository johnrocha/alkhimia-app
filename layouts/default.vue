<template>
  <div class="min-h-screen bg-black text-white relative">
    <!-- Cabeçalho -->
    <header class="py-6 mb-4">
      <!-- Navbar Desktop -->
      <nav
        class="hidden md:flex items-center justify-center space-x-8 text-xl antiga mb-4"
      >
        <NuxtLink
          to="/"
          class="relative group hover:text-yellow-400 transition-colors duration-300"
          active-class="text-yellow-400"
        >
          <span class="relative">
            Home
            <span
              class="absolute bottom-0 left-1/2 h-0.5 bg-yellow-400 w-0 transition-all duration-300 -translate-x-1/2 group-hover:w-full"
            ></span>
          </span>
          <span
            class="absolute bottom-0 left-0 h-0.5 bg-yellow-400 w-0 transition-all duration-300 group-hover:w-1/2"
          ></span>
          <span
            class="absolute bottom-0 right-0 h-0.5 bg-yellow-400 w-0 transition-all duration-300 group-hover:w-1/2"
          ></span>
        </NuxtLink>

        <NuxtLink
          to="/about"
          class="relative group hover:text-yellow-400 transition-colors duration-300"
          active-class="text-yellow-400"
        >
          <span class="relative">
            About
            <span
              class="absolute bottom-0 left-1/2 h-0.5 bg-yellow-400 w-0 transition-all duration-300 -translate-x-1/2 group-hover:w-full"
            ></span>
          </span>
          <span
            class="absolute bottom-0 left-0 h-0.5 bg-yellow-400 w-0 transition-all duration-300 group-hover:w-1/2"
          ></span>
          <span
            class="absolute bottom-0 right-0 h-0.5 bg-yellow-400 w-0 transition-all duration-300 group-hover:w-1/2"
          ></span>
        </NuxtLink>

        <NuxtLink
          to="/articles"
          class="relative group hover:text-yellow-400 transition-colors duration-300"
          active-class="text-yellow-400"
        >
          <span class="relative">
            Answers
            <span
              class="absolute bottom-0 left-1/2 h-0.5 bg-yellow-400 w-0 transition-all duration-300 -translate-x-1/2 group-hover:w-full"
            ></span>
          </span>
          <span
            class="absolute bottom-0 left-0 h-0.5 bg-yellow-400 w-0 transition-all duration-300 group-hover:w-1/2"
          ></span>
          <span
            class="absolute bottom-0 right-0 h-0.5 bg-yellow-400 w-0 transition-all duration-300 group-hover:w-1/2"
          ></span>
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="relative group hover:text-yellow-400 transition-colors duration-300"
          active-class="text-yellow-400"
        >
          <span class="relative">
            Contact
            <span
              class="absolute bottom-0 left-1/2 h-0.5 bg-yellow-400 w-0 transition-all duration-300 -translate-x-1/2 group-hover:w-full"
            ></span>
          </span>
          <span
            class="absolute bottom-0 left-0 h-0.5 bg-yellow-400 w-0 transition-all duration-300 group-hover:w-1/2"
          ></span>
          <span
            class="absolute bottom-0 right-0 h-0.5 bg-yellow-400 w-0 transition-all duration-300 group-hover:w-1/2"
          ></span>
        </NuxtLink>
      </nav>

      <!-- Navbar Mobile: Ícone do menu à direita do h1 -->
      <div class="flex md:hidden items-center justify-center mb-4 relative">
        <h1 ref="gradient" class="text-3xl antiga-bold mb-0 text-center w-full">
          Mystical Alchemy
        </h1>
        <button
          class="absolute right-4"
          @click="showMobileMenu = true"
          aria-label="Abrir menu"
        >
          <img
            src="/favicon.svg"
            alt="Abrir menu"
            class="w-10 h-10 ml-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </button>
      </div>

      <!-- Menu Mobile Drawer -->
      <transition name="fade">
        <div
          v-if="showMobileMenu"
          class="fixed inset-0 z-40 flex items-center justify-center md:hidden"
        >
          <div
            class="fixed inset-0 bg-black bg-opacity-60"
            @click="showMobileMenu = false"
          ></div>
          <div
            class="relative z-50 bg-black bg-opacity-95 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center w-4/5 max-w-xs"
          >
            <button
              class="absolute top-2 right-2 text-yellow-400 text-2xl"
              @click="showMobileMenu = false"
              aria-label="Fechar menu"
            >
              &times;
            </button>
            <ul class="flex flex-col gap-4 text-lg w-full">
              <li>
                <NuxtLink
                  to="/"
                  class="block text-white font-bold antiga px-4 py-2 rounded transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black text-center"
                  @click="showMobileMenu = false"
                  >Home</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/about"
                  class="block text-white font-bold antiga px-4 py-2 rounded transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black text-center"
                  @click="showMobileMenu = false"
                  >About</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/articles"
                  class="block text-white font-bold antiga px-4 py-2 rounded transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black text-center"
                  @click="showMobileMenu = false"
                  >Answers</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="block text-white font-bold antiga px-4 py-2 rounded transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black text-center"
                  @click="showMobileMenu = false"
                  >Contact</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </transition>

      <!-- Título Principal com gradiente animado (desktop) -->
      <div class="hidden md:block text-center relative overflow-hidden">
        <h1 ref="gradient" class="text-5xl antiga-bold mb-2 shadow-lg hover:scale-105 transition-transform duration-300">
          <NuxtLink to="/home"> Mystical Alchemy </NuxtLink>
        </h1>
      </div>
    </header>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const gradient = ref(null);
const showMobileMenu = ref(false);
let animationFrame;
let step = 0;
const colorIndices = [0, 1, 2, 3];
const gradientSpeed = 0.002;

const colors = [
  [255, 255, 255],   // white
  [255, 255, 200],   // light yellow
  [255, 215, 0],     // gold/yellow
  [255, 165, 0],     // orange
  [255, 140, 0],     // dark orange
];

function updateGradient() {
  if (!gradient.value) return;

  const c0_0 = colors[colorIndices[0]];
  const c0_1 = colors[colorIndices[1]];
  const c1_0 = colors[colorIndices[2]];
  const c1_1 = colors[colorIndices[3]];

  const istep = 1 - step;
  const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);

  const r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  const g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  const b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);

  gradient.value.style.background = `linear-gradient(90deg, rgb(${r1},${g1},${b1}) 0%, rgb(${r2},${g2},${b2}) 100%)`;
  gradient.value.style.backgroundClip = "text";
  gradient.value.style.webkitBackgroundClip = "text";
  gradient.value.style.color = "transparent";

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    colorIndices[1] =
      (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
    colorIndices[3] =
      (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
  }

  animationFrame = requestAnimationFrame(updateGradient);
}

onMounted(() => {
  animationFrame = requestAnimationFrame(updateGradient);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>