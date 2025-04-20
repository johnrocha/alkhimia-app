<template>
  <div class="min-h-screen bg-black text-white relative">
    <!-- Botão para abrir o menu lateral (desktop only) -->
    <div
      v-if="!showAside"
      class="fixed top-4 right-4 z-30 px-2 py-2 shadow transition cursor-pointer hidden md:block"
      @click="showAside = true"
    >
      <img
        src="../assets/images/journey.png"
        alt="Ícone Jornada"
        class="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 mb-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-500"
      />
    </div>

    <!-- Menu Lateral (Drawer) -->
    <transition name="fade">
      <div
        v-if="showAside"
        class="fixed inset-0 z-20 flex items-center justify-center"
      >
        <!-- Fundo escuro para fechar ao clicar -->
        <div
          class="fixed inset-0 bg-black bg-opacity-50"
          @click="showAside = false"
        ></div>
        <!-- Conteúdo centralizado -->
        <div
          class="relative z-30 bg-black bg-opacity-90 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center"
        >
          <!-- Ícone acima do menu -->
          <img
            src="../assets/images/alchemy.png"
            alt="Ícone Jornada"
            class="w-96 h-w-96 mb-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-500"
          />
          <div class="flex flex-col items-center justify-center text-center">
            <h2 class="text-xl font-bold mb-4 antiga-bold">
              Jornada Alkhemica
            </h2>
            <ul>
              <li class="mb-2">
                <NuxtLink
                  to="/nigredo"
                  class="block font-bold antiga text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105"
                >
                  Nigredo - <span class="text-yellow-400">Putrefação</span>
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink
                  to="/albedo"
                  class="block font-bold antiga text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105"
                >
                  Albedo - <span class="text-yellow-400">Dissolução</span>
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink
                  to="/citrinitas"
                  class="block font-bold antiga text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105"
                >
                  Citrinitas - <span class="text-yellow-400">Pendente</span>
                </NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink
                  to="/rubedo"
                  class="block font-bold antiga text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105"
                >
                  Rubedo - <span class="text-yellow-400">Completo</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>

    <!-- Conteúdo Principal -->
    <main class="container mx-auto px-4">
      <section class="flex justify-center">
        <img
          src="../assets/images/alchemical-circle.png"
          alt="Círculo Alquímico"
          class="w-auto h-auto hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </section>

      <!-- Ícones Interativos -->
      <section class="mt-12 flex justify-around flex-wrap">
        <div
          @click="openContent('Simbolo 1')"
          class="cursor-pointer p-4 transition-transform transform hover:scale-110"
        >
          <img
            src="../assets/images/albedo.png"
            alt="Símbolo Alquímico"
            class="w-[25rem] h-w-64 mx-auto"
          />
          <p class="text-center mt-2 antiga-bold">Alkhimia</p>
        </div>
        <div
          @click="openContent('Simbolo 2')"
          class="cursor-pointer p-4 transition-transform transform hover:scale-110"
        >
          <img
            src="../assets/images/baton.png"
            alt="Símbolo Alquímico"
            class="w-64 h-64 mx-auto"
          />
          <p class="text-center mt-2 antiga-bold">Magick</p>
        </div>
      </section>

      <!-- Seções: Biblioteca Mágica e Comunidade -->
      <section class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Biblioteca Mágica -->
        <div class="bg-black bg-opacity-50 p-6 rounded shadow-lg">
          <h2 class="text-2xl font-bold mb-4 antiga-bold">Biblioteca Mágica</h2>
          <p>Explore manuscritos antigos e descobertas arcanas.</p>
          <ul class="mt-4 list-disc pl-5">
            <li>
              <a href="/biblioteca/manuscrito1" class="hover:underline"
                >Manuscrito 1</a
              >
            </li>
            <li>
              <a href="/biblioteca/manuscrito2" class="hover:underline"
                >Manuscrito 2</a
              >
            </li>
          </ul>
        </div>
        <!-- Comunidade -->
        <div class="bg-black bg-opacity-50 p-6 rounded shadow-lg">
          <h2 class="text-2xl font-bold mb-4 antiga-bold">Community</h2>
          <p>Participe em fóruns e chats para discutir segredos mágicos.</p>
          <a
            href="/comunidade"
            class="inline-block mt-4 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors duration-300"
            >Acessar Comunidade</a
          >
        </div>
      </section>
    </main>

    <div class="absolute bottom-8 left-8">
      <!-- <img src="/images/candle.png" alt="Vela Tremeluzente" class="w-12 h-12 animate-pulse" /> -->
    </div>
    <!-- Footer: Botão para abrir o menu lateral (apenas mobile) -->
    <div
      v-if="!showAside"
      class="fixed bottom-4 right-4 z-30 px-2 py-2 shadow transition cursor-pointer block md:hidden"
      @click="showAside = true"
    >
      <img
        src="../assets/images/journey.png"
        alt="Ícone Jornada"
        class="w-16 h-16 sm:w-20 sm:h-20 mb-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-500"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showAside = ref(false);

function openContent(simbolo) {
  alert(`teste: ${simbolo}`);
}
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
