<template>
  <transition name="fade" class="z-10">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center"
      @click.self="closeModal"
    >
      <div class="fixed inset-0 bg-black bg-opacity-70"></div>
      <div class="relative z-50 bg-black p-8 rounded-lg max-w-2xl w-11/12">
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-yellow-400 text-2xl hover:text-yellow-300 hover:cursor-pointer"
        >
          &times;
        </button>
        <img
          v-if="typeKnowledge === 'alquimia'"
          src="../assets/images/albedo.png"
          alt="Alquimia"
          class="w-full h-96 object-contain mb-6"
        />
        <img
          v-else-if="typeKnowledge === 'magia'"
          src="../assets/images/baton.png"
          alt="Alquimia"
          class="w-full h-96 object-contain mb-6"
        />
        <h3 class="text-3xl antiga-bold text-yellow-400 mb-4">{{ title }}</h3>
        <p class="text-lg text-gray-300 antiga">
          {{ description }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    typeKnowledge: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      const type = this.typeKnowledge.toLowerCase();
      console.log(type, "type");
      if (type === "alquimia") {
        return "../assets/images/albedo.png";
      } else if (type === "magia") {
        return "../assets/images/baton.png";
      }
      return "";
    },
    title() {
      return this.typeKnowledge;
    },
    description() {
      const type = this.typeKnowledge.toLowerCase();
      if (type === "alquimia") {
        return `A Alquimia tende a reproduzir, nesta miniatura do Universo que é o frasco, a ação do Artesão Universal, tomando os elementos desorganizados e corrompidos, harmonizando-os e amalgamando-os, 
        para conduzi-los até à perfeição final. Assim, por esse ensinamento experimental, esta Operação de longo cozimento que constitui a Grande Obra aurífera, coloca seu discípulos na condição de seguir, 
        e reproduzir todo o processo misterioso pelo qual o Animador Divino cria seu "Dança de Amor". Tal é, verdadeiramente, o magistério filosófico por excelência, 
        pois é somente a Alquimia que pode ensinar ao Humanos esses rudimentos experimentais e probatórios que o conduzirão para a Amor Absoluto. E é ela também, 
        a mestra verdadeira que lhe dará, primeiramente um estado, depois uma fé.`;
      } else if (type === "magia") {
        return `A Magia Cerimonial tende a espelhar a ordem cósmica no microcosmo consagrado do templo — espelho do Macrocosmo —, 
        tomando os elementos primordiais dispersos, consagrando-os por meio de simbologia sagrada sob a égide da hierarquia celeste e harmonizando-os em um rito solene, 
        para que o praticante se reintegre nos ritmos do Divino e cumpra o propósito espiritual de comungar com a harmonia primordial.`;
      }
      return "";
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
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
