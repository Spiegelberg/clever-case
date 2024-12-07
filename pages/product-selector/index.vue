<template>
  <div class="product-selector">
    <div v-if="currentStep" class="step-wrapper">
      <StepForm
        :step="currentStep"
        :currentStepIndex="currentStepIndex"
        :canProceed="canProceed"
        :selected-option="answers[currentStepIndex] || null"
        @on-next="goToNextStep"
        @on-prev="goToPreviousStep"
        @update:canProceed="setCanProceed"
        @update:answer="updateAnswer"
      />
    </div>
    <div v-else>
      <p>Loading step...</p>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'product-selector-index', // Name the component
  };
</script>

<script setup lang="ts">
  import { steps, type Step } from '~/data/stepsData'; // Import steps and interface
  // Define page metadata
  definePageMeta({
    layoutProps: {
      backgroundImage: null, // Set the background image to null
      theme: 'light',
    },
  });

  const router = useRouter();
  const currentStepIndex = ref(0);

  // Type safety with the Step interface
  const currentStep = computed<Step>(() => steps[currentStepIndex.value]);
  const canProceed = ref(false); // Track if we can proceed to the next step
  // Answers for each step, stored as key-value pairs
  const answers = ref<{ [key: number]: string | null }>({});

  const goToNextStep = () => {
    if (currentStepIndex.value < steps.length - 1) {
      currentStepIndex.value++;
      canProceed.value = false; // Reset canProceed for the next step
    } else if (currentStepIndex.value === steps.length - 1) {
      // Handle the last step
      router.push({ path: '/product-selector/results' });
    }
  };

  const goToPreviousStep = () => {
    if (currentStepIndex.value > 0) {
      currentStepIndex.value--;
    }
  };

  const setCanProceed = (value: boolean) => {
    canProceed.value = value;
  };
  // Update the answer for the current step
  const updateAnswer = (answer: string) => {
    answers.value[currentStepIndex.value] = answer;
    canProceed.value = !!answer; // Enable "Next" button when there's an answer
  };
</script>
