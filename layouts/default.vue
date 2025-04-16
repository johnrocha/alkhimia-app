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

      <!-- Título Principal com gradiente animado -->
      <div class="text-center relative overflow-hidden">
        <h1 ref="gradient" class="text-5xl antiga-bold mb-2">
          Mystical Alchemy
        </h1>
      </div>
    </header>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const gradient = ref(null);
let animationFrame;
let step = 0;
const colorIndices = [0, 1, 2, 3];
const gradientSpeed = 0.002;

const colors = [
  [62, 35, 255],
  [60, 255, 60],
  [255, 35, 98],
  [45, 175, 230],
  [255, 0, 255],
  [255, 128, 0],
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
