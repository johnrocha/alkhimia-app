<!-- pages/contact.vue -->
<template>
  <main class="container mx-auto px-4 py-8">
    <section class="flex justify-center mb-36">
      <img
        src="../assets/images/contact.png"
        alt="Círculo Alquímico"
        class="w-auto h-auto hover:scale-105 transition-transform duration-500 ease-in-out"
      />
    </section>

    <!-- Cabeçalho da seção -->
    <section class="text-center mb-12">
      <h2 class="text-4xl antiga-bold text-yellow-400 mb-4">Me invoque</h2>
      <p class="text-lg antiga">
        Se interessou em algo e quer saber mais?<br />
        Preencha o formulário ou use um dos canais abaixo.
      </p>
    </section>

    <!-- Formulário de Contato -->
    <section
      class="max-w-3xl mx-auto bg-black bg-opacity-50 p-8 rounded shadow-lg antiga"
    >
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Nome -->
        <div>
          <label for="nome" class="block mb-1 font-semibold">Nome</label>
          <input
            id="nome"
            v-model="form.nome"
            type="text"
            required
            class="w-full bg-gray-900 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <!-- E-mail -->
        <div>
          <label for="email" class="block mb-1 font-semibold">E-mail</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full bg-gray-900 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <!-- Assunto -->
        <div>
          <label for="assunto" class="block mb-1 font-semibold">Assunto</label>
          <input
            id="assunto"
            v-model="form.assunto"
            type="text"
            required
            class="w-full bg-gray-900 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <!-- Mensagem -->
        <div>
          <label for="mensagem" class="block mb-1 font-semibold"
            >Mensagem</label
          >
          <textarea
            id="mensagem"
            v-model="form.mensagem"
            rows="6"
            required
            class="w-full bg-gray-900 border border-gray-700 p-3 rounded resize-y focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        <!-- Botão -->
        <div class="text-center">
          <button
            type="submit"
            class="antiga-bold inline-block px-6 py-3 bg-yellow-400 text-black font-bold rounded hover:bg-[#002fa7] hover:text-white hover:shadow-[0_0_15px_5px_rgba(234,179,8,0.5)] transition-all duration-300"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </section>

    <!-- Informações adicionais -->
    <section class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div class="bg-black bg-opacity-50 p-6 rounded shadow-lg">
        <NuxtLink
          to="https://instagram.com/alquimistaluria"
          external
          class="hover:text-yellow-400 break-all"
          target="_blank"
        >
          <img
            src="../assets/images/instagram.png"
            alt="Instagram"
            class="inline-block w-12 h-12 antiga shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </NuxtLink>
      </div>

      <div class="bg-black bg-opacity-50 p-6 rounded shadow-lg">
        <NuxtLink
          to="https://www.youtube.com/watch?v=B3w3dSwITV0&ab_channel=LVR141GN1"
          external
          target="_blank"
          rel="noopener"
          class="hover:text-yellow-400"
        >
          <img
            src="../assets/images/you.png"
            alt="Instagram"
            class="inline-block w-12 h-12 antiga shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </NuxtLink>
      </div>

      <div class="bg-black bg-opacity-50 p-6 rounded shadow-lg">
        <NuxtLink
          to="https://web.whatsapp.com/send?phone=5511958021168&text=Sauda%C3%A7%C3%B5es!%20Gostaria%20de%20conhecer%20caminho%20Herm%C3%A9tico"
          external
          target="_blank"
          rel="noopener"
          class="hover:text-yellow-400 flex items-center justify-center gap-2"
        >
          <img
            src="../assets/images/whats.png"
            alt="Instagram"
            class="inline-block w-12 h-12 antiga shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script>
import { useSeoMeta } from '#imports'

export default {
  name: "ContactPage",
  setup() {
    useSeoMeta({
      title: "Contato - Alkhimia",
      ogTitle: "Contato - Alkhimia",
      description: "Formul\u00e1rio para contato e agendamentos de leitura.",
      ogDescription: "Formul\u00e1rio para contato e agendamentos de leitura."
    })
  },
  data() {
    return {
      form: {
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await fetch(
          "https://formsubmit.co/ajax/b9fd764f0a5276672cc3e3b5f03f4676",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: this.form.nome,
              email: this.form.email,
              subject: this.form.assunto,
              message: this.form.mensagem,
            }),
          }
        );
        window.location.href = "/thanks";
      } catch (e) {
        alert("Ocorreu um erro ao enviar. Tente novamente.");
      }
    },
  },
};
</script>
