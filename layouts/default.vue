<template>
  <div class="default-layout">
    <HeaderSection :hasBackground="!!backgroundImage" :theme="theme" />

    <div
      class="flex relative min-h-screen bg-cover bg-center mt-[-72px] z-0"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t"
        :class="
          backgroundImage
            ? 'from-cleverGreen via-cleverGreen to-transparent'
            : theme === 'dark'
              ? 'from-cleverGreen via-cleverGreen to-cleverGreen'
              : 'from-transparent via-transparent to-transparent'
        "
      ></div>
      <div class="relative z-10 h-full m-auto px-12">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'DefaultLayout',
  };
</script>

<script setup lang="ts">
  // Define the type for layoutProps
  interface LayoutProps {
    backgroundImage: string | null; // Always defined, but can be null
    theme: string;
  }

  // Reactive properties
  const route = useRoute();
  const backgroundImage = ref<string | null>('');
  const theme = ref<string>('light');

  // Function to update the background image
  const updateBackgroundImage = () => {
    const layoutProps = (route.meta.layoutProps as LayoutProps) || {};
    backgroundImage.value = layoutProps.backgroundImage ?? null; // Fallback to null
  };

  const updateLayoutProps = () => {
    const layoutProps = (route.meta.layoutProps as LayoutProps) || {};
    backgroundImage.value = layoutProps.backgroundImage ?? null; // Fallback to null
    theme.value = layoutProps.theme || 'light'; // Update theme dynamically
  };

  // Initial update
  updateBackgroundImage();

  // Watch for route changes
  watch(route, () => {
    updateBackgroundImage();
  });

  watch(
    () => route.meta.layoutProps,
    () => {
      updateLayoutProps();
    },
    { immediate: true }
  );
</script>
