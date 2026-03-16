<template>
    <div 
        class="rounded-lg p-4 mb-4"
        :class="isCorrect ? 'bg-green-100' : 'bg-red-100'"
    >
        <p class="text-gray-700 font-medium mb-3">{{ userAnswerLabel }}</p>
        <p 
            class="p-3 rounded text-sm font-medium"
            :class="isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'"
        >
            {{ userAnswerText }}
            <span v-if="isCorrect" class="ml-2">✓</span>
        </p>
        <p v-if="!isCorrect" class="text-gray-700 font-medium mt-3 mb-2">Correct Answer:</p>
        <p 
            v-if="!isCorrect"
            class="p-3 rounded text-sm font-medium bg-red-200 text-red-800"
        >
            {{ correctAnswerText }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    isCorrect: {
        type: Boolean,
        required: true
    },
    userAnswerLabel: {
        type: String,
        default: 'Your Answer:'
    },
    userAnswerText: {
        type: String,
        required: true
    },
    correctAnswerText: {
        type: String,
        default: ''
    }
});
</script>
