<template>
  <div class="min-h-screen bg-black text-white relative">
    <main class="container mx-auto px-4">
      <img
        src="../assets/images/corpus-hermeticum.png"
        alt="Círculo Alquímico"
        class="w-auto h-auto hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div class="flex flex-col items-center justify-center text-center mt-24">
        <h2 class="text-xl font-bold mb-4 antiga-bold">Corpus Hermeticum</h2>
        <ul>
          <li class="mb-2">
            <NuxtLink
              to="https://bibliotecahermetica.com.br/wp-content/uploads/2019/12/Corpus-Hermectum-Hermes-Trismegisto.pdf"
              external
              target="_blank"
              class="block font-bold antiga text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105"
            >
              Liber -
              <span class="text-yellow-400">1</span>
            </NuxtLink>
          </li>
          <li class="mb-40">
            <NuxtLink
              to="https://cliqueapostilas.com/Content/apostilas/ad527e943416844a1ddf7c7ea70ba415.pdf"
              external
              target="_blank"
              class="block font-bold antiga text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105"
            >
              Tabua - <span class="text-yellow-400"> Smaradigna</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Corpus Hermeticum - Manuscrito",
  ogTitle: "Corpus Hermeticum - Manuscrito",
  description: "Links para estudar o Corpus Hermeticum e a T\u00e1bua de Esmeralda.",
  ogDescription: "Links para estudar o Corpus Hermeticum e a T\u00e1bua de Esmeralda."
})
</script>

<style lang="scss" scoped></style>
