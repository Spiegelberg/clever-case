<template>
  <label
    class="custom-checkbox flex px-4 py-2 flex-col justify-center items-start gap-2 cursor-pointer bg-cleverTint"
  >
    <!-- Hidden Input -->
    <input type="checkbox" :checked="modelValue" @change="toggleCheckbox" class="hidden" />
    <!-- Checkbox Content -->
    <div class="flex items-center gap-2">
      <div class="w-6 h-6 flex items-center justify-center border border-cleverDark bg-cleverGreen">
        <!-- Check Icon -->
        <svg
          v-if="modelValue"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6L4.5 9L10 3"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <!-- Label Text -->
      <span class="text-p text-cleverGreen">{{ label }}</span>
    </div>
  </label>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits, ref } from 'vue';

  // Props for the label and initial state
  const props = defineProps({
    label: { type: String, required: true },
    modelValue: { type: Boolean, required: true },
    value: { type: String, required: true }, // Option value (e.g., 'yes' or 'no')
  });

  const emit = defineEmits(['update:modelValue', 'uncheck']);

  const toggleCheckbox = () => {
    if (props.modelValue) {
      emit('update:modelValue', false); // Deselect
      emit('uncheck', props.value); // Emit uncheck event if needed
    } else {
      emit('update:modelValue', true); // Select
    }
  };
</script>

<style scoped></style>
