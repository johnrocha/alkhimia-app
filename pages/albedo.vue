<template>
  <main class="container mx-auto px-4 space-y-16 py-8">
    <section class="flex justify-center py-9">
      <img
        src="../assets/images/albedo-head.png"
        alt="Círculo Alquímico"
        class="w-auto h-auto hover:scale-105 transition-transform duration-500 ease-in-out"
      />
    </section>
    <section
      class="flex flex-col items-center justify-center py-12 text-center"
    >
      <div class="max-w-3xl px-4 antiga">
        <h2 class="text-5xl font-bold mb-8 text-yellow-400">Albedo</h2>
      </div>
    </section>

    <section class="flex flex-col md:flex-row items-center gap-8">
      <div class="md:w-1/2">
        <img
          src="../assets/images/albedo.png"
          alt="Introdução"
          class="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div class="md:w-1/2 antiga">
        <h2 class="text-3xl font-bold mb-4 text-yellow-400">Princípio 2</h2>
        <p class="text-lg">
          Agora que a noite escura da alma finalmente se dissipou. Agora que que
          a rocha sombria foi tão consumida pelo fogo astral. Agora que é
          possível eu ter a luz da consciência do meu pesar e apego, das minhas
          emoções, das minhas vontades e do meu pensamento. Sem ser dominado por
          elas. Somente agora então eu ouço farfalhar de asas do imenso cisne
          albo. Eu fui dividida em quatro partes e as impurezas de cada uma
          dançam sua liberdade de mim. O que estava em baixo de mim era como que
          esta no alto para realizar os milagres de uma única coisa. Anjos me
          levam envasado num frasco selado à uma presença da luz maior. Gotas de
          agua celeste me transpassam, me purificando. Eu sorrio. Avisto ao
          longe a Aurora, ela se apresenta a mim e me diz em canto uníssono: Sou
          eu a mediadora dos elementos, a que reconcilia o inferior com o
          superior, a terra com o céu, fazendo surgir a claridade da noite
          escura; eu sou a luz que nasce após as trevas, eu sou a estrela da
          manhã, a lua brilhante, eu trago a pureza.
        </p>
      </div>
    </section>
    <section class="flex justify-center py-9">
      <img
        src="../assets/images/albedo-footer.png"
        alt="Círculo Alquímico"
        class="w-auto h-auto hover:scale-105 transition-transform duration-500 ease-in-out"
      />
    </section>
  </main>
  <footer
    class="fixed bottom-6 left-6 right-6 z-50 flex justify-between pointer-events-none"
  >
    <a
      href="/nigredo"
      class="flex items-center gap-1 px-3 py-2 shadow-lg group antiga bg-black text-yellow-400 font-bold rounded text-sm hover:bg-[#002fa7] hover:text-white hover:shadow-[0_0_15px_5px_rgba(234,179,8,0.5)] transition-all duration-300 antiga pointer-events-auto"
      title="Voltar para Nigredo"
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
      <span>Nigredo</span>
    </a>
    <a
      href="/citrinitas"
      class="flex items-center gap-1 px-3 py-2 shadow-lg group antiga bg-black text-yellow-400 font-bold rounded text-sm hover:bg-[#002fa7] hover:text-white hover:shadow-[0_0_15px_5px_rgba(234,179,8,0.5)] transition-all duration-300 antiga pointer-events-auto"
      title="Ir para Citrinitas"
    >
      <span>Citrinitas</span>
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
</template>

<script setup></script>

<style lang="scss" scoped></style>
