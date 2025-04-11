<template>
  <div class="min-h-screen bg-black text-white relative">
    <!-- Painel Lateral Gamificado -->
    <aside
      class="fixed top-0 right-0 w-64 h-full bg-black bg-opacity-70 p-4 shadow-lg z-10"
    >
      <h2 class="text-xl font-bold mb-4 antiga">Jornada Alkhemica</h2>
      <ul>
        <li class="mb-2">
          <span class="font-bold antiga">Nigredo</span> -
          <span class="text-yellow-400">Iniciado</span>
        </li>
        <li class="mb-2">
          <span class="font-bold antiga">Albedo</span> -
          <span class="text-yellow-400">Em Progresso</span>
        </li>
        <li class="mb-2">
          <span class="font-bold antiga">Citrinitas</span> -
          <span class="text-yellow-400">Pendente</span>
        </li>
        <li class="mb-2">
          <span class="font-bold antiga">Rubedo</span> -
          <span class="text-yellow-400">Completo</span>
        </li>
      </ul>
    </aside>

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
          <!-- <img src="/images/icon1.png" alt="Símbolo Alquímico" class="w-16 h-16 mx-auto" /> -->
          <p class="text-center mt-2">Símbolo 1</p>
        </div>
        <div
          @click="openContent('Simbolo 2')"
          class="cursor-pointer p-4 transition-transform transform hover:scale-110"
        >
          <!-- <img src="/images/icon2.png" alt="Símbolo Alquímico" class="w-16 h-16 mx-auto" /> -->
          <p class="text-center mt-2">Símbolo 2</p>
        </div>
      </section>

      <!-- Seções: Biblioteca Mágica e Comunidade -->
      <section class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Biblioteca Mágica -->
        <div class="bg-black bg-opacity-50 p-6 rounded shadow-lg">
          <h2 class="text-2xl font-bold mb-4">Biblioteca Mágica</h2>
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
          <h2 class="text-2xl font-bold mb-4">Comunidade</h2>
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
  </div>
</template>

<script setup>
function openContent(simbolo) {
  alert(`teste: ${simbolo}`);
}
</script>