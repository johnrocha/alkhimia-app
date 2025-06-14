<template>
  <main class="container mx-auto px-4 space-y-16 py-8">
    <section class="flex justify-center py-9">
      <img
        src="../assets/images/citrinitas-head.png"
        alt="Círculo Alquímico"
        class="w-auto h-auto hover:scale-105 transition-transform duration-500 ease-in-out"
      />
    </section>
    <section
      class="flex flex-col items-center justify-center py-12 text-center"
    >
      <div class="max-w-3xl px-4 antiga">
        <h2 class="text-5xl font-bold mb-8 text-yellow-400">Citrinitas</h2>
      </div>
    </section>

    <section class="flex flex-col md:flex-row items-center gap-8">
      <div class="md:w-1/2">
        <img
          src="../assets/images/citrinitas.png"
          alt="Introdução"
          class="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div class="md:w-1/2 antiga">
        <h2 class="text-3xl font-bold mb-4 text-yellow-400">Princípio 3</h2>
        <p class="text-lg">
          Com a harmonia presente, eu flutuava pois de tão leve coração, me
          levava para o alto. O Pelicano sangrava, eu não me reconhecia mais.
          Primeiro fui Chumbo, minério bruto depois elétrico reluzente Cobre,
          então Ferro que circula em meu corpo no sopro vital, agora sou Estanho
          a docibilidade ao fogo e o brilho que reflete a clareza e a
          iluminação. É tão fácil se perder. Passei anos tentando construir a
          melhor versão de mim mesma, vejo agora quão ingênua sou ao deixar
          passar o que o orvalho me sussurrava carinhosamente em segredo em todos
          os nossos encontros. Tudo está incessantemente mudando e há apenas
          pequenísssimas fissuras, a oportunidade genuína, ela salta aos olhos
          num brilho dourado intenso então o coração se preenche e ai se sabe.
          Se é. Neste momento posso ser luz. A luz refletida do sol. Antes eu
          era um nada. Depois uma parte. Agora sou inteira. Mas sei que está, é
          só uma oportunidade e que para encontrar Azoth eu devo seguir a ponte
          Lux Vivens de fogo celeste e me alimentar do orvalho filosófico. Para
          algo em mim... Não ser mais Eu. para algo em mim poder nascer, e
          então, somente então. Estarei livre.
        </p>
      </div>
    </section>
    <section class="flex justify-center py-9">
      <img
        src="../assets/images/citrinitas-footer.png"
        alt="Círculo Alquímico"
        class="w-auto h-auto hover:scale-105 transition-transform duration-500 ease-in-out"
      />
    </section>
    <footer
      class="fixed bottom-6 left-6 right-6 z-50 flex justify-between pointer-events-none"
    >
      <a
        href="/albedo"
        class="flex items-center gap-1 px-3 py-2 shadow-lg group antiga bg-black text-yellow-400 font-bold rounded text-sm hover:bg-[#002fa7] hover:text-white hover:shadow-[0_0_15px_5px_rgba(234,179,8,0.5)] transition-all duration-300 antiga pointer-events-auto"
        title="Voltar para Albedo"
      >
        <svg
          class="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span>Albedo</span>
      </a>
      <a
        href="/rubedo"
        class="flex items-center gap-1 px-3 py-2 shadow-lg group antiga bg-black text-yellow-400 font-bold rounded text-sm hover:bg-[#002fa7] hover:text-white hover:shadow-[0_0_15px_5px_rgba(234,179,8,0.5)] transition-all duration-300 antiga pointer-events-auto"
        title="Ir para Rubedo"
      >
        <span>Rubedo</span>
        <svg
          class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </footer>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Citrinitas - Alkhimia",
  ogTitle: "Citrinitas - Alkhimia",
  description: "Terceira fase alqu\u00edmica, a ilumina\u00e7\u00e3o e a sublima\u00e7\u00e3o.",
  ogDescription: "Terceira fase alqu\u00edmica, a ilumina\u00e7\u00e3o e a sublima\u00e7\u00e3o."
})
</script>

<style lang="scss" scoped></style>
