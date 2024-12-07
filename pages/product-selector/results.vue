<template>
  <div class="results-layout flex max-h-screen pt-[72px]">
    <!-- Left Section: Image -->
    <div class="w-1/2 relative bg-cover bg-center px-[3%]">
      <img src="/images/results-bg.png" alt="Result Image" class="object-cover w-full h-full" />
    </div>

    <!-- Right Section: Content -->
    <div class="w-1/2 flex flex-col justify-center px-[7%] text-white">
      <!-- Recommendation Title -->
      <div class="mb-10">
        <p class="text-sm font-bold mb-4">Vi vil anbefale</p>
        <h2 class="mb-4">Clever One</h2>
        <p class="text-p opacity-80">
          Start dagen med fuld energi fra Clever-ladeboksen hjemme, og lad frit på Danmarks største
          ladenetværk.
        </p>
      </div>

      <!-- Benefits List -->
      <ul class="mb-10 space-y-4">
        <li v-for="(benefit, index) in benefits" :key="index" class="flex items-start gap-3">
          <!-- Checkmark Icon -->
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-white"
          >
            <path
              d="M5 12l4 4L19 7"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <!-- Benefit Text -->
          <span class="text-base">{{ benefit }}</span>
        </li>
      </ul>

      <!-- CTA Buttons -->
      <div class="flex gap-4 text-p">
        <button
          @click="tryAgain"
          class="flex-1 border border-white text-white px-6 py-2 hover:bg-white hover:text-cleverDark transition"
        >
          Prøv igen ↻
        </button>
        <NuxtLink
          to="https://clever.dk/opladning-med-abonnement"
          class="flex-1 bg-white text-center text-cleverDark flex justify-around items-center px-6 py-2 gap-2 hover:bg-gray-200 transition"
          target="_blank"
        >
          <div class="flex items-center">
            Se Clever One
            <svg
              width="16"
              height="16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2"
            >
              <path
                d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 110-2h7.586L8.293 4.707a1 1 0 010-1.414z"
              />
            </svg>
          </div>
        </NuxtLink>
      </div>

      <!-- Contact Link -->
      <div class="mt-6 text-p cursor-pointer text-center">
        <a href="mailto:kontakt@clever.dk">Kontakt mig</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layoutProps: {
      backgroundImage: null, // Set the background image to null
      theme: 'dark',
    },
  });
  // List of benefits
  const benefits = [
    'Frihed på farten med DK’s største ladenetværk',
    'Fast månedligt beløb',
    'Fri opladning ude og hjemme med egen ladeboks',
  ];

  // Function to reset or navigate back
  const tryAgain = () => {
    // Navigate back to the first step or home page
    navigateTo('/product-selector');
  };
</script>

<!-- <style scoped src="@/styles/default_layout.css" /> -->
<style scoped></style>
