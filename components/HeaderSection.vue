<template>
  <header :class="['relative bg-transparent z-10', textColorClass]">
    <!-- <header class="relative bg-transparent z-10" :class="textColorClass"> -->
    <!-- Navigation Bar -->
    <nav class="flex items-center justify-between px-12 py-6 h-[72px]">
      <ul class="basis-5/12 flex gap-8 text-nav-menu">
        <NuxtLink to="/">Privatkørsel</NuxtLink>
        <NuxtLink to="/product-selector">Erhverv</NuxtLink>
        <NuxtLink to="/product-selector/results">Boligforeninger</NuxtLink>
      </ul>
      <!-- Wrapper around Logo for centering -->
      <div class="basis-2/12 flex items-center justify-center">
        <NuxtLink to="/">
          <Logo
            width="125px"
            height=""
            :fontControlled="false"
            :fill="hasBackground ? '#fff' : theme === 'dark' ? '#fff' : '#003732'"
          />
        </NuxtLink>
      </div>
      <div class="basis-5/12 flex items-center justify-end gap-1 text-nav-menu">
        <Bulb
          width="24px"
          height="24px"
          :fontControlled="false"
          :class="hasBackground ? 'svg-white' : theme === 'dark' ? 'svg-white' : 'svg-green'"
        />
        Spørgsmål og svar
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import Logo from '~/assets/icons/logo.svg?component';
  import Bulb from '~/assets/icons/bulb.svg?component';

  // Define the props
  const props = defineProps({
    hasBackground: {
      type: Boolean,
      required: true,
    },
    theme: { type: String, default: 'dark' },
  });
  const textColorClass = ref('');

  // Computed classes for the header
  const hasBackground = computed(() => !!props.hasBackground);
  // Watch for changes to `theme` prop
  watch(
    () => props.theme,
    (newTheme) => {
      textColorClass.value = newTheme === 'dark' ? 'text-white' : 'text-cleverGreen';
    },
    { immediate: true } // Run immediately when the component is mounted
  );
  // No props or logic for now, but this structure allows easy expansion later.
</script>

<style>
  header {
    transition: color 0.3s ease; /* Smooth transition for text color */
  }
  .svg-white path.i-48514998__stroke {
    stroke: #fff;
  }

  .svg-white path.i-48514998__fill {
    fill: #fff;
  }

  .svg-green path.i-48514998__stroke {
    stroke: #003732;
  }

  .svg-green path.i-48514998__fill {
    fill: #003732;
  }
</style>
