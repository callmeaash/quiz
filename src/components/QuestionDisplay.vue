<template>
    <div class="mb-8">
        <h3 class="text-2xl font-semibold text-gray-800 text-center">{{ question }}</h3>
    </div>
</template>

<script setup>
defineProps({
    question: {
        type: String,
        required: true
    }
});
</script>
