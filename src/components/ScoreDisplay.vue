<template>
    <div class="text-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-2">
            Your Score: <span class="text-blue-600">{{ correct }} / {{ total }}</span>
        </h2>
        <p class="text-lg text-green-600 font-medium">{{ percentage }}% {{ feedbackMessage }}</p>
    </div>
</template>

<script setup>
defineProps({
    correct: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    },
    feedbackMessage: {
        type: String,
        required: true
    }
});
</script>
