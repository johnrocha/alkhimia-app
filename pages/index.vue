<template>
  <div class="min-h-screen bg-black text-white relative">
    <AlkhimiaModal
      :isOpen="showAlkhimiaModal"
      @close="showAlkhimiaModal = false"
      :typeKnowledge="typeKnowledge"
    />

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
      <section class="mt-12 flex justify-around flex-wrap">
        <!-- Biblioteca Mágica -->
        <div class="bg-black bg-opacity-50 p-6 rounded shadow-lg">
          <h2 class="text-center mt-2 antiga-bold">Library</h2>
          <p class="antiga mt-2">Explore manuscritos antigos e descobertas arcanas.</p>
          <ul class="mt-4 list-disc pl-5 antiga">
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
          <h2 class="text-center mt-2 antiga-bold">Community</h2>
          <p class="text-center mt-2 antiga">Participe em fóruns e chats para discutir segredos mágicos.</p>
          <small class="mt-4 flex md:justify-end">
            <a
              href="/contact"
              class="antiga-bold inline-block px-6 py-3 bg-yellow-400 text-black font-bold rounded hover:bg-[#002fa7] hover:text-white hover:shadow-[0_0_15px_5px_rgba(234,179,8,0.5)] transition-all duration-300"
            >
              Acessar
            </a>
          </small>
        </div>
      </section>
    </main>

    <div class="absolute bottom-8 left-8 hidden md:block">
      <img
        src="../assets/images/candle.png"
        alt="Vela Tremeluzente"
        class="w-72 h-72 animate-pulse"
      />
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

<script>
import AlkhimiaModal from "~/components/AlkhimiaModal.vue";

export default {
  components: {
    AlkhimiaModal,
  },
  data() {
    return {
      showAside: false,
      showAlkhimiaModal: false,
      typeKnowledge: "",
    };
  },
  methods: {
    openContent(simbolo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const knowledgeMap = {
        "Simbolo 1": "alquimia",
        "Simbolo 2": "magia",
      };
      const type = knowledgeMap[simbolo];
      if (type) {
        this.typeKnowledge = type;
        this.showAlkhimiaModal = true;
      }
    },
  },
};
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
