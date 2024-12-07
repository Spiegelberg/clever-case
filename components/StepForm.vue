<template>
  <div v-if="step" class="step-layout flex">
    <!-- Left Section -->
    <div class="step-form w-1/2 flex flex-col justify-center px-[7%]">
      <Transition name="slide-fade" mode="out-in" appear>
        <div :key="step.title">
          <h3 class="text-cleverGreen mb-10">{{ step.title }}</h3>
          <div class="flex flex-col gap-2">
            <!-- Replace native radio inputs with CustomCheckbox -->

            <CustomCheckbox
              v-for="(option, index) in step.options"
              :key="index"
              :label="option.label"
              :value="option.value"
              :model-value="selectedOption === option.value"
              @update:model-value="handleSelection(option.value)"
            />
          </div>
          <!-- Navigation Buttons -->
          <div class="flex justify-between mt-10">
            <button
              @click="goToPreviousStep"
              :disabled="currentStepIndex === 0"
              class="px-4 py-2 bg-gray-200 disabled:opacity-0"
            >
              Tilbage
            </button>
            <button
              @click="goToNextStep"
              :disabled="!canProceed"
              class="px-4 py-2 bg-cleverGreen text-white disabled:opacity-50"
            >
              Fortsæt
            </button>
          </div>
        </div>
      </Transition>
    </div>
    <!-- Right Section -->
    <div class="step-image w-1/2 flex items-center justify-center pl-12">
      <Transition name="fade" mode="out-in" appear>
        <img :key="step.image" :src="step.image" alt="Step Image" class="max-w-full max-h-full" />
      </Transition>
    </div>
  </div>
  <div v-else>
    <p class="text-red-500">Step data is missing</p>
  </div>
</template>

<script setup lang="ts">
  import type { Step } from '~/data/stepsData'; // Import the Step interface

  // Props
  const props = defineProps<{
    step: Step;
    currentStepIndex: number;
    canProceed: boolean;
    selectedOption: string | null; // Preselected option
  }>();
  const emit = defineEmits(['on-next', 'on-prev', 'update:canProceed', 'update:answer']);

  // State to track the selected option
  const localSelectedOption = ref<string | null>(props.selectedOption);

  // Watch for external updates to the selected option
  watch(
    () => props.selectedOption,
    (newValue) => {
      localSelectedOption.value = newValue;
      emit('update:canProceed', !!newValue); // Emit canProceed on changes
    },
    { immediate: true } // Trigger immediately when the component is mounted
  );

  // Emit canProceed if an answer already exists on mount
  onMounted(() => {
    if (localSelectedOption.value) {
      emit('update:canProceed', true);
    }
  });

  // Handle checkbox selection
  const handleSelection = (value: string) => {
    if (localSelectedOption.value === value) {
      // Deselect if already selected
      localSelectedOption.value = null;
    } else {
      // Select the new value
      localSelectedOption.value = value;
    }
    emit('update:answer', localSelectedOption.value); // Update parent state
    emit('update:canProceed', !!localSelectedOption.value); // Enable/disable "Next" button
  };

  // Emit navigation events
  const goToNextStep = () => {
    emit('on-next');
  };

  const goToPreviousStep = () => {
    emit('on-prev');
  };
</script>

<style scoped>
  /* Slide and Fade Transition */
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.5s ease;
  }
  .slide-fade-enter-from {
    opacity: 0;
    transform: translateY(-20px);
  }
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  /* Fade Transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  /* List Transition */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.8s ease;
  }
  .list-enter-from {
    opacity: 0;
    transform: translateY(10px);
  }
  .list-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>
