<template>
  <div class="flex flex-col items-center justify-center text-center text-white pt-40">
    <p class="uppercase tracking-wide mb-4 text-menu font-semibold">Produktvælger</p>
    <h1 class="max-w-screen-md mb-6">Lad os hjælpe dig med at finde rigtig ladeløsning</h1>
    <p class="mb-8 max-w-lg opacity-80">
      Svar på spørgsmålene og find ud af hvilken Clever løsning der passer bedst til dine behov
    </p>
    <NuxtLink to="/product-selector">
      <button class="px-6 py-3 bg-white text-cleverGreen hover:bg-gray-200 transition">
        Tag testen her
      </button>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'home',
  };
</script>

<script setup lang="ts">
  // Define metadata for this page, including layout-specific properties
  definePageMeta({
    layoutProps: {
      backgroundImage: '/images/bg.jpg',
      theme: 'dark',
    },
  });
</script>

<!-- <style scoped src="@/styles/default_layout.css" /> -->
